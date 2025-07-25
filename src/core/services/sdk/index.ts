import { widgetService } from '../widget';

declare global {
  interface Window {
    caSdk: { [key: string]: unknown } | ((a: string, b: unknown) => void);
  }
}

export class sdkService {
  public config: { enterpriseId: string; chatId: string } = { enterpriseId: '', chatId: '' };
  private widgetService: widgetService | null = null;
  init(config: { enterpriseId: string; chatId: string }) {
    this.config = config;
    this.widgetService = new widgetService();
    this.widgetService.init(config);
    this.setCaSdk();
    this.setCaSdkValue('config', this.config);
  }
  private setCaSdk() {
    if (typeof window.caSdk !== 'object') {
      window.caSdk = {};
    }

    window.caSdk = new Proxy(window.caSdk, {
      set(target, prop: string, value) {
        target[prop] = value;
        return true;
      },
    });
  }
  public setCaSdkValue(key: string, value: unknown) {
    if (typeof window.caSdk === 'object' && window.caSdk !== null) {
      (window.caSdk as { [key: string]: unknown })[key] = value;
    } else {
      throw new Error('window.caSdk is not an object');
    }
  }
}
