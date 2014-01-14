 module.exports = {
  // TAG SETTINGS
  // When a user imports their profile from another service
  // should missing tag entities be created?
  // true if they should be created automatically,
  // false to prevent creating tag entities that are not already in the system
  tags: {
	  // default skills
    'Management': {
      type: 'skill',
      name: 'Management'
    },
    'Project Management': {
      type: 'skill',
      name: 'Project Management'
    },
    'Recruiting': {
      type: 'skill',
      name: 'Recruiting'
    },
    'SocialMedia': {
      type: 'skill',
      name: 'Social Media'
    },
    'Marketing': {
      type: 'skill',
      name: 'Marketing'
    },
    'WebDevelopment': {
      type: 'skill',
      name: 'Web Development'
    },
    'Speechwriting': {
      type: 'skill',
      name: 'Speech Writing'
    },
    'Training': {
      type: 'skill',
      name: 'Training'
    },
    'Research': {
      type: 'skill',
      name: 'Research'
    },
    'Training': {
      type: 'skill',
      name: 'Training'
    },
    'PublicSpeaking': {
      type: 'skill',
      name: 'Public Speaking'
    },
    'ForeignLanguage': {
      type: 'skill',
      name: 'Foreign Language'

    },
    'Eventplanning': {
      type: 'skill',
      name: 'Event Planning'
    },
    'SignLanguage': {
      type: 'skill',
      name: 'Sign language'
    },
    'Dataentry': {
      type: 'skill',
      name: 'Data entry'
    },
    'EnglishasSecondLanguage': {
      type: 'skill',
      name: 'ESOL'
    },
    'Technology': {
      type: 'skill',
      name: 'Technology'
    },
    'Strategic Planning': {
      type: 'skill',
      name: 'Strategic Planning'
    },
    'Financial': {
      type: 'skill',
      name: 'Financial'
    },
    'Policy': {
      type: 'skill',
      name: 'Policy'
    },
    'GraphicDesign': {
      type: 'skill',
      name: 'Graphic Design'
    },
    'Legislative': {
      type: 'skill',
      name: 'Legislative'
    },
    'Administrative': {
      type: 'skill',
      name: 'Administrative'
    },
    'Other': {
      type: 'skill',
      name: 'Other'
    },
    'AudioVideo': {
      type: 'skill',
      name: 'Audio & Video'
    },
      'Grantwriting': {
      type: 'skill',
      name: 'Grant writing'
     },
	//default topics
    'GlobalAffairs': {
      type: 'topic',
      name: 'Global Affairs'
    },
    'WorkforceDevelopment': {
      type: 'topic',
      name: 'Workforce Development'
    },
    'Sustainability': {
      type: 'topic',
      name: 'Sustainability'
    },
    'Healthcare': {
      type: 'topic',
      name: 'Healthcare'
     },
    'CommunityHealth': {
      type: 'topic',
      name: 'CommunityHealth'
    },
    'Education': {
      type: 'topic',
      name: 'Education'
    },
    'Nutrition': {
      type: 'topic',
      name: 'Nutrition'
    },
    'Science': {
      type: 'topic',
      name: 'Science'
    },
    'OpenData': {
      type: 'topic',
      name: 'Open Data'
    },
    'SmallBusiness': {
      type: 'topic',
      name: 'Small Business'
    },
    'Children&Families': {
      type: 'topic',
      name: 'Children & Families'
    },
    'Current': {
      type: 'topic',
      name: 'Current Events'
     },
     'Policy': {
      type: 'topic',
      name: 'Policy'
     },
      'Legislative': {
      type: 'topic',
      name: 'Legislative'
     },
       'Women': {
      type: 'topic',
      name: 'Women\'s Health'
     },
      'Data': {
      type: 'topic',
      name: 'Data'
     },
       'Information Technology': {
      type: 'topic',
      name: 'InformationTechnology'
     },
       'BusinessProcess': {
      type: 'topic',
      name: 'Business Process'
     },
       'Legislative': {
      type: 'topic',
      name: 'Legislative'
     },
       'RecordsManagement': {
      type: 'topic',
      name: 'Records Management'
     },
	// agency tags
    'OS': {
      type: 'agency',
      name: 'Office of the Secretary (OS including the StaffDivs)'
    },
    'ACF': {
      type: 'agency',
      name: 'Administration for Children and Families (ACF)'
    },
    'ACL': {
      type: 'agency',
      name: 'Administration for Community Living (ACL)'
    },
    'AHRQ': {
      type: 'agency',
      name: 'Agency for Healthcare Research and Quality (AHRQ)'
    },
    'CDC': {
      type: 'agency',
      name: 'Centers for Disease Control and Prevention (CDC)'
    },
    'CMMS': {
      type: 'agency',
      name: 'Centers for Medicare & Medicaid Services'
    },
    'FDA': {
      type: 'agency',
      name: 'Food and Drug Administration (FDA)'
    },
    'HRSA': {
      type: 'agency',
      name: 'Health Resources and Services Administration (HRSA)'
    },
    'IHS': {
      type: 'agency',
      name: 'Indian Health Service (IHS)'
    },
    'NIH': {
      type: 'agency',
      name: 'National Institutes of Health (NIH)'
    },
    'SAMHSA': {
      type: 'agency',
      name: 'Substance Abuse and Mental Health Services Administration (SAMHSA)'
    },
	//location tags
    'Afghanistan': {
      type: 'location',
      name: 'Afghanistan'
    },
    'Akrotiri': {
      type: 'location',
      name: 'Akrotiri'
    },
    'Albania': {
      type: 'location',
      name: 'Albania'
    },
    'Algeria': {
      type: 'location',
      name: 'Algeria'
    },
    'AmericanSamoa': {
      type: 'location',
      name: 'American Samoa'
    },
    'Andorra': {
      type: 'location',
      name: 'Andorra'
    },
    'Angola': {
      type: 'location',
      name: 'Angola'
    },
    'Anguilla': {
      type: 'location',
      name: 'Anguilla'
    },
    'Antarctica': {
      type: 'location',
      name: 'Antarctica'
    },
    'Argentina': {
      type: 'location',
      name: 'Argentina'
    },
    'Armenia': {
      type: 'location',
      name: 'Armenia'
    },
    'Aruba': {
      type: 'location',
      name: 'Aruba'
    },
    'Ashmore and Cartier Islands': {
      type: 'location',
      name: 'Ashmore and Cartier Islands'
    },
    'Australia': {
      type: 'location',
      name: 'Australia'
    },
    'Austria': {
      type: 'location',
      name: 'Austria'
    },
    'Azerbaijan': {
      type: 'location',
      name: 'Azerbaijan'
    },
    'Bahamas': {
      type: 'location',
      name: 'Bahamas, The'
    },
    'Bahrain': {
      type: 'location',
      name: 'Bahrain'
    },
    'Barbados': {
      type: 'location',
      name: 'Barbados'
    },
    'Bangladesh': {
      type: 'location',
      name: 'Bangladesh'
    },
    'BassasdaIndia': {
      type: 'location',
      name: 'Bassas da India'
    },
    'Belarus': {
      type: 'location',
      name: 'Belarus'
    },
    'Belgium': {
      type: 'location',
      name: 'Belgium'
    },
    'Belize': {
      type: 'location',
      name: 'Belize'
    },
    'Belize': {
      type: 'location',
      name: 'Belize'
    },
    'Bermuda': {
      type: 'location',
      name: 'Bermuda'
    },
    'Bhutan': {
      type: 'location',
      name: 'Bhutan'
    },
    'Bolivia': {
      type: 'location',
      name: 'Bolivia'
    },
    'Bonaire,SintEustatiusandSaba': {
      type: 'location',
      name: 'Bonaire, Sint Eustatius and Saba'
    },
    'Bosnia and Herzegovina': {
      type: 'location',
      name: 'Bosnia and Herzegovina'
    },
    'Botswana': {
      type: 'location',
      name: 'Botswana'
    },
    'Bouvet Island': {
      type: 'location',
      name: 'Bouvet Island'
    },
    'Brazil': {
      type: 'location',
      name: 'Brazil'
    },
    'BritishIndianOceanTerritory': {
      type: 'location',
      name: 'British Indian Ocean Territory'
    },
    'BritishVirginIslands': {
      type: 'location',
      name: 'British Virgin Islands'
    },
    'Brunei': {
      type: 'location',
      name: 'Brunei'
    },
    'Bulgaria': {
      type: 'location',
      name: 'Bulgaria'
    },
    'Burkina Faso': {
      type: 'location',
      name: 'Burkina Faso'
    },
    'Burma': {
      type: 'location',
      name: 'Burma'
    },
    'Burundi': {
      type: 'location',
      name: 'Burundi'
    },
    'Cabo Verde': {
      type: 'location',
      name: 'Cabo Verde'
    },
    'Cambodia': {
      type: 'location',
      name: 'Cambodia'
    },
    'Cameroon': {
      type: 'location',
      name: 'Cameroon'
    },
    'Canada': {
      type: 'location',
      name: 'Canada'
    },
    'Cayman Islands': {
      type: 'location',
      name: 'Cayman Islands'
    },
    'CentralAfricanRepublic': {
      type: 'location',
      name: 'Central African Republic'
    },
    'Chile': {
      type: 'location',
      name: 'Chile'
    },
    'China': {
      type: 'location',
      name: 'China'
    },
    'ChristmasIsland': {
      type: 'location',
      name: 'Christmas Island'
    },
    'Clipperton Island': {
      type: 'location',
      name: 'Clipperton Island'
    },
    'Cocos (Keeling) Islands': {
      type: 'location',
      name: 'Cocos (Keeling) Islands'
    },
    'Colombia': {
      type: 'location',
      name: 'Colombia'
    },
    'Comoros': {
      type: 'location',
      name: 'Comoros'
    },
    'Congo(Brazzaville)': {
      type: 'location',
      name: 'Congo (Brazzaville)'
    },
    'Congo(Kinshasa)': {
      type: 'location',
      name: 'Congo (Kinshasa)'
    },
    'Coral Sea Islands': {
      type: 'location',
      name: 'Coral Sea Islands'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'Costa Rica': {
      type: 'location',
      name: 'Costa Rica'
    },
    'Croatia': {
      type: 'location',
      name: 'Croatia'
    },
    'Cuba': {
      type: 'location',
      name: 'Cuba'
    },
    'Curacao': {
      type: 'location',
      name: 'Curacao'
    },
    'Cyprus': {
      type: 'location',
      name: 'Cyprus'
    },
    'Czech Republic': {
      type: 'location',
      name: 'Czech Republic'
    },
    'Denmark': {
      type: 'location',
      name: 'Denmark'
    },
    'Dhekelia': {
      type: 'location',
      name: 'Dhekelia'
    },
    'Djibouti': {
      type: 'location',
      name: 'Djibouti'
    },
    'Dominica': {
      type: 'location',
      name: 'Dominica'
    },
    'DominicanRepublic': {
      type: 'location',
      name: 'Dominican Republic'
    },
    'Ecuador': {
      type: 'location',
      name: 'Ecuador'
    },
    'Egypt': {
      type: 'location',
      name: 'Egypt'
    },
    'El Salvador': {
      type: 'location',
      name: 'El Salvador'
    },
    'Equatorial Guinea': {
      type: 'location',
      name: 'Equatorial Guinea'
    },
    'Eritrea': {
      type: 'location',
      name: 'Eritrea'
    },
    'Estonia': {
      type: 'location',
      name: 'Estonia'
    },
    'Ethiopia': {
      type: 'location',
      name: 'Ethiopia'
    },
    'EuropaIsland': {
      type: 'location',
      name: 'Europa Island'
    },
    'FalklandIslands(Islas Malvinas)': {
      type: 'location',
      name: 'Falkland Islands (Islas Malvinas)'
    },
    'FaroeIslands': {
      type: 'location',
      name: 'Faroe Islands'
    },
    'Fiji': {
      type: 'location',
      name: 'Fiji'
    },
    'Finland': {
      type: 'location',
      name: 'Finland'
    },
    'France': {
      type: 'location',
      name: 'France'
    },
    'FrenchGuiana': {
      type: 'location',
      name: 'French Guiana'
    },
    'FrenchPolynesia': {
      type: 'location',
      name: 'French Polynesia'
    },
    'FrenchSouthernandAntarcticLands': {
      type: 'location',
      name: 'French Southern and Antarctic Lands'
    },
    'Gambia,The': {
      type: 'location',
      name: 'Gambia, The'
    },
    'GazaStrip': {
      type: 'location',
      name: 'Gaza Strip'
    },
    'Georgia': {
      type: 'location',
      name: 'Georgia'
    },
    'Germany': {
      type: 'location',
      name: 'Germany'
    },
    'Ghana': {
      type: 'location',
      name: 'Ghana'
    },
    'Gibraltar': {
      type: 'location',
      name: 'Gibraltar'
    },
    'Glorioso Islands': {
      type: 'location',
      name: 'Glorioso Islands'
    },
    'Greece': {
      type: 'location',
      name: 'Greece'
    },
    'Greenland': {
      type: 'location',
      name: 'Greenland'
    },
    'Grenada': {
      type: 'location',
      name: 'Grenada'
    },
    'Guadeloupe': {
      type: 'location',
      name: 'Guadeloupe'
    },
    'Guatemala': {
      type: 'location',
      name: 'Guatemala'
    },
    'Guernsey': {
      type: 'location',
      name: 'Guernsey'
    },
    'Guinea': {
      type: 'location',
      name: 'Guinea'
    },
    'Guinea-Bissau': {
      type: 'location',
      name: 'Guinea-Bissau'
    },
    'Guyana': {
      type: 'location',
      name: 'Guyana'
    },
    'Haiti': {
      type: 'location',
      name: 'Haiti'
    },
    'HeardIslandandMcDonaldIslands': {
      type: 'location',
      name: 'Heard Island and McDonald Islands'
    },
    'Honduras': {
      type: 'location',
      name: 'Honduras'
    },
    'Hong Kong': {
      type: 'location',
      name: 'Hong Kong'
    },
    'Hungary': {
      type: 'location',
      name: 'Hungary'
    },
    'Iceland': {
      type: 'location',
      name: 'Iceland'
    },
    'India': {
      type: 'location',
      name: 'India'
    },
    'Indonesia': {
      type: 'location',
      name: 'Indonesia'
    },
    'Iran': {
      type: 'location',
      name: 'Iran'
    },
    'Iraq': {
      type: 'location',
      name: 'Iraq'
    },
    'Ireland': {
      type: 'location',
      name: 'Ireland'
    },
    'Isle of Man': {
      type: 'location',
      name: 'Isle of Man'
    },
    'Israel': {
      type: 'location',
      name: 'Israel'
    },
    'Italy': {
      type: 'location',
      name: 'Italy'
    },
    'Jamaica': {
      type: 'location',
      name: 'Jamaica'
    },
    'Jan Mayen': {
      type: 'location',
      name: 'Jan Mayen'
    },
    'Japan': {
      type: 'location',
      name: 'Japan'
    },
    'Jersey': {
      type: 'location',
      name: 'Jersey'
    },
    'Jordan': {
      type: 'location',
      name: 'Jordan'
    },
    'JuandeNovaIsland': {
      type: 'location',
      name: 'Juan de Nova Island'
    },
    'Kazakhstan': {
      type: 'location',
      name: 'Kazakhstan'
    },
    'Kenya': {
      type: 'location',
      name: 'Kenya'
    },
    'Kiribati': {
      type: 'location',
      name: 'Kiribati'
    },
    'Korea,North': {
      type: 'location',
      name: 'North Korea'
    },
    'Korea, South': {
      type: 'location',
      name: 'South Korea'
    },
    'Kosovo': {
      type: 'location',
      name: 'Kosovo'
    },
    'Kuwait': {
      type: 'location',
      name: 'Kuwait'
    },
    'Kyrgyzstan': {
      type: 'location',
      name: 'Kyrgyzstan'
    },
    'Laos': {
      type: 'location',
      name: 'Laos'
    },
    'Latvia': {
      type: 'location',
      name: 'Latvia'
    },
    'Lebanon': {
      type: 'location',
      name: 'Lebanon'
    },
    'Lesotho': {
      type: 'location',
      name: 'Lesotho'
    },
    'Liberia': {
      type: 'location',
      name: 'Liberia'
    },
    'Libya': {
      type: 'location',
      name: 'Libya'
    },
    'Liechtenstein': {
      type: 'location',
      name: 'Liechtenstein'
    },
    'Lithuania': {
      type: 'location',
      name: 'Lithuania'
    },
    'Luxembourg': {
      type: 'location',
      name: 'Luxembourg'
    },
    'Macau': {
      type: 'location',
      name: 'Macau'
    },
    'Macedonia': {
      type: 'location',
      name: 'Macedonia'
    },
    'Madagascar': {
      type: 'location',
      name: 'Madagascar'
    },
    'Malawi': {
      type: 'location',
      name: 'Malawi'
    },
    'Malaysia': {
      type: 'location',
      name: 'Malaysia'
    },
    'Maldives': {
      type: 'location',
      name: 'Maldives'
    },
    'Mali': {
      type: 'location',
      name: 'Mali'
    },
    'Malta': {
      type: 'location',
      name: 'Malta'
    },
    'Marshall Islands': {
      type: 'location',
      name: 'Marshall Islands'
    },
    'Martinique': {
      type: 'location',
      name: 'Martinique'
    },
    'Mauritania': {
      type: 'location',
      name: 'Mauritania'
    },
    'Mauritius': {
      type: 'location',
      name: 'Mauritius'
    },
    'Mayotte': {
      type: 'location',
      name: 'Mayotte'
    },
    'Mexico': {
      type: 'location',
      name: 'Mexico'
    },
    'Micronesia': {
      type: 'location',
      name: 'Micronesia'
    },
    'Moldova': {
      type: 'location',
      name: 'Moldova'
    },
    'Monaco': {
      type: 'location',
      name: 'Monaco'
    },
    'Mongolia': {
      type: 'location',
      name: 'Mongolia'
    },
    'Montenegro': {
      type: 'location',
      name: 'Montenegro'
    },
    'Montserrat': {
      type: 'location',
      name: 'Montserrat'
    },
    'Morocco': {
      type: 'location',
      name: 'Morocco'
    },
    'Mozambique': {
      type: 'location',
      name: 'Mozambique'
    },
    'Namibia': {
      type: 'location',
      name: 'Namibia'
    },
    'Nauru': {
      type: 'location',
      name: 'Nauru'
    },
    'Nepal': {
      type: 'location',
      name: 'Nepal'
    },
    'Netherlands': {
      type: 'location',
      name: 'Netherlands'
    },
    'NetherlandsAntilles': {
      type: 'location',
      name: 'Netherlands Antilles'
    },
    'New Caledonia': {
      type: 'location',
      name: 'New Caledonia'
    },
    'New Zealand': {
      type: 'location',
      name: 'New Zealand'
    },
    'Nicaragua': {
      type: 'location',
      name: 'Nicaragua'
    },
    'Niger': {
      type: 'location',
      name: 'Niger'
    },
    'Nigeria': {
      type: 'location',
      name: 'Nigeria'
    },
    'Niue': {
      type: 'location',
      name: 'Niue'
    },
    'NorfolkIsland': {
      type: 'location',
      name: 'Norfolk Island'
    },
    'NorthernMarianaIslands': {
      type: 'location',
      name: 'Northern Mariana Islands'
    },
    'Norway': {
      type: 'location',
      name: 'Norway'
    },
    'Oman': {
      type: 'location',
      name: 'Oman'
    },
    'Pakistan': {
      type: 'location',
      name: 'Pakistan'
    },
    'Palau': {
      type: 'location',
      name: 'Palau'
    },
    'Panama': {
      type: 'location',
      name: 'Panama'
    },
    'PapuaNewGuinea': {
      type: 'location',
      name: 'Papua New Guinea'
    },
    'ParacelIslands': {
      type: 'location',
      name: 'Paracel Islands'
    },
    'Paraguay': {
      type: 'location',
      name: 'Paraguay'
    },
    'Peru': {
      type: 'location',
      name: 'Peru'
    },
    'Philippines': {
      type: 'location',
      name: 'Philippines'
    },
    'Poland': {
      type: 'location',
      name: 'Poland'
    },
    'Portugal': {
      type: 'location',
      name: 'Portugal'
    },
    'PuertoRico': {
      type: 'location',
      name: 'Puerto Rico'
    },
     'Qatar': {
      type: 'location',
      name: 'Qatar'
    },
    'Reunion': {
      type: 'location',
      name: 'Reunion'
    },
     'Romania': {
      type: 'location',
      name: 'Romania'
    },
      'Russia': {
      type: 'location',
      name: 'Russia'
    },
      'Rwanda': {
      type: 'location',
      name: 'Rwanda'
    },
      'SaintHelena,Ascension,andTristandaCunha': {
      type: 'location',
      name: 'Saint Helena, Ascension, and Tristan da Cunha'
    },
      'SaintKittsandNevis': {
      type: 'location',
      name: 'Saint Kitts and Nevis'
    },
    'SaintLucia': {
      type: 'location',
      name: 'Saint Lucia'
    },
     'SaintPierreandMiquelon': {
      type: 'location',
      name: 'Saint Pierre and Miquelon'
    },
    'SaintVincentandtheGrenadines': {
      type: 'location',
      name: 'Saint Vincent and the Grenadines'
    },
      'Samoa': {
      type: 'location',
      name: 'Samoa'
    },
      'SanMarino': {
      type: 'location',
      name: 'San Marino'
    },
      'SaoTomeandPrincipe': {
      type: 'location',
      name: 'Sao Tome and Principe'
    },
      'SaudiArabia': {
      type: 'location',
      name: 'Saudi Arabia'
    },
      'Senegal': {
      type: 'location',
      name: 'Senegal'
    },
      'Serbia': {
      type: 'location',
      name: 'Serbia'
    },
     'Seychelles': {
      type: 'location',
      name: 'Seychelles'
    },
    'Sierra Leone': {
      type: 'location',
      name: 'Sierra Leone'
    },
     'Singapore': {
      type: 'location',
      name: 'Singapore'
    },
      'SintMaarten': {
      type: 'location',
      name: 'Sint Maarten'
    },
      'Slovakia': {
      type: 'location',
      name: 'Slovakia'
    },
      'Slovenia': {
      type: 'location',
      name: 'Slovenia'
    },
      'SolomonIslands': {
      type: 'location',
      name: 'Solomon Islands'
    },
     'Somalia': {
      type: 'location',
      name: 'Somalia'
    },
     'SouthAfrica': {
      type: 'location',
      name: 'South Africa'
    },
    'SouthGeorgiaandtheSouthSandwichIslands': {
      type: 'location',
      name: 'South Georgia and the South Sandwich Islands'
    },
      'SouthSudan': {
      type: 'location',
      name: 'South Sudan'
    },
      'SpratlyIslands': {
      type: 'location',
      name: 'Spratly Islands'
    },
      'SriLanka': {
      type: 'location',
      name: 'Sri Lanka'
    },
      'Sudan': {
      type: 'location',
      name: 'Sudan'
    },
      'Suriname': {
      type: 'location',
      name: 'Suriname'
    },
        'Swaziland': {
      type: 'location',
      name: 'Swaziland'
    },
     'Sweden': {
      type: 'location',
      name: 'Sweden'
    },
    'Switzerland': {
      type: 'location',
      name: 'Switzerland'
    },
      'Syria': {
      type: 'location',
      name: 'Syria'
    },
      'Taiwan': {
      type: 'location',
      name: 'Taiwan'
    },
      'Tajikistan': {
      type: 'location',
      name: 'Tajikistan'
    },
      'Tanzania': {
      type: 'location',
      name: 'Tanzania'
    },
      'Thailand': {
      type: 'location',
      name: 'Thailand'
    },
      'Timor-Leste': {
      type: 'location',
      name: 'Timor-Leste'
    },
     'Togo': {
      type: 'location',
      name: 'Togo'
    },
    'Tokelau': {
      type: 'location',
      name: 'Tokelau'
    },
      'Tonga': {
      type: 'location',
      name: 'Tonga'
    },
      'TrinidadandTobago': {
      type: 'location',
      name: 'Trinidad and Tobago'
    },
      'TromelinIsland': {
      type: 'location',
      name: 'Tromelin Island'
    },
      'Tunisia': {
      type: 'location',
      name: 'Tunisia'
    },
      'Turkey': {
      type: 'location',
      name: 'Turkey'
    },
        'Turkmenistan': {
      type: 'location',
      name: 'Turkmenistan'
    },
     'TurksandCaicosIslands': {
      type: 'location',
      name: 'Turks and Caicos Islands'
    },
    'Tuvalu': {
      type: 'location',
      name: 'Tuvalu'
    },
      'Uganda': {
      type: 'location',
      name: 'Uganda'
    },
      'Ukraine': {
      type: 'location',
      name: 'Ukraine'
    },
      'UnitedArabEmiratesr': {
      type: 'location',
      name: 'United Arab Emirates'
    },
      'UnitedKingdom': {
      type: 'location',
      name: 'United Kingdom'
    },
      'Uruguay': {
      type: 'location',
      name: 'Uruguay'
    },
      'Vanuatu': {
      type: 'location',
      name: 'Vanuatu'
    },
     'Uzbekistan': {
      type: 'location',
      name: 'Uzbekistan'
    },
    'VaticanCity': {
      type: 'location',
      name: 'Vatican City'
    },
      'Venezuela': {
      type: 'location',
      name: 'Venezuela'
    },
      'Vietnam': {
      type: 'location',
      name: 'Vietnam'
    },
      'WallisandFutunar': {
      type: 'location',
      name: 'Wallis and Futuna'
    },
      'WestBank': {
      type: 'location',
      name: 'West Bank'
    },
      'WesternSahara': {
      type: 'location',
      name: 'Western Sahara'
    },
     'Yemen': {
      type: 'location',
      name: 'Yemen'
    },
     'Zambia': {
      type: 'location',
      name: 'Zambia'
    },
     'Zimbabwe': {
      type: 'location',
      name: 'Zimbabwe'
    },
      'Alabama,U.S.': {
      type: 'location',
      name: 'Alabama, U.S. '
    },
      'Alaska,U.S.': {
      type: 'location',
      name: 'Alaska, U.S.'
    },
      'Arizona,U.S.': {
      type: 'location',
      name: 'Arizona, U.S.'
    },
      'Arkansas,U.S.': {
      type: 'location',
      name: 'Arkansas, U.S.'
    },
      'California,U.S.': {
      type: 'location',
      name: 'California, U.S.'
    },
      'Colorado,U.S.': {
      type: 'location',
      name: 'Colorado, U.S.'
    },
     'Connecticut,U.S.': {
      type: 'location',
      name: 'Connecticut, U.S.'
    },
    'Delaware,U.S.': {
      type: 'location',
      name: 'Delaware, U.S.'
    },
      'Florida,U.S.': {
      type: 'location',
      name: 'Florida, U.S.'
    },
      'Georgia,U.S.': {
      type: 'location',
      name: 'Georgia, U.S.'
    },
      'Hawaii,U.S.': {
      type: 'location',
      name: 'Hawaii, U.S.'
    },
      'Idaho,U.S.': {
      type: 'location',
      name: 'Idaho, U.S.'
    },
      'Illinois,U.S': {
      type: 'location',
      name: 'Illinois, U.S.'
    },
      'Indiana,U.S': {
      type: 'location',
      name: 'Indiana, U.S'
    },
     'Iowa,U.S.': {
      type: 'location',
      name: 'Iowa, U.S.'
    },
    'Kansas,U.S.': {
      type: 'location',
      name: 'Kansas, U.S.'
    },
      'Kentucky, U.S.': {
      type: 'location',
      name: 'Kentucky, U.S.'
    },
      'Louisiana,U.S.': {
      type: 'location',
      name: 'Louisiana, U.S.'
    },
      'Maine,U.S.': {
      type: 'location',
      name: 'Maine, U.S.'
    },
      'Maryland,U.S.': {
      type: 'location',
      name: 'Maryland, U.S.'
    },
      'Massachusetts,U.S.': {
      type: 'location',
      name: 'Massachusetts, U.S.'
    },
      'Michigan,U.S.': {
      type: 'location',
      name: 'Michigan, U.S.'
    },
     'Minnesota,U.S.': {
      type: 'location',
      name: 'Minnesota, U.S.'
    },
      'Mississippi,U.S.': {
      type: 'location',
      name: 'Mississippi, U.S.'
    },
      'Missouri,U.S.': {
      type: 'location',
      name: 'Missouri, U.S.'
    },
      'Montana,U.S.': {
      type: 'location',
      name: 'Montana, U.S.'
    },
      'Nebraska,U.S.': {
      type: 'location',
      name: 'Nebraska, U.S.'
    },
      'Nevada,U.S.': {
      type: 'location',
      name: 'Nevada, U.S..'
    },
      'NewHampshire,U.S.': {
      type: 'location',
      name: 'New Hampshire, U.S.'
    },
      'NewJersey,U.S.': {
      type: 'location',
      name: 'New Jersey, U.S.'
    },
     'NewMexico,U.S.': {
      type: 'location',
      name: 'New Mexico, U.S.'
    },
     'NewYork,U.S.': {
      type: 'location',
      name: 'New York, U.S.'
    },
      'NorthCarolina,U.S.': {
      type: 'location',
      name: 'North Carolina, U.S.'
    },
      'NorthDakota,U.S.': {
      type: 'location',
      name: 'North Dakota, U.S.'
    },
      'Ohio,U.S.': {
      type: 'location',
      name: 'Ohio, U.S.'
    },
      'Oklahoma,U.S.': {
      type: 'location',
      name: 'Oklahoma, U.S.'
    },
      'Oregon,U.S.': {
      type: 'location',
      name: 'Oregon, U.S.'
    },
      'Pennsylvania,U.S.': {
      type: 'location',
      name: 'Pennsylvania, U.S.'
    },
     'RhodeIsland,U.S.': {
      type: 'location',
      name: 'Rhode Island, U.S.'
    },
     'SouthCarolina,U.S.': {
      type: 'location',
      name: 'South Carolina, U.S.'
    },
      'SouthDakota,U.S.': {
      type: 'location',
      name: 'South Dakota, U.S.'
    },
      'Tennessee,U.S.': {
      type: 'location',
      name: 'Tennessee, U.S.'
    },
      'Texas,U.S.': {
      type: 'location',
      name: 'Texas, U.S.'
    },
      'Utah,U.S.': {
      type: 'location',
      name: 'Utah, U.S.'
    },
      'Vermont,U.S.': {
      type: 'location',
      name: 'Vermont, U.S.'
    },
      'Virginia,U.S.': {
      type: 'location',
      name: 'Virginia, U.S.'
    },
     'Washington,U.S.': {
      type: 'location',
      name: 'Washington, U.S.'
    },
     'WestVirginia,U.S.': {
      type: 'location',
      name: 'West Virginia, U.S.'
    },
      'Wisconsin,U.S.': {
      type: 'location',
      name: 'Wisconsin, U.S.'
    },
      'Wyoming,U.S.': {
      type: 'location',
      name: 'Wyoming, U.S.'
    },
      'Washington D.C.,U.S.': {
      type: 'location',
      name: 'Washington D.C., U.S.'
    },
      'U.S.VirginIslands': {
      type: 'location',
      name: 'U.S. Virgin Islands'
    },
      'AmericanSamoa,U.S.': {
      type: 'location',
      name: 'American Samoa, U.S.'
    },
      'Guam,U.S.': {
      type: 'location',
      name: 'Guam, U.S.'
    },
    createMissingTags: true,
}

};
