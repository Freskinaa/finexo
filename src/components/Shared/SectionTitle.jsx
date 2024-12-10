import React from "react";

const SectionTitle = ({ title, subtitle, darkBg }) => {
  const words = title.split(" ");
  const lastWord = words.pop();
  const remainingWords = words.join(" ");

  return (
    <div className="section-title main-container">
      <h2>
        <span style={{ color: darkBg ? "#fff" : "#0c0c0c" }}>
          {remainingWords}{" "}
        </span>
        <span style={{ color: "#00bbf0" }}>{lastWord}</span>
      </h2>
      {subtitle ? (
        <p style={{ color: darkBg ? "#fff" : "#0c0c0c" }}>{subtitle}</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SectionTitle;
