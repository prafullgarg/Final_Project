import React, { useState } from "react";
import "./summarizer.css";

const Summarizer = () => {
  const [text, setText] = useState("");
  const [summary,setSummary]=useState("")

  const handleChange = (event) => {
    // console.log("text is changing")
    setText(event.target.value);
  };
  const clear = () => {
    setText("");
  };
  const handleExtraSpace = () => {
    let newt = text.split(/[ ]+/);
    setText(newt.join(" "));
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const handleSummarize = () => {
      };

  return (
    <div className="summarizer">
      <div className="summarizer_body">
        <div className="summarizer_form1">
          <textarea id="myBox1" value={text} onChange={handleChange}></textarea>
          <hr />
          <div className="form1_description">
            <p>
              <h4>
                words:
                {
                  text.split(/\s+/).filter((element) => {
                    return element.length !== 0;
                  }).length
                }
              </h4>
            </p>
            <div className="buttons1">
              <button
                className="btn-clear"
                onClick={clear}
                disabled={text.length === 0}
              >
                Clear Text
              </button>
              <button
                className="btn-extra_space"
                onClick={handleExtraSpace}
                disabled={text.length === 0}
              >
                Remove space
              </button>
            </div>
          </div>
        </div>
        <div className="summarizer_form1">
          <textarea id="myBox2" value={summary} ></textarea>
          <div className="form2_description">
            <p>
              <h4>
                words:
                {
                  text.split(/\s+/).filter((element) => {
                    return element.length !== 0;
                  }).length
                }
              </h4>
            </p>

            <hr />

            <button
              className="btn-copy"
              onClick={handleCopy}
              disabled={text.length === 0}
            >
              Copy Text
            </button>
          </div>
        </div>
      </div>
      <button className='btn-summarize' onclick={handleSummarize} >
      <h4>Summarize</h4>
    </button>
    </div>
  );
};

export default Summarizer;
