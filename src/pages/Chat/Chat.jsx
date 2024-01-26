import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import {useState} from "react";


function Chat() {
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
    <main>
      <ChatEngine
        height="100vh"
        padding="0"
        projectID={import.meta.env.VITE_REACT_APP_PROJECT_ID}
        userName={import.meta.env.VITE_REACT_APP_USERNAME}
        userSecret={import.meta.env.VITE_REACT_APP_USER_SECRET}
        renderNewChatForm={(creds) => renderChatForm(creds)}

      />
        <h1>asd</h1>
    </main>
  );
}

export default Chat;
