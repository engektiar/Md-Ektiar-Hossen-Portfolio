import { Grid, Container, Link } from "@mui/material";
import styled from "styled-components";
import { AiFillLinkedin, AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { SiHackerrank } from "react-icons/si";
import { FaDownload } from "react-icons/fa";

const Section = styled.section`
  & .footer-socials {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 10px;
    display: flex;

    & a {
      margin: 0;
      font-size: 30px;
      color: #000000;
      margin-right: 15px;
      cursor: pointer;
      &:hover {
        color: #fbd7df;
      }
    }
  }
`;

const Social = () => {
  return (
    <Section>
      <ul className="footer-socials">
        <li className="list-inline-item">
          <Link to="#">
            <AiFillLinkedin />
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="#">
            <AiFillFacebook />
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="#">
            <AiFillGithub />
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="#">
            <FaDownload />
          </Link>
        </li>
      </ul>
    </Section>
  );
};
export default Social;
