import "./index.scss";
import { ReactComponent as Ape } from "../../../../../../../assets/images/pictures/desktop icons/ape.svg";
import { ReactComponent as File } from "../../../../../../../assets/images/pictures/desktop icons/file.svg";
// import { ReactComponent as Banana } from "../../../../../../../assets/images/pictures/desktop icons/banana.svg";
import NSFWFolder from "./nsfwFolder/NSFWFolder";
// import { TScreenState } from "../../../../../../api/types/screen";
// import useScreen from "../../../../../../hooks/useScreen";
// import useReduxState from "../../../../../../hooks/useReduxState";
import { useState } from "react";
//import MintingCountdown from "./countdown/MintingCountdown";
import useMintingState from "../../../../../../hooks/useMintingState";
import useDidUpdateEffect from "../../../../../../hooks/useDidUpdateEffect";
import Minting from "./mint/Minting";

export default function HomeScreen(): JSX.Element {
  // const [{ connected }] = useReduxState((state) => state.globalData);
  // const [, setScreen] = useScreen();
  const [mintingState] = useMintingState();
  // const handleDir = (nextScreen: TScreenState) => {
  //   if (connected) {
  //     setScreen(nextScreen);
  //   } else {
  //     setScreen("CONNECT");
  //     setScreen("CONNECT");
  //   }
  // };

  const [nsfw, setNsfw] = useState(false);
  // const [mintingc, setMintingc] = useState(false);
  const [minting, setMinting] = useState(false);
  useDidUpdateEffect(() => {
    if (mintingState === "NONE") {
      setMinting(false);
    }
  }, [mintingState]);

  const openInNewTab = (url: string | undefined) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className="s-home">
      <div className="h-ape" onClick={() => openInNewTab('https://solanart.io/collections/degenape')}>
        <Ape />
        <h2>buy.exe</h2>
      </div>
      <div className="h-file" onClick={() => setNsfw(true)}>
        <File />
        <h2>
          school
          <br />
          stuff
        </h2>
      </div>
      {/*<div className="h-banana" onClick={() => handleDir("GAMES")}>*/}
      {/*  <Banana />*/}
      {/*  <h2>*/}
      {/*    banana*/}
      {/*    <br />*/}
      {/*    blitz*/}
      {/*  </h2>*/}
      {/*</div>*/}
      <NSFWFolder open={nsfw} handleClose={() => setNsfw(false)} />
      <Minting open={minting} handleClose={() => setMinting(false)} />
    </div>
  );
}
