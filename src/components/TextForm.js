import React, { useState } from 'react'
// import * as ReactDOM from 'react-dom';
// import {Link} from "react-router-dom"

export default function TextForm(props) {

  const [text, setText] = useState('Your Text Appears Here');
  // const [mode, setMode] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // });
  // const [ModeText, setModeText] = useState('Dark');

  // const buttonStyle = {
  //   margin: '13px'
  // }

  // const wordStatusStyle = {
  //   color: 'red',
  //   padding: '11px'
  // }

  const darkMode1 = {
    backgroundColor: "#09090b",
    color: "white",
    border: "1px solid white"
  }
  const darkMode2 = {
    backgroundColor: "#391818",
    color: "white",
    border: "1px solid white"
  }
  const darkMode3 = {
    backgroundColor: "#15011593",
    color: "white",
    border: "1px solid white"
  }


  const lightMode = {
    backgroundColor: "white",
    color: "black"
  }

  function changeUpCase() {
    // console.log("Clicked On Convert To Uppercase");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase", "success");
  }
  function changeLowCase() {
    // console.log("Clicked On Convert To Lowercase");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase", "success");
  }
  function capitaliseFirst() {
    // console.log("Clicked On Capitalise First");
    let newText = text.toLowerCase();
    let strArray = newText.split("");
    strArray[0] = strArray[0].toUpperCase();
    for (let i = 1; i < strArray.length - 1; i++) {
      if (strArray[i] === ".") {
        while (strArray[i + 1] === " ") i++;
        strArray[i + 1] = strArray[i + 1].toUpperCase();
      }
    }
    newText = strArray.join("");
    // console.log(newText);
    setText(newText);
    props.showAlert("First Letter Are Capitalised", "success");
  }
  function encrypt() {
    // console.log("Clicked On Convert Encrypt");
    let strArray1 = text.split("");
    let strArray2 = text.split("");
    let lent = strArray1.length;
    for (let i = 0; i < lent; i++) {
      let j = (i + Math.round(lent / 2)) % lent;
      strArray2[i] = strArray1[j] + String.fromCharCode(i % 30);
    }
    let newText = strArray2.join("");
    setText(newText);
    props.showAlert("End To End Encrypted", "success");
  }
  function decrypt() {
    // console.log("Clicked On Convert Decrypt");
    let strArray1 = [];
    let strArray2 = text.split("");
    let lent = strArray2.length;
    for (let i = 0, k = 0; i < lent; i += 2, k++) {
      let j = (lent + i - Math.round(lent / 2)) % lent;
      strArray1[k] = strArray2[j];
    }
    let newText = strArray1.join("");
    setText(newText);
    props.showAlert("Showing Original Text", "success");
  }
  function clearText() {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  }
  function copyText() {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied To Clipboard", "success");
  }

  //wrong way to render inner html in react
  // function clickToPreview() {
  //   let PreviewHead = document.getElementById(headPreview);
  //   let PreviewPara = document.getElementById(paraPreview);
  //   PreviewHead.innerHTML="Preview";
  //   PreviewPara.innerHTML={text};
  // }

  function clickToPreview() {
    // const PreviewHead = ReactDOM(document.getElementById('myBox'));
    // const PH = <h3>Preview</h3>;
    // PreviewHead.render(PH);

    let preview = document.getElementById("previewText");
    let text = document.getElementById("myBox");
    preview.innerHTML = text.value;
    props.showAlert("Previewing Your Text", "success");
  }
  // function toggleMode() {
  //   if (mode.color == '#09090b') {
  //     setMode({
  //       color: 'white',
  //       backgroundColor: '#09090b'
  //     });
  //     setModeText('Light');
  //   }
  //   else {
  //     setMode({
  //       color: '#09090b',
  //       backgroundColor: 'white'
  //     });
  //     setModeText('Dark');
  //   }

  // }

  function switchMode() {
    if (props.mode === 'dark')
      return (props.mode === 'light' ? lightMode : darkMode1);
    if (props.mode1 === 'night')
      return (props.mode1 === 'light' ? lightMode : darkMode1);
  }
  function switchMode1() {
    if (props.mode === 'dark')
      return (props.mode === 'light' ? lightMode : darkMode2);
    if (props.mode1 === 'night')
      return (props.mode1 === 'light' ? lightMode : darkMode3);
  }

  function handleOnChange(event) {
    // console.log("on change");
    setText(event.target.value);
  }
  return (
    <>
      <div className="container my-3" style={{ color: "red" }} >
        <h3>Your Text Summary Appears Here</h3>
        <p>Words:-{text.charAt(text.split(" ").length)===''?text.split(" ").length-1:text.split(" ").length}, Characters:-{text.length}, Reading Time:-{(text.split(" ").length * 0.0055).toPrecision(2)} minutes</p>
        <div className="containe my-3" >
          <div class="accordion" id="accordionExample" >
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={switchMode()} >
                  GRAMITY's Journey
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={switchMode1()} >
                  <strong>GRAMITY</strong> is a utility software which helps to render text according to your choice. It comes with lots of features which helps the user to modify text for emails, letters, resumes, cover letters and many more.
                  I found GRAMITY very useful. Sometimes Writing long text becomes clumsy as it requires certain sets of Grammatical Rules to be followed, In accordance with such need I have developed Gramity so a user who spends time on GRAMITY dosen't get bored. <code>.Hope You Find It Useful And Thank You For Giving Your Pecious Time.</code> <br></br>Feel free to review us.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={switchMode()} >
                  Features of GRAMITY
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body" style={switchMode1()}>
                  <strong>Convert To Uppercase:-</strong>It helps the user to effectively convert all the text to capital English alphabets at once. <br />
                  <strong>Convert To Lowercase:-</strong>It helps the user to effectively convert all the text to lower English alphabets at once. <br />
                  <strong>Capitalise First Letter:-</strong>It helps the user to effectively convert first character of each sentence of all the text to capital English alphabets at once. <br />
                  <strong>Click To Encrypt:-</strong>It helps the user to effectively convert all the text into such a coded format so that no third-party application could misuse your confidential data. <br />
                  <strong>Click To Dencrypt:-</strong>It helps the user to effectively convert all the text into original text so that no third-party application could misuse your confidential data. <br />
                  <strong>Click To Clear Text:-</strong>It helps the user to effectively clear all the text at once. <br />
                  <strong>Click To Preview:-</strong>It helps the user to effectively convert all the text to capital English alphabets at once. <br />
                  <strong>Convert To Uppercase:-</strong>It helps the user to effectively convert all the text to capital English alphabets at once. <br />
                  <strong>Convert To Uppercase:-</strong>It helps the user to effectively convert all the text to capital English alphabets at once. <br />
                  <strong>Convert To Uppercase:-</strong>It helps the user to effectively convert all the text to capital English alphabets at once. <br />
                  <strong>Convert To Uppercase:-</strong>It helps the user to effectively convert all the text to capital English alphabets at once. <br />
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={switchMode()}>
                  Preview
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body" id="previewText" style={switchMode1()} onChange={handleOnChange}>
                  <code>Enter Some Text And '"Click To Preview"'</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <h3>{props.heading}</h3>
        <textarea className="form-control my-3" value={text} onChange={handleOnChange} id="myBox" rows="9" style={switchMode1()}></textarea>
        <button className="btn btn-primary my-1 mx-1" onClick={changeUpCase} >Convert To Uppercase</button>
        <button className="btn btn-primary my-1 mx-1" onClick={changeLowCase} >Convert To Lowercase</button>
        <button className="btn btn-primary my-1 mx-1" onClick={capitaliseFirst} >Capitalise First Letter</button>
        <button className="btn btn-primary my-1 mx-1" onClick={encrypt} >Click To Encrypt</button>
        <button className="btn btn-primary my-1 mx-1" onClick={decrypt} >Click To Decrypt</button>
        <button className="btn btn-primary my-1 mx-1" onClick={clearText} >Click To Clear Text</button>

        <button className="btn btn-primary my-1 mx-1" onClick={clickToPreview} >Click To Preview</button>
        {/* <button className="btn btn-primary" onClick={toggleMode}>Enable {ModeText} Mode</button> */}
        <button className="btn btn-primary my-1 mx-1" onClick={copyText} >Copy To Clipboard</button>
        {/* <button className="btn btn-primary my-1 mx-1" onClick={encrypt} ></button>
        <button className="btn btn-primary my-1 mx-1" onClick={decrypt} ></button>
        <button className="btn btn-primary my-1 mx-1" onClick={clearText} ></button> */}
      </div>
      {/* <div className="container">
        <h3 id="headPreview"></h3>
        <p className="container" id="paraPreview"></p>
      </div> */}
    </>
  )
}