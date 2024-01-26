import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import { useState } from "react";
import "./Chat.css";

function Chat() {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState({
    suggestions: {
      Mensaje1:
        "¡Japón suena increíble! Me encantaría explorar esos paisajes contigo. ¿Qué te parece si planeamos una aventura juntos?",
      Mensaje2:
        "La temporada de Sakura debe ser mágica. Me imagino caminando bajo los cerezos en flor contigo, ¿te gustaría eso?",
      Mensaje3:
        "También soy un gran fan de los viajes. ¿Te gustaría que compartiéramos fotos de nuestros destinos soñados y ver si coincidimos en alguno?",
    },
  });

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
    <main className="maincontainer-chat">
      <div className="floating-messages">
        {Object.entries(messages.suggestions).map(([key, value], index) => (
          <button key={index}>
            <strong>{key}:</strong> {value}
          </button>
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
