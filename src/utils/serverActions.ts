"use server";
import { secretKey } from "@/constants/secretKey";
import axios from "axios";

export const fetchApiResponse = async (
  prompts: { role: string; content: string }[]
) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: prompts,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${secretKey}`,
        },
      }
    );

    return response.data; // Return the API response data
  } catch (err: any) {
    // Log the error details for debugging
    console.error("Error while calling OpenAI API:", err.response?.data || err);

    // Return a meaningful error message
    throw new Error(
      err.response?.data?.error?.message ||
        "An error occurred while communicating with OpenAI API."
    );
  }
};
