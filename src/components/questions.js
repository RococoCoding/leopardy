import React, { useState } from "react";
import styled from "styled-components";

const StyledQ = styled.div`
  width: 16%;
  margin-bottom: .6%;
  font-size: 1.7vw;
  div {
    border: 1px solid black;
  }
  h3 {
    padding: 4%;
    font-weight: bold;
    display: none;
    text-transform: capitalize;
    margin-bottom: 4%;
  }
  p {
    padding: 4%;
    display:none;
  }
  img {
    display: none;
    width: 100%;
  }
  .display {
    display: inherit;
  }
`;

export default function Question(props) {
  const [display, setDisplay] = useState(false);

  const { question, category, value, setPopup, idx, getQuestion } = props;

  let numVal = Number(value);
  let img = "";
  let alt = "";
  function sortPictures() {
    if (numVal <= 200) {
      img = "assets/baby.jpg";
      alt = "baby leopard";
    }
    else if (numVal <= 400) {
      img = "assets/lick.jpg";
      alt = "leopard mlem";
    }
    else if (numVal <= 600) {
      img = "assets/lookin-at-you.jpg";
      alt = "leopard looking at camera with mouth open";
    }
    else if (numVal <= 800) {
      img = "assets/snow-leopard.jpg";
      alt = "snow leopard with ears drawn back and teeth out";
    }
    else {
      img = "assets/rawr.jpg";
      alt = "leopard with scrunched up snout and mouth open";
    }
  }

  function selectQuestion(e) {
    if (!display) {
      setDisplay(true);
      setPopup(true);
      getQuestion(idx)
      console.log(e.target.parentNode.classList[0]);
    }
  }

  sortPictures();
  return (
    <StyledQ id={idx} onClick={e => { selectQuestion(e) }}>
      <div className={idx}>
        <img
          src={display ? "" : `${img}`}
          alt={display ? "" : alt}
          className={display ? "" : "display"}
        />
        <h3 className={display ? "display" : ""}>{category}</h3>
        <p className={display ? "display" : ""}>{question}</p>
      </div>
    </StyledQ>
  );
}
