//Styles
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
// import logo from "@assets/images/logo.png";
//Framer motion
//icons

const Footer = () => {
  return (
    <div className={styles["Header"]}>

      <div className={styles["links"]}>
        <Link to={"/"}>Home</Link>

        <Link to={"/chat"}>Chat</Link>
      </div>
    </div>
  );
};

export default Footer;
