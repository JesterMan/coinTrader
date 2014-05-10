

TradeView = Backbone.View.extend({
	el: '#trade-view',
	events: { 'click .edit' 	: 'edit',},

	template: _.template(' <div class="cleaner"></div><div class="templatemo_h_line_2"></div><div class="field"><ul> <li> Trade ID:<b> <%= id %></b> </li> <li>Type of trade:<%= action_type %></li><li>Execute when Bitcoins are worth:<b><%= valuation %></b></li><li>Amount to be traded:<b><%= amount %></b></li></li><li>Expires:<%= expiration %> GMT time</li><% if (executed){ %><li> Executed on:<%= executed %></li><% } %><% if (suspended){ %><li><b>Currently suspended</li><b/><% } %><button class="edit" tradeId="<%= id %>">Edit</button>'),

	
	edit: function(pass){
		var tit = Number(pass.target.attributes[1].nodeValue)-1;
		
		new EditTradeView({thisModel: this.collection.toJSON()[tit]});
		console.log(tit);
	
	},


	initialize: function() {
	    this.collection = new TradeHistory();
	    this.collection.fetch();
	    this.collection.on("reset", this.render, this) 
	},

	render: function() {
	 	this.$el.html('');
	 	that = this;
	 	this.collection.each(function(info) {
			 that.$el.append(that.template(info.toJSON()));
    	});
	},


	


});