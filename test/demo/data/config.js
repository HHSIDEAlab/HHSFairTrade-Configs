module.exports = {
  url: 'http://localhost:1337/api',
  user: {
    username: 'midas',
    password: 'midas'
  },
  tags: {
    // Required for opportunity defaults
    {
      type: 'task-time-required',
      name: 'Part Time'
    },
    {
      type: 'task-time-required',
      name: 'Full Time'
    },
    {
      type: 'task-time-required',
      name: '20% Time'
    },
    // ------------
    {
      type: 'task-people',
      name: '1 person'
    },
    {
      type: 'task-people',
      name: '2 - 5 people'
    },
    {
      type: 'task-people',
      name: '> 5 people'
    },
    {
      type: 'task-people',
      name: 'A Team'
    },
    // ------------
    {
      type: 'task-skills-required',
      name: 'Required'
    },
    {
      type: 'task-skills-required',
      name: 'Not Required'
    },
    // ------------
    {
      type: 'task-length',
      name: '1 Day'
    },
    {
      type: 'task-length',
      name: '1 - 3 Days'
    },
    {
      type: 'task-length',
      name: '1 Week'
    },
    {
      type: 'task-length',
      name: '1 Month'
    },
    {
      type: 'task-length',
      name: 'A Few Months'
    },
    // -------------
    {
      type: 'task-time-estimate',
      name: 'Less than 1 hour'
    },
    {
      type: 'task-time-estimate',
      name: '1 - 3 hours'
    },
    {
      type: 'task-time-estimate',
      name: '4 - 8 hours'
    },
    {
      type: 'task-time-estimate',
      name: '9 - 24 hours'
    },
    {
      type: 'task-time-estimate',
      name: '25 - 40 hours'
    },
    {
      type: 'task-time-estimate',
      name: 'longer than 40 hours'
    },
  // default skills
  {
    type: 'skill',
    name: 'Management'
  },
 {
    type: 'skill',
    name: 'Project Management'
  },
 {
    type: 'skill',
    name: 'Recruiting'
  },
 {
    type: 'skill',
    name: 'Social Media'
  },
 {
    type: 'skill',
    name: 'Marketing'
  },
 {
    type: 'skill',
    name: 'Web Development'
  },
  {
    type: 'skill',
    name: 'Speech Writing'
  },
 {
    type: 'skill',
    name: 'Training'
  },
   {
    type: 'skill',
    name: 'Research'
  },
   {
    type: 'skill',
    name: 'Training'
  },
   {
    type: 'skill',
    name: 'Public Speaking'
  },
  {
    type: 'skill',
    name: 'Foreign Language'

  },
   {
    type: 'skill',
    name: 'Event Planning'
  },
   {
    type: 'skill',
    name: 'Sign language'
  },
   {
    type: 'skill',
    name: 'Data entry'
  },
   {
    type: 'skill',
    name: 'ESOL'
  },
   {
    type: 'skill',
    name: 'Technology'
  },
   {
    type: 'skill',
    name: 'Strategic Planning'
  },
   {
    type: 'skill',
    name: 'Financial'
  },
   {
    type: 'skill',
    name: 'Policy'
  },
   {
    type: 'skill',
    name: 'Graphic Design'
  },
   {
    type: 'skill',
    name: 'Legislative'
  },
  {
    type: 'skill',
    name: 'Administrative'
  },
   {
    type: 'skill',
    name: 'Other'
  },
   {
    type: 'skill',
    name: 'Audio & Video'
  },
   {
    type: 'skill',
    name: 'Grant writing'
   },
//default topics
   {
    type: 'topic',
    name: 'Global Affairs'
  },
   {
    type: 'topic',
    name: 'Workforce Development'
  },
   {
    type: 'topic',
    name: 'Sustainability'
  },
   {
    type: 'topic',
    name: 'Healthcare'
   },
   {
    type: 'topic',
    name: 'CommunityHealth'
  },
   {
    type: 'topic',
    name: 'Education'
  },
   {
    type: 'topic',
    name: 'Nutrition'
  },
   {
    type: 'topic',
    name: 'Science'
  },
  {
    type: 'topic',
    name: 'Open Data'
  },
  {
    type: 'topic',
    name: 'Small Business'
  },
  {
    type: 'topic',
    name: 'Children & Families'
  },
  {
    type: 'topic',
    name: 'Current Events'
   },
   {
    type: 'topic',
    name: 'Policy'
   },
     {
    type: 'topic',
    name: 'Legislative'
   },
    {
    type: 'topic',
    name: 'Women\'s Health'
   },
     {
    type: 'topic',
    name: 'Data'
   },
      {
    type: 'topic',
    name: 'InformationTechnology'
   },
     {
    type: 'topic',
    name: 'Business Process'
   },
     {
    type: 'topic',
    name: 'Legislative'
   },
    {
    type: 'topic',
    name: 'Records Management'
   },
// agency tags
   {
    type: 'agency',
    name: 'Office of the Secretary (OS including the StaffDivs)'
  },
   {
    type: 'agency',
    name: 'Administration for Children and Families (ACF)'
  },
   {
    type: 'agency',
    name: 'Administration for Community Living (ACL)'
  },
   {
    type: 'agency',
    name: 'Agency for Healthcare Research and Quality (AHRQ)'
  },
  {
    type: 'agency',
    name: 'Centers for Disease Control and Prevention (CDC)'
  },
   {
    type: 'agency',
    name: 'Centers for Medicare & Medicaid Services'
  },
  {
    type: 'agency',
    name: 'Food and Drug Administration (FDA)'
  },
   {
    type: 'agency',
    name: 'Health Resources and Services Administration (HRSA)'
  },
   {
    type: 'agency',
    name: 'Indian Health Service (IHS)'
  },
   {
    type: 'agency',
    name: 'National Institutes of Health (NIH)'
  },
   {
    type: 'agency',
    name: 'Substance Abuse and Mental Health Services Administration (SAMHSA)'
  },
//location tags
   {
    type: 'location',
    name: 'Afghanistan'
  },
 {
    type: 'location',
    name: 'Akrotiri'
  },
   {
    type: 'location',
    name: 'Albania'
  },
  {
    type: 'location',
    name: 'Algeria'
  },
   {
    type: 'location',
    name: 'American Samoa'
  },
   {
    type: 'location',
    name: 'Andorra'
  },
   {
    type: 'location',
    name: 'Angola'
  },
   {
    type: 'location',
    name: 'Anguilla'
  },
   {
    type: 'location',
    name: 'Antarctica'
  },
   {
    type: 'location',
    name: 'Argentina'
  },
   {
    type: 'location',
    name: 'Armenia'
  },
  {
    type: 'location',
    name: 'Aruba'
  },
   {
    type: 'location',
    name: 'Ashmore and Cartier Islands'
  },
   {
    type: 'location',
    name: 'Australia'
  },
  {
    type: 'location',
    name: 'Austria'
  },
  {
    type: 'location',
    name: 'Azerbaijan'
  },
  {
    type: 'location',
    name: 'Bahamas, The'
  },
  {
    type: 'location',
    name: 'Bahrain'
  },
   {
    type: 'location',
    name: 'Barbados'
  },
   {
    type: 'location',
    name: 'Bangladesh'
  },
   {
    type: 'location',
    name: 'Bassas da India'
  },
   {
    type: 'location',
    name: 'Belarus'
  },
   {
    type: 'location',
    name: 'Belgium'
  },
   {
    type: 'location',
    name: 'Belize'
  },
   {
    type: 'location',
    name: 'Belize'
  },
   {
    type: 'location',
    name: 'Bermuda'
  },
   {
    type: 'location',
    name: 'Bhutan'
  },
  {
    type: 'location',
    name: 'Bolivia'
  },
   {
    type: 'location',
    name: 'Bonaire, Sint Eustatius and Saba'
  },
  {
    type: 'location',
    name: 'Bosnia and Herzegovina'
  },
   {
    type: 'location',
    name: 'Botswana'
  },
   {
    type: 'location',
    name: 'Bouvet Island'
  },
  {
    type: 'location',
    name: 'Brazil'
  },
   {
    type: 'location',
    name: 'British Indian Ocean Territory'
  },
   {
    type: 'location',
    name: 'British Virgin Islands'
  },
   {
    type: 'location',
    name: 'Brunei'
  },
   {
    type: 'location',
    name: 'Bulgaria'
  },
   {
    type: 'location',
    name: 'Burkina Faso'
  },
  {
    type: 'location',
    name: 'Burma'
  },
   {
    type: 'location',
    name: 'Burundi'
  },
  {
    type: 'location',
    name: 'Cabo Verde'
  },
  {
    type: 'location',
    name: 'Cambodia'
  },
   {
    type: 'location',
    name: 'Cameroon'
  },
  {
    type: 'location',
    name: 'Canada'
  },
   {
    type: 'location',
    name: 'Cayman Islands'
  },
  {
    type: 'location',
    name: 'Central African Republic'
  },
  {
    type: 'location',
    name: 'Chile'
  },
  {
    type: 'location',
    name: 'China'
  },
   {
    type: 'location',
    name: 'Christmas Island'
  },
  {
    type: 'location',
    name: 'Clipperton Island'
  },
   {
    type: 'location',
    name: 'Cocos (Keeling) Islands'
  },
   {
    type: 'location',
    name: 'Colombia'
  },
   {
    type: 'location',
    name: 'Comoros'
  },
  {
    type: 'location',
    name: 'Congo (Brazzaville)'
  },
   {
    type: 'location',
    name: 'Congo (Kinshasa)'
  },
  {
    type: 'location',
    name: 'Coral Sea Islands'
  },
   {
    type: 'location',
    name: 'Astapor'
  },
   {
    type: 'location',
    name: 'Costa Rica'
  },
   {
    type: 'location',
    name: 'Croatia'
  },
  {
    type: 'location',
    name: 'Cuba'
  },
   {
    type: 'location',
    name: 'Curacao'
  },
   {
    type: 'location',
    name: 'Cyprus'
  },
   {
    type: 'location',
    name: 'Czech Republic'
  },
  {
    type: 'location',
    name: 'Denmark'
  },
   {
    type: 'location',
    name: 'Dhekelia'
  },
  {
    type: 'location',
    name: 'Djibouti'
  },
  {
    type: 'location',
    name: 'Dominica'
  },
  {
    type: 'location',
    name: 'Dominican Republic'
  },
   {
    type: 'location',
    name: 'Ecuador'
  },
   {
    type: 'location',
    name: 'Egypt'
  },
   {
    type: 'location',
    name: 'El Salvador'
  },
   {
    type: 'location',
    name: 'Equatorial Guinea'
  },
  {
    type: 'location',
    name: 'Eritrea'
  },
  {
    type: 'location',
    name: 'Estonia'
  },
   {
    type: 'location',
    name: 'Ethiopia'
  },
  {
    type: 'location',
    name: 'Europa Island'
  },
  {
    type: 'location',
    name: 'Falkland Islands (Islas Malvinas)'
  },
  {
    type: 'location',
    name: 'Faroe Islands'
  },
  {
    type: 'location',
    name: 'Fiji'
  },
   {
    type: 'location',
    name: 'Finland'
  },
  {
    type: 'location',
    name: 'France'
  },
  {
    type: 'location',
    name: 'French Guiana'
  },
   {
    type: 'location',
    name: 'French Polynesia'
  },
  {
    type: 'location',
    name: 'French Southern and Antarctic Lands'
  },
   {
    type: 'location',
    name: 'Gambia, The'
  },
  {
    type: 'location',
    name: 'Gaza Strip'
  },
  {
    type: 'location',
    name: 'Georgia'
  },
   {
    type: 'location',
    name: 'Germany'
  },
  {
    type: 'location',
    name: 'Ghana'
  },
  {
    type: 'location',
    name: 'Gibraltar'
  },
  {
    type: 'location',
    name: 'Glorioso Islands'
  },
   {
    type: 'location',
    name: 'Greece'
  },
  {
    type: 'location',
    name: 'Greenland'
  },
  {
    type: 'location',
    name: 'Grenada'
  },
  {
    type: 'location',
    name: 'Guadeloupe'
  },
  {
    type: 'location',
    name: 'Guatemala'
  },
  {
    type: 'location',
    name: 'Guernsey'
  },
  {
    type: 'location',
    name: 'Guinea'
  },
  {
    type: 'location',
    name: 'Guinea-Bissau'
  },
  {
    type: 'location',
    name: 'Guyana'
  },
  {
    type: 'location',
    name: 'Haiti'
  },
  {
    type: 'location',
    name: 'Heard Island and McDonald Islands'
  },
  {
    type: 'location',
    name: 'Honduras'
  },
   {
    type: 'location',
    name: 'Hong Kong'
  },
   {
    type: 'location',
    name: 'Hungary'
  },
  {
    type: 'location',
    name: 'Iceland'
  },
  {
    type: 'location',
    name: 'India'
  },
  {
    type: 'location',
    name: 'Indonesia'
  },
  {
    type: 'location',
    name: 'Iran'
  },
  {
    type: 'location',
    name: 'Iraq'
  },
  {
    type: 'location',
    name: 'Ireland'
  },
   {
    type: 'location',
    name: 'Isle of Man'
  },
  {
    type: 'location',
    name: 'Israel'
  },
   {
    type: 'location',
    name: 'Italy'
  },
   {
    type: 'location',
    name: 'Jamaica'
  },
   {
    type: 'location',
    name: 'Jan Mayen'
  },
   {
    type: 'location',
    name: 'Japan'
  },
   {
    type: 'location',
    name: 'Jersey'
  },
   {
    type: 'location',
    name: 'Jordan'
  },
   {
    type: 'location',
    name: 'Juan de Nova Island'
  },
  {
    type: 'location',
    name: 'Kazakhstan'
  },
   {
    type: 'location',
    name: 'Kenya'
  },
  {
    type: 'location',
    name: 'Kiribati'
  },
  {
    type: 'location',
    name: 'North Korea'
  },
   {
    type: 'location',
    name: 'South Korea'
  },
  {
    type: 'location',
    name: 'Kosovo'
  },
  {
    type: 'location',
    name: 'Kuwait'
  },
   {
    type: 'location',
    name: 'Kyrgyzstan'
  },
   {
    type: 'location',
    name: 'Laos'
  },
   {
    type: 'location',
    name: 'Latvia'
  },
   {
    type: 'location',
    name: 'Lebanon'
  },
   {
    type: 'location',
    name: 'Lesotho'
  },
  {
    type: 'location',
    name: 'Liberia'
  },
  {
    type: 'location',
    name: 'Libya'
  },
   {
    type: 'location',
    name: 'Liechtenstein'
  },
   {
    type: 'location',
    name: 'Lithuania'
  },
   {
    type: 'location',
    name: 'Luxembourg'
  },
   {
    type: 'location',
    name: 'Macau'
  },
   {
    type: 'location',
    name: 'Macedonia'
  },
   {
    type: 'location',
    name: 'Madagascar'
  },
  {
    type: 'location',
    name: 'Malawi'
  },
   {
    type: 'location',
    name: 'Malaysia'
  },
  {
    type: 'location',
    name: 'Maldives'
  },
  {
    type: 'location',
    name: 'Mali'
  },
  {
    type: 'location',
    name: 'Malta'
  },
  {
    type: 'location',
    name: 'Marshall Islands'
  },
  {
    type: 'location',
    name: 'Martinique'
  },
   {
    type: 'location',
    name: 'Mauritania'
  },
  {
    type: 'location',
    name: 'Mauritius'
  },
   {
    type: 'location',
    name: 'Mayotte'
  },
  {
    type: 'location',
    name: 'Mexico'
  },
  {
    type: 'location',
    name: 'Micronesia'
  },
  {
    type: 'location',
    name: 'Moldova'
  },
   {
    type: 'location',
    name: 'Monaco'
  },
   {
    type: 'location',
    name: 'Mongolia'
  },
  {
    type: 'location',
    name: 'Montenegro'
  },
   {
    type: 'location',
    name: 'Montserrat'
  },
   {
    type: 'location',
    name: 'Morocco'
  },
   {
    type: 'location',
    name: 'Mozambique'
  },
  {
    type: 'location',
    name: 'Namibia'
  },
  {
    type: 'location',
    name: 'Nauru'
  },
  {
    type: 'location',
    name: 'Nepal'
  },
  {
    type: 'location',
    name: 'Netherlands'
  },
  {
    type: 'location',
    name: 'Netherlands Antilles'
  },
  {
    type: 'location',
    name: 'New Caledonia'
  },
  {
    type: 'location',
    name: 'New Zealand'
  },
   {
    type: 'location',
    name: 'Nicaragua'
  },
  {
    type: 'location',
    name: 'Niger'
  },
   {
    type: 'location',
    name: 'Nigeria'
  },
   {
    type: 'location',
    name: 'Niue'
  },
   {
    type: 'location',
    name: 'Norfolk Island'
  },
   {
    type: 'location',
    name: 'Northern Mariana Islands'
  },
   {
    type: 'location',
    name: 'Norway'
  },
   {
    type: 'location',
    name: 'Oman'
  },
   {
    type: 'location',
    name: 'Pakistan'
  },
   {
    type: 'location',
    name: 'Palau'
  },
   {
    type: 'location',
    name: 'Panama'
  },
   {
    type: 'location',
    name: 'Papua New Guinea'
  },
   {
    type: 'location',
    name: 'Paracel Islands'
  },
  {
    type: 'location',
    name: 'Paraguay'
  },
   {
    type: 'location',
    name: 'Peru'
  },
   {
    type: 'location',
    name: 'Philippines'
  },
  {
    type: 'location',
    name: 'Poland'
  },
   {
    type: 'location',
    name: 'Portugal'
  },
   {
    type: 'location',
    name: 'Puerto Rico'
  },
   {
    type: 'location',
    name: 'Qatar'
  },
  {
    type: 'location',
    name: 'Reunion'
  },
    {
    type: 'location',
    name: 'Romania'
  },
   {
    type: 'location',
    name: 'Russia'
  },
   {
    type: 'location',
    name: 'Rwanda'
  },
   {
    type: 'location',
    name: 'Saint Helena, Ascension, and Tristan da Cunha'
  },
   {
    type: 'location',
    name: 'Saint Kitts and Nevis'
  },
  {
    type: 'location',
    name: 'Saint Lucia'
  },
   {
    type: 'location',
    name: 'Saint Pierre and Miquelon'
  },
  {
    type: 'location',
    name: 'Saint Vincent and the Grenadines'
  },
   {
    type: 'location',
    name: 'Samoa'
  },
    {
    type: 'location',
    name: 'San Marino'
  },
   {
    type: 'location',
    name: 'Sao Tome and Principe'
  },
   {
    type: 'location',
    name: 'Saudi Arabia'
  },
  {
    type: 'location',
    name: 'Senegal'
  },
    {
    type: 'location',
    name: 'Serbia'
  },
    {
    type: 'location',
    name: 'Seychelles'
  },
   {
    type: 'location',
    name: 'Sierra Leone'
  },
    {
    type: 'location',
    name: 'Singapore'
  },
   {
    type: 'location',
    name: 'Sint Maarten'
  },
    {
    type: 'location',
    name: 'Slovakia'
  },
    {
    type: 'location',
    name: 'Slovenia'
  },
    {
    type: 'location',
    name: 'Solomon Islands'
  },
   {
    type: 'location',
    name: 'Somalia'
  },
    {
    type: 'location',
    name: 'South Africa'
  },
   {
    type: 'location',
    name: 'South Georgia and the South Sandwich Islands'
  },
   {
    type: 'location',
    name: 'South Sudan'
  },
   {
    type: 'location',
    name: 'Spratly Islands'
  },
    {
    type: 'location',
    name: 'Sri Lanka'
  },
   {
    type: 'location',
    name: 'Sudan'
  },
  {
    type: 'location',
    name: 'Suriname'
  },
    {
    type: 'location',
    name: 'Swaziland'
  },
   {
    type: 'location',
    name: 'Sweden'
  },
   {
    type: 'location',
    name: 'Switzerland'
  },
     {
    type: 'location',
    name: 'Syria'
  },
  {
    type: 'location',
    name: 'Taiwan'
  },
    {
    type: 'location',
    name: 'Tajikistan'
  },
  {
    type: 'location',
    name: 'Tanzania'
  },
   {
    type: 'location',
    name: 'Thailand'
  },
    {
    type: 'location',
    name: 'Timor-Leste'
  },
   {
    type: 'location',
    name: 'Togo'
  },
   {
    type: 'location',
    name: 'Tokelau'
  },
   {
    type: 'location',
    name: 'Tonga'
  },
    {
    type: 'location',
    name: 'Trinidad and Tobago'
  },
   {
    type: 'location',
    name: 'Tromelin Island'
  },
    {
    type: 'location',
    name: 'Tunisia'
  },
    {
    type: 'location',
    name: 'Turkey'
  },
    {
    type: 'location',
    name: 'Turkmenistan'
  },
    {
    type: 'location',
    name: 'Turks and Caicos Islands'
  },
   {
    type: 'location',
    name: 'Tuvalu'
  },
     {
    type: 'location',
    name: 'Uganda'
  },
     {
    type: 'location',
    name: 'Ukraine'
  },
     {
    type: 'location',
    name: 'United Arab Emirates'
  },
     {
    type: 'location',
    name: 'United Kingdom'
  },
    {
    type: 'location',
    name: 'Uruguay'
  },
   {
    type: 'location',
    name: 'Vanuatu'
  },
   {
    type: 'location',
    name: 'Uzbekistan'
  },
   {
    type: 'location',
    name: 'Vatican City'
  },
    {
    type: 'location',
    name: 'Venezuela'
  },
     {
    type: 'location',
    name: 'Vietnam'
  },
    {
    type: 'location',
    name: 'Wallis and Futuna'
  },
    {
    type: 'location',
    name: 'West Bank'
  },
  {
    type: 'location',
    name: 'Western Sahara'
  },
   {
    type: 'location',
    name: 'Yemen'
  },
    {
    type: 'location',
    name: 'Zambia'
  },
   {
    type: 'location',
    name: 'Zimbabwe'
  },
    {
    type: 'location',
    name: 'Alabama, U.S. '
  },
   {
    type: 'location',
    name: 'Alaska, U.S.'
  },
 {
    type: 'location',
    name: 'Arizona, U.S.'
  },
    {
    type: 'location',
    name: 'Arkansas, U.S.'
  },
     {
    type: 'location',
    name: 'California, U.S.'
  },
    {
    type: 'location',
    name: 'Colorado, U.S.'
  },
   {
    type: 'location',
    name: 'Connecticut, U.S.'
  },
   {
    type: 'location',
    name: 'Delaware, U.S.'
  },
     {
    type: 'location',
    name: 'Florida, U.S.'
  },
    {
    type: 'location',
    name: 'Georgia, U.S.'
  },
     {
    type: 'location',
    name: 'Hawaii, U.S.'
  },
    {
    type: 'location',
    name: 'Idaho, U.S.'
  },
   {
    type: 'location',
    name: 'Illinois, U.S.'
  },
   {
    type: 'location',
    name: 'Indiana, U.S'
  },
   {
    type: 'location',
    name: 'Iowa, U.S.'
  },
   {
    type: 'location',
    name: 'Kansas, U.S.'
  },
   {
    type: 'location',
    name: 'Kentucky, U.S.'
  },
   {
    type: 'location',
    name: 'Louisiana, U.S.'
  },
     {
    type: 'location',
    name: 'Maine, U.S.'
  },
     {
    type: 'location',
    name: 'Maryland, U.S.'
  },
    {
    type: 'location',
    name: 'Massachusetts, U.S.'
  },
  {
    type: 'location',
    name: 'Michigan, U.S.'
  },
    {
    type: 'location',
    name: 'Minnesota, U.S.'
  },
   {
    type: 'location',
    name: 'Mississippi, U.S.'
  },
    {
    type: 'location',
    name: 'Missouri, U.S.'
  },
  {
    type: 'location',
    name: 'Montana, U.S.'
  },
  {
    type: 'location',
    name: 'Nebraska, U.S.'
  },
   {
    type: 'location',
    name: 'Nevada, U.S..'
  },
   {
    type: 'location',
    name: 'New Hampshire, U.S.'
  },
   {
    type: 'location',
    name: 'New Jersey, U.S.'
  },
   {
    type: 'location',
    name: 'New Mexico, U.S.'
  },
    {
    type: 'location',
    name: 'New York, U.S.'
  },
   {
    type: 'location',
    name: 'North Carolina, U.S.'
  },
    {
    type: 'location',
    name: 'North Dakota, U.S.'
  },
    {
    type: 'location',
    name: 'Ohio, U.S.'
  },
     {
    type: 'location',
    name: 'Oklahoma, U.S.'
  },
     {
    type: 'location',
    name: 'Oregon, U.S.'
  },
     {
    type: 'location',
    name: 'Pennsylvania, U.S.'
  },
    {
    type: 'location',
    name: 'Rhode Island, U.S.'
  },
    {
    type: 'location',
    name: 'South Carolina, U.S.'
  },
    {
    type: 'location',
    name: 'South Dakota, U.S.'
  },
   {
    type: 'location',
    name: 'Tennessee, U.S.'
  },
    {
    type: 'location',
    name: 'Texas, U.S.'
  },
    {
    type: 'location',
    name: 'Utah, U.S.'
  },
     {
    type: 'location',
    name: 'Vermont, U.S.'
  },
    {
    type: 'location',
    name: 'Virginia, U.S.'
  },
    {
    type: 'location',
    name: 'Washington, U.S.'
  },
   {
    type: 'location',
    name: 'West Virginia, U.S.'
  },
     {
    type: 'location',
    name: 'Wisconsin, U.S.'
  },
  {
    type: 'location',
    name: 'Wyoming, U.S.'
  },
     {
    type: 'location',
    name: 'Washington D.C., U.S.'
  },
     {
    type: 'location',
    name: 'U.S. Virgin Islands'
  },
     {
    type: 'location',
    name: 'American Samoa, U.S.'
  },
     {
    type: 'location',
    name: 'Guam, U.S.'
  }            
  
  }

};
