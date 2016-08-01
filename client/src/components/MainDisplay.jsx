var React = require("react");

var SampleData = require("../sampleData.js");

var MainDisplay = React.createClass({
	getInitialState: function() {
		return {
			clothingItems: SampleData
		};
	},

	render: function() {
		return (
			<div id="MainDisplay">
				Main Display
			</div>
		)
	}
})

module.exports = MainDisplay;
