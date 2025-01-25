import { PopoverContent } from "@/components/ui/popover";
import { TChatHistory, TMessageProps } from "@/propsTypes";
import { fetchBotResponse } from "@/serverActions";
import React, { useEffect, useRef, useState } from "react";
import { LuMaximize2, LuMinimize2 } from "react-icons/lu";
import { RiRobot2Fill } from "react-icons/ri";
import ChatForm from "./ChatForm";
import ChatMsg from "./ChatMsg";

const ChatbotBox: React.FC<TMessageProps> = ({ setIsOpen }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [chatHistory, setChatHistory] = useState<TChatHistory[]>([]);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  const closePopover = () => {
    setIsOpen(false);
    setIsMinimized(true);
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  const generateChatbotResponse = async (chatHistory: TChatHistory[]) => {
    const updateChatHistory = (text: string) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.message !== "loading...."),
        { role: "model", message: text },
      ]);
    };
    const history = chatHistory?.map(({ role, message }) => {
      return {
        role,
        parts: [
          {
            text: message,
          },
        ],
      };
    });

    try {
      const response = await fetchBotResponse(history);
      const rawchatbotResponse =
        response?.candidates?.[0]?.content?.parts?.[0]?.text.replace();

      const chatbotResponse = rawchatbotResponse
        ?.trim()
        .replace(/\s+/g, " ")
        .replace(
          /(^|\.\s*)([a-z])/g,
          (p1: string, p2: string) => p1 + p2.toUpperCase()
        );

      if (chatbotResponse) {
        updateChatHistory(chatbotResponse);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PopoverContent
      className={`${
        !isMinimized
          ? "lg:w-[26vw] 100vw h-[65vh]"
          : "lg:w-[40vw] 100vw h-[82vh]"
      } shadow-xl bg-white rounded-lg border mr-8 mb-3 transition-all duration-300`}
    >
      <div className="flex w-full flex-col h-full">
        <div className="mb-4 flex justify-between items-center border-b pb-2">
          <div className="flex items-center">
            <RiRobot2Fill
              className="text-white bg-brandColor p-2 rounded-full mr-3 shadow-md"
              size={32}
            />
            <h3 className="text-lg font-semibold">RubizCode Bot</h3>
          </div>
          <div className="flex space-x-3 items-center">
            {/* Minimize Button */}
            <button
              className="flex items-center justify-center w-10 h-10 bg-[#F6F2FF] rounded-full hover:bg-gray-200 transition-all duration-200 focus:outline-none"
              aria-label="Minimize Chat"
              onClick={handleMinimize}
            >
              {!isMinimized ? (
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

        {/* Chat Body */}
        <div
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#ddd3f9 transparent",
          }}
          ref={chatBodyRef}
          className="flex-1 overflow-y-auto"
        >
          <ChatMsg chatHistory={chatHistory} />
        </div>
        {/* Chat Form */}
        <ChatForm
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
          generateChatbotResponse={generateChatbotResponse}
        />
      </div>
    </PopoverContent>
  );
};

export default ChatbotBox;
