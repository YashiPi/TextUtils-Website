import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert ("Converted to upper case", "success")
    }
    
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked "+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert ("Converted to lower case", "success")
    }
    
    // const handleCapitaliseClick = ()=>{
        //     let words = text.split(" ");
        //     for (let i=0; i<words.length; i++){
            //         words[i] = words[i][0].toUpperCase()+words[i].substring(1);
            //     }
            //     words.join(" ");
            //     setText(words);
            // }
            
    const handleClearClick = ()=>{
        let newText ="";
        setText(newText);
        props.showAlert ("Text cleared!", "success")
    }
    
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert ("Extra spaces removed", "success")
    }
    
    const handleCopy = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert ("Copied to clipboard!", "success")
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className='container' style={{color: (props.mode === 'dark'? 'white':'black')}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label htmlFor="myBox" className="form-label"></label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: (props.mode === 'dark'? '#343a40': 'white'), color: props.mode === 'dark'? 'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove extra spaces</button>
            <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy text</button>
        </div>
        <div className='container my-3' style={{color: (props.mode === 'dark'? 'white':'black')}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0? text: "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
