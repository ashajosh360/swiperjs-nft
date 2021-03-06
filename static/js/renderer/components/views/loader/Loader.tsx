import "./index.scss";
import LoaderGIF from "../../../../assets/images/pictures/icons/Loader.gif";

export default function Loader({ display }: { display: boolean }): JSX.Element {
  return (
    <div className={`loader ${display ? "" : "loader-fade-out"}`}>
      <div className="l-content">
        <img src={LoaderGIF} alt="loader" />
      </div>
    </div>
  );
}
