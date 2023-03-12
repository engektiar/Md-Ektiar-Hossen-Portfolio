import React, { useState } from "react";
import { Container } from "@mui/system";
import styled from "styled-components";

const Cardsection = styled.div`
  .card {
    border-radius: 10px;
    border: 1px solid #3b4251;
    box-shadow: 0 2px 20px 1px rgb(0 0 0 / 49%);
    width: 100%;
    padding: 15px;
  }
  .cardMedia {
    height: 250px;
    overflow-y: scroll;
  }
  .mylink {
    text-transform: none;
    cursor: pointer;
    text-decoration: none !important;
  }

  .cardimg {
    width: 300px;
  }
  .cardequment {
    margin-top: 10px;
    height: 50px;
  }
  .item {
    background: #ffe4e6;
    margin: 4px;
    color: #333;
    text-transform: capitalize;
    font-weight: 700px;
    border-radius: 20px;
    padding: 0 10px;
    line-height: 30px;
    width: 100%;
  }
  .subtitle {
    text-transform: capitalize;
  }
  .read {
    color: red;
    cursor: pointer;
    text-transform: capitalize;
  }
`;
const WorkCard = ({ workingimg, weblink, item1, item2, item3, item4, title, detieals, item5 }) => {
  return (
    <>
      <Cardsection>
        <Container>
          <div className="card">
            <a href={weblink} className="mylink">
              <div className="cardMedia">
                <img className="cardimg" src={workingimg} alt="missing" />
              </div>
            </a>
            <div className="cardequment">
              <span className="item">{item1}</span>
              <span className="item">{item2}</span>
              <span className="item"> {item3}</span>
              <span className="item">{item4}</span>
              <span className="item">{item5}</span>
            </div>
            <div className="cardtitle">
              <h2 className="subtitle">{title}</h2>
            </div>

            <div className="cardtitle">
              {/* <p hidden={more != 0} className="textclor">
                {detieals.slice(0, 150)}
              </p>
              <p hidden={more != 1} className="textclor">
                {detieals}
              </p>
              <span onClick={() => setmore(!more)} className="read">
                read more
              </span> */}
            </div>
          </div>
        </Container>
      </Cardsection>
    </>
  );
};

export default WorkCard;
