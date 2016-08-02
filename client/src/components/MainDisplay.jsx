var React = require("react");

var SampleData = require("../sampleData.js");
var ApparelDisplay = require("./ApparelDisplay.jsx");
var FilterDisplay = require("./FilterDisplay.jsx");
var BasketDisplay = require("./BasketDisplay.jsx");

var MainDisplay = React.createClass({
	getInitialState: function() {
		return {
			apparelItems: SampleData,
			basketItems: null
		};
	},

	updateQuantity: function() {
		// body...
	},

	handleFormSubmit: function(e) {
		console.log("handleApparelItemButton ", e);
		console.log("e.target ", e.target.qty.value);
		console.log("e.className ", e.target.qty.className);
	},

	render: function() {
		return (
			<div className="main-display">
				Main Display <br/>
				<FilterDisplay
					itemCategory={this.state.apparelItems}
					handleCheck={this.handleCheck}
				/>
				<ApparelDisplay
					apparelItems={this.state.apparelItems}
					handleSubmit={this.handleFormSubmit}
				/>
				<BasketDisplay/>
			</div>
		)
	}
})

module.exports = MainDisplay;
