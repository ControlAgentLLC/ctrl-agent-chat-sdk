import React from 'react';

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  enterpriseId: string;
  chatId: string;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onClose, enterpriseId, chatId }) => {
  if (!isOpen) return null;

  const iframeUrl = `http://localhost:5173/enterprise/${enterpriseId}/chat/${chatId}?mode=embed`;

  return (
    <div className="fixed right-7 bottom-7 overflow-hidden rounded-3xl z-50 shadow-[0px_5px_40px_0px_rgba(9,14,21,0.16)]">
      
      {/* Widget Container */}
      <div className="relative bg-white rounded-lg w-96 h-[600px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Chat</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        
        {/* Iframe Container */}
        <div className="flex-1 relative">
          <iframe
            src={iframeUrl}
            className="absolute inset-0 w-full h-full border-0"
            title="Chat Widget"
            allow="microphone; camera; geolocation"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
