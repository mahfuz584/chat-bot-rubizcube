import { TChatFormProps } from "@/propsTypes";
import EmojiPicker from "emoji-picker-react";
import React, { useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";
const ChatForm: React.FC<TChatFormProps> = ({
  handleSubmit,
  input,
  handleInputChange,
  isLoading,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false);

  // emoji picker
  const handleEmojiClick = (emojiData: any) => {
    const event = {
      target: {
        value: input + emojiData.emoji,
      },
    } as React.ChangeEvent<HTMLInputElement>;
    handleInputChange(event);
    inputRef.current?.focus();
    setEmojiPickerVisible(false);
  };

  return (
    <div className="mt-4 relative">
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <input
          onChange={handleInputChange}
          value={input}
          ref={inputRef}
          type="text"
          placeholder="Type your message..."
          className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:ring-1 focus:ring-brandColor"
        />
        <button
          type="button"
          onClick={() => setEmojiPickerVisible(!isEmojiPickerVisible)}
          className="text-xl text-gray-500 hover:text-gray-700"
          aria-label="Add Emoji"
        >
          😊
        </button>
        <button
          disabled={isLoading || !input}
          type="submit"
          className={`${
            isLoading || !input
              ? " text-gray-500 cursor-not-allowed"
              : " text-brandColor"
          }   rounded-3xl focus:outline-none`}
          aria-label="Send Message"
        >
          <IoMdSend size={22} />
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
