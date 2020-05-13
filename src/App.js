import React, { useState } from "react";
import "./styles.css";

const boardsData = [{ id: 1, name: "board1" }, { id: 2, name: "board2" }];

const listsData = {
  "1": [
    { id: 1, name: "to do" },
    { id: 2, name: "doing" },
    { id: 3, name: "done" }
  ],
  "2": [
    { id: 1, name: "important" },
    { id: 2, name: "urgent" },
    { id: 3, name: "no important" },
    { id: 4, name: "no urgent" }
  ]
};

export default function App() {
  const [boards, setBoards] = useState(boardsData);
  const [board, setBoard] = useState("");
  const [lists, setLists] = useState([]);
  const [list, setList] = useState("");

  function handleBoardsChange(e) {
    const board = e.target.value;
    let lists = [];

    setBoard(board);

    if ("" !== board) {
      lists = listsData[board];
    }
    setLists(lists);
    setList("");
  }

  function handleListChange(e) {
    setList(e.target.value);
  }

  return (
    <div className="App">
      <h1>Dependent Selects in React with Local Data</h1>
      <select key="boards" value={board} onChange={handleBoardsChange}>
        <option key="empty" value="" />
        {boards.map(board => (
          <option key={board.id} value={board.id}>
            {board.name}
          </option>
        ))}
      </select>
      <br />
      <select key="lists" value={list} onChange={handleListChange}>
        <option key="empty" value="" />
        {lists.map(list => (
          <option key={list.id} value={list.id}>
            {list.name}
          </option>
        ))}
      </select>
    </div>
  );
}
