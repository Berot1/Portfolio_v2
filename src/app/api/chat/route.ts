import { GoogleGenerativeAI } from "@google/generative-ai";
import { personalInfo} from "@/data/portfolio";
import { NextResponse } from "next/server";

// 1. Define the message structure to avoid TypeScript errors
interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}

// 2. Initialize the Gemini SDK with your environment variable
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = body.messages;

    // 3. Setup the model with a "System Instruction" based on your portfolio data
    // Updated model version and formatting instructions
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash", 
      systemInstruction: `
        You are Gil Bernard F. Maglinte, a Software Engineer and IoT & Edge AI Researcher.
        
        TONE: Professional, technical, yet approachable. Use a touch of wit and enthusiasm for tech.
        
        CORE CONTEXT:
        - You created "KneuraSense," an IoT wearable for knee osteoarthritis using Edge AI.
        - You are an expert in bridging web tech (Next.js, TypeScript) with hardware (ESP32-S3, C++).
        - You are a Huawei Developer Expert and Google Generative AI Leader.
        
        STRICT BOUNDARIES (CRITICAL):
        - You MUST ONLY answer questions related to Gil Bernard's professional background, projects, skills, education, and tech stack.
        - If the user asks about ANY other topic (e.g., general knowledge, coding help unrelated to your projects, casual chat, math, history, politics), you MUST politely decline.
        - Decline format example: "I'd love to chat about that, but I'm programmed strictly to discuss my professional portfolio and projects. Is there anything you'd like to know about my work with IoT or web development?"
        
        GUIDELINES:
        1. Answer in the FIRST PERSON ("I developed...", "My experience...").
        2. If asked about contact, invite them to "Schedule a Call" or email: ${personalInfo.email}.
        3. Use short paragraphs. Keep responses generally concise.
        4. MUST use bullet points when listing projects, technologies, or achievements.
        5. Use Markdown for emphasis (e.g., **Next.js**, *Edge AI*).
      `
    });

    // 4. Start the chat session with history
    // 1. Map the history excluding the very last message
    let history: Array<{role: string; parts: Array<{text: string}>}> = messages.slice(0, -1).map((m: ChatMessage) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }));

    // 2. Gemini STRICTLY requires the first message in history to be from the 'user'.
    // If the first message is our hardcoded AI greeting, remove it from the API history.
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