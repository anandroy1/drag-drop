import $ from "jquery"; //Load jquery
import React, { Component, createRef } from "react"; //For react component
import './App.css';


window.jQuery = $; //JQuery alias
window.$ = $; //JQuery alias

require("jquery-ui-sortable"); //For FormBuilder Element Drag and Drop
require("formBuilder");// For FormBuilder

const formData = [];

document.body.style.margin = "30px"; //For add margin in HTML body

//Initialize formBuilder 
class FormBuilder extends Component {
  fb = createRef();
  componentDidMount() {
    $(this.fb.current).formBuilder({ formData });
  }
  render() {
    return <div id="fb-editor" ref={this.fb} />;
  }
}

//Return Initialized formBuilder set it to HTML

function App() {
  return (
    <>
    <div className="heading">
    <h2>React Form Builder</h2>
    <h3>Tool Box</h3>
    </div>
      <FormBuilder />
    </>
  );
}

export default App;
