//Styles
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
// import logo from "@assets/images/logo.png";
//Framer motion
//icons
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles["Footer"]}>

        <div className={styles["Info"]}>
          <figure className={styles["logo"]}>
              {/*<img src={logo} alt="" />*/}
          </figure>

        </div>

      <div className={styles["icons"]}>
        <BsFacebook />
        <BsTwitter />
        <BsInstagram />
      </div>
      <div className={styles["links"]}>
        <Link to={"/"}>Home</Link>
     
        <Link to={"/"}>Services</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Contact</Link>
        <Link to={"/"}>Team</Link>
      </div>
    </div>
  );
};

export default Footer;
