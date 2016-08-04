module.exports={
	itemSum: function(array) {
		var basketSubTotal = 0;
		array.forEach(function(item) {
			basketSubTotal += item.quantity * item.price;
		});
		return basketSubTotal;
	}
};
