var React = require("react");

var BasketDisplay = React.createClass ({

	handleBasketSubmit: function(e) {
		e.preventDefault();
		this.props.handleBasketSubmit(e);
	},

	render: function() {
		var DisplayBasket = this.props.basketDisplay.map(function(apparel, index) {
			return(
				<div key={index} className="apparel-item">
					<li className="label">{apparel.name}</li>
					<li><span className="label">Price: </span>£{apparel.price.toFixed(2)}</li>
					<li><span className="label">Qty: </span>{apparel.quantity}</li>
						<li><span className="label">Category: </span>{apparel.gender}s {apparel.category}wear</li>
						<form onSubmit={this.handleBasketSubmit}>
							<input
								id="qty"
								className={index}
								type="number"
								min="0"
								max={apparel.quantity}
								placeholder="0"
							/>
							<input type="submit" value="Remove Item"/>
						</form>
				</div>
			)
		}.bind(this))
		return (
			<div className="basket-display">
				Basket Display <br/>
				{DisplayBasket}
			</div>
		)
	}
});

module.exports = BasketDisplay;
