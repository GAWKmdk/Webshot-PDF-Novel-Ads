// lib/router.js
FlowRouter.route('/', {
  action: function(params, queryParams) {
    BlazeLayout.render("Home");
  }
});