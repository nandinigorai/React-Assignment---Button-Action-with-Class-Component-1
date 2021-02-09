import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.activateLasers = this.activateLasers.bind(this);
	};

	activateLasers(){
		console.log("click");
		document.getElementById("para").innerHTML = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
	}

    render() {
    	return(
    		<div id="main">{ 
				
				<button onClick={this.activateLasers}>Click Me</button>
				}
				<p id="para"></p>
    		</div>
    	);
    }
}


export default App;

