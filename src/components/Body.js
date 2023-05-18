import React, { useState } from "react";

export default function Body(props) {
  const [text, setText] = useState("enter the text here");

  // for the upper letter
  const handleonclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  // for the lower letter
  const handleonlo = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  // for the clear text
  const handleonclear = () => {
    let newtext = " ";
    setText(newtext);
  };
  // for the onchange
  const handleonchange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container my-2"
        style={{ backgroundcolor: props.mode === "light" ? "grey" : "light" }}
      >
        <h3 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h3>
        <div className="mb-3 my-4">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            id="mybox"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleonclick}>
          convert to Upercase
        </button>
        <button className="btn btn-primary mx-0.5" onClick={handleonlo}>
          convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleonclear}>
          clear
        </button>

        <div
          className="container my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h3>Summary</h3>
          <p>
            {" "}
            {text.split(" ").length} Words and {text.length} Character
          </p>
        </div>
      </div>
    </>
  );
}
