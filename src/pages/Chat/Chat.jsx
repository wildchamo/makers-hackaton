import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import { useState } from "react";
import "./Chat.css";


function Chat() {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState(["jose", "luis", "bedoya"]); // [

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
    <main>
      <div className="floating-messages">
        {messages.map((message, index) => (
          <button key={index}>{message}</button>
        ))}
      </div>

      <ChatEngine
        height="100vh"
        padding="0"
        projectID={import.meta.env.VITE_REACT_APP_PROJECT_ID}
        userName={import.meta.env.VITE_REACT_APP_USERNAME}
        userSecret={import.meta.env.VITE_REACT_APP_USER_SECRET}
        renderNewChatForm={(creds) => renderChatForm(creds)}
      />
    </main>
  );
}

export default Chat;
