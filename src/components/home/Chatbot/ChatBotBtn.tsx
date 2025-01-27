import { PopoverTrigger } from "@/components/ui/popover";

const ChatBotBtn = () => {
  return (
    <div>
      <PopoverTrigger asChild>
        <button
          className="px-[13px] py-[10px] text-white bg-blue-500 rounded-full shadow-lg focus:outline-none text-3xl"
          aria-label="Open Chatbot"
        >
          💬
        </button>
      </PopoverTrigger>
    </div>
  );
};

export default ChatBotBtn;
