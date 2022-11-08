import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React from "react";
import baner from "../assets/images/bannerlogo.gif";
const Section = styled.section`
  margin: 0 auto;
  margin-bottom: 50px;
  .banner-image {
    margin: 0 auto;
  }
  .banner-item {
    display: flex;
    align-items: center;
  }

  .banerTitle {
    display: block;
    text-align: center;
    line-height: 20px;
  }
  .titledec {
    width: 80%;
    margin-left: 80px;
  }
  .titledec p {
    line-height: 20px;
  }
`;
const Bannerd = () => {
  return (
    <Section>
      <div className="banerPart">
        <Grid container spacing={2} className="banner-item">
          <Grid item md={6}>
            <div className="banerTitle">
              <h1 className="hadingTitle">
                THECHLOG-<span className="titleClore">BD</span>
              </h1>
              <div className="titledec">
                <span className="subtitle">affordable Security Packages & Detailed </span>
                <p className="textclor ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At facilis quam fuga dolore obcaecati. Eos explicabo dicta sapiente? Cumque repellendus adipisci
                  repellatreiciendis ipsa eius ex voluptatum sunt, tenetur sed? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, ducimus. Rem, eum aut! Dolores,
                  nobis corporis est vitae voluptas distinctio harum rem laboriosam, maxime debitis provident quaerat tempora. Ducimus, sit.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={6}>
            <img className="banner-image" src={baner} alt="" />
          </Grid>
        </Grid>
      </div>
    </Section>
  );
};

export default Bannerd;
