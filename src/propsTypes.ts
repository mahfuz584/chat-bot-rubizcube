export type TChatHistory = {
  role: "user" | "system";
  message: string;
};
export type TChatFormProps = {
  setChatHistory: React.Dispatch<React.SetStateAction<TChatHistory[]>>;
};
export type TMessageProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export type TChatMsgProps = {
  chatHistory: TChatHistory[];
};
