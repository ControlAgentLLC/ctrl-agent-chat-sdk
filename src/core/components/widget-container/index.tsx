import { useState } from "react";
import FloatingButton from "../floating-button";
import ChatWidget from "../chat-widget";

const WidgetContainer: React.FC<{ enterpriseId: string; chatId: string }> = ({ enterpriseId, chatId }) => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const handleButtonClick = () => {
    setIsWidgetOpen(true);
  };

  const handleCloseWidget = () => {
    setIsWidgetOpen(false);
  };

  return (
    <>
      <FloatingButton onClick={handleButtonClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-white transition-transform duration-200 transform hover:scale-110"
        >
          <path d="M12 2L2 22h20L12 2z" />
          <path d="M12 2L2 22h20L12 2z" />
        </svg>
      </FloatingButton>
      
      <ChatWidget
        isOpen={isWidgetOpen}
        onClose={handleCloseWidget}
        enterpriseId={enterpriseId}
        chatId={chatId}
      />
    </>
  );
};

export default WidgetContainer;