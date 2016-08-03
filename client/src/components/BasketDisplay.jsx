var React = require("react");

var BasketDisplay = React.createClass ({

	render: function() {
		var DisplayBasket = this.props.basketDisplay.map(function(apparel, index) {
			return(
				<div key={index} className="apparel-item">
					<li className="label">{apparel.name}</li>
					<li><span className="label">Price: </span>£{apparel.price.toFixed(2)}</li>
					<li><span className="label">Qty: </span>{apparel.quantity}</li>
				</div>
			)
		})
		return (
			<div className="basket-display">
				Basket Display <br/>
				{DisplayBasket}
			</div>
		)
	}
});

module.exports = BasketDisplay;
