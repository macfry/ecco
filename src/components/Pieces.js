import React from "react";
import "./Pieces.css";

const Pieces = ({letter}) => {
    const pieces = [
      {symbol: "k", name: "Black King", html: "&#9812;"},
      {symbol: "q", name: "Black Queen", html: "&#9813;"},
      {symbol: "r", name: "Black Rook", html: "&#9814;"},
      {symbol: "b", name: "Black Bishop", html: "&#9815;"},
      {symbol: "n", name: "Black Knight", html: "&#9816;"},
      {symbol: "p", name: "Black Pawn", html: "&#9817;"},
      {symbol: "K", name: "White King", html: "&#9818;"},
      {symbol: "Q", name: "White Queen", html: "&#9819;"},
      {symbol: "R", name: "White Rook", html: "&#9820;"},
      {symbol: "B", name: "White Bishop", html: "&#9821;"},
      {symbol: "N", name: "White Knight", html: "&#9822;"},
      {symbol: "P", name: "White Pawn", html: "&#9823;"},
    ];

    const getIcon = (letter) => {
      const piece = pieces.find((item) => item.symbol === letter);
      return piece?.html || "";
    };

    const iconColor = (letter) => {
      if (letter) {
        return letter === letter.toUpperCase() ? "light" : "dark";
      } else {
        return '';
      }
    };

    return (
      <i className={`icon ${iconColor(letter)}`} dangerouslySetInnerHTML={{ __html: getIcon(letter) }}></i>
    );
};

export default Pieces;
