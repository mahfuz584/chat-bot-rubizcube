import { TChatMsgProps } from "@/propsTypes";
import React from "react";
import { RiRobot2Fill } from "react-icons/ri";
const ChatMsg: React.FC<TChatMsgProps> = ({ chatHistory }) => {
  return (
    <div>
      {chatHistory.map((chat, index) => (
        <div
          key={index}
          className={`flex items-center ${
            chat.role === "user" ? "justify-end" : "justify-start"
          } mb-4`}
        >
          {chat.role === "system" && (
            <div className="flex-shrink-0">
              <RiRobot2Fill
                className="text-white bg-brandColor p-2 rounded-full mr-3 shadow-md"
                size={32}
              />
            </div>
          )}

          <div
            className={`max-w-[70%] py-2 px-4 rounded-lg shadow-md ${
              chat.role === "user"
                ? "bg-brandColor text-white rounded-br-none"
                : "bg-[#F6F2FF] text-gray-900 rounded-bl-none"
            } break-words`}
          >
            {chat.message}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMsg;
