import React from "react";
import { Grid } from "@mui/material";
import baner from "./Banner";
import "./banner.scss";

const Bannerd = () => {
  return (
    <Grid container spacing={2} className="banner-item">
      <Grid item md={6}>
        <div className="banerdescriptom">
          <h3 className="hadingTitle">
            I am <span className="titleClore">Md Ektiar Hossen</span>
          </h3>
          <div className="titledec">
            <p className="textclor ">
              I have completed my Diploma in CSE degree, Department of Computer Science and Engineering from Satkhira govt polytechnic Instituted. Then I completed a Bachelor of
              Science & Engineering at Sonargaon University. My keen interest in Computer and Engineering has enabled me to develop a good knowledge of computer programming C, C++,
              Java, HTML, CSS, Bootstrap, JavaScript, React Js, SQL, MySQL, safety, and IT. I can design any type of website. Currently working with a software team.
            </p>
          </div>
        </div>
      </Grid>
      <Grid item md={6}>
        <img className="banner-image" src={baner} alt="" />
      </Grid>
    </Grid>
  );
};

export default Bannerd;
