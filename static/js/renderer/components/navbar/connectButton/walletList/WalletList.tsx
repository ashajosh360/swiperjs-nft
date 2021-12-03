import "./index.scss";
import PrimaryButton from "../../../common/primaryButton/primaryButton";
import { ReactComponent as Phamtom } from "../../../../../assets/images/pictures/icons/phantom.svg";
import { ReactComponent as Sollet } from "../../../../../assets/images/pictures/icons/sollet.svg";
import useWallet from "../../../../hooks/useWallet";
import useReduxState from "../../../../hooks/useReduxState";
import useDidUpdateEffect from "../../../../hooks/useDidUpdateEffect";
import { useMediaQuery } from "react-responsive";
import { TWallet } from "../../../../hooks/useWallet";

export default function WalletList(): JSX.Element {
  const isMobile = useMediaQuery({
    query: "(max-width:800px)",
  });
  const [wallet, setWallet] = useWallet();
  const [, setGlobalData] = useReduxState((state) => state.globalData);

  useDidUpdateEffect(() => {
    if (wallet) {
      setGlobalData({
        type: "SET_GLOBAL_DATA",
        arg: {
          wallet,
        },
      });
    }
  }, [wallet]);

  const handleWallet = (walletType: TWallet) => {
    setWallet(walletType);
  };
  return (
    <div className="w-list">
      {!isMobile && (
        <PrimaryButton
          className="wl-phantom"
          onClick={() => {handleWallet("Phantom"); console.log("phantom")}}
        >
          <Phamtom />
          Phantom
        </PrimaryButton>
      )}
      <PrimaryButton
        className="wl-sollet"
        onClick={() =>{ handleWallet("Sollet"); console.log("sollet")}}
      >
        <Sollet />
        Sollet
      </PrimaryButton>
    </div>
  );
}
