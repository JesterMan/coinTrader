



EditTradeView = Backbone.View.extend({
	el: '#singleTrade',
 	localTemplate: JST.edit_template,	
	
	events: { 

	},

	
	render: function(thisModel) {
		
		this.$el.html(this.localTemplate({model: thisModel.thisModel}));

	},


	
	

	initialize: function(passed) {
	
		this.render(passed);

	},



	


});