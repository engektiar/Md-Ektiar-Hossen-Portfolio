import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React from "react";
import baner from "../assets/images/bannerlogo.gif";
const Section = styled.section`
  text-align: center;
  margin: 0 auto;
  height: 350px;

  .bannerLeftSide {
    text-align: center;
  }
  .bangerdesc {
    background-color: #fff;
    width: 460px;
    margin-left: 60px;
    margin-top: -20px;
  }
  .name {
    color: #6d28d9;
  }
  .banner-image {
    height: 300px;
    width: 500px;
  }
`;
const Bannerd = () => {
  return (
    <Section>
      <Grid container spacing={2}>
        <Grid item md={6} className="bannerLeftSide">
          <h4 className="hadingTitle">
            {" "}
            Hello! I am <span className="name">Md Ektiar Hossen</span>
          </h4>
          <div>
            <p className="bangerdesc  textclor">
              I have completed my Diploma in CSE degree, Department of Computer Science and Engineering from Satkhira govt polytechnic Instituted. Then I completed a Bachelor of
              Science & Engineering at Sonargaon University. My keen interest in Computer and Engineering has enabled me to develop a good knowledge of computer programming C, C++,
              Java, HTML, CSS, Bootstrap, JavaScript, React Js, SQL, MySQL, safety, and IT. I can design any type of website. Currently working with a software team.
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
