var React = require("react");

var SampleData = require("../sampleData.js");
var ApparelDisplay = require("./ApparelDisplay.jsx");
var FilterDisplay = require("./FilterDisplay.jsx");
var BasketDisplay = require("./BasketDisplay.jsx");

var MainDisplay = React.createClass({
	getInitialState: function() {
		return {
			apparelItems: SampleData,
			basketItems: [
				{
					name: "Almond Toe Court Shoes, Patent Black",
					gender: "Women",
					category: "Foot",
					price: 99.00,
					quantity: 1
				}
			]
		};
	},

	updateBasket: function(apparelIndex, basketQuantity) {

		var currentBasketState = this.state.basketItems
		// var newBasketItem = this.state.apparelItems[apparelIndex]
		var newBasketItem = {};
		Object.assign(newBasketItem, this.state.apparelItems[apparelIndex]);
		newBasketItem.quantity = basketQuantity
		var newBasketState = this.state.basketItems.concat(newBasketItem)
		this.setState({basketItems: newBasketState})
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
		// TODO: need logic check to see if items are above 0 and below stock quantity.
		var apparelIndex = e.target.qty.className;
		var basketQuantity = parseInt(e.target.qty.value);
		this.updateApparelDisplay(apparelIndex, basketQuantity);
		this.updateBasket(apparelIndex, basketQuantity);
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
				<BasketDisplay
					basketDisplay={this.state.basketItems}
				/>
			</div>
		)
	}
})

module.exports = MainDisplay;
