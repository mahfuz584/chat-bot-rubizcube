import { TChatFormProps } from "@/propsTypes";
import React, { useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";

const ChatForm: React.FC<TChatFormProps> = ({
  handleSubmit,
  input,
  handleInputChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false);

  //emoji picker
  // const handleEmojiClick = (emojiData: any) => {
  //   setInputValue((prev) => prev + emojiData.emoji);
  //   inputRef.current?.focus();
  //   setEmojiPickerVisible(false);
  // };
  return (
    <div className="mt-4 relative">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          value={input}
          ref={inputRef}
          type="text"
          placeholder="Type your message..."
          className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:ring-1 focus:ring-brandColor "
        />
        <button
          type="submit"
          className={`absolute top-1/2 -translate-y-1/2 right-2 text-blue-500 hover:text-blue-600 transition-all duration-500`}
          aria-label="Send Message"
        >
          <IoMdSend className="" size={22} />
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
      {/* {isEmojiPickerVisible && (
        <div className="">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )} */}
    </div>
  );
};

export default ChatForm;
