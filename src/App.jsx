import React, { useState } from "react";

import "./App.css";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";

function App() {
  const [username, setUsername] = useState("");

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  function renderChatForm(creds) {
    return (
      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    );
  }

  return (
    <ChatEngine
      height="100vh"
      padding="0"
      projectID={import.meta.env.VITE_REACT_APP_PROJECT_ID}
      userName={import.meta.env.VITE_REACT_APP_USERNAME}
      userSecret={import.meta.env.VITE_REACT_APP_USER_SECRET}
      renderNewChatForm={(creds) => renderChatForm(creds)}
    />
  );
}

export default App;
