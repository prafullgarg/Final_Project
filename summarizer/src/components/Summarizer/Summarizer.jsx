import React, {useState} from 'react'
import propTypes from "prop-types"
import './summarizer.css'

const Summarizer = () => {
  const [text, setText] = useState("");

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

  return (
    <div className='summarizer'>
      <div
        className="summarizer_form"      >
          <textarea
            id="myBox1"
            value={text}
            onChange={handleChange}
            cols="50"
            rows="10"
            style={{'background-color': '#EAF1F7','color':'#38587E'}}

          ></textarea>
          <textarea
            id="myBox2"
            value={text}
            onChange={handleChange}
            cols="100"
            rows="10"
            style={{'background-color': '#EAF1F7','color':'#38587E'}}
          ></textarea>
        <hr />
      </div>
      <div
        className="Word_count"      >
        <p>
          <strong>
            Number of words:
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </strong>
        </p>
        <hr />
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
          Remove extra space
        </button>
        <button
          className=""
          onClick={handleCopy}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
      </div>
      
    </div>
  );
}

export default Summarizer