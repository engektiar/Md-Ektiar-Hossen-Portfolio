import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import styled from "styled-components";

import ServsceCard from "./ServsceCard.js";
import webicon from "../../assets/images/web-design.gif";
import webdevlopm from "../../assets/images/web-development-design.gif";
import digitalMarkgin from "../../assets/images/digitalMarkgin.gif";
const Section = styled.section``;

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  color: #333;
  font-weight: 600;
  letter-spacing: 5px;
  position: relative;
  margin: 60px 0px;
  text-transform: capitalize;
  &:after {
    position: absolute;
    content: "";
    width: 20%;
    height: 3px;
    background: #ea3a60;
    left: 40%;
    bottom: -18%;
  }
`;
const Servieses = (props) => {
  return (
    <Section className="sectionStart">
      <Container>
        <Title>Service</Title>
        {/* <div className="icons">
          <img className="titleicon" src={serviseicon} alt="missing" />
   
   </div> */}

        <Grid container spacing={1}>
          <Grid item md={4}>
            <ServsceCard
              icon={webicon}
              title="Dev Design"
              dec="Web design is the process of planning, conceptualizing, and arranging content online. Today, designing a website goes beyond aesthetics to include the website's overall functionality. Web design also includes web apps, mobile apps, and user interface design."
            />
          </Grid>
          <Grid item md={4}>
            <ServsceCard
              icon={webdevlopm}
              title="web development"
              dec="Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services."
            />
          </Grid>
          <Grid item md={4}>
            <ServsceCard
              icon={digitalMarkgin}
              title="digital marketing"
              dec="Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channe
              "
            />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Servieses;
