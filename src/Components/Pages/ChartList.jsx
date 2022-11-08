import { Container } from "@mui/system";
import React from "react";
import { Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar } from "recharts";
import styled from "styled-components";
import c2 from "../Images/BgImg/bg.jpg";

const Section = styled.section`
  .skialbar {
    background: url(${c2}) no-repeat right;
    background-size: cover;
    background-position: center;
    min-height: 600px;
    position: relative;
    z-index: 0;
    display: grid;
    align-items: center;
    margin-top: -50px;
  }
  .title {
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
  }
  .tspan {
    color: red;
  }
`;
const ChartList = () => {
  const data = [
    { name: "HTML", users: 95 },
    { name: "CSS", users: 90 },
    { name: "SCSS", users: 85 },
    { name: "BOOTSTRAP", users: 80 },
    { name: "JAVASCRIPT", users: 70 },
    { name: "REACT JS", users: 50 },
  ];

  return (
    <Section>
      <h1 className="title">My Skill</h1>
      <div className="skialbar">
        <Container>
          <div style={{ textAlign: "center" }}>
            <div className="App">
              <BarChart
                width={1100}
                height={400}
                data={data}
                margin={{
                  top: 5,
                  right: 20,
                  left: 25,
                  bottom: 5,
                }}
                barSize={25}
              >
                <XAxis dataKey="name" scale="point" padding={{ left: 5, right: 5 }} />
                <YAxis />
                <Tooltip />

                <CartesianGrid strokeDasharray="3" />
                <Bar className="bardesign" dataKey="users" fill="black" background={{ fill: "#eee" }} />
              </BarChart>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default ChartList;
