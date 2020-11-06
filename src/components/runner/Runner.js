import React from 'react';
import styled from 'styled-components';

const Track = styled.div`
  position: relative;
  overflow: hidden;
  width: 800px;
  height: 30px;
  /* background: #c1c1c1; */
  margin: 5px auto;
  @media only screen and (max-width: 900px) { width: 600px; }
  @media only screen and (max-width: 620px) { width: 400px; }
  @media only screen and (max-width: 420px) { width: 300px; }
  @media only screen and (max-width: 320px) { width: 250px; }
`;

const Shape = styled.span`
  position: absolute;
  left: 0;
  background: #9C1003;
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  border-radius: 3px;
  top: 0;
  cursor: pointer;
  x-transition: all 0.5s ease-in-out;
  animation: run 10s infinite;
  &:hover {
    animation-play-state: paused;
    background: #D21502;
  }
  @keyframes run {
    0% { left: 0; }
    50% { left: 700px; }
    100% { left: 0; }
  }
  @media only screen and (max-width: 900px) {
    @keyframes run {
      0% { left: 0; }
      50% { left: 500px; }
      100% { left: 0; }
    }
  }
  @media only screen and (max-width: 620px) {
    animation: run 8s infinite;
    @keyframes run {
      0% { left: 0; }
      50% { left: 300px; }
      100% { left: 0; }
    }
  }
  @media only screen and (max-width: 420px) {
    animation: run 6s infinite;
    @keyframes run {
      0% { left: 0; }
      50% { left: 200px; }
      100% { left: 0; }
    }
  }
  @media only screen and (max-width: 320px) {
    animation: run 5s infinite;
    @keyframes run {
      0% { left: 0; }
      50% { left: 150px; }
      100% { left: 0; }
    }
  }
`;

const Runner = ({ name, setSubreddit }) => {
  return (
    <Track>
      <Shape onClick={ () => { setSubreddit(name) } }>{ name }</Shape>
    </Track>
  );
}

export default Runner;
