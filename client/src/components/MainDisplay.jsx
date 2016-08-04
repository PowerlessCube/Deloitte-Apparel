var React = require("react");

var SampleData = require("../sampleData.js");
var ApparelDisplay = require("./ApparelDisplay.jsx");
var FilterDisplay = require("./FilterDisplay.jsx");
var BasketDisplay = require("./BasketDisplay.jsx");

var MainDisplay = React.createClass({
	getInitialState: function() {
		return {
			apparelItems: SampleData,
			basketItems: []
		};
	},

	updateBasket: function(apparelIndex, basketQuantity) {
		var currentBasketState = this.state.basketItems
		var newBasketItem = {};
		Object.assign(newBasketItem, this.state.apparelItems[apparelIndex]);
		if (currentBasketState.length === 0) {
			newBasketItem.quantity = basketQuantity
			var newBasketState = this.state.basketItems.concat(newBasketItem)
			return (this.setState({basketItems: newBasketState}))
		} else {
			currentBasketState.forEach(function(item) {
				// HACK: Currently using items names as comparison check would require unique ids in future.
				if (item.name === newBasketItem.name) {
					item.quantity += basketQuantity
					return (this.setState({basketItems: currentBasketState}))
				} else {
					newBasketItem.quantity = basketQuantity
					var newBasketState = this.state.basketItems.concat(newBasketItem)
					return (this.setState({basketItems: newBasketState}))
				}
			}.bind(this))
		}
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
