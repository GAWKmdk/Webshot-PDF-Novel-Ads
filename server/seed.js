Meteor.startup(function() {
  if (Manual.find().count() < 1) {
    var manual = [
      {
        name: 'Designing Interactions - Bill Moggridge',
        description: ' Moggridge tells the story of his own design process and explains the focus on people and prototypes that has been successful at IDEO -- telling us these stories from an industry insiders viewpoint, tracing the evolution of ideas from inspiration to outcome.',
        image_url: 'https://images-eu.ssl-images-amazon.com/images/I/513J2HdGHgL.jpg'
      },
      {
        name: 'Onward Search - S',
        description: 'Talent Recruitment and Creative Marketing in the Global Cloud Market -- interviews -- including Will Wright, creator of The Sims, Larry Page and Sergey Brin, the founders of Google',
        image_url: 'https://images-eu.ssl-images-amazon.com/images/I/51kGMopO71L.png'
      },
      {
        name: 'Impact Mapping',
        description: 'Software is everywhere today, but countless software products and teams die a slow death without ever making any impact. The result is a tremendous amount of time and money wasted on wrong assumptions, lack of clarity, poor communication of objectives, lack of training and misalignment with overall relationship between people and technology.',
        image_url: 'https://images-eu.ssl-images-amazon.com/images/I/51xux8YnPXL._SX260_.jpg'
      },
      {
        name: 'Mapping Experiences',
        description: '"Mapping Experiences" is a thoughtful, intentional work on mapping experiences to ensure stakeholder alignment and to create an actionable launching pad to strategy and design. If you re involved in design projects, create value for clients or want a deeper customer experience from a marketing perspective -- definitely read this book !',
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/51It1NWx%2BHL._SY402_BO1,204,203,200_.jpg'
      },
      {
        name: 'Expérience d utilisateur mobile : UX design pour smartphones et tablettes',
        description: 'Un livre de reference pour les concepteurs de services mobile. Materiel modele protege par le driot d auteur.',
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/51YLVdZmy2L._SX390_BO1,204,203,200_.jpg'
      },
      {
        name: 'VR UX: Learn VR UX, Storytelling & Design ',
        description: 'If you are looking to get into VR design, UX or storytelling, this is your first stop. Its a lean 100-page approach to the roots of a VR experience based on the current technology stack.',
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/41l5c7ZOPqL._SX326_BO1,204,203,200_.jpg'
      }
    ];
 
    manual.forEach(function(manual) {
      Manual.insert(manual);
    });
  }
});