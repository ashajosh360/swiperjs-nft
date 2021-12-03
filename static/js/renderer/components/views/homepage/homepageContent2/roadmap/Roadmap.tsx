import "./index.scss";
import { ReactComponent as Banana } from "../../../../../../assets/images/pictures/backgrounds/banana.svg";
import PrimaryButton from "../../../../common/primaryButton/primaryButton";

export default function RoadMap(): JSX.Element {
  return (
    <>
      <div id="roadmap" className="hp-roadmap" data-aos="fade-up">
        <div className="hp-rm-content">
          <h1>Utility & Roadmap</h1>
          <p>
            Minting a Degenerate Ape acts as your enrollment to the most
            prestigious Academy apes have ever built. While you’re a student,
            you will have access to all that the academy has to offer currently,
            and in the future.
          </p>
          <p>
            Access to the academy means more than just bragging rights to those
            uneducated, less sophisticated apes. We have made it our goal to
            make sure utility is always offered to all our students. This
            utility will be modest at first but will expand over time as we
            continue to build.
          </p>
          <p>
            We are building the academy not just for you, but also with you.
            Click below to see our roadmap for the near and longer term future.
          </p>
          <p>We hope you have your crayons ready.</p>
          <PrimaryButton
            className="hp-trello-btn"
            onClick={()=> window.open("https://trello.com/b/nakRUodz/daa-roadmap", "_blank")}
          >
            Visit Roadmap
          </PrimaryButton>
        </div>
        <Banana id="banana" />
      </div>
    </>
  );
}
