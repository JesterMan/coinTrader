TradeView = Backbone.View.extend({

   events: { 'click .edit'     : 'edit'},

    template: _.template(' <div class="cleaner"></div><div class="templatemo_h_line_2"></div><div class="field"><ul> <li class="trade_id"> Trade ID:<b> <%= id %></b> </li> <li>Type of trade:<%= action_type %></li><li>Execute when Bitcoins are worth:<b><%= valuation %></b></li><li>Amount to be traded:<b><%= amount %></b></li></li><li>Expires:<%= expiration %> GMT time</li><% if (executed){ %><li> Executed on:<%= executed %></li><% } %><% if (suspended){ %><li><b>Currently suspended</li><b/><% } %><button class="edit" tradeId="<%= id %>">Edit</button>'),

    
    edit: function(){
      debugger
      if (window.currentEditing) {
        window.currentEditing.remove();
      }
        $('#templatemo_right_section').append('<div id="singleTrade"></div>');
        window.currentEditing = new EditTradeView({model: this.model});

    },

    render: function(){
       this.$el.html(this.template(this.model.toJSON() ));
       return this;
    },

    initialize: function(){
        this.model.on("change", this.render, this);
        this.model.on("destroy", this.remove, this);
    }


});



