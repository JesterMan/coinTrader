var localTemplate = JST.edit_template;



SingleTradeView = Backbone.View.extend( {
	el: '#singleTrade',
	events: { 
		'click .edit' 	: 'edit',
		'click .new'	: 'newTrade', 
	},


	
	
	

	newTrade: function(){},
	edit: function(){},
	
	render: function(info) {
		
		
	 	
	 	this.$el.html(localTemplate({model: info.toJSON()[0]}));
	 	
	},

	initialize: function() {
	    this.collection = new TradeHistory();
	    this.collection.fetch();
	    this.collection.on("reset", this.render, this) 

	},



	


	


});