"use server";
import axios from "axios";
import { TChatbotProps } from "./propsTypes";

export const fetchBotResponse = async (history: TChatbotProps[]) => {
  const secretKey = process.env.GEMINI_API_KEY;
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${secretKey}`,
      { contents: history },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        error: true,
        status: error.response.status,
        message:
          error.response.data ||
          "An error occurred while processing the request.",
      };
    }
    return {
      error: true,
      message: "An unexpected error occurred.",
    };
  }
};
