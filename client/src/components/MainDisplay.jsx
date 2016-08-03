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

	updateBasket: function() {
		
	},

	updateApparelDisplay: function(apparelIndex, basketQuantity) {
		var newApparelItems = this.state.apparelItems.map(function(item) {
				if (item !== this.state.apparelItems[apparelIndex]) {
					return (item)
				} else {
					item.quantity -= basketQuantity
					return (item)
				}
		}.bind(this))
		this.setState({apparelItems: newApparelItems})
	},

	handleFormSubmit: function(e) {
		var apparelIndex = e.target.qty.className;
		var basketQuantity = e.target.qty.value;
		this.updateApparelDisplay(apparelIndex, basketQuantity);
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
