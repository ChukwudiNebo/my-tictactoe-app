import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";

import "./TicTac.css";

const TicTac = () => {
  const board = [
    ["", "", ""], //first row
    ["", "", ""], //second row
    ["", "", ""], //third row
  ];

  const [selectType, setSelectType] = useState(board); //X
  const [playerSelect, setPlayerSelected] = useState("");
  // const [win, setWin] = useState(0);
  const [win, setWin] = useState({
    X: 0,
    O: 0,
  });

  // const [playerUnselected, setPlayerUnSelected] = useState(setPlayerSelected);

  const Xtype = () => {
    setPlayerSelected("X");
  };
  const Otype = () => {
    setPlayerSelected("O");
  };

  const resetGame = () => {
    setSelectType([...board]);
    // toast("game has been reset");
  };

  const centerTop = () => {
    if (playerSelect) {
      const newBoard = [...selectType];

      if (newBoard[0][1]) {
        console.log("Sorry, you can't play here");
      } else {
        newBoard[0][1] = playerSelect;
        setSelectType(newBoard);
      }
    } else {
      console.log("Select a  player");
    }
  };

  const center = () => {
    if (playerSelect) {
      const newBoard = [...selectType];

      if (newBoard[1][1]) {
        console.log("Sorry, you can't play here");
      } else {
        newBoard[1][1] = playerSelect;
        setSelectType(newBoard);
        // setPlayerSelected(null);
      }
    } else {
      console.log("Select a  player");
    }
  };

  const centerLeftTop = () => {
    if (playerSelect) {
      const newBoard = [...selectType];

      if (newBoard[0][0]) {
        console.log("Sorry, you can't play here");
      } else {
        newBoard[0][0] = playerSelect;
        setSelectType(newBoard);
        // setPlayerSelected(null);
      }
    } else {
      console.log("Select a  player");
    }
  };
  const centerLeft = () => {
    if (playerSelect) {
      const newBoard = [...selectType];

      if (newBoard[1][0]) {
        console.log("Sorry, you can't play here");
      } else {
        newBoard[1][0] = playerSelect;
        setSelectType(newBoard);
        // setPlayerSelected(null);
      }
    } else {
      console.log("Select a  player");
    }
  };

  const bottomLeft = () => {
    if (playerSelect) {
      const newBoard = [...selectType];

      if (newBoard[2][0]) {
        console.log("Sorry, you can't play here");
      } else {
        newBoard[2][0] = playerSelect;
        setSelectType(newBoard);
        // setPlayerSelected(null);
      }
    } else {
      console.log("Select a  player");
    }
  };

  const bottomCenter = () => {
    if (playerSelect) {
      const newBoard = [...selectType];

      if (newBoard[2][1]) {
        console.log("Sorry, you can't play here");
      } else {
        newBoard[2][1] = playerSelect;
        setSelectType(newBoard);
        // setPlayerSelected(null);
      }
    } else {
      console.log("Select a  player");
    }
  };

  const topRight = () => {
    if (playerSelect) {
      const newBoard = [...selectType];

      if (newBoard[0][2]) {
        console.log("Sorry, you can't play here");
      } else {
        newBoard[0][2] = playerSelect;
        setSelectType(newBoard);
        // setPlayerSelected(null);
      }
    } else {
      console.log("Select a  player");
    }
  };

  const centerRight = () => {
    if (playerSelect) {
      const newBoard = [...selectType];

      if (newBoard[1][2]) {
        console.log("Sorry, you can't play here");
      } else {
        newBoard[1][2] = playerSelect;
        setSelectType(newBoard);
        // setPlayerSelected(null);
      }

      // console.log(selectType);
    } else {
      console.log("Select a  player");
    }
  };

  const bottomRight = () => {
    if (playerSelect) {
      const newBoard = [...selectType];

      if (newBoard[2][2]) {
        console.log("Sorry, you can't play here");
      } else {
        newBoard[2][2] = playerSelect;
        setSelectType(newBoard);
        // setPlayerSelected(null);
      }

      // console.log(selectType);
    } else {
      console.log("Select a  player");
    }
  };

  // if row is of same value
  const row = () => {
    if (playerSelect) {
      const newBoard = [...selectType];
      if (
        newBoard[0][0] === playerSelect &&
        newBoard[0][1] === playerSelect &&
        newBoard[0][2] === playerSelect
      ) {
        setWin((prev) => ({ ...prev, [playerSelect]: prev[playerSelect] + 1 }));
        setSelectType([...board]);
      } else if (
        newBoard[1][0] === playerSelect &&
        newBoard[1][1] === playerSelect &&
        newBoard[1][2] === playerSelect
      ) {
        setWin((prev) => ({ ...prev, [playerSelect]: prev[playerSelect] + 1 }));
        setSelectType([...board]);
      } else if (
        newBoard[2][0] === playerSelect &&
        newBoard[2][1] === playerSelect &&
        newBoard[2][2] === playerSelect
      ) {
        setWin((prev) => ({ ...prev, [playerSelect]: prev[playerSelect] + 1 }));
        setSelectType([...board]);
      } else {
        // console.log("lose");
      }
    } else {
      // console.log("nothing selected");
    }
  };

  const column = () => {
    if (playerSelect) {
      const newBoard = [...selectType];
      if (
        newBoard[0][0] === playerSelect &&
        newBoard[1][0] === playerSelect &&
        newBoard[2][0] === playerSelect
      ) {
        setWin((prev) => ({ ...prev, [playerSelect]: prev[playerSelect] + 1 }));
        setSelectType([...board]);
      } else if (
        newBoard[0][1] === playerSelect &&
        newBoard[1][1] === playerSelect &&
        newBoard[2][1] === playerSelect
      ) {
        setWin((prev) => ({ ...prev, [playerSelect]: prev[playerSelect] + 1 }));
        setSelectType([...board]);
      } else if (
        newBoard[0][2] === playerSelect &&
        newBoard[1][2] === playerSelect &&
        newBoard[2][2] === playerSelect
      ) {
        setWin((prev) => ({ ...prev, [playerSelect]: prev[playerSelect] + 1 }));
        setSelectType([...board]);
      } else {
        // console.log("column lose");
      }
    } else {
      // console.log("column nothing selected");
    }
  };

  // console.log(typeof playerSelect, "<=======");
  const diagonal = () => {
    if (playerSelect) {
      const newBoard = [...selectType];
      if (
        newBoard[0][0] === playerSelect &&
        newBoard[1][1] === playerSelect &&
        newBoard[2][2] === playerSelect
      ) {
        setWin((prev) => ({ ...prev, [playerSelect]: prev[playerSelect] + 1 }));
        setSelectType([...board]);
        // const newScore = { ...win, [playerSelect]: win[playerSelect] + 1 };
        // setWin(newScore);
      } else if (
        newBoard[0][2] === playerSelect &&
        newBoard[1][1] === playerSelect &&
        newBoard[2][0] === playerSelect
      ) {
        setWin((prev) => ({ ...prev, [playerSelect]: prev[playerSelect] + 1 }));
        setSelectType([...board]);
      } else {
        // console.log("diagonal lose");
      }
      // console.log('selected')
    } else {
      // console.log("Noplayer selected");
    }
  };

  useEffect(() => {
    if (board) {
      diagonal();
      column();
      row();
    }
  }, [selectType]);

  useEffect(() => {
    setPlayerSelected((prev) => (prev === "X" ? "O" : "X"));
  }, [selectType]);



  return (
    <>
      <div className="tictac d-flex justify-content-center align-items-center">
        <div>
          <div className="score-board">
            <div
              className="d-flex px-5"
              //   style={{ position: "absolute", left: "50px", bottom: "525px" }}
            >
              <button className="btn btn-primary" onClick={Xtype}>
                X Type
              </button>
              <button
                className="btn btn-secondary"
                onClick={Otype}
                style={{ marginLeft: "20px" }}
              >
                O Type
              </button>
            </div>
            <div
              className="d-flex my-3 py-2 align-items-center"
              style={{
                border: "1px solid white",
                background: "black",
                color: "white",
                width: "250px",
                // marginLeft: "-30px",
                borderRadius: "5px",
              }}
              //   style={{ position: "absolute", left: "50px", bottom: "125px" }}
            >
              <div className="mx-3" style={{ fontSize: "15px" }}>
                Score Board
              </div>
              <div className="mx-3" style={{ fontWeight: "bold" }}>
                <span style={{ color: "violet" }}>X=</span>
                {win.X}
              </div>
              <div className="mx-3" style={{ fontWeight: "bold" }}>
                <span style={{ color: "blue" }}>O=</span>
                {win.O}
              </div>
              {/* <div>{win}</div> */}
            </div>
          </div>
          <div className="reset-game">
            <button
              className="btn btn-danger"
              //   style={{ position: "absolute", left: "50px", bottom: "465px" }}
              onClick={resetGame}
            >
              Restart Game
            </button>
          </div>
          <div>
            {/* First row */}
            <div className="d-flex flex-nowrap justify-content-between my-2">
              <button className="mx-2 ticbutton" onClick={centerLeftTop}>
                {/* center left top */}
                {/* 00 */}
                {selectType[0][0]}
              </button>
              <button className="mx-2 ticbutton" onClick={centerTop}>
                {selectType[0][1]}
                {/* {selectType} */}
              </button>
              {/* <div>
                <div
                  //   vertical line
                  style={{
                    backgroundColor: "red",
                    padding: "5px",
                    width: "2px",
                    height: "200px",
                    borderRadius: "10px",
                    position: "absolute",
                    // left: "57px",
                  }}
                ></div>
              </div> */}
              <button className="mx-2 ticbutton" onClick={topRight}>
                {selectType[0][2]}
                {/* top right */}
              </button>
            </div>

            {/* first horizontal line  */}
            <div
              //   horizontal line
              className="horizontal-line-top"
            ></div>
            {/* Second row */}
            <div className="d-flex flex-nowrap justify-content-between my-2">
              <button className="mx-2 ticbutton" onClick={centerLeft}>
                {selectType[1][0]}
                {/* center left end */}
              </button>
              <button className="mx-2 ticbutton" onClick={center}>
                {/* center */}
                {selectType[1][1]}
              </button>
              <button className="mx-2 ticbutton" onClick={centerRight}>
                {selectType[1][2]}
                {/* center right */}
              </button>
            </div>

            {/* second horizontal line  */}
            <div
              className="horizontal-line-bottom"
              //   horizontal line
            ></div>

            {/* Third Row */}
            <div className="d-flex flex-nowrap justify-content-between my-2">
              <button className="mx-2 ticbutton" onClick={bottomLeft}>
                {selectType[2][0]}
                {/* bottom left */}
              </button>
              <button className="mx-2 ticbutton" onClick={bottomCenter}>
                {selectType[2][1]}
                {/* bottom center */}
              </button>
              <button className="mx-2 ticbutton" onClick={bottomRight}>
                {selectType[2][2]}
                {/* bottom right */}
              </button>
            </div>
            <div>
              <div
                className="vertical__line-left"
                //   vertical line
              ></div>
            </div>
            <div>
              <div
                className="vertical__line-right"
                //   vertical line
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicTac;
