import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import Cell from "./Cell";
import { clcWinner } from "../../helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setIsNext] = useState(true);
  const winner = clcWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setIsNext(!xIsNext);
  };
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setIsNext(true);
  };
  return (
    <div className="game-wrapper">
    <div className="game-name">Tictactoe Game</div>
      <Board cells={board} onClick={handleClick}></Board>
      <div className="game-instruct">Game that starts with an X</div>
      {winner&&<div className="game-winner">And winner is {winner}</div>  }
      <button className="game-reset" onClick={handleResetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default Game;
