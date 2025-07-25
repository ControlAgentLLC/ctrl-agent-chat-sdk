// SDK entry point
class CtrlChatSDK {
  constructor({ clientId, token, theme = {}, containerId = 'ctrl-chat-container' }) {
    if (!clientId || !token) throw new Error('clientId and token are required');

    this.clientId = clientId;
    this.token = token;
    this.theme = {
      primaryColor: theme.primaryColor || '#007bff',
    };
    this.containerId = containerId;
    this.iframe = null;
    this.listeners = {};

    this.init();
  }

  init() {
    this.injectIframe();
    this.listenToMessages();
  }

  injectIframe() {
		let iframe = document.createElement('iframe');
    // chat.ctrlchat.com/widget?clientId=${this.clientId}&token=${this.token}
    https: iframe.src = `<CHAT_SDK_URL>`;
    iframe.style = `
      width: 350px;
      height: 500px;
      border: none;
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
    `;
    iframe.id = this.containerId;
    document.body.appendChild(iframe);
    this.iframe = iframe;
  }

  listenToMessages() {
    window.addEventListener('message', (event) => {
      if (event.origin !== 'https://chat.ctrlchat.com') return;
      const { type, payload } = event.data;
      if (type && this.listeners[type]) {
        this.listeners[type](payload);
      }
    });
  }

  sendMessage(message) {
    if (this.iframe && this.iframe.contentWindow) {
      this.iframe.contentWindow.postMessage(
        { type: 'send-message', message },
        'https://chat.ctrlchat.com',
      );
    }
  }

  on(event, callback) {
    this.listeners[event] = callback;
  }

  destroy() {
    if (this.iframe) document.body.removeChild(this.iframe);
    this.iframe = null;
  }
}

window.CtrlChatSDK = CtrlChatSDK;
