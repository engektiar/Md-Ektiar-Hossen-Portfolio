import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import styled from "styled-components";

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
    width: 33%;
    height: 3px;
    background: #ea3a60;
    left: 33%;
    bottom: -18%;
  }
`;
const Saction = styled.section`
  padding-bottom: 30px;
  padding: 20px;
  .whyarea {
    padding: 20px;
  }
  .whytext {
    font-size: 16px;
    text-align: justify;
    color: #333;
  }
  .whyme {
    margin: auto;
    position: relative;
    z-index: 0;

    border-radius: 10px;
    overflow: hidden;
    padding: 2rem;

    &::before {
      content: "";
      position: absolute;
      z-index: -2;
      left: -50%;
      top: -50%;
      width: 200%;
      height: 200%;
      background-color: #399953;
      background-repeat: no-repeat;
      background-size: 50% 50%, 50% 50%;
      background-position: 0 0, 100% 0, 100% 100%, 0 100%;
      background-image: linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);
      animation: rotate 4s linear infinite;
    }

    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      left: 6px;
      top: 6px;
      width: calc(100% - 12px);
      height: calc(100% - 12px);
      background: white;
      border-radius: 5px;
      animation: opacityChange 3s infinite alternate;
    }
  }
`;
const WhyHireMe = () => {
  return (
    <Saction>
      <Container>
        <Title>
          Why <span className="titleClore ">Hire Me ?</span>
        </Title>
        <Grid container>
          <Grid item md={9} sm={12} xs={12} className="whyme">
            <div className="whyarea">
              <p className="whytext">
                As a Front-End Engineer specializes in creating visually appealing and user-friendly interfaces for websites and applications. Hiring one can help you improve the
                user experience of your product and make it more attractive to potential customers. <br />
                You should hire me for this position because of my proven ability to build efficient front-end user interfaces in line with modern best practices. I am experienced
                in using JavaScript, as well as the React framework, to develop front-end applications.
              </p>
              <p>
                Faster Development: Front-End Engineers are skilled in using modern tools and technologies to create responsive and efficient websites and applications. By hiring
                me, you can speed up the development process and get your product to market faster. <br />
                Better Performance: A well-designed front end can significantly improve the performance of your website or application. Front-End Engineers are knowledgeable in
                optimizing code and implementing best practices to ensure the best possible performance.
              </p>
              <p>
                Stay Current with Technology: Front-End technologies are constantly evolving, and staying up-to-date can be challenging. Hiring me Front-End Engineer can ensure
                that your product is using the latest technologies and trends, which can help you stay competitive. <br />
                Overall, hiring me Front-End Engineer can help you create a better user experience, improve development speed and performance, and stay current with technology
                trends.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Saction>
  );
};

export default WhyHireMe;
