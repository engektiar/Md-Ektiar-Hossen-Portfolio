import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import styled from "styled-components";
import ServesData from "./ServesData.json";

import webDesignImg from "../../assets/images/web-design.gif";

const bull = (
  <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
    •
  </Box>
);
const Section = styled.section`
  .CardMain {
    border-radius: 10px;
    border: 1px solid #3b4251;
    box-shadow: 0 2px 20px 1px rgb(0 0 0 / 49%);
    padding: 10px;
  }
  .serviseTitle {
    text-align: center;
  }
  .readMore {
    color: red;
    cursor: pointer;
  }
  .carddetils {
    margin-bottom: -15px;
  }
`;
const ServsceCard = (props) => {
  const { icon, title, dec } = props;
  const [more, setmore] = useState(false);
  return (
    <Section>
      <Card className="CardMain" sx={{ minWidth: 275 }}>
        <CardContent className="content">
          <div className="serviseTitle">
            <img className="service-icon" src={icon} alt="missing Iamges" />
            <Typography className="subtitle" sx={{ fontSize: 25, color: "#0f1629" }} gutterBottom>
              {title}
            </Typography>
          </div>
          <Typography sx={{ mb: 1.5 }} color="text.secondary" className="carddetils">
            <p hidden={more != 0} className="textclor">
              {dec.slice(0, 150)}
            </p>

            <p hidden={more != 1} className="textclor">
              {dec}
            </p>
            <span onClick={() => setmore(!more)} className="readMore">
              Read More
            </span>
          </Typography>
        </CardContent>
      </Card>
    </Section>
  );
};

export default ServsceCard;
