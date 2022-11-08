import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import styled from "styled-components";
import Progressbars from "../ProgressBar/Progressbar";
import HTML from "../../Components/Images/skillicon/HTML.png";
import css from "../../Components/Images/skillicon/css.png";
import Bootstrap from "../../Components/Images/skillicon/Bootstrap.png";
import javascript from "../../Components/Images/skillicon/javascript.png";
import Reactjs from "../../Components/Images/skillicon/Reactjs.png";
import matrialui from "../../Components/Images/skillicon/matrialui.png";
import GitHub from "../../Components/Images/skillicon/GitHub.png";
const Section = styled.section`
  .progressbar {
  }
  .protitle {
    font-size: 20px;
    font-weight: 700;
  }
  .logotile {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }
  .logo {
    height: 20px;
    width: 25px;
    margin-left: 5px;
  }
`;
const Skill = () => {
  return (
    <Section className="sectionStart">
      <Container>
        <div className="section-title">
          <h1>
            Professional <span className="titleClore">skills</span>
          </h1>
        </div>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <div className="progressbar">
              <div className="logotile">
                <p className="protitle">Html</p>
                <img className="logo" src={HTML} alt="" />
              </div>
              <Progressbars percentage="90" pathColor="#DAA520" textColor="#000000f6" />
            </div>
          </Grid>
          <Grid item md={3}>
            <div className="progressbar">
              <div className="logotile">
                <p className="protitle">css</p>
                <img className="logo" src={css} alt="" />
              </div>
              <Progressbars percentage="80" pathColor="#DAA520" textColor="#000000f6" />
            </div>
          </Grid>
          <Grid item md={3}>
            <div className="progressbar">
              <div className="logotile">
                <p className="protitle">Bootstrap</p>
                <img className="logo" src={Bootstrap} alt="" />
              </div>
              <Progressbars percentage="80" pathColor="#DAA520" textColor="#000000f6" />
            </div>
          </Grid>
          <Grid item md={3}>
            <div className="progressbar">
              <div className="logotile">
                <p className="protitle">javascript</p>
                <img className="logo" src={javascript} alt="" />
              </div>
              <Progressbars percentage="60" pathColor="#DAA520" textColor="#000000f6" />
            </div>
          </Grid>
          <Grid item md={3}>
            <div className="progressbar">
              <div className="logotile">
                <p className="protitle">React-js</p>
                <img className="logo" src={Reactjs} alt="" />
              </div>
              <Progressbars percentage="50" pathColor="#DAA520" textColor="#000000f6" />
            </div>
          </Grid>

          <Grid item md={3}>
            <div className="progressbar">
              <div className="logotile">
                <p className="protitle">matrial-ui</p>
                <img className="logo" src={matrialui} alt="" />
              </div>
              <Progressbars percentage="80" pathColor="#DAA520" textColor="#000000f6" />
            </div>
          </Grid>

          <Grid item md={3}>
            <div className="progressbar">
              <div className="logotile">
                <p className="protitle">GitHub</p>
                <img className="logo" src={GitHub} alt="" />
              </div>
              <Progressbars percentage="70" pathColor="#DAA520" textColor="#000000f6" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Skill;