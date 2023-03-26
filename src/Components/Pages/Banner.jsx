import styled from "@emotion/styled";
import { Box, Grid, Container } from "@mui/material";
import React from "react";
import baner from "../assets/images/bannerlogo.gif";

const Section = styled.section`
  padding: 20px;
  padding-bottom: 30px;
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
    margin-top: 90px;
    font-size: 30px;
  }
  .bangerdesc {
    font-size: 18px;
    height: auto;
    text-align: justify;
  }
  .banerleftside {
    margin: 0 auto;
  }
  .banerimage {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .name {
    color: #6d28d9;
  }
  .banner-image {
    height: 350px;
    width: 500px;
  }
`;

const Banner = () => {
  return (
    <Section id="Home">
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <div className="banerleftside">
                <h4 className="hadingTitle">
                  HELLO ! I AM <span className="name">MD EKTIAR HOSSEN</span>
                </h4>

                <p className="bangerdesc">
                  I have completed my Diploma in CSE degree, Department of Computer Science and Engineering from Satkhira govt polytechnic Instituted. Then I completed a Bachelor
                  of Science & Engineering at Sonargaon University. My keen interest in Computer and Engineering has enabled me to develop a good knowledge of computer programming
                  C, C++, Java, HTML, CSS, Bootstrap, JavaScript, React Js, SQL, MySQL, safety, and IT. I can design any type of website.
                </p>
              </div>
            </Grid>
            <Grid item md={6}>
              <div className="banerimage">
                <img className="banner-image" src={baner} alt="missing" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Section>
  );
};

export default Banner;
