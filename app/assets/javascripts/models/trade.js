var Trade = Backbone.Model.extend({
    defaults: {
        action_type: 'not set',
    	valuation: '0',
 		amount:'0',
 		expiration: '',
  		executed: false,
    	suspended: false,
  		user_id: ''
    }
});

var TradeHistory = Backbone.Collection.extend({
	model: Trade,
	url: '/trades'
});

