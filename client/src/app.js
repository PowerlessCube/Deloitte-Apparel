var React = require("react");
var ReactDOM = require("react-dom");
var MainDisplay = require("./components/MainDisplay.jsx");

window.onload = function(){
	ReactDOM.render(
		<MainDisplay/>,
		document.getElementById('app')
	);
}
