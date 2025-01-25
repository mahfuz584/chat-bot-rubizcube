import { TChatMsgProps } from "@/propsTypes";
import React from "react";
import { RiRobot2Fill } from "react-icons/ri";
const ChatMsg: React.FC<TChatMsgProps> = ({ chatHistory }) => {
  return (
    <div>
      {chatHistory.map((chat, index) => (
        <div
          key={index}
          className={`flex items-start ${
            chat.role === "user" ? "justify-end" : "justify-start"
          } mb-4`}
        >
          {chat.role === "model" && (
            <div className="flex-shrink-0">
              <RiRobot2Fill
                className="text-white bg-brandColor p-2 rounded-full mr-3 shadow-md"
                size={32}
              />
            </div>
          )}

          <div
            className={`max-w-[70%] px-4 mr-4  shadow-md ${
              chat.role === "user"
                ? "bg-brandColor text-white rounded-bl-lg rounded-tl-lg rounded-tr-2xl rounded-br-none "
                : "bg-[#F6F2FF] text-gray-900 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-2xl"
            } break-words`}
          >
            {chat.message === "loading...." ? (
              <div className="flex items-center justify-center space-x-2 pt-2 pb-4">
                <div className="dot size-1.5 bg-brandColor rounded-full animate-vertical-ping"></div>
                <div className="dot size-1.5 bg-brandColor rounded-full animate-vertical-ping delay-200" />
                <div className="dot size-1.5 bg-brandColor rounded-full animate-vertical-ping delay-400" />
              </div>
            ) : (
              <p className="py-2">{chat.message}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMsg;
