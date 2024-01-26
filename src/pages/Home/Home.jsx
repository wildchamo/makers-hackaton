import "./stlyes.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="main-container">
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <Link to={"/chat"} className="login-button passNEmail">
            Login with email and password
          </Link>
          <Link to={"/chat"} className="login-button tinder">
            Login with Tinder
          </Link>
        </form>
      </div>
    </main>
  );
}

export default Home;
