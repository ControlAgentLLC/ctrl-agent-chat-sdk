import { createRoot } from 'react-dom/client';
import WidgetContainer from '../../components/widget-container';
import '../../../index.css';


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
