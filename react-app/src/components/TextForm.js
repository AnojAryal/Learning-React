import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Upper case was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success")
}
    const handleLoClick = () => {
    // console.log("Lower case was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success")
}
    const handleClearClick = () => {
        let newText = ("");
        setText(newText);
        props.showAlert("Text has been cleared!","success")   
}
      
    const handleOnChange =(event)=>{
        // console.log("On change")
        setText(event.target.value);
}

    const handleCopy = ()=> {
        // var text = document.getElementById("textBox");
        // text.select();
        navigator.clipboard.writeText(text );     //after directly using navigator api we dont need to define and select text
        props.showAlert("Copied to clipboard!","success")
      
}
    const handleExtraSpaces = () => {
        let newText = text.replace(/\s+/g, ' ');
        setText(newText);
        props.showAlert("Extra spaces has been removed!","success")
        
}
      
    
    const [text, setText] = useState('');  //hooks vvi
    return (
        <>
        <div className="container" style= {{color:props.mode==='dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className= "mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor :props.mode==='dark'?'#13466e':'white',
        color: props.mode==='light'?'grey':'white'}} id="textBox" rows="8"></textarea>
            <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>clear text</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>convert to Uppercase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>convert to Lowercase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container my-2" style= {{color:props.mode==='dark'?'white':'black'}}>
            <h3>Your text summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{
                return element.length !==0
            }).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{
                return element.length !==0
            }).length} Minutes read</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
