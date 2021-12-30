import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("grey");

  const upCase = () => {
    setText(text.toUpperCase());
  };

  const loCase = () => {
    setText(text.toLowerCase());
  };

  const clrText = () => {
    let newTxt = '';
    setText(newTxt);
  }

  const chngColor = () => {
    setTextColor("purple");
  }

  const textChange = (event) => {
    setText(event.target.value);
  };
  
  return (
    <>
      <h4>{props.heading}</h4>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          style={{color:textColor}}
          onChange={textChange}
          id="myBox"
          rows="8"
          placeholder="Enter text here..."
        ></textarea>
      </div>
      <div>
        <button className="btn btn-primary btn-sm me-3" onClick={upCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary btn-sm me-3" onClick={loCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary btn-sm me-3" onClick={clrText}>
          Clear Text
        </button>
        <button className="btn btn-primary btn-sm" onClick={chngColor}>
          Change color
        </button>
      </div>
      <div className="container mt-4">
        <h4 className="my-3">Summary</h4>
        <p className="mb-5">{text.split(" ").length} words {text.length} characters</p>
        <h5 className="my-3">Preview</h5>
        <p>{text}</p>
      </div>
    </>
  );
}
