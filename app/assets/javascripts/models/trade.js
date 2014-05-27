var Trade = Backbone.Model.extend({
    defaults: {
        action_type: 'not set',
    	valuation: '0',
 		amount:'0',
 		expiration: '',
  		executed: false,
    	suspended: false
    },
  

    url: function (){
        if (this.get('id') ){
            return '/trades/' + this.attributes.id;
        }
        else{
          return '/trades/'
       }
     }
});

var TradeHistory = Backbone.Collection.extend({
	model: Trade,
	url: '/trades'
});

