var localTemplate = JST.new_template;



SingleTradeView = Backbone.View.extend( {
	el: '#singleTrade',
	localTemplate: JST.new_template,
	events: { 
		'click .new'	: 'newTrade', 
	},


	
	
	

	newTrade: function(){
	
		
		// this.collection.add(thisnewmodel)

		var at = $('#trade_action_type').val(),
			val = $('#trade_valuation').val(),
			amt = $('#trade_amount').val(),
			susp = $('#trade_suspended').val(),
			exp = $('#trade_expiration').val(),

			newOne = new Trade({
				action_type: at,
				valuation: val,
				amount: amt,
				suspended: susp, 
				expiration: exp 
			});

			debugger;
			newOne.save(null,{
				success: function () {
		            alert('success');
		        },
		        error: function () {
		        	debugger
		            alert('error');
		        }
        	});
			

		
			// newOne.save();
			// debugger
			// //on success add this model
			// this.collection.add(newOne);
			// this.model.save({
			// 	action_type: at,
			// 	valuation: val,
			// 	amount: amt,
			// 	suspended: susp, 
			// 	expiration: exp 
			// 	});
		},

	
	render: function(info) {
		
		
	 	
	 this.$el.html(localTemplate());
	 	
	},

	initialize: function() {
	    this.render()

	},

});