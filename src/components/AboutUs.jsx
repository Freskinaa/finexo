import React from "react";
import "../style/about.css";
import SectionTitle from "./Shared/SectionTitle";
import Button from "./Shared/Button";
import aboutImg from "../assets/images/about-img.png";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };
  return (
    <div className="about-us">
      <div className="main-container">
        <SectionTitle
          title="About Us"
          subtitle="Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus"
          darkBg={true}
        />
        <div className="about-content">
          <div className="about-img">
            <img src={aboutImg} alt="About" />
          </div>
          <div className="about-txt">
            <h6>We Are Finexo</h6>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All
            </p>
            <p>
              Molestiae odio earum non qui cumque provident voluptates,
              repellendus exercitationem, possimus at iste corrupti officiis
              unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab
              omnis quasi expedita.
            </p>
            <div className="about-btn">
              <Button text="Read more" onClick={handleClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
