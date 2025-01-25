/* eslint-disable @typescript-eslint/no-explicit-any */
import { TChatFormProps } from "@/propsTypes";
import EmojiPicker from "emoji-picker-react";
import React, { useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";

const ChatForm: React.FC<TChatFormProps> = ({
  setChatHistory,
  generateChatbotResponse,
  chatHistory,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false);

  //uer input form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userMsg = inputValue.trim();
    if (!userMsg) return;
    setInputValue("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    //users chat history
    setChatHistory((prev) => [...prev, { role: "user", message: userMsg }]);

    setTimeout(() => {
      //chatbot reply
      setChatHistory((prev) => [
        ...prev,
        { role: "model", message: `loading....` },
      ]);
      generateChatbotResponse([
        ...chatHistory,
        { role: "user", message: userMsg },
      ]);
    }, 500);
  };

  //emoji picker
  const handleEmojiClick = (emojiData: any) => {
    setInputValue((prev) => prev + emojiData.emoji);
    inputRef.current?.focus();
    setEmojiPickerVisible(false);
  };
  return (
    <div className="mt-4 relative">
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
          type="text"
          placeholder="Type your message..."
          className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:ring-1 focus:ring-brandColor "
        />
        <button
          type="submit"
          className={`absolute top-1/2 -translate-y-1/2 right-2 text-blue-500 hover:text-blue-600 transition-all duration-500 ${
            inputValue.trim() !== "" ? "hover:scale-125" : ""
          }`}
          aria-label="Send Message"
          disabled={inputValue.trim() === ""}
        >
          <IoMdSend
            className=""
            size={22}
            color={inputValue.trim() === "" ? "gray" : "#7700FF"}
          />
        </button>
        <button
          type="button"
          onClick={() => setEmojiPickerVisible(!isEmojiPickerVisible)}
          className="absolute text-xl top-1/2 -translate-y-1/2 right-10 text-gray-500 hover:text-gray-700"
          aria-label="Add Emoji"
        >
          😊
        </button>
      </form>
      {/* Emoji Picker */}
      {isEmojiPickerVisible && (
        <div className="">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </div>
  );
};

export default ChatForm;
