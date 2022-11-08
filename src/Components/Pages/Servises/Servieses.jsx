import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import styled from "styled-components";
import serviseicon from "../../assets/images/serviseicon.svg";
import ServsceCard from "./ServsceCard.js";
import webicon from "../../assets/images/web-design.gif";
import webdevlopm from "../../assets/images/web-development-design.gif";
import digitalMarkgin from "../../assets/images/digitalMarkgin.gif";
const Section = styled.section``;

const Servieses = (props) => {
  return (
    <Section className="sectionStart">
      <Container>
        <div className="icons">
          <img className="titleicon" src={serviseicon} alt="missing" />
        </div>
        <div className="section-title">
          <h1>Service</h1>
        </div>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <ServsceCard
              icon={webicon}
              title="Dev Design"
              dec="orem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae obcaecati, repellat deserunt, iusto qui nihil architecto temporibus alias officiis veniam? Sunt, eum? Reiciendis delectus, odit voluptas rem expedita hic"
            />
          </Grid>
          <Grid item md={4}>
            <ServsceCard
              icon={webdevlopm}
              title="web development"
              dec="orem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae obcaecati, repellat deserunt, iusto qui nihil architecto temporibus alias officiis veniam? Sunt, eum? Reiciendis delectus, odit voluptas rem expedita hic
              repellat deserunt, iusto qui nihil architecto temporibusrepellat deserunt, iusto qui nihil architecto temporibusrepellat deserunt, iusto qui nihil architecto temporibus"
            />
          </Grid>
          <Grid item md={4}>
            <ServsceCard
              icon={digitalMarkgin}
              title="digital marketing"
              dec="orem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae obcaecati, repellat deserunt, iusto qui nihil architecto temporibus alias officiis veniam? Sunt, eum? Reiciendis delectus, odit voluptas rem expedita hicrepellat deserunt, iusto qui nihil architecto temporibusrepellat deserunt, iusto qui nihil architecto temporibusrepellat deserunt, iusto qui nihil architecto temporibusrepellat deserunt, iusto qui nihil architecto temporibus"
            />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Servieses;
