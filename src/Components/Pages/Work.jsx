import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import styled from "styled-components";
import WorkCard from "./WorkCard";
import workimg from "../assets/images/workimg.png";
import work2 from "../assets/images/work2.png";

const Section = styled.section`
  .seeAll {
    display: flex;
    justify-content: center;
    margin: 25px;
  }
  .btnseeall {
    padding: 15px 50px;
    background: #b11d3d;
    border: none;
    color: #fff;
    text-transform: capitalize;
    font-size: 20px;
    border-radius: 5px;
  }
`;

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

const Work = (props) => {
  return (
    <Section className="sectionStart">
      <Container>
        <Title>
          My <span className="titleClore">Work</span>
        </Title>

        <Grid container spacing={0}>
          <Grid item md={4}>
            <WorkCard workingimg={workimg} using="Hrml" />
          </Grid>
          <Grid item md={4}>
            <WorkCard workingimg={work2} />
          </Grid>
          <Grid item md={4}>
            <WorkCard workingimg={work2} />
          </Grid>
          <Grid item md={12}>
            <div className="seeAll">
              <button className="btnseeall">See all</button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Work;
