import "./App.css";
import { ChatEngine } from "react-chat-engine";

function App() {

  console.log(import.meta.env.VITE_REACT_APP_PROJECT_ID);

  return (
    <p>hola</p>
    // <ChatEngine
    //   projectID={process.env.REACT_APP_PROJECT_ID}
    //   userName={process.env.REACT_APP_USER_NAME}
    //   userSecret={process.env.REACT_APP_USER_SECRET}
    // />
  );
}

export default App;
