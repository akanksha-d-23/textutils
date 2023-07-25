import React, {useState} from 'react';

export default function Textform(props) {
    const [text, setText] = useState('');
    const handleUpClick =()=>{
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLowClick =()=> {
       let newText = text.toLowerCase();
       setText(newText);
       props.showAlert("Converted to Lowercase", "success");
    }
    const onChangeClick = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const copyText = (event) =>{
      let text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
    }
  return (
    <>
<div className='container ' style ={{color : props.mode === 'dark' ? 'white' : 'black'}}>
 {/* <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div> */}
<h1>
    {props.heading}
</h1>
<div className="mb-3">
  <label for="myBox" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={onChangeClick} id="myBox" rows="8" style ={{ backgroundColor : props.mode ==='dark' ? 'grey' :'white',color:props.mode ==='dark'? 'white': 'black'}}></textarea>
</div>
<button className='btn btn-outline-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-outline-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
<button className='btn btn-outline-primary mx-2' onClick={copyText}>Copy Text</button>
</div>
<div className='container my-3'style ={{color : props.mode === 'dark' ? 'white' : 'black'}} >
<h2>Your text summary</h2>
<p> {text.split(" ").length} words, and {text.length} characters</p>
<p>{0.008 *  text.split(" ").length} Minutes read</p>
<h2>Preview</h2>
<p>{text.length > 0 ? text :"Enter some text to preview here"}</p>
</div>
    </>
  )
}
