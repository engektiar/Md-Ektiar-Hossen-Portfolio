import * as React from "react";

import { Container } from "@mui/system";
import styled from "styled-components";

const Cardsection = styled.div`
  .card {
    border-radius: 10px;
    border: 1px solid #3b4251;
    box-shadow: 0 2px 20px 1px rgb(0 0 0 / 49%);
    width: 100%;
    padding: 10px;
  }
  .cardMedia {
    height: 250px;
    overflow-y: scroll;
  }

  .cardimg {
    width: 300px;
  }
  .cardequment {
    margin-top: 10px;
  }
  .cardequment span {
    background: #ffe4e6;
    margin: 4px;
    color: #ab2c4e;
    font-weight: 700px;
  }
`;
const WorkCard = (props) => {
  return (
    <Cardsection>
      <Container>
        <div className="card">
          <div className="cardMedia">
            <img className="cardimg" src={props.workingimg} alt="" />
          </div>
          <div className="cardequment">
            <span>Html</span>
            <span>CSS</span>
            <span>Html</span>
            <span>Html</span>
            <span>Html</span>
          </div>
          <div className="cardtitle">
            <h2 className="subtitle">This is card title </h2>
          </div>
          <div className="cardtitle">
            <p className="textclor">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque unde quo ducimus et, accusantium cupiditate vitae assumenda alias, ratione adipisci error
              exercitationem minus quis itaque repellat. Molestias totam odio veniam!
            </p>
          </div>
        </div>
      </Container>
    </Cardsection>
  );
};

export default WorkCard;
