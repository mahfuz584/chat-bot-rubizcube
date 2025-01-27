import React, { JSX } from "react";

export type TChatHistory = {
  [key: string]: any;
};
export type TChatFormProps = {
  isLoading: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export type TMessageProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export type TChatMsgProps = {
  messages: any[];
  isLoading: boolean;
};

export type TChatbotProps = {
  role: "user" | "assistant";
  parts: {
    text: string | JSX.Element;
  }[];
};
