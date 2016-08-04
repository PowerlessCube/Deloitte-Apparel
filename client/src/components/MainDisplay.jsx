var React = require("react");

var SampleData = require("../sampleData.js");
var ApparelDisplay = require("./ApparelDisplay.jsx");
// var FilterDisplay = require("./FilterDisplay.jsx");
var BasketDisplay = require("./BasketDisplay.jsx");
var TotalDisplay = require("./TotalDisplay.jsx");
var TotalLogic = require("../models/totalLogic.js")

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
					quantity: 5
				}
			],
			totalDiscount: 0,
			shoppingTotal: 0
		};
	},

	//Adding Items to baskets
	newItemAdded: function(newBasketItem, basketQuantity) {
		newBasketItem.quantity = basketQuantity
		var newBasketState = this.state.basketItems.concat(newBasketItem)
		return (this.setState({basketItems: newBasketState}))
	},

	updateBasket: function(basketItem, basketQuantity) {
		var currentBasketState = this.state.basketItems
		var newBasketItem = {};
		Object.assign(newBasketItem, basketItem);
		if (currentBasketState.length === 0) {
			this.newItemAdded(newBasketItem, basketQuantity)
		} else {
			currentBasketState.forEach(function(item) {
				// HACK: Currently using items names as comparison check would require unique ids in future.
				if (item.name === newBasketItem.name) {
					item.quantity += basketQuantity
					return (this.setState({basketItems: currentBasketState}))
				} else {
					this.newItemAdded(newBasketItem, basketQuantity)
				}
			}.bind(this))
		}
	},

	updateApparelDisplay: function(basketItem, basketQuantity) {
		var newApparelItems = this.state.apparelItems.map(function(item) {
				if (item !== basketItem) {
					return (item)
				} else {
					item.quantity -= basketQuantity
					return (item)
				}
		}.bind(this))
		this.setState({apparelItems: newApparelItems})
	},

	handleFormSubmitAddToBasket: function(e) {
		var apparelIndex = e.target.qty.className;
		var basketQuantity = parseInt(e.target.qty.value);
		var basketItem = this.state.apparelItems[apparelIndex];
		console.log("basketItem experiment:", basketItem );
		this.updateApparelDisplay(basketItem, basketQuantity);
		this.updateBasket(basketItem, basketQuantity);
	},

	// Removing items from Basket
	handleFormSubmitRemoveFromBasket: function(e) {
		console.log("you have reached: handleFormSubmitRemoveFromBasket");
		var apparelIndex = e.target.qty.className;
		var basketQuantity = parseInt(e.target.qty.value);
		this.updateApparelDisplay(apparelIndex, basketQuantity);
		this.updateBasket(apparelIndex, basketQuantity);
	},

	//Totaling Basket Amount
	handleSubTotal: function() {
		var basketItems = this.state.basketItems
		return (TotalLogic.itemSum(basketItems))
	},

	render: function() {
		return (
			<div className="main-display">
				Main Display <br/>
				<ApparelDisplay
					apparelItems={this.state.apparelItems}
					handleApparelSubmit={this.handleFormSubmitAddToBasket}
				/>
				<BasketDisplay
					basketDisplay={this.state.basketItems}
					handleBasketSubmit={this.handleFormSubmitRemoveFromBasket}
				/>
				<TotalDisplay
					subTotal={this.handleSubTotal()}
					totalDiscount={this.state.totalDiscount}
					shoppingTotal={this.state.shoppingTotal}
				/>
			</div>
		)
	}
})

module.exports = MainDisplay;
