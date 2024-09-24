const locations = [
  {
    name: 'Apollo Pharma',
    address: '125 High Street, Reading, RG6 1PS',
    rating: 3,
    facilities: ['Consultation Rooms', 'Prescription Services', 'Over-the-Counter Medications'],
    coords: { lat: 51.455041, lng: -0.9690884 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '7:00am', closing: '7:00pm', closed: false },
      { days: 'Saturday', opening: '8:00am', closing: '5:00pm', closed: false },
      { days: 'Sunday', closed: true }
    ],
    reviews: [
      { author: 'Simon Holmes', rating: 5, timestamp: '2013-07-16', reviewText: 'What a great place. I can\'t say enough good things about it.' },
      { author: 'Charlie Chaplin', rating: 3, timestamp: '2013-06-16', reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.' }
    ]
  },
  {
    name: 'NetMeds',
    address: '50 Queen Street, Reading, RG1 1QW',
    rating: 4,
    facilities: ['Vaccinations', 'health Screening', 'Medication Reviews'],
    coords: { lat: 51.456042, lng: -0.970088 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '6:00am', closing: '6:00pm', closed: false },
      { days: 'Saturday', opening: '7:00am', closing: '5:00pm', closed: false },
      { days: 'Sunday', closed: true }
    ],
    reviews: [
      { author: 'Alice Smith', rating: 4, timestamp: '2013-07-20', reviewText: 'Great atmosphere and good coffee!' },
      { author: 'Bob Johnson', rating: 2, timestamp: '2013-06-25', reviewText: 'Service was slow, but the wifi worked well.' }
    ]
  },
  {
    name: 'HealthPlus Pharmacy',
    address: '200 King Street, Reading, RG1 2AA',
    rating: 5,
    facilities: ['Home delivery', 'Mobility Services', 'Compunding Services'],
    coords: { lat: 51.457042, lng: -0.971088 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '8:00am', closing: '8:00pm', closed: false },
      { days: 'Saturday', opening: '9:00am', closing: '6:00pm', closed: false },
      { days: 'Sunday', closed: true }
    ],
    reviews: [
      { author: 'John Doe', rating: 5, timestamp: '2013-08-10', reviewText: 'Excellent service and friendly staff.' },
      { author: 'Jane Roe', rating: 4, timestamp: '2013-08-15', reviewText: 'Good selection of products and fast wifi.' }
    ]
  },
  {
    name: 'Wellness Pharmacy',
    address: '300 Queen Street, Reading, RG1 3BB',
    rating: 4,
    facilities: ['Tele Health Services', 'Pastries', 'Free wifi'],
    coords: { lat: 51.458042, lng: -0.972088 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '7:00am', closing: '7:00pm', closed: false },
      { days: 'Saturday', opening: '8:00am', closing: '5:00pm', closed: false },
      { days: 'Sunday', closed: true }
    ],
    reviews: [
      { author: 'Emily Clark', rating: 4, timestamp: '2013-09-12', reviewText: 'Nice place with good coffee and wifi.' },
      { author: 'Michael Brown', rating: 3, timestamp: '2013-09-18', reviewText: 'Decent service but a bit crowded.' }
    ]
  },
  {
    name: 'Care Pharmacy',
    address: '400 Duke Street, Reading, RG1 4CC',
    rating: 3,
    facilities: ['Hot drinks', 'Snacks', 'Free wifi'],
    coords: { lat: 51.459042, lng: -0.973088 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '8:00am', closing: '8:00pm', closed: false },
      { days: 'Saturday', opening: '9:00am', closing: '6:00pm', closed: false },
      { days: 'Sunday', closed: true }
    ],
    reviews: [
      { author: 'David Smith', rating: 3, timestamp: '2013-10-20', reviewText: 'Average experience, but the wifi was good.' },
      { author: 'Sarah Johnson', rating: 4, timestamp: '2013-10-25', reviewText: 'Friendly staff and good coffee.' }
    ]
  },
  {
    name: 'MedPlus Pharmacy',
    address: '500 High Road, Reading, RG2 1JS',
    rating: 4,
    facilities: ['Hot drinks', 'Food', 'Wifi'],
    coords: { lat: 51.460042, lng: -0.974088 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '7:00am', closing: '7:00pm', closed: false },
      { days: 'Saturday', opening: '8:00am', closing: '5:00pm', closed: false },
      { days: 'Sunday', closed: true }
    ],
    reviews: [
      { author: 'Mary Holmes', rating: 4, timestamp: '2013-11-12', reviewText: 'Good location, nice staff.' },
      { author: 'Tom Jones', rating: 3, timestamp: '2013-11-15', reviewText: 'The wifi was a bit slow.' }
    ]
  },
  {
    name: 'LifePharma',
    address: '600 Duke Street, Reading, RG3 2PS',
    rating: 5,
    facilities: ['Free coffee', 'Snacks', 'Premium wifi'],
    coords: { lat: 51.461042, lng: -0.975088 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '6:30am', closing: '7:00pm', closed: false },
      { days: 'Saturday', opening: '7:30am', closing: '6:00pm', closed: false },
      { days: 'Sunday', closed: true }
    ],
    reviews: [
      { author: 'Lisa Brown', rating: 5, timestamp: '2013-12-02', reviewText: 'Fantastic service, very fast wifi.' },
      { author: 'Harry White', rating: 4, timestamp: '2013-12-10', reviewText: 'Great coffee and quiet environment.' }
    ]
  },
  {
    name: 'WellCare Pharmacy',
    address: '700 Main Street, Reading, RG4 3QS',
    rating: 4,
    facilities: ['Coffee', 'Pastries', 'Free wifi'],
    coords: { lat: 51.462042, lng: -0.976088 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '7:00am', closing: '7:00pm', closed: false },
      { days: 'Saturday', opening: '8:00am', closing: '5:00pm', closed: false },
      { days: 'Sunday', closed: true }
    ],
    reviews: [
      { author: 'Sam Hill', rating: 4, timestamp: '2014-01-08', reviewText: 'Nice atmosphere and friendly staff.' },
      { author: 'Anna Lee', rating: 3, timestamp: '2014-01-12', reviewText: 'Decent service, but slow wifi.' }
    ]
  },
  {
    name: 'CuraPharm',
    address: '800 Long Street, Reading, RG5 4WR',
    rating: 3,
    facilities: ['Snacks', 'Free wifi'],
    coords: { lat: 51.463042, lng: -0.977088 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '8:00am', closing: '6:00pm', closed: false },
      { days: 'Saturday', opening: '9:00am', closing: '5:00pm', closed: false },
      { days: 'Sunday', closed: true }
    ],
    reviews: [
      { author: 'George Carter', rating: 3, timestamp: '2014-02-10', reviewText: 'Good service, but nothing special.' },
      { author: 'Nina Stone', rating: 4, timestamp: '2014-02-15', reviewText: 'Nice place for a quick stop.' }
    ]
  }
]


// Home List Route
const homelist = (req, res) => {
  res.render('locations-list', {
    title: 'PharmaLoc8r - Find Your Nearest Pharmacy, Anytime, Anywhere',
    pageHeader: {
      title: 'PharmaLoc8r',
      strapline: 'Find Your Nearest Pharmacy, Anytime, Anywhere'


    },
    sidebar: "Searching for a pharmacy with great facilities? Our Pharmacy Locator helps you find the best spots for all your pharmaceutical needs...",
    locations: locations // Use the locations array directly
  });
};

// Location Info Route
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
      facilities: ['Consultation Rooms', 'Prescription Services', 'Over-the-Counter Medications'],
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


// Add Review Page
const addReview = (req, res) => {
  res.render('location-review-form', {
    title: 'Review on Loc8r',
    pageHeader: { title: 'Add Your Review' }
  });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};
