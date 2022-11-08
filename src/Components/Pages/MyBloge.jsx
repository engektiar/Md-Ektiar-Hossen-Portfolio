import { Grid } from "@mui/material";
import React from "react";
import Container from "@mui/material/Container";
import styled from "styled-components";

import bging from "../Images/MyblogImg/blog1.jpg";
import blog from "../Images/MyblogImg/blog-02.jpg";
import bgsing from "../Images/MyblogImg/blog-03.jpg";
import Button from "@mui/material/Button";
import MYBloCard from "./MyCard";

const Section = styled.section`
  background: #ecf0f3;
  padding-bottom: 50px;
  cursor: pointer;
  .cardbutton {
    display: flex;
    justify-content: right;
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
function MYblog(props) {
  return (
    <Section>
      <Container>
        <Title>My Blog</Title>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <MYBloCard cardimg={bging} />
          </Grid>
          <Grid item md={4}>
            <MYBloCard cardimg={blog} />
          </Grid>
          <Grid item md={4}>
            <MYBloCard cardimg={bgsing} />
          </Grid>

          <Grid item md={12}>
            <div className="cardbutton">
              <Button variant="contained" color="success">
                see More
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default MYblog;
