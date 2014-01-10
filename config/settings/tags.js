 module.exports = {
  // TAG SETTINGS
  // When a user imports their profile from another service
  // should missing tag entities be created?
  // true if they should be created automatically,
  // false to prevent creating tag entities that are not already in the system
  tags: {
	 createMissingTags: true,
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
	//default topics
    'Community': {
      type: 'topic',
      name: 'Community Events'
    },
    'Current': {
      type: 'topic',
      name: 'Current Events'
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
      name: 'GazaStrip'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    },
    'astapor': {
      type: 'location',
      name: 'Astapor'
    }
  }

};
