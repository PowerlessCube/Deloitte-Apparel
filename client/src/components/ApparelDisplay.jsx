var React = require("react");

var ApparelDisplay = React.createClass ({
	handleQtyChange: function(e) {
		// body...
	},

	handleSubmit: function(e) {
		e.preventDefault();
		this.props.handleSubmit(e);
	},

	render: function() {
		var apparelItemsDisplay = this.props.apparelItems.map(function(apparel, index) {
			return (
				<div key={index} className="apparel-item">
					<li className="label">{apparel.name}</li>
					<li><span className="label">Price: </span>£{apparel.price.toFixed(2)}</li>
					<li><span className="label">Qty: </span>{apparel.quantity}</li>
					<form onSubmit={this.handleSubmit}>
						<input
							type="number"
							min="0"
							max={apparel.quantityß}
							placeholder="0"
						/>
						<input type="submit" value="Add to Basket"/>
					</form>
				</div>
			)
		}.bind(this))
		return (
		<div className="apparel-display">
			Apparel Display <br/>
			{apparelItemsDisplay}
		</div>
		)
	}
});

module.exports = ApparelDisplay;
