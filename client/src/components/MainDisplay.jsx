var React = require("react");

var SampleData = require("../sampleData.js");
var ApparelDisplay = require("./ApparelDisplay.jsx");
var FilterDisplay = require("./FilterDisplay.jsx");
var BasketDisplay = require("./BasketDisplay.jsx");

var MainDisplay = React.createClass({
	getInitialState: function() {
		return {
			apparelItems: SampleData
		};
	},

	render: function() {
		return (
			<div className="main-display">
				Main Display
				<FilterDisplay/>
				<ApparelDisplay
					apparelItems={this.state.apparelItems}
				/>
				<BasketDisplay/>
			</div>
		)
	}
})

module.exports = MainDisplay;
