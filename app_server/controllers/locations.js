/* GET 'home' page */
/* GET 'home' page */
const homelist = (req, res) => {
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'PharmaLoc8r',
      strapline: 'Find the way here!'
    },
    sidebar: "Searching for a pharmacy with great facilities? Our Pharmacy Locator helps you find the best spots for all your pharmaceutical needs. Whether you’re looking for a place with free wifi, hot drinks, or a comfortable seating area, we’ve got you covered. Let our service guide you to the perfect pharmacy that meets your requirements.",
    locations: [
      {
        name: 'Apollo Pharma',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        coords: { lat: 51.455041, lng: -0.9690884 },
        openingTimes: [
          {
            days: 'Monday - Friday',
            opening: '7:00am',
            closing: '7:00pm',
            closed: false
          },
          {
            days: 'Saturday',
            opening: '8:00am',
            closing: '5:00pm',
            closed: false
          },
          {
            days: 'Sunday',
            closed: true
          }
        ],
        reviews: [
          {
            author: 'Simon Holmes',
            rating: 5,
            timestamp: '16 July 2013',
            reviewText: 'What a great place. I can\'t say enough good things about it.'
          },
          {
            author: 'Charlie Chaplin',
            rating: 3,
            timestamp: '16 June 2013',
            reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
          }
        ]
      },
      {
        name: 'NetMeds',
        address: '50 Queen Street, Reading, RG1 1QW',
        rating: 4,
        facilities: ['Coffee', 'Pastries', 'Free wifi'],
        coords: { lat: 51.456042, lng: -0.970088 },
        openingTimes: [
          {
            days: 'Monday - Friday',
            opening: '6:00am',
            closing: '6:00pm',
            closed: false
          },
          {
            days: 'Saturday',
            opening: '7:00am',
            closing: '5:00pm',
            closed: false
          },
          {
            days: 'Sunday',
            closed: true
          }
        ],
        reviews: [
          {
            author: 'Alice Smith',
            rating: 4,
            timestamp: '20 July 2013',
            reviewText: 'Great atmosphere and good coffee!'
          },
          {
            author: 'Bob Johnson',
            rating: 2,
            timestamp: '25 June 2013',
            reviewText: 'Service was slow, but the wifi worked well.'
          }
        ]
      },
      {
        name: 'HealthPlus Pharmacy',
        address: '200 King Street, Reading, RG1 2AA',
        rating: 5,
        facilities: ['Hot drinks', 'Snacks', 'Free wifi'],
        coords: { lat: 51.457042, lng: -0.971088 },
        openingTimes: [
          {
            days: 'Monday - Friday',
            opening: '8:00am',
            closing: '8:00pm',
            closed: false
          },
          {
            days: 'Saturday',
            opening: '9:00am',
            closing: '6:00pm',
            closed: false
          },
          {
            days: 'Sunday',
            closed: true
          }
        ],
        reviews: [
          {
            author: 'John Doe',
            rating: 5,
            timestamp: '10 August 2013',
            reviewText: 'Excellent service and friendly staff.'
          },
          {
            author: 'Jane Roe',
            rating: 4,
            timestamp: '15 August 2013',
            reviewText: 'Good selection of products and fast wifi.'
          }
        ]
      },
      {
        name: 'Wellness Pharmacy',
        address: '300 Queen Street, Reading, RG1 3BB',
        rating: 4,
        facilities: ['Coffee', 'Pastries', 'Free wifi'],
        coords: { lat: 51.458042, lng: -0.972088 },
        openingTimes: [
          {
            days: 'Monday - Friday',
            opening: '7:00am',
            closing: '7:00pm',
            closed: false
          },
          {
            days: 'Saturday',
            opening: '8:00am',
            closing: '5:00pm',
            closed: false
          },
          {
            days: 'Sunday',
            closed: true
          }
        ],
        reviews: [
          {
            author: 'Emily Clark',
            rating: 4,
            timestamp: '12 September 2013',
            reviewText: 'Nice place with good coffee and wifi.'
          },
          {
            author: 'Michael Brown',
            rating: 3,
            timestamp: '18 September 2013',
            reviewText: 'Decent service but a bit crowded.'
          }
        ]
      },
      {
        name: 'Care Pharmacy',
        address: '400 Duke Street, Reading, RG1 4CC',
        rating: 3,
        facilities: ['Hot drinks', 'Snacks', 'Free wifi'],
        coords: { lat: 51.459042, lng: -0.973088 },
        openingTimes: [
          {
            days: 'Monday - Friday',
            opening: '8:00am',
            closing: '8:00pm',
            closed: false
          },
          {
            days: 'Saturday',
            opening: '9:00am',
            closing: '6:00pm',
            closed: false
          },
          {
            days: 'Sunday',
            closed: true
          }
        ],
        reviews: [
          {
            author: 'David Smith',
            rating: 3,
            timestamp: '20 October 2013',
            reviewText: 'Average experience, but the wifi was good.'
          },
          {
            author: 'Sarah Johnson',
            rating: 4,
            timestamp: '25 October 2013',
            reviewText: 'Friendly staff and good coffee.'
          }
        ]
      },
      {
        name: 'PharmaCare',
        address: '500 Prince Street, Reading, RG1 5DD',
        rating: 5,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        coords: { lat: 51.460042, lng: -0.974088 },
        openingTimes: [
          {
            days: 'Monday - Friday',
            opening: '7:00am',
            closing: '7:00pm',
            closed: false
          },
          {
            days: 'Saturday',
            opening: '8:00am',
            closing: '5:00pm',
            closed: false
          },
          {
            days: 'Sunday',
            closed: true
          }
        ],
        reviews: [
          {
            author: 'Anna Lee',
            rating: 5,
            timestamp: '30 November 2013',
            reviewText: 'Fantastic place with great service.'
          },
          {
            author: 'James Wilson',
            rating: 4,
            timestamp: '5 December 2013',
            reviewText: 'Good food and fast wifi.'
          }
        ]
      },
      {
        name: 'MediPlus Pharmacy',
        address: '600 King Street, Reading, RG1 6EE',
        rating: 4,
        facilities: ['Coffee', 'Pastries', 'Free wifi'],
        coords: { lat: 51.461042, lng: -0.975088 },
        openingTimes: [
          {
            days: 'Monday - Friday',
            opening: '6:00am',
            closing: '6:00pm',
            closed: false
          },
          {
            days: 'Saturday',
            opening: '7:00am',
            closing: '5:00pm',
            closed: false
          },
          {
            days: 'Sunday',
            closed: true
          }
        ],
        reviews: [
          {
            author: 'Laura Green',
            rating: 4,
            timestamp: '10 December 2013',
            reviewText: 'Nice atmosphere and good coffee.'
          },
          {
            author: 'Robert White',
            rating: 3,
            timestamp: '15 December 2013',
            reviewText: 'Service was okay, but the wifi was excellent.'
          }
        ]
      },
      {
        name: 'HealthFirst Pharmacy',
        address: '700 Queen Street, Reading, RG1 7FF',
        rating: 3,
        facilities: ['Hot drinks', 'Snacks', 'Free wifi'],
        coords: { lat: 51.462042, lng: -0.976088 },
        openingTimes: [
          {
            days: 'Monday - Friday',
            opening: '8:00am',
            closing: '8:00pm',
            closed: false
          },
          {
            days: 'Saturday',
            opening: '9:00am',
            closing: '6:00pm',
            closed: false
          },
          {
            days: 'Sunday',
            closed: true
          }
        ],
        reviews: [
          {
            author: 'Chris Martin',
            rating: 3,
            timestamp: '20 December 2013',
            reviewText: 'Average place, but the wifi was good.'
          },
          {
            author: 'Jessica Brown',
            rating: 4,
            timestamp: '25 December 2013',
            reviewText: 'Friendly staff and good coffee.'
          }
        ]
      }
    ]
  });
};

module.exports = { homelist };

  /* GET 'Location info' page */
  const locationInfo = function(req, res) {
    res.render('location-info', {
      title: 'Appolo Pharma',
      pageHeader: { title: 'Appolo Pharma' },
      sidebar: {
        context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
        callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
      },
      location: {
        name: 'Appolo Pharma',
        address: '4-106/C, Annojiguda, Hyderabad, Telangana 501301 ',
        rating: 2.5,
        facilities: ['Consultation Rooms', 'Snacks and Pastries', 'Home Delivery'],
        coords: { lat: 51.455041, lng: -0.9690884 },
        openingTimes: [
          {
            days: 'Monday - Friday',
            opening: '8:00am',
            closing: '9:00pm',
            closed: false
          },
          {
            days: 'Saturday',
            opening: '9:00am',
            closing: '9:00pm',
            closed: false
          },
          {
            days: 'Sunday',
            opening: '11:00am',
            closing: '5:00pm',
            closed: false
          }
        ],
        reviews: [
          {
            author: '     Chandra Mouli    ',
            rating: 1,
            timestamp: '16 August 2013',
            reviewText: 'Worst service after taking there…Worst service after taking there membership and paying there doctor on call still from 2 days for a childs medication they are with excuses and no one calls horrible'
          },
          {
            author: '    Shreyansh Bachu           ' ,
            rating: 2,
            timestamp: '16 June 2013',
            reviewText: 'One of the most ROTTEN medical stores…One of the most ROTTEN medical stores in town.... Very dirty and ILL MANNERED so called staff.... I wouldnt visit those morons even if am dying 😡'
          }
        ]
      }
    });
  };
  
  /* GET 'Add review' page */
  const addReview = function(req, res) {
    res.render('location-review-form', {
      title: 'Review Starcups on Loc8r',
      pageHeader: { title: 'Review Starcups' }
    });
  };
  
  module.exports = {
    homelist,
    locationInfo,
    addReview
};