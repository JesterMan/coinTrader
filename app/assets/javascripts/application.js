// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone
//= require backbone_rails_sync
//= require_tree ./models
//= require_tree ../Templates
//= require_tree ./views
//= require ejs


// Rails CSRF Protection
$(document).ajaxSend(function (e, xhr, options) {
  var token = $("meta[name='csrf-token']").attr("content");
  xhr.setRequestHeader("X-CSRF-Token", token);
});

// Underscore.js Template Settings use {{ }} and {{= }}  instead of <% %> and <%= %>

_.templateSettings = {
    interpolate: /{{=(.+?)}}/g,
    evaluate: /{{(.+?)}}/g
};

// Routing Based on URL
Router = {
  '/signup': function() { new SignupView(); },
  '/login': function() { new LoginView(); },
  '/trades/new': function() {new SingleTradeView},
 
  route: function (path) {
    _.each(Router, function(callback, route) {
      if (!_.isRegExp(route)) {
        route = Backbone.Router.prototype._routeToRegExp(route);
      }
      if(route.test(path)) {
        var args = Backbone.Router.prototype._extractParameters(route, path);
        callback.apply(this, args);
      }
    });
  }
};
 
// Start the app when the page has loaded.
$(document).ready(function () {
  Router.route(window.location.pathname);
  Trades = new TradeHistory;
  new SingleTradeView({collection: Trades});
  new TradesView({collection: Trades});
  Trades.fetch();
});

