import "./App.css";
import { ChatEngine } from "react-chat-engine";

function App() {
  return (
    <ChatEngine
      projectID="00000000-0000-0000-0000-000000000000"
      userName="adam"
      userSecret="pass1234"
    />
  );
}

export default App;
