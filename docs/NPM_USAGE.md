# NPM Package Usage

This document shows how to use the ControlAgent Chat SDK as an npm package.

## Installation

```bash
npm install ctrl-agent-chat-sdk
# or
yarn add ctrl-agent-chat-sdk
```

## Basic Usage

### Method 1: Default Import (Recommended)

```javascript
import CtrlAgentChatSDK from 'ctrl-agent-chat-sdk';

// Initialize the SDK
const sdk = new CtrlAgentChatSDK();
sdk.init({
  enterpriseId: 'your-enterprise-id',
  chatId: 'your-chat-id'
});
```

### Method 2: Named Import

```javascript
import { CtrlAgentChatSDK } from 'ctrl-agent-chat-sdk';

const sdk = new CtrlAgentChatSDK();
sdk.init({
  enterpriseId: 'your-enterprise-id', 
  chatId: 'your-chat-id'
});
```

### Method 3: Factory Function

```javascript
import { createCtrlAgentSDK } from 'ctrl-agent-chat-sdk';

const sdk = createCtrlAgentSDK({
  enterpriseId: 'your-enterprise-id',
  chatId: 'your-chat-id' 
});
```

## Advanced Usage

### Custom Widget Implementation

```javascript
import { CtrlAgentWidget, FloatingButton } from 'ctrl-agent-chat-sdk';

// Use the widget service directly
const widget = new CtrlAgentWidget();
widget.init({
  enterpriseId: 'your-enterprise-id',
  chatId: 'your-chat-id'
});

// Or use the FloatingButton component in your React app
import React from 'react';
import { FloatingButton } from 'ctrl-agent-chat-sdk';

function MyApp() {
  return (
    <div>
      <FloatingButton onClick={() => console.log('Chat clicked!')}>
        Chat
      </FloatingButton>
    </div>
  );
}
```

## Framework Integration

### React

```jsx
import React, { useEffect } from 'react';
import CtrlAgentChatSDK from 'ctrl-agent-chat-sdk';

function App() {
  useEffect(() => {
    const sdk = new CtrlAgentChatSDK();
    sdk.init({
      enterpriseId: 'your-enterprise-id',
      chatId: 'your-chat-id'
    });
  }, []);

  return <div>Your app content</div>;
}
```

### Vue.js

```javascript
import { createApp } from 'vue';
import CtrlAgentChatSDK from 'ctrl-agent-chat-sdk';

const app = createApp({
  mounted() {
    const sdk = new CtrlAgentChatSDK();
    sdk.init({
      enterpriseId: 'your-enterprise-id',
      chatId: 'your-chat-id'
    });
  }
});
```

### Next.js

```javascript
import { useEffect } from 'react';
import CtrlAgentChatSDK from 'ctrl-agent-chat-sdk';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sdk = new CtrlAgentChatSDK();
      sdk.init({
        enterpriseId: 'your-enterprise-id',
        chatId: 'your-chat-id'
      });
    }
  }, []);

  return <div>Your Next.js page</div>;
}
```

## Configuration Options

```javascript
const config = {
  enterpriseId: 'your-enterprise-id', // Required
  chatId: 'your-chat-id'              // Required
};
```

## TypeScript Support

The package includes full TypeScript definitions:

```typescript
import CtrlAgentChatSDK from 'ctrl-agent-chat-sdk';

interface Config {
  enterpriseId: string;
  chatId: string;
}

const config: Config = {
  enterpriseId: 'your-enterprise-id',
  chatId: 'your-chat-id'
};

const sdk = new CtrlAgentChatSDK();
sdk.init(config);
```
