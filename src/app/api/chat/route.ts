import { google } from "@ai-sdk/google";
import { streamText } from "ai";

if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
  throw new Error("GOOGLE_API_KEY is not set in the environment variables");
}

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google("gemini-pro"),
    messages,
  });

  return result.toDataStreamResponse();
}
