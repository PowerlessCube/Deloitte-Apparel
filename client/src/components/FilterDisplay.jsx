var React = require("react");
var _ = require("lodash");

var FilterDisplay = React.createClass ({

	render: function() {
		var genderValue = this.props.itemCategory.map(function(item) {
			return item.gender
		})
		var categoryValue = this.props.itemCategory.map(function(apparelCategory) {
			return apparelCategory.category
		})
		var gender = _.uniq(genderValue);
		var category = _.uniq(categoryValue);

		var genderDisplay = gender.map(function(gender, index) {
			return (
				<div>
					<label className="label" htmlFor="gender" key={index}>{gender}</label>
					<input type="checkbox" key={index+1}/>
				</div>
			)
		})

		var categoryDisplay = category.map(function(category, index) {
			return (
				<div>
					<label className="label"htmlFor="category" key={index}>{category} Wear</label>
					<input type="checkbox" key={index+1}/>
				</div>
			)
		})
		return (
			<div className="filter-display">
				Filter Display
				{genderDisplay}
				{categoryDisplay}
			</div>
		)
	}
});

module.exports = FilterDisplay;
