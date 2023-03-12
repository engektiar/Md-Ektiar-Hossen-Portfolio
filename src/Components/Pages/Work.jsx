import { Grid } from "@mui/material";

import React, { useState } from "react";
import styled from "styled-components";
import WorkCard from "./WorkCard";
import daraz from "../assets/work/daraz.png";
import emazoon from "../assets/work/amazoon.png";
import adminpnale from "../assets/work/admin.png";
import cuda from "../assets/work/cuda.png";
import school from "../assets/work/schook.png";
import edus from "../assets/work/edu.png";
import acdick from "../assets/work/acdmick.png";
import login from "../assets/work/login.png";
import crud from "../assets/work/crud.png";
import { Container } from "@mui/system";

const Section = styled.section`
  .seeAll {
    display: flex;
    justify-content: center;
    margin: 25px;
  }
  .mylink {
    text-transform: none;
    cursor: pointer;
    text-decoration: none !important;
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
  .secoundpart {
    margin-top: 40px;
    margin-bottom: 50px;
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
  const detieals =
    "E-commerce, short for electronic commerce, refers to the buying and selling of goods or services over the internet.  E-commerce has become increasingly popular in recent years due to the growth of online shopping and the convenience it provides to customers. E-commerce businesses can range from small independent online stores to large multinational corporations.";

  const aboutAdmin =
    "An admin panel, also known as an administrative dashboard or control panel, is a web-based interface that allows authorized users to manage and monitor a website, application, or system. The admin panel is typically accessed through a login page that requires credentials such as a username and password.";
  const flogin =
    "Firebase Authentication is a service offered by Google that allows developers to add user authentication to their applications. It provides a secure and easy-to-use authentication system that enables users to sign up, sign in, and manage their account information.  ";

  const crudeabout =
    "CRUD stands for Create, Read, Update, and Delete operations. These are the basic operations that most applications require to interact with a database or API. In a React application, these operations can be performed using various methods and libraries";
  const cudadeatils =
    "A single page website is one that fits on a single page. Single page websites are fully loaded in the initial page load or page zones are replaced with new page fragments loaded from server on demand, making the experience more continuous and fluid for the user";
  const darazs = "Daraz e-commerce clone";
  const emazon = "amazon e-commerce clone";
  const admin = "Admin Panel  Design";
  const cudas = "cuda page  Design";
  const schools = "School web page";
  const edu = "Education web page";
  const user = "firebase Singup & Login ";
  const crude = "CRUD opersation ";
  const adminLink = "https://remarkable-sopapillas-98d9b9.netlify.app/";
  const loginlink = "https://joyful-rolypoly-dc6d4a.netlify.app/";
  const crudlink = "https://dulcet-manatee-b5d69e.netlify.app/";
  const amazoonLink = "https://tranquil-baklava-975022.netlify.app/";
  const darazLink = "https://grand-caramel-d04efc.netlify.app/";
  const cudaLink = "https://melodic-faun-0da612.netlify.app/";
  const edulink = "https://lighthearted-torrone-a456f0.netlify.app/";
  const schoolLink = "https://roaring-platypus-ac6406.netlify.app/";
  const acdlink = "https://unique-shortbread-f15355.netlify.app/";
  return (
    <Section className="sectionStart">
      <Container>
        <Title>
          My <span className="titleClore">Work</span>
        </Title>
        <Grid container spacing={0}>
          <Grid item md={4} className="secoundpart">
            <WorkCard
              workingimg={adminpnale}
              weblink={adminLink}
              detieals={aboutAdmin}
              title={admin}
              item1="React js"
              item2="sess"
              item3="Progressbar"
              item4="Google-Button"
              item5="Bootstrap"
            />
          </Grid>
          <Grid item md={4} className="secoundpart">
            <WorkCard
              workingimg={login}
              weblink={loginlink}
              detieals={flogin}
              title={user}
              item1="React js"
              item2="Bootstrap"
              item3="context api"
              item4="Routering"
              item5="Button"
            />
          </Grid>
          <Grid item md={4} className="secoundpart">
            <WorkCard
              workingimg={crud}
              weblink={crudlink}
              item1="React js"
              item2="Bootstrap"
              item3="context api"
              item4="Routering"
              title={crude}
              detieals={crudeabout}
              item5="Button"
            />
          </Grid>
        </Grid>

        <div>
          <Grid container spacing={0}>
            <Grid item md={4} className="secoundpart">
              <WorkCard
                workingimg={emazoon}
                weblink={amazoonLink}
                detieals={detieals}
                title={emazon}
                item1="React js"
                item2="material-ui"
                item3="carousel"
                item4="styled-components"
                item5="Button"
              />
            </Grid>
            <Grid item md={4} className="secoundpart">
              <WorkCard
                workingimg={daraz}
                weblink={darazLink}
                item1="React js"
                item2="material-ui"
                item3="carousel"
                item4="styled-components"
                item5="Button"
                title={darazs}
                detieals={detieals}
              />
            </Grid>
            <Grid item md={4} className="secoundpart">
              <WorkCard workingimg={cuda} weblink={cudaLink} item1="Html" item2="CSS" item3="javascript" item4="fonts-aswome" item5=" Icon" title={cudas} detieals={detieals} />
            </Grid>
            {/* 2nd part */}
            <Grid item md={4} className="secoundpart">
              <WorkCard workingimg={acdick} title={edu} weblink={edulink} item1="Html" item2="CSS" item3="javascript" item4="fonts-aswome" item5="Button" />
            </Grid>
            <Grid item md={4} className="secoundpart">
              <WorkCard workingimg={school} weblink={schoolLink} title={schools} item1="Html" item2="CSS" item3="javascript" item4="fonts-aswome" item5="Icon" />
            </Grid>
            <Grid item md={4} className="secoundpart">
              <WorkCard workingimg={edus} weblink={acdlink} title={edu} item1="Html" item2="CSS" item3="javascript" item4="fonts-aswome" item5="Icon" />
            </Grid>
          </Grid>
        </div>
      </Container>
    </Section>
  );
};

export default Work;
