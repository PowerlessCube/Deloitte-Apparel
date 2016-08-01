var React = require("react");

var FilterDisplay = React.createClass ({

	render: function() {
		var genderFilterDisplay = this.props.apparelItems[0]
		return (
			<div className="filter-display">
				Filter Display
			</div>
		)
	}
});

module.exports = FilterDisplay;
