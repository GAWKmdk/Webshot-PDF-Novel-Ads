Manual = new Mongo.Collection('manual');
 
Manual.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Title"
  },
  description: {
    type: String,
    label: "Version Summary"
  },
  image_url: {
    type: String,
    label: "Image URL"
  }
}));


Meteor.methods({
  'manual/generate_pdf': function() {
 
    if (Meteor.isServer) {
        
     // SETUP
// Grab required packages
var webshot = Meteor.npmRequire('webshot');
var fs      = Npm.require('fs');
var Future = Npm.require('fibers/future');
        
        var fut = new Future();
 
var fileName = "adlist-report.pdf";
        
        
        // GENERATE HTML STRING
 // check css file in /private
var css = Assets.getText('bootstrap.min.css');
 
SSR.compileTemplate('layout', Assets.getText('layout.html'));
 
Template.layout.helpers({
  getDocType: function() {
    return "<!DOCTYPE html>";
  }
});
 
SSR.compileTemplate('manual-advert', Assets.getText('manual-advert.html'));
 
// PREPARE DATA
var manual = Manual.find({});
var data = {
  manual: manual
}
 
var html_string = SSR.render('layout', {
  css: css,
  template: "manual-advert",
  data: data
});
 
console.log(html_string);
        
        
// Setup Webshot options
var options = {
  "paperSize": {
     "format": "Letter",
     "orientation": "portrait",
     "margin": "1cm"
   },
   siteType: 'html'
};        
    
// Commence Webshot
console.log("Commencing webshot...");
webshot(html_string, fileName, options, function(err) {
  fs.readFile(fileName, function (err, data) {
     if (err) {
        return console.log(err);
     }
 
     fs.unlinkSync(fileName);
     fut.return(data);
  });
});
            
let pdfData = fut.wait();
let base64String = new Buffer(pdfData).toString('base64');
 
return base64String;     
     
        
   //     
        
    }
 
  }
});