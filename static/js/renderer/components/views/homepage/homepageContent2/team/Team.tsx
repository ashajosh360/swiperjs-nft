import "./index.scss";
import MonoApe from "../../../../../../assets/images/pictures/team/Monoliff.png";
import OboApe from "../../../../../../assets/images/pictures/team/Obo.png";
import ConorApe from "../../../../../../assets/images/pictures/team/Conor.png";
import TeamMember from "./teamMember/TeamMember";
export default function Team(): JSX.Element {
  return (
    <div id="team" className="hp-team">
      <h1>Team</h1>
      <div className="hp-team-list">
        <TeamMember ape={MonoApe} name="MONOLIFF" role="Art & Design" />
        <TeamMember ape={OboApe} name="obottis1" role="Project Management" />
        <TeamMember ape={ConorApe} name="ConorHolds" role="Development" />
      </div>
    </div>
  );
}
