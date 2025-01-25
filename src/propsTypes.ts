import React, { JSX } from "react";

export type TChatHistory = {
  role: "user" | "model";
  message: string | JSX.Element;
  type?: "loading";
};
export type TChatFormProps = {
  chatHistory: TChatHistory[];
  setChatHistory: React.Dispatch<React.SetStateAction<TChatHistory[]>>;
  generateChatbotResponse: (chatHistory: TChatHistory[]) => void;
};
export type TMessageProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export type TChatMsgProps = {
  chatHistory: TChatHistory[];
};

export type TChatbotProps = {
  role: "user" | "model";
  parts: {
    text: string | JSX.Element;
  }[];
};
