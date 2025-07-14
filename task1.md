first this project is about to develop the simple and enterprise level standard application development for the installable web embed.

this project is going to be a single source of truth but it will make the "SCRIPT|CDN" and "NPM" based both approuch as output.
i will explain this in the below deeply.


1. SCRIPT | CDN :-
for example from my application i will provide some script in the screen, that users will copy and they will put it in there site code( bottom of body or in header. or wherever we can suggest them to use based on the performance of their site should not get affected but, once there site very quickly ours needs to be should get render. for now in this setup we are going to show one simple floating button kind of thing on the bottom right corner of the site )

example script will look like the below
<script>
  (function initCaSdk() {
    const caSdkConfig = {
      enterpriseId: "1234556",
      chatId: "7267376152"
    };

    const SDK_SCRIPT_SRC = "http://localhost:5273/index.js";

    const injectChatSdkScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = SDK_SCRIPT_SRC;

      const firstScriptTag = document.getElementsByTagName("script")[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
      }
    };

    const loadChatSdk = () => {
      if (typeof window.caSdk === "function") {
        window.caSdk(caSdkConfig);
      } else {
        injectChatSdkScript();
      }
    };

    if (document.readyState === "complete") {
      loadChatSdk();
    } else {
      window.addEventListener("load", loadChatSdk, false);
    }
    // Optionally expose config or init globally if needed
    window.caSdkConfig = caSdkConfig;
  })();
</script>

this above code is displayed in my app and it can be copied by the user and they can use it in there site code.
and here your part is, http://localhost:5273/ca-sdk.js this url is made by the development setup which is going to developed by you now. and to check this in the development setup, need one preview page with the above code in http://localhost:5273/scipt-preview . and for this need to use the command like "npm run dev:script" or default "npm run dev".

in this http://localhost:5273/ca-sdk.js we are going to have one IIFE. that is going to init a window.caSdk function object. 
and this needs to have one method like window.caSdk.show() and window.caSdk.hide() methods. one this self called method get called then, inside that that needs to call one method which can make one element and inject an one react component which is going to show the floading chat bubble button. everything needs to be chunk splited properly based on the weightage. if the thing is small code only then we dont have to chunk split the code more becase to load the other chuncked files those files will have extra codes inside that. 


1. NPM :-
for example, we will publish one npm package named as @ca/chat-sdk . and this will return initCaSdk method. user can import it and they can use it in there code like below, and they can use it on any framework.

import CaChatSdk from "@ca/chat-sdk";

CaChatSdk({
    enterpriseId: "1234556",
    chatId: "7267376152"
})

like the above. 

these both needs to be in same single source of truth. and architecht it more enterprise level stnadard and scalable and optimized one. 


-----
commands im expecting in this project:-
- npm run dev ( to run both approuch at a time, and it will have some demo site to check both approaches too. )
- npm run dev:script-sdk
- npm run dev:npm-sdk
- npm run build ( to build both types of thing at a time and another command to publish the npm package if possible )


-----
both approach will bind window.caSdk in the site, so customer can access it whenever and whrever they want.

The React app is dynamically loaded and hydrated inside an isolated DOM node.

Chunking logic is intelligent:

✅ Small bundle? No code-splitting

📦 Heavier logic/components? Split based on features

TypeScript: 100% strict, typed SDK interface

Preview: Custom development server (vite.config.ts multi-entry)

Linter & Formatter: ESLint + Prettier + Commit Hooks

CSP compatibility (nonce, no eval, integrity hashes in future)

Async rendering to avoid blocking LCP

Compatible with SSR / hydration-safe render for embeds

Auto-cleanup to avoid memory leaks or DOM residue on reinit



and both aproach is going to show the floating chat widget button in the site bottom right corner. and make this setup as enterprise level stnadard and optimized and made by the 10 plus years of experienced senior front end architect's planed and implemented level to make it enterprise level standard and scalable and optimized.