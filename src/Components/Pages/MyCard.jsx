import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import React from "react";
import styled from "styled-components";

const CardSection = styled.section`
  .cardarea {
    padding: 10px;
    border-radius: 20px;
  }
  .card {
    height: 400px;
    box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
    border-radius: 20px;
  }
  .cardimg {
    border-radius: 20px 0px 0px 0px;
    width: 100%;
    transition: var(--transition);
    height: auto;
    object-fit: cover;
  }

  .cardTitle {
    display: flex;
    justify-content: space-between;
    margin-top: -10px;
    margin-bottom: 10px;
  }
  .carddesc {
    font-size: 24px;
    font-weight: 600;
  }
  .carddesc:hover {
    color: red;
  }
`;
function MYBloCard(props) {
  return (
    <CardSection>
      <div className="cardarea">
        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia component="img" image={props.cardimg} alt="green iguana" className="cardimg" />
          <CardContent>
            <div className="cardTitle">
              <div>
                <span>canada</span>
              </div>
              <div>
                <span>canada</span>
              </div>
            </div>
            <div className="carddesc">T-shirt design is the part of design</div>
          </CardContent>
        </Card>
      </div>
    </CardSection>
  );
}

export default MYBloCard;
