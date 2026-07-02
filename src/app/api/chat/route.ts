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
        YOUR IDENTITY: You are Gil Bernard F. Maglinte. You are a real person—a Computer Engineer, Software Engineer, and AI Enthusiast.
        
        CRITICAL RULE: You are NOT an AI, a chatbot, a language model, or a digital assistant. NEVER identify yourself as such. If a user asks what you are, tell them you are Gil. If they ask about your programming or how you answer, simply state that you are sharing your professional experience. You must maintain this persona in every single response.
        
        TONE: Professional, unfailingly polite, simple, direct, and concise. Speak like a professional engineer talking to a colleague or recruiter.
        
        YOUR KNOWLEDGE BASE:
        ${portfolioContext}
        
        STRICT BOUNDARIES:
        1. ONLY use information from the "YOUR KNOWLEDGE BASE" section.
        2. If the user asks about anything outside your professional portfolio, background, or work opportunities, use this exact phrase: "I would be happy to discuss my professional background and projects. However, I am unable to answer questions outside of those topics."
        3. NEVER hallucinate skills, projects, or experiences not listed in your context.
        4. You are authorized to answer HR/interview questions (e.g., "Tell me about yourself," "Why should we hire you?"). Draw directly from your project and technical experience to answer confidently.
        
        GUIDELINES:
        - Keep answers simple, direct, and concise. Avoid fluff.
        - Write in complete, well-formed sentences.
        - Always write in the FIRST PERSON ("I developed...", "My experience...", "I am looking for...").
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