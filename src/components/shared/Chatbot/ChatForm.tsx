import { TChatFormProps } from "@/propsTypes";
import React, { useRef } from "react";

import { IoMdSend } from "react-icons/io";

const ChatForm: React.FC<TChatFormProps> = ({ setChatHistory }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userMsg = inputRef?.current?.value?.trim();
    if (!userMsg) return;
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    //users chat history
    setChatHistory((prev) => [...prev, { role: "user", message: userMsg }]);

    setTimeout(() => {
      //chatbot reply
      setChatHistory((prev) => [
        ...prev,
        { role: "system", message: "I am a chatbot" },
      ]);
    }, 1000);
  };
  return (
    <div className="mt-4 relative">
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Type your message..."
          className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:ring-1 focus:ring-brandColor "
        />
        <button
          type="submit"
          className="absolute top-1/2 -translate-y-1/2 right-2 text-blue-500 hover:text-blue-600"
          aria-label="Send Message"
        >
          <IoMdSend className="" size={22} color="#7700FF" />
        </button>
      </form>
    </div>
  );
};

export default ChatForm;
