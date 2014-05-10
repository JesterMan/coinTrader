var sTVTemplate = _.template('single trade here'),
	localTemplate = JST["trade_template"];
debugger



SingleTradeView = Backbone.View.extend( {
	el: '#singleTrade',
	events: { 
		'click .edit' 	: 'edit',
		'click .new'	: 'newTrade', 
	},


	
	
	

	newTrade: function(){},
	edit: function(){},

	initialize: function() {
	    this.collection = new TradeHistory();
	    this.collection.fetch();
	    this.collection.on("reset", this.render, this) 

	},



	render: function() {
	 	
	 	this.$el.html(sTVTemplate());
	 	
	},


	


});