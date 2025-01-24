"use client";

import { Popover } from "@/components/ui/popover";
import { useState } from "react";
import ChatbotBox from "./ChatBotBox";
import ChatBotBtn from "./ChatBotBtn";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <ChatBotBtn />
        <ChatbotBox setIsOpen={setIsOpen} />
      </Popover>
    </div>
  );
};

export default ChatBot;
