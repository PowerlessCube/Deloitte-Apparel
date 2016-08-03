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

	updateQuantity: function(apparelItem, basketQuantity) {
		apparelItem.quantity -= basketQuantity
		return apparelItem
	},

	handleFormSubmit: function(e) {
		var apparelIndex = e.target.qty.className;
		var basketQuantity = e.target.qty.value;
		var newApparelItems = this.state.apparelItems.map(function(item) {
				if (item !== this.state.apparelItems[apparelIndex]) {
					return (item)
				} else {
					item.quantity -= basketQuantity
					return (item)
				}
		}.bind(this))
		// var updatedApparelItems = this.updateQuantity(this.state.apparelItems[apparelIndex], basketQuantity)
		console.log("updatedApparelItem: ", newApparelItems );
		this.setState({apparelItems: newApparelItems})
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
