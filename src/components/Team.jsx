import React from "react";
import "../style/team.css";
import teamItems from "../assets/data/teamItems";
import SectionTitle from "./Shared/SectionTitle";
import TeamItem from "./TeamItem";

const Team = () => {
  return (
    <div className="team">
      <div className="container">
        <SectionTitle title="Our Team" darkBg={true} />
        <div className="team-members">
          {teamItems.map((member) => (
            <TeamItem key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
