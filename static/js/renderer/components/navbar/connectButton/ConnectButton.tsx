import "./index.scss";
import PrimaryButton from "../../common/primaryButton/primaryButton";
import { useState, useEffect } from "react";
import WalletList from "./walletList/WalletList";
import useReduxState from "../../../hooks/useReduxState";
/* eslint-disable  react-hooks/exhaustive-deps */
export default function ConnectButton({
  className,
  navRef,
}: {
  className: string;
  navRef: React.RefObject<HTMLDivElement>;
}): JSX.Element {
  const [open, setOpen] = useState(false);
  const [{ connected, wallet }, setGlobalData] = useReduxState(
    (state) => state.globalData
  );
  useEffect(() => {
    if (connected && open) {
      setOpen(false);
    }
  }, [connected]);
  return (
    <div
      className={`nav-connect-wrap nav-connect  ${className} ${
        open ? "nc-open" : ""
      }`}
    >
      <PrimaryButton
        /*    {...(navRef.current && {
        style: { top: `${navRef.current.clientHeight / 2.93}%` },
      })} */
        onClick={() => {
          if (!connected) {
            setOpen(!open);
          } else if (wallet && wallet.publicKey) {
            navigator.clipboard.writeText(wallet.publicKey.toBase58());
            setGlobalData({
              type: "SET_GLOBAL_DATA",
              arg: {
                wallet,
              },
            });
          }
        }}
      >
        {connected && wallet && wallet.publicKey
          ? `${wallet.publicKey
              .toBase58()
              .substring(0, 5)} ... ${wallet.publicKey
              .toBase58()
              .substring(wallet.publicKey.toBase58().length - 5)}`
          : "Connect Wallet"}
      </PrimaryButton>
      <div className={`nc-dropdown `}>
        <WalletList />
      </div>
    </div>
  );
}
