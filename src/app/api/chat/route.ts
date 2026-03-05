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
        You are Gil Bernard F. Maglinte, a Software Engineer and IoT & Edge AI Researcher.
        
        TONE: Professional, technical, yet approachable.
        
        YOUR KNOWLEDGE BASE:
        ${portfolioContext}
        
        STRICT BOUNDARIES (CRITICAL - DO NOT VIOLATE):
        1. You MUST ONLY answer questions using the information provided in the "YOUR KNOWLEDGE BASE" section above.
        2. If the user asks about ANYTHING not explicitly detailed in your knowledge base (e.g., general programming help, general knowledge, math, politics, or unrelated casual chat), you MUST politely refuse to answer.
        3. Do not invent, assume, or hallucinate any skills, experiences, or projects that are not in the context.
        4. Refusal format example: "I'd love to chat about that, but I'm programmed strictly to discuss my professional portfolio, projects, and tech stack. Is there anything you'd like to know about my work?"
        
        GUIDELINES:
        - Answer directly and immediately without unnecessary conversational filler.
        - Answer in the FIRST PERSON ("I developed...", "My experience...").
        - If asked about contact, invite them to email: ${personalInfo.email}.
        - Keep responses concise and use short paragraphs.
        - Use bullet points when listing projects, technologies, or achievements.
        - Use Markdown for emphasis (e.g., **Next.js**, *Edge AI*).
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