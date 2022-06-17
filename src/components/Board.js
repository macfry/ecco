import React from "react";
import Pieces from "./Pieces";
import "./Board.css";

const Board = ({fen}) => {
  const currentMove = (fenString) => {
    const color = fenString.split(" ")[1];
    if (color) {
        return `${color === "w" ? "Wtite" : "Black"} move`;
    } else {
        return null;
    }
  };

  const emptySlot = (arr, repeat) => {
    for (let i = 0; i < repeat; i++) {
      arr.push(null);
    }
  };

  const defineRow = (row) => {
    const letters = row.split("");
    const rowTmp = [];

    letters.forEach((letter) => {
      if (letter >= "0" && letter <= "9") {
        emptySlot(rowTmp, parseInt(letter));
      } else {
        rowTmp.push(letter);
      }
    });

    return rowTmp;
  };

  const setPieces = (fenString) => {
    const positionsArr = fenString.split(" ")[0].split("/");
    let board = [];
    positionsArr.forEach((row) => {
      board = [...board, ...defineRow(row)];
    });
    return board;
  };

  return (
    <div className="wrapper">
        { currentMove(fen) && <p>{ currentMove(fen) }</p>}
        <div className="chessboard">
        { setPieces(fen).map((letter, index) => (
            <div key={index} className="chessboard__field">
                <Pieces letter={letter} />
            </div>
        ))}
        </div>
  </div>);
};

export default Board;
