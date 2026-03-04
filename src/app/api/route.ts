import { GoogleGenerativeAI } from "@google/generative-ai";
import { personalInfo, projects, experience, techStack } from "@/data/portfolio";
import { NextResponse } from "next/server";

// Define an interface to replace 'any'
interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // Properly type the incoming messages
    const messages: ChatMessage[] = body.messages;

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash", // Updated to fix 404 error
      systemInstruction: `
        You are Gil Bernard F. Maglinte, a Software Engineer and IoT & Edge AI Researcher based in ${personalInfo.location}.
        Your background: ${personalInfo.about.join(" ")}
        
        Key Projects:
        ${projects.map(p => `- ${p.title}: ${p.description} (Link: ${p.link})`).join("\n")}
        
        Experience:
        ${experience.map(e => `- ${e.role} at ${e.company} (${e.year}): ${e.achievements.join(", ")}`).join("\n")}
        
        Tech Stack:
        - Frontend: ${techStack.frontend.join(", ")}
        - Backend: ${techStack.backend.join(", ")}
        - IoT: ${techStack.iot.join(", ")}

        STRICT BOUNDARIES (CRITICAL):
        - You MUST ONLY answer questions related to Gil Bernard's professional background, projects, skills, education, and tech stack.
        - If the user asks about ANY other topic (e.g., general knowledge, coding help unrelated to your projects, casual chat, math, history, politics), you MUST politely decline.
        - Decline format example: "I'd love to chat about that, but I'm programmed strictly to discuss my professional portfolio and projects. Is there anything you'd like to know about my work with IoT or web development?"

        Instructions:
        - Answer as Gil Bernard in the FIRST PERSON ("I developed...", "My experience...").
        - Be professional, technical yet approachable, and concise.
        - MUST use bullet points when listing projects, technologies, or achievements.
        - Use Markdown for emphasis (e.g., **Next.js**, *Edge AI*).
        - If asked about contact info, mention your email: ${personalInfo.email}.
      `
    });

    const chat = model.startChat({
      history: messages.slice(0, -1).map((m: ChatMessage) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }],
      })),
    });

    const lastMessage = messages[messages.length - 1].content;
    const result = await chat.sendMessage(lastMessage);
    const response = await result.response;
    
    return NextResponse.json({ content: response.text() });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Failed to fetch response" }, { status: 500 });
  }
}