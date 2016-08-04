var React = require("react");

var TotalDisplay = React.createClass ({

	render: function() {
		return (
			<div className="total-display">
				Total Display
				<h3>Sub-total: £{this.props.subTotal.toFixed(2)}</h3>
				<h3>Total Discount: £{this.props.totalDiscount.toFixed(2)}</h3>
				<h2>Shopping Total: £{this.props.shoppingTotal.toFixed(2)}</h2>
			</div>
		)
	}

});

module.exports = TotalDisplay;
