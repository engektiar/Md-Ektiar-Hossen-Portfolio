import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React from "react";
import styled from "styled-components";

const Circlebar = styled.div`
  /* .CircularProgressbar-path {
    stroke: green;
  }
  .CircularProgressbar-trail {
    stroke: #ddd2d2;
  }
  .CircularProgressbar-text {
    fill: #333;
  }*/
  /* .CircularProgressbar-background {
    fill: green;
  } */
  .progressbar {
    height: 160px;
    margin-top: 10px;
  }
`;
function Progressbars({ percentage, textColor, pathColor }) {
  return (
    <Circlebar>
      <CircularProgressbar
        className="progressbar"
        styles={{
          text: {
            // Text color
            fill: `${textColor}`,
            fontSize: "20px",
          },
          path: {
            // Path color
            stroke: `${pathColor}`,
          },
        }}
        value={percentage}
        text={`${percentage}%`}
      />
    </Circlebar>
  );
}

export default Progressbars;
