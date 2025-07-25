// NPM Package Entry Point
// Export all core functionality for npm package consumers

// Export main SDK service class
export { sdkService as CtrlAgentChatSDK } from '../../core/services/sdk';

// Export widget service for advanced usage
export { widgetService as CtrlAgentWidget } from '../../core/services/widget';

// Export React components for custom implementations
export { default as FloatingButton } from '../../core/components/floating-button';
export { default as ChatWidget } from '../../core/components/chat-widget';

// Default export - main SDK class for common usage
export { sdkService as default } from '../../core/services/sdk';

// Convenience factory function for quick initialization
import { sdkService } from '../../core/services/sdk';

export function createCtrlAgentSDK(config: { enterpriseId: string; chatId: string }) {
  const sdk = new sdkService();
  sdk.init(config);
  return sdk;
}

// Version info (will be replaced during build)
export const VERSION = '0.0.0';
