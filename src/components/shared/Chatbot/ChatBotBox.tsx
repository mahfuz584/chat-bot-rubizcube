import { PopoverContent } from "@/components/ui/popover";
import { TChatHistory, TMessageProps } from "@/propsTypes";
import React, { useState } from "react";
import { LuMaximize2, LuMinimize2 } from "react-icons/lu";
import ChatForm from "./ChatForm";
import ChatMsg from "./ChatMsg";

const ChatbotBox: React.FC<TMessageProps> = ({ setIsOpen }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [chatHistory, setChatHistory] = useState<TChatHistory[]>([]);
  console.log("🚀 ~ chatHistory:", chatHistory);
  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  const closePopover = () => {
    setIsOpen(false);
    setIsMinimized(true);
  };

  return (
    <PopoverContent
      className={`${
        isMinimized ? "w-[26vw] h-[65vh]" : "w-[40vw] h-[82vh]"
      } shadow-xl bg-white rounded-lg border mr-8 mb-3 transition-all duration-300`}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 flex justify-between items-center border-b pb-2">
          <h3 className="text-lg font-semibold">Chatbot</h3>
          <div className="flex space-x-3 items-center">
            {/* Minimize Button */}
            <button
              className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-200 focus:outline-none"
              aria-label="Minimize Chat"
              onClick={handleMinimize}
            >
              {isMinimized ? (
                <LuMinimize2 className="text-gray-500" size={24} />
              ) : (
                <LuMaximize2 className="text-gray-500" size={24} />
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={closePopover}
              className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-200 text-xl focus:outline-none"
              aria-label="Close Chat"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <ChatMsg chatHistory={chatHistory} />
        </div>

        <ChatForm setChatHistory={setChatHistory} />
      </div>
    </PopoverContent>
  );
};

export default ChatbotBox;
