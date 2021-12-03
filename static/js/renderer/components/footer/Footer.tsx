import "./index.scss";
import { ReactComponent as ApeLogo } from "../../../assets/images/pictures/logos/DAA_Logo-white.svg";
import { ReactComponent as Discord } from "../../../assets/images/icons/discord.svg";
import { ReactComponent as Twitter } from "../../../assets/images/icons/twitter.svg";

export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="foot-ape-logo">
        <ApeLogo />
        From the smooth brains of DegenLabs
        <br />
        All Rights Reserved 2021
      </div>
      <div className="foot-links">
        <Discord
        style={{cursor:"pointer"}}
          onClick={() => {
            window.open("http://discord.gg/degenapeacademy", "_blank");
          }}
        />
        <Twitter
        
          onClick={() => {
            window.open("https://twitter.com/degenapeacademy", "_blank");
          }}
          style={{cursor:"pointer", marginLeft: "15px" }}
        />
      </div>
    </footer>
  );
}
