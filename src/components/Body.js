import React, {useState} from "react";

export default function Body(props) {

  const [text, setText] = useState("enter the text here");
// for the upper letter
  const handleonclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext)
  };
  // for the lower letter
  const handleonlo = () => {
    let newtext = text.toLowerCase();
    setText(newtext)
  };
  // for the onchange 
  const handleonchange = (event) => {
    setText(event.target.value); 
  };

  return (
    <>
    <h2>{props.heading}</h2>
    <div className="mb-3 my-4">
      <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="5"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleonclick}>convert to Upercase</button>
    <button className="btn btn-primary mx-0.5" onClick={handleonlo}>convert to lowercase</button>
    <div className="container my-3">
      <h2>summary</h2>
      <p> {text.split(" ").length} words and {text.length} character</p>
    </div>
    </>
  );
}
