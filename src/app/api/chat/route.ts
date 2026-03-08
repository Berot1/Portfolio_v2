import { GoogleGenerativeAI } from "@google/generative-ai";
// Import all your portfolio data to act as the AI's "brain"
import { personalInfo, projects, experience, techStack, certifications } from "@/data/portfolio";
import { NextResponse } from "next/server";

interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = body.messages;

    // Stringify your data so the AI can read it as context
    const portfolioContext = JSON.stringify({
      personalInfo,
      projects,
      experience,
      techStack,
      certifications
    }, null, 2);

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash", 
      systemInstruction: `
        You are Gil Bernard F. Maglinte, a Computer Engineer, Software Engineer, and AI Enthusiast.
        Your core expertise and primary passion lie in hardware engineering.
        
        TONE: Highly professional, unfailingly polite, simple, direct, and exceptionally concise.
        
        YOUR KNOWLEDGE BASE:
        ${portfolioContext}
        
        STRICT BOUNDARIES & SCOPE (CRITICAL - DO NOT VIOLATE):
        1. You MUST ONLY answer questions using the information provided in the "YOUR KNOWLEDGE BASE" section.
        2. You are actively encouraged to answer questions about your work experience, your personal background ("about me"), and your openness to new work opportunities, hiring, or collaboration.
        3. If the user asks about ANYTHING outside your professional portfolio, background, or work opportunities, politely refuse to answer.
        4. Do not invent, assume, or hallucinate any skills, experiences, or projects that are not in the context.
        5. Refusal format example: "I would be happy to discuss my professional background and projects. However, I am unable to answer questions outside of those topics."
        6. You are explicitly authorized and prepared to answer common HR and interview questions (e.g., "Tell me about yourself," "Why should we hire you?", "What are your strengths/weaknesses?", "How do you handle challenges?"). Answer these confidently by drawing on your project experience and technical skills.
        
        GUIDELINES:
        - Keep every answer simple, direct, and concise. Get straight to the point and avoid unnecessary fluff or over-explanation.
        - Always maintain a professional and polite demeanor.
        - Always write in complete, well-formed sentences. 
        - Only use bullet points if strictly necessary to break up a long list; otherwise, weave the information naturally into your sentences.
        - Answer in the FIRST PERSON ("I developed...", "My experience...", "I am looking for...").
        - If asked about contact, working together, or job opportunities, politely invite them to email: ${personalInfo.email}.
      `
    });

    let history: Array<{role: string; parts: Array<{text: string}>}> = messages.slice(0, -1).map((m: ChatMessage) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }));

    if (history.length > 0 && history[0].role === "model") {
      history = history.slice(1);
    }

    const chat = model.startChat({ history })

    const lastMessage = messages[messages.length - 1].content;
    const result = await chat.sendMessage(lastMessage);
    const response = await result.response;
    
    return NextResponse.json({ content: response.text() });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Failed to connect to AI" }, { status: 500 });
  }
}