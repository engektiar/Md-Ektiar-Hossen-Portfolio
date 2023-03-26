import React from "react";
import Container from "@mui/material/Container";
import styled from "styled-components";
import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
const Section = styled.section`
  background: #0e0d0d;
  color: #fff;
  height: auto;
  padding-bottom: 60px;
  margin-top: 60px;
  .footerarea {
    margin-top: 20px;
  }
  .footertitle {
    text-transform: uppercase;
  }
  .info {
    margin-top: 30px;
  }
  .email {
    margin-top: -15px;
  }
  .footertext {
    text-align: justify;
    font-size: 14px;
  }
  .socialicon {
    margin-left: 20px;
    font-size: 30px;
    color: #ffff;
  }
  .fasticon {
    margin-left: -5px;
  }
`;
function Footer(props) {
  return (
    <Section>
      <Container>
        <Grid container spacing={4}>
          <Grid item md={4}>
            <div className="footerarea">
              <h5 className="footertitle">CONTACT</h5>
              <div className="info">
                <p>
                  <span>Phone :</span>+8801628414116
                </p>
                <p className="email">
                  <span>Gmail:</span> eng.ektiar@gmail.com
                </p>
                <span>Adderss</span>
                <p>176/3,Road, Jomider Goli,West Rampura,P.P:1219,Dhaka, Bangladesh </p>
              </div>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className="footerarea">
              <h5 className="footertitle">TEXT WIDGET</h5>
              <div className="info">
                <p className="footertext">
                  User experience: Front-end developers are responsible for building the user interface (UI) and ensuring that it is user-friendly and easy to navigate. A good user
                  experience is essential to keep users engaged and coming back to the website or application.
                </p>
                <p className="footertext">
                  Mobile responsiveness: With more users accessing the internet through mobile devices, it's crucial to have a website or application that is responsive and can
                  adapt to different screen sizes. Front-end developers can ensure that the website or application is mobile-friendly and responsive.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className="footerarea">
              <h5 className="footertitle">FOLLOW ME</h5>
              <div className="info">
                <a href="https://www.facebook.com/profile.php?id=100004813563045">
                  <FacebookIcon className="socialicon fasticon" />
                </a>
                <a href="https://twitter.com/EktiarHossen">
                  <TwitterIcon className="socialicon" />
                </a>
                <a href="http://wa.me/01628414116">
                  <WhatsAppIcon className="socialicon" />
                </a>
                <a href="https://github.com/engektiar">
                  <GitHubIcon className="socialicon" />
                </a>
                <a href="https://www.instagram.com/md_ektair/">
                  <InstagramIcon className="socialicon" />
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default Footer;
