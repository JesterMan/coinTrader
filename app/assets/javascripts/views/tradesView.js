

TradesView = Backbone.View.extend({
    el: '#trade-view',


    initialize: function() {
        this.collection.on("reset", this.render, this);
        this.collection.on("add", this.renderOne, this);

    },
    currentEditing: null,

    render: function() {
        this.$el.html('');
        var that = this;
        this.collection.each(function(info) {
             that.$el.append(new TradeView({model: info}).render().$el);
        });
    },

    renderOne: function(newGuy){
        new TradeView({model: newGuy}).render().$el;
    }



});