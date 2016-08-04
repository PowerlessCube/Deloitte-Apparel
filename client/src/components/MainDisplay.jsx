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
			basketItems: [],
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

	removeItemFromApparel: function(array, basketItem, basketQuantity) {
		var newState = array.map(function(item) {
				if (item !== basketItem) {
					return (item)
				} else {
					item.quantity -= basketQuantity
					return (item)
				}
		}.bind(this))
		this.setState({apparelItems: newState})
	},

	handleFormSubmitAddToBasket: function(e) {
		var index = e.target.qty.className;
		var quantity = parseInt(e.target.qty.value);
		var basketItem = this.state.apparelItems[index];
		var newApparelItems = this.state.apparelItems
		if ((quantity >= 1) && (quantity <= basketItem.quantity)) {
			this.removeItemFromApparel(newApparelItems, basketItem, quantity);
			this.updateBasket(basketItem, quantity);
		} else {
			console.log("Illegal Command: no stock selected");
		}
	},

	//Removing Items from basket
	removeItemFromBasket: function(state, selectedItem, quantity) {
		var newState = state.map(function(item, index) {
				if (item !== selectedItem) {
					return (item)
				} else {
					item.quantity -= quantity
					return (item)
				}
		}.bind(this))
		var filteredState = newState.filter(function(item) {
			return item.quantity != 0
		})
		this.setState({basketItems: filteredState})
	},

	updateApparel: function(selectedItem, quantity) {
		var currentApprelState = this.state.apparelItems
		var newApprelItem = {};
		Object.assign(newApprelItem, selectedItem);
		currentApprelState.forEach(function(item) {
			// HACK: Currently using items names as comparison check would require unique ids in future.
			if (item.name === selectedItem.name) {
				item.quantity += quantity
				return (this.setState({apparelItems: currentApprelState}))
			}
		}.bind(this))
	},

	handleFormSubmitRemoveFromBasket: function(e) {
		var index = e.target.qty.className;
		var quantity = parseInt(e.target.qty.value);
		var selectedItem = this.state.basketItems[index];
		var state = this.state.basketItems
		if ((quantity > 0) && (quantity <= selectedItem.quantity)) {
			this.removeItemFromBasket(state, selectedItem, quantity);
			this.updateApparel(selectedItem, quantity);
		} else {
			console.log("Illegal Command: no basket Item selected");
		}
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
