import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import FloatingButton from '../../components/floating-button';
import ChatWidget from '../../components/chat-widget';
import '../../../index.css';

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

export class widgetService {
  private hostElement: HTMLElement | null = null;
  private config: { enterpriseId: string; chatId: string } = { enterpriseId: '', chatId: '' };
  init(config: { enterpriseId: string; chatId: string }) {
    this.config = config;
    this.setHostElement();
    this.injectWidgetUi();
  }
  private setHostElement(
    elementSelector?: string,
    selectorType?: 'id' | 'class' | 'tag' | 'xpath' | 'css',
  ) {
    let element: HTMLElement | null = null;
    if (elementSelector && selectorType) {
      if (selectorType === 'id') {
        element = document.getElementById(elementSelector) as HTMLElement | null;
      } else if (selectorType === 'class') {
        const elements = document.getElementsByClassName(elementSelector);
        element = elements.length > 0 ? (elements[0] as HTMLElement) : null;
      } else if (selectorType === 'tag') {
        const elements = document.getElementsByTagName(elementSelector);
        element = elements.length > 0 ? (elements[0] as HTMLElement) : null;
      } else if (selectorType === 'xpath') {
        const node = document.evaluate(
          elementSelector,
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null,
        ).singleNodeValue;
        element = node instanceof HTMLElement ? node : null;
      } else if (selectorType === 'css') {
        element = document.querySelector(elementSelector) as HTMLElement;
      }
    } else {
      const _element = document.createElement('ca-sdk-widget');
      document.body.appendChild(_element);
      element = _element;
    }
    this.hostElement = element;
  }
  injectWidgetUi() {
    createRoot(this.hostElement as HTMLElement).render(
      <WidgetContainer
        enterpriseId={this.config.enterpriseId}
        chatId={this.config.chatId}
      />
    );
  }
}
