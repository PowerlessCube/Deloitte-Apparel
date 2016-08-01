var React = require("react");

var ApparelDisplay = React.createClass ({

	render: function() {
			var apparelItemsDisplay = this.props.apparelItems.map(function(apparel, index) {
				return (
					<div key={index} className="apparel-item">
						<li className="label">{apparel.name}</li>
						<li><span className="label">Price: </span>£{apparel.price.toFixed(2)}</li>
						<li><span className="label">Quantity: </span>{apparel.quantity}</li>
					</div>
				)
			})
			return (
			<div className="apparel-display">
				Apparel Display <br/>
				{apparelItemsDisplay}
			</div>
		)
	}
});

module.exports = ApparelDisplay;
