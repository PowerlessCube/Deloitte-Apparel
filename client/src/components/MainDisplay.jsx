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
					name: "Mid Twist Cut-Out Dress, Pink",
					gender: "Women",
					category: "Formal",
					price: 540.00,
					quantity: 2
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

	removeItemFromState: function(array, basketItem, basketQuantity, targetState) {
		var newState = array.map(function(item) {
				if (item !== basketItem) {
					return (item)
				} else {
					item.quantity -= basketQuantity
					return (item)
				}
		}.bind(this))
		this.setState({targetState: newState})
	},

	handleFormSubmitAddToBasket: function(e) {
		var apparelIndex = e.target.qty.className;
		var basketQuantity = parseInt(e.target.qty.value);
		var basketItem = this.state.apparelItems[apparelIndex];
		var newApparelItems = this.state.apparelItems
		console.log("basketItem experiment:", basketItem );
		this.removeItemFromState(newApparelItems, basketItem, basketQuantity, this.state.apparel);
		this.updateBasket(basketItem, basketQuantity);
	},

	// RemoveFromBasket: function(basketItem, basketQuantity) {
	// 	var currentBasketState = this.state.basketItems
	// 	var newBasketItem = {};
	// 	Object.assign(newBasketItem, basketItem);
	// 	if (currentBasketState.length === 0) {
	// 		this.newItemAdded(newBasketItem, basketQuantity)
	// 	} else {
	// 		currentBasketState.forEach(function(item) {
	// 			// HACK: Currently using items names as comparison check would require unique ids in future.
	// 			if (item.name === newBasketItem.name) {
	// 				item.quantity -= basketQuantity
	// 				return (this.setState({basketItems: currentBasketState}))
	// 			} else {
	// 				this.newItemAdded(newBasketItem, basketQuantity)
	// 			}
	// 		}.bind(this))
	// 	}
	// },

	// Removing items from Basket
	// removeFromArray: function(basketItem, basketQuantity) {
	// 	var newApparelItems = this.state.apparelItems.map(function(item) {
	// 			if (item !== basketItem) {
	// 				return (item)
	// 			} else {
	// 				item.quantity += basketQuantity
	// 				return (item)
	// 			}
	// 	}.bind(this))
	// 	this.setState({apparelItems: newApparelItems})
	// },

	handleFormSubmitRemoveFromBasket: function(e) {
		console.log("you have reached: handleFormSubmitRemoveFromBasket");
		var apparelIndex = e.target.qty.className;
		var basketQuantity = parseInt(e.target.qty.value);
		var basketItem = this.state.basketItems[apparelIndex]
		// this.removeFromArray(basketItem, basketQuantity);
		// this.RemoveFromBasket(basketItem, basketQuantity);
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
