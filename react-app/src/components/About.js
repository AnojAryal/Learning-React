import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle]= useState({
    //     color : 'black',
    //     backgroundColor :'white',
    //     border : '2px solid white'

    // })
    let myStyle = {
        color : props.mode ==='dark'?'white':'#042743',
        backgroundColor :  props.mode ==='dark'?'rgb(36 74 104)':'white',
        // border : '2px solid',
        // borderColor : props.mode ==='dark'?'white':'#042743'
    }
    // const [btnText,setBtnText] =useState("Enable Dark Mode")
    
    // const toggleStyle = ()=> {
    //     if (myStyle.color === 'black'){
    //         setMyStyle({
    //             color : 'white',
    //             backgroundColor :'black'
    //         })
    //         setBtnText("Enable White Mode")
    //     }
        
    //     else{
    //         setMyStyle({
    //             color : 'black',
    //             backgroundColor :'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

  return (
    <div className='container' style={{ color : props.mode ==='dark'?'white':'#042743'}}>
    <h1 className='my-3'>About us</h1>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Intuitive Interface</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            <strong>Our app boasts a clean and user-friendly interface</strong> , ensuring that anyone can navigate and use it effortlessly. Say goodbye to complex menus and confusing options.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Smart Typing</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            <strong>TextEase incorporates smart typing technology</strong>  that helps you save time and effort. Enjoy features like auto-correct, auto-suggestions, and predictive text to make your writing experience more efficient and error-free.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Text Ease Explained</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            <strong>The form is rendered within the TextForm </strong> component, which accepts props such as showAlert and mode. The showAlert prop is a function that displays alert messages to the user, while the mode prop determines whether the application is in light or dark mode.
            When the form is submitted, it triggers an action specified by the form's onSubmit attribute. In this code snippet, the action is not explicitly shown, but it is expected that the form data would be processed in some way.
            The form likely contains input fields where users can enter text to be analyzed. It could include additional form elements such as checkboxes, radio buttons, or dropdown menus, but they are not present in this code snippet.
            Upon submitting the form, the showAlert function is called with the appropriate parameters to display a success message using the success type. The showAlert function sets the alert state to display the message and automatically clears it after 2 seconds.
        
        </div>
    </div>
    </div>
    </div>
    {/* <div className='container my-3'>
    <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
    </div>   */}
</div>
  )
}
