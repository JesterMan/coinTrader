



EditTradeView = Backbone.View.extend({
	el: '#singleTrade',
 	localTemplate: JST.edit_template,	
	
	events: { 
		'click #new': 'blank',
		'click #save': 'update',
		'click #delete': 'delete'
	},


	blank: function(evt){
		evt.preventDefault();
		new SingleTradeView;
	},

	delete: function(evt){
		evt.preventDefault();
		console.log('ok');
		this.model.destroy();
	},

	update: function(evt) {
		evt.preventDefault();
		var at = $('#trade_action_type').val(),
			val = $('#trade_valuation').val(),
			amt = $('#trade_amount').val(),
			susp = $('#trade_suspended').val(),
			exp = $('#trade_expiration').val(),
			this_id=this.model.id;
			
			//on success add this model
			this.model.save({
				action_type: at,
				valuation: val,
				amount: amt,
				suspended: susp, 
				expiration: exp
				});
	},

	
	render: function() {
		
		this.$el.html(this.localTemplate({model: this.model.toJSON()}));

	},


	
	

	initialize: function(passed) {
		
		this.render(passed);

	},



	


});