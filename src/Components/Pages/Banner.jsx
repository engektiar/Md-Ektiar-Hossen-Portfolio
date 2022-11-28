import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React from "react";
import baner from "../assets/images/bannerlogo.gif";
const Section = styled.section`
  margin: 0 auto ! !important;

  .bannerLeftSide {
    text-align: center;
  }
  .description {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: justify;
    margin-top: -30px;
  }
  .hadingTitle {
    width: auto;
    margin-top: 60px;
  }
  .bangerdesc {
    width: 460px;
    height: auto;
  }

  .name {
    color: #6d28d9;
  }
  .banner-image {
    height: 350px;
    width: 500px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  color: #333;
  font-weight: 600;
  letter-spacing: 5px;
  position: relative;

  text-transform: capitalize;
  &:after {
    position: absolute;
    content: "";
    width: 82%;
    height: 3px;
    background: #ea3a60;
    left: 9%;
    bottom: -18%;
  }
`;
const Bannerd = () => {
  return (
    <Section>
      <Grid container spacing={2}>
        <Grid item md={6} className="bannerLeftSide">
          <Title>
            <h4 className="hadingTitle">
              Hello! I am <span className="name">Md Ektiar Hossen</span>
            </h4>
          </Title>

          <div className="description">
            <p className="bangerdesc   ">
              I have completed my Diploma in CSE degree, Department of Computer Science and Engineering from Satkhira govt polytechnic Instituted. Then I completed a Bachelor of
              Science & Engineering at Sonargaon University. My keen interest in Computer and Engineering has enabled me to develop a good knowledge of computer programming C, C++,
              Java, HTML, CSS, Bootstrap, JavaScript, React Js, SQL, MySQL, safety, and IT. I can design any type of website.
            </p>
          </div>
        </Grid>
        <Grid item xs={6}>
          <img className="banner-image" src={baner} alt="" />
        </Grid>
      </Grid>
    </Section>
  );
};

export default Bannerd;
