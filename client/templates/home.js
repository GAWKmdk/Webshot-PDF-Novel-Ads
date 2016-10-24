Template.Home.events({
  'click .generate-pdf': function(e, tmpl) {
    e.preventDefault();
 
    Meteor.call('manual/generate_pdf', function(err, res) {
      if (err) {
	console.error(err);
      } else if (res) {
	window.open("data:application/pdf;base64, " + res);
      }
    })
  }
});

Template.Home.helpers({
  manual: function() {
    return Manual.find({}).fetch().reverse();
  }
});