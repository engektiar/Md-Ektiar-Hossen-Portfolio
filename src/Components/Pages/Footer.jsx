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
  background: #11141b;
  color: #ffff;
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
        <div>
          <Grid container spacing={6}>
            <Grid item xs={4}>
              <div className="footerarea">
                <h5 className="footertitle">CONTACT</h5>
                <div className="info">
                  <p>
                    <span>Phone :</span>+8801628414116
                  </p>
                  <p className="email">
                    <span>Gmail:</span> <a href="#">eng.ektiar@gmail.com</a>
                  </p>
                  <span>Adderss</span>
                  <p>176/3,Road, Jomider Goli,West Rampura,P.P:1219,Dhaka, Bangladesh </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="footerarea">
                <h5 className="footertitle">TEXT WIDGET</h5>
                <div className="info">
                  <p className="footertext">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, tempore cupiditate itaque nihil qui modi facilis magnam quod natus non a animi incidunt unde
                    sint vitae odit nobis quae fugiat!
                  </p>
                  <p className="footertext">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, tempore cupiditate itaque nihil qui modi facilis magnam quod natus non a animi incidunt unde
                    sint vitae odit nobis quae fugiat!
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="footerarea">
                <h5 className="footertitle">FOLLOW ME</h5>
                <div className="info">
                  <a href="#">
                    <FacebookIcon className="socialicon fasticon" />
                  </a>
                  <a href="#">
                    <TwitterIcon className="socialicon" />
                  </a>
                  <a href="#">
                    <WhatsAppIcon className="socialicon" />
                  </a>
                  <a href="#">
                    <GitHubIcon className="socialicon" />
                  </a>
                  <a href="#">
                    <InstagramIcon className="socialicon" />
                  </a>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Section>
  );
}

export default Footer;
