
template = _.template(' <div class="cleaner"></div><div class="templatemo_h_line_2"></div><div class="field"><ul> <li> Trade ID: <%= hat.id %> </li> <li>Type of trade:<%= hat.action_type %></li><li>Execute when Bitcoins are worth:<%= valuation %></li><li>Amount to be traded:<%= amount %></li></li><li>Expires:<%= expiration %> GMT time</li><% if (executed){ %><li> Executed on:<%= executed %></li><% } %><% if (suspended){ %><li>Currently suspended</li><% } %><button class="edit" tradeId="<%= id %>">Edit</button>');
		

EditTradeView = Backbone.View.extend({
	el: '#singleTrade',

	
	events: { 
	 
	},

	
	
	

	initialize: function(passed) {hat = passed.thisModel;
		debugger
		this.$el.html(template(hat));

		// this works, but is the long way
	   	// this.$el.html('<div class="field"><label for="trade_valuation">Valuation</label> <br>Execute when Bitcoins are worth:<input id="trade_valuation" name="trade[valuation]" type="text" value='+hat.valuation+'></div>');

	},



	render: function(thisModel) {

		debugger
	 	this.$el.html(template(thisModel));
	 	
	},


	


});