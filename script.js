const airports = [
  {
    "city": "Agartala",
    "state": "Tripura",
    "iata": "IXA",
    "airport": "Maharaja Bir Bikram Airport"
  },
  {
    "city": "Agatti",
    "state": "Lakshadweep",
    "iata": "AGX",
    "airport": "Agatti Airport"
  },
  {
    "city": "Agra",
    "state": "Uttar Pradesh",
    "iata": "AGR",
    "airport": "Agra Airport"
  },
  {
    "city": "Ahmedabad",
    "state": "Gujarat",
    "iata": "AMD",
    "airport": "Sardar Vallabhbhai Patel International Airport"
  },
  {
    "city": "Aizawl",
    "state": "Mizoram",
    "iata": "AJL",
    "airport": "Lengpui Airport"
  },
  {
    "city": "Ajmer / Kishangarh",
    "state": "Rajasthan",
    "iata": "KQH",
    "airport": "Kishangarh Airport"
  },
  {
    "city": "Akola",
    "state": "Maharashtra",
    "iata": "AKD",
    "airport": "Akola Airport"
  },
  {
    "city": "Amritsar",
    "state": "Punjab",
    "iata": "ATQ",
    "airport": "Sri Guru Ram Dass Jee International Airport"
  },
  {
    "city": "Aurangabad / Chhatrapati Sambhajinagar",
    "state": "Maharashtra",
    "iata": "IXU",
    "airport": "Chikkalthana Airport"
  },
  {
    "city": "Ayodhya",
    "state": "Uttar Pradesh",
    "iata": "AYJ",
    "airport": "Maharishi Valmiki International Airport"
  },
  {
    "city": "Bagdogra",
    "state": "West Bengal",
    "iata": "IXB",
    "airport": "Bagdogra Airport"
  },
  {
    "city": "Balurghat",
    "state": "West Bengal",
    "iata": "RGH",
    "airport": "Balurghat Airport"
  },
  {
    "city": "Bareilly",
    "state": "Uttar Pradesh",
    "iata": "BEK",
    "airport": "Bareilly Airport"
  },
  {
    "city": "Bathinda",
    "state": "Punjab",
    "iata": "BUP",
    "airport": "Bathinda Airport"
  },
  {
    "city": "Belagavi",
    "state": "Karnataka",
    "iata": "IXG",
    "airport": "Belagavi Airport"
  },
  {
    "city": "Bengaluru",
    "state": "Karnataka",
    "iata": "BLR",
    "airport": "Kempegowda International Airport"
  },
  {
    "city": "Bhavnagar",
    "state": "Gujarat",
    "iata": "BHU",
    "airport": "Bhavnagar Airport"
  },
  {
    "city": "Bhopal",
    "state": "Madhya Pradesh",
    "iata": "BHO",
    "airport": "Raja Bhoj Airport"
  },
  {
    "city": "Bhubaneswar",
    "state": "Odisha",
    "iata": "BBI",
    "airport": "Biju Patnaik International Airport"
  },
  {
    "city": "Bikaner",
    "state": "Rajasthan",
    "iata": "BKB",
    "airport": "Nal Airport"
  },
  {
    "city": "Bilaspur",
    "state": "Chhattisgarh",
    "iata": "PAB",
    "airport": "Bilasa Devi Kevat Airport"
  },
  {
    "city": "Chandigarh",
    "state": "Chandigarh",
    "iata": "IXC",
    "airport": "Shaheed Bhagat Singh International Airport"
  },
  {
    "city": "Chennai",
    "state": "Tamil Nadu",
    "iata": "MAA",
    "airport": "Chennai International Airport"
  },
  {
    "city": "Coimbatore",
    "state": "Tamil Nadu",
    "iata": "CJB",
    "airport": "Coimbatore International Airport"
  },
  {
    "city": "Cooch Behar",
    "state": "West Bengal",
    "iata": "COH",
    "airport": "Cooch Behar Airport"
  },
  {
    "city": "Cuddapah / Kadapa",
    "state": "Andhra Pradesh",
    "iata": "CDP",
    "airport": "Kadapa Airport"
  },
  {
    "city": "Daman",
    "state": "Dadra and Nagar Haveli and Daman and Diu",
    "iata": "NMB",
    "airport": "Daman Airport"
  },
  {
    "city": "Dehradun",
    "state": "Uttarakhand",
    "iata": "DED",
    "airport": "Jolly Grant Airport"
  },
  {
    "city": "Delhi",
    "state": "Delhi",
    "iata": "DEL",
    "airport": "Indira Gandhi International Airport"
  },
  {
    "city": "Deoghar",
    "state": "Jharkhand",
    "iata": "DGH",
    "airport": "Deoghar Airport"
  },
  {
    "city": "Dharamshala / Kangra",
    "state": "Himachal Pradesh",
    "iata": "DHM",
    "airport": "Kangra Airport"
  },
  {
    "city": "Dibrugarh",
    "state": "Assam",
    "iata": "DIB",
    "airport": "Dibrugarh Airport"
  },
  {
    "city": "Dimapur",
    "state": "Nagaland",
    "iata": "DMU",
    "airport": "Dimapur Airport"
  },
  {
    "city": "Diu",
    "state": "Dadra and Nagar Haveli and Daman and Diu",
    "iata": "DIU",
    "airport": "Diu Airport"
  },
  {
    "city": "Gaya",
    "state": "Bihar",
    "iata": "GAY",
    "airport": "Gaya Airport"
  },
  {
    "city": "Goa — Dabolim",
    "state": "Goa",
    "iata": "GOI",
    "airport": "Dabolim Airport"
  },
  {
    "city": "Goa — Mopa",
    "state": "Goa",
    "iata": "GOX",
    "airport": "Manohar International Airport"
  },
  {
    "city": "Gondia",
    "state": "Maharashtra",
    "iata": "GDB",
    "airport": "Birsi Airport"
  },
  {
    "city": "Gorakhpur",
    "state": "Uttar Pradesh",
    "iata": "GOP",
    "airport": "Gorakhpur Airport"
  },
  {
    "city": "Guwahati",
    "state": "Assam",
    "iata": "GAU",
    "airport": "Lokpriya Gopinath Bordoloi International Airport"
  },
  {
    "city": "Gwalior",
    "state": "Madhya Pradesh",
    "iata": "GWL",
    "airport": "Rajmata Vijaya Raje Scindia Airport"
  },
  {
    "city": "Hubballi",
    "state": "Karnataka",
    "iata": "HBX",
    "airport": "Hubballi Airport"
  },
  {
    "city": "Hyderabad",
    "state": "Telangana",
    "iata": "HYD",
    "airport": "Rajiv Gandhi International Airport"
  },
  {
    "city": "Imphal",
    "state": "Manipur",
    "iata": "IMF",
    "airport": "Bir Tikendrajit International Airport"
  },
  {
    "city": "Indore",
    "state": "Madhya Pradesh",
    "iata": "IDR",
    "airport": "Devi Ahilya Bai Holkar Airport"
  },
  {
    "city": "Itanagar / Hollongi",
    "state": "Arunachal Pradesh",
    "iata": "HGI",
    "airport": "Donyi Polo Airport"
  },
  {
    "city": "Jabalpur",
    "state": "Madhya Pradesh",
    "iata": "JLR",
    "airport": "Jabalpur Airport"
  },
  {
    "city": "Jaipur",
    "state": "Rajasthan",
    "iata": "JAI",
    "airport": "Jaipur International Airport"
  },
  {
    "city": "Jaisalmer",
    "state": "Rajasthan",
    "iata": "JSA",
    "airport": "Jaisalmer Airport"
  },
  {
    "city": "Jalgaon",
    "state": "Maharashtra",
    "iata": "JLG",
    "airport": "Jalgaon Airport"
  },
  {
    "city": "Jammu",
    "state": "Jammu and Kashmir",
    "iata": "IXJ",
    "airport": "Jammu Airport"
  },
  {
    "city": "Jamnagar",
    "state": "Gujarat",
    "iata": "JGA",
    "airport": "Jamnagar Airport"
  },
  {
    "city": "Jharsuguda",
    "state": "Odisha",
    "iata": "JRG",
    "airport": "Veer Surendra Sai Airport"
  },
  {
    "city": "Jodhpur",
    "state": "Rajasthan",
    "iata": "JDH",
    "airport": "Jodhpur Airport"
  },
  {
    "city": "Jorhat",
    "state": "Assam",
    "iata": "JRH",
    "airport": "Jorhat Airport"
  },
  {
    "city": "Kadapa",
    "state": "Andhra Pradesh",
    "iata": "CDP",
    "airport": "Kadapa Airport"
  },
  {
    "city": "Kannur",
    "state": "Kerala",
    "iata": "CNN",
    "airport": "Kannur International Airport"
  },
  {
    "city": "Kanpur",
    "state": "Uttar Pradesh",
    "iata": "KNU",
    "airport": "Kanpur Airport"
  },
  {
    "city": "Keshod",
    "state": "Gujarat",
    "iata": "IXK",
    "airport": "Keshod Airport"
  },
  {
    "city": "Kochi",
    "state": "Kerala",
    "iata": "COK",
    "airport": "Cochin International Airport"
  },
  {
    "city": "Kolkata",
    "state": "West Bengal",
    "iata": "CCU",
    "airport": "Netaji Subhas Chandra Bose International Airport"
  },
  {
    "city": "Kota",
    "state": "Rajasthan",
    "iata": "KTU",
    "airport": "Kota Airport"
  },
  {
    "city": "Kozhikode / Calicut",
    "state": "Kerala",
    "iata": "CCJ",
    "airport": "Calicut International Airport"
  },
  {
    "city": "Kullu / Bhuntar",
    "state": "Himachal Pradesh",
    "iata": "KUU",
    "airport": "Kullu-Manali Airport"
  },
  {
    "city": "Kurnool",
    "state": "Andhra Pradesh",
    "iata": "KJB",
    "airport": "Uyyalawada Narasimha Reddy Airport"
  },
  {
    "city": "Kushinagar",
    "state": "Uttar Pradesh",
    "iata": "KBK",
    "airport": "Kushinagar International Airport"
  },
  {
    "city": "Leh",
    "state": "Ladakh",
    "iata": "IXL",
    "airport": "Kushok Bakula Rimpochee Airport"
  },
  {
    "city": "Lilabari / North Lakhimpur",
    "state": "Assam",
    "iata": "IXI",
    "airport": "Lilabari Airport"
  },
  {
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "iata": "LKO",
    "airport": "Chaudhary Charan Singh International Airport"
  },
  {
    "city": "Ludhiana",
    "state": "Punjab",
    "iata": "LUH",
    "airport": "Ludhiana Airport"
  },
  {
    "city": "Madurai",
    "state": "Tamil Nadu",
    "iata": "IXM",
    "airport": "Madurai Airport"
  },
  {
    "city": "Malda",
    "state": "West Bengal",
    "iata": "LDA",
    "airport": "Malda Airport"
  },
  {
    "city": "Mangaluru",
    "state": "Karnataka",
    "iata": "IXE",
    "airport": "Mangaluru International Airport"
  },
  {
    "city": "Mumbai",
    "state": "Maharashtra",
    "iata": "BOM",
    "airport": "Chhatrapati Shivaji Maharaj International Airport"
  },
  {
    "city": "Mysuru",
    "state": "Karnataka",
    "iata": "MYQ",
    "airport": "Mysuru Airport"
  },
  {
    "city": "Nagpur",
    "state": "Maharashtra",
    "iata": "NAG",
    "airport": "Dr. Babasaheb Ambedkar International Airport"
  },
  {
    "city": "Nanded",
    "state": "Maharashtra",
    "iata": "NDC",
    "airport": "Shri Guru Gobind Singh Ji Airport"
  },
  {
    "city": "Nashik",
    "state": "Maharashtra",
    "iata": "ISK",
    "airport": "Nashik Airport"
  },
  {
    "city": "Pakyong",
    "state": "Sikkim",
    "iata": "PYG",
    "airport": "Pakyong Airport"
  },
  {
    "city": "Pantnagar",
    "state": "Uttarakhand",
    "iata": "PGH",
    "airport": "Pantnagar Airport"
  },
  {
    "city": "Pasighat",
    "state": "Arunachal Pradesh",
    "iata": "IXT",
    "airport": "Pasighat Airport"
  },
  {
    "city": "Pathankot",
    "state": "Punjab",
    "iata": "IXP",
    "airport": "Pathankot Airport"
  },
  {
    "city": "Patna",
    "state": "Bihar",
    "iata": "PAT",
    "airport": "Jay Prakash Narayan Airport"
  },
  {
    "city": "Porbandar",
    "state": "Gujarat",
    "iata": "PBD",
    "airport": "Porbandar Airport"
  },
  {
    "city": "Port Blair / Sri Vijaya Puram",
    "state": "Andaman and Nicobar Islands",
    "iata": "IXZ",
    "airport": "Veer Savarkar International Airport"
  },
  {
    "city": "Prayagraj",
    "state": "Uttar Pradesh",
    "iata": "IXD",
    "airport": "Prayagraj Airport"
  },
  {
    "city": "Pune",
    "state": "Maharashtra",
    "iata": "PNQ",
    "airport": "Pune Airport"
  },
  {
    "city": "Purnia",
    "state": "Bihar",
    "iata": "PXN",
    "airport": "Purnia Airport"
  },
  {
    "city": "Puttaparthi",
    "state": "Andhra Pradesh",
    "iata": "PUT",
    "airport": "Sri Sathya Sai Airport"
  },
  {
    "city": "Raipur",
    "state": "Chhattisgarh",
    "iata": "RPR",
    "airport": "Swami Vivekananda Airport"
  },
  {
    "city": "Rajahmundry",
    "state": "Andhra Pradesh",
    "iata": "RJA",
    "airport": "Rajahmundry Airport"
  },
  {
    "city": "Rajkot / Hirasar",
    "state": "Gujarat",
    "iata": "HSR",
    "airport": "Rajkot International Airport"
  },
  {
    "city": "Ranchi",
    "state": "Jharkhand",
    "iata": "IXR",
    "airport": "Birsa Munda Airport"
  },
  {
    "city": "Rourkela",
    "state": "Odisha",
    "iata": "RRK",
    "airport": "Rourkela Airport"
  },
  {
    "city": "Rupsi",
    "state": "Assam",
    "iata": "RUP",
    "airport": "Rupsi Airport"
  },
  {
    "city": "Salem",
    "state": "Tamil Nadu",
    "iata": "SXV",
    "airport": "Salem Airport"
  },
  {
    "city": "Shillong / Umroi",
    "state": "Meghalaya",
    "iata": "SHL",
    "airport": "Shillong Airport"
  },
  {
    "city": "Shimla",
    "state": "Himachal Pradesh",
    "iata": "SLV",
    "airport": "Shimla Airport"
  },
  {
    "city": "Shirdi",
    "state": "Maharashtra",
    "iata": "SAG",
    "airport": "Shirdi Airport"
  },
  {
    "city": "Silchar",
    "state": "Assam",
    "iata": "IXS",
    "airport": "Silchar Airport"
  },
  {
    "city": "Srinagar",
    "state": "Jammu and Kashmir",
    "iata": "SXR",
    "airport": "Sheikh ul-Alam International Airport"
  },
  {
    "city": "Surat",
    "state": "Gujarat",
    "iata": "STV",
    "airport": "Surat International Airport"
  },
  {
    "city": "Tezpur",
    "state": "Assam",
    "iata": "TEZ",
    "airport": "Tezpur Airport"
  },
  {
    "city": "Tezu",
    "state": "Arunachal Pradesh",
    "iata": "TEI",
    "airport": "Tezu Airport"
  },
  {
    "city": "Thiruvananthapuram",
    "state": "Kerala",
    "iata": "TRV",
    "airport": "Thiruvananthapuram International Airport"
  },
  {
    "city": "Tiruchirappalli",
    "state": "Tamil Nadu",
    "iata": "TRZ",
    "airport": "Tiruchirappalli International Airport"
  },
  {
    "city": "Tirupati",
    "state": "Andhra Pradesh",
    "iata": "TIR",
    "airport": "Tirupati Airport"
  },
  {
    "city": "Tuticorin / Thoothukudi",
    "state": "Tamil Nadu",
    "iata": "TCR",
    "airport": "Thoothukudi Airport"
  },
  {
    "city": "Udaipur",
    "state": "Rajasthan",
    "iata": "UDR",
    "airport": "Maharana Pratap Airport"
  },
  {
    "city": "Vadodara",
    "state": "Gujarat",
    "iata": "BDQ",
    "airport": "Vadodara Airport"
  },
  {
    "city": "Varanasi",
    "state": "Uttar Pradesh",
    "iata": "VNS",
    "airport": "Lal Bahadur Shastri International Airport"
  },
  {
    "city": "Vijayawada",
    "state": "Andhra Pradesh",
    "iata": "VGA",
    "airport": "Vijayawada International Airport"
  },
  {
    "city": "Visakhapatnam",
    "state": "Andhra Pradesh",
    "iata": "VTZ",
    "airport": "Visakhapatnam Airport"
  },
  {
    "city": "Ziro",
    "state": "Arunachal Pradesh",
    "iata": "ZER",
    "airport": "Ziro Airport"
  }
];

const places = {
  Hyderabad: [
    {name:"Charminar & Old City",category:"History & culture",interests:["History","Shopping","Food"],duration:75,travel:35,emoji:"🏛",description:"Explore the iconic monument area and nearby lanes. Check local opening conditions and crowd levels."},
    {name:"Hussain Sagar & Tank Bund",category:"Scenery",interests:["Scenery","Chill places"],duration:60,travel:30,emoji:"🌊",description:"A lakeside stop for open views and a slower break."},
    {name:"Café or local food stop",category:"Food & chill",interests:["Food","Chill places"],duration:50,travel:20,emoji:"☕",description:"Pause for a snack or a relaxed meal at a convenient nearby spot."},
    {name:"Golconda Fort area",category:"History",interests:["History","Fun"],duration:90,travel:45,emoji:"🏰",description:"A historic fort complex that needs a longer visit and careful timing."},
    {name:"Laad Bazaar",category:"Shopping",interests:["Shopping","History"],duration:45,travel:10,emoji:"🛍",description:"Browse traditional bangles and local shops near the Old City."}
  ],
  Kolkata: [
    {name:"Victoria Memorial area",category:"History & scenery",interests:["History","Scenery","Chill places"],duration:75,travel:35,emoji:"🏛",description:"Grand architecture and green open spaces. Check museum hours if entering the building."},
    {name:"Prinsep Ghat",category:"River views",interests:["Scenery","Chill places"],duration:55,travel:30,emoji:"🌅",description:"A riverside stop for a walk and views of the Hooghly."},
    {name:"Park Street café stop",category:"Food & chill",interests:["Food","Chill places","Fun"],duration:50,travel:25,emoji:"☕",description:"Take a break at a café or restaurant in a lively neighbourhood."},
    {name:"Indian Museum area",category:"Culture",interests:["History","Fun"],duration:70,travel:30,emoji:"🖼",description:"A museum-area option; verify the current opening hours before visiting."},
    {name:"New Market area",category:"Shopping",interests:["Shopping","Food"],duration:50,travel:30,emoji:"🛍",description:"Explore a busy shopping area if time, crowds and traffic allow."}
  ],
  Agartala: [
    {name:"Ujjayanta Palace area",category:"Heritage",interests:["History","Scenery","Chill places"],duration:70,travel:20,emoji:"🏛",description:"A landmark palace and surrounding area. Verify museum hours and access."},
    {name:"Local food stop",category:"Food",interests:["Food","Chill places"],duration:45,travel:15,emoji:"🍲",description:"Try a local meal or snack at a convenient place in the city."},
    {name:"City park or relaxed walk",category:"Chill places",interests:["Chill places","Scenery"],duration:40,travel:15,emoji:"🌿",description:"A low-pressure break when you want to keep the itinerary simple."},
    {name:"Local market",category:"Shopping & culture",interests:["Shopping","Food","History"],duration:45,travel:15,emoji:"🛍",description:"Browse local shops and everyday city life."},
    {name:"Neermahal excursion",category:"Scenery & heritage",interests:["Scenery","History","Fun"],duration:150,travel:70,emoji:"🏰",description:"A farther-away excursion. Only consider with ample time and verified transport."}
  ],
  Visakhapatnam: [
    {name:"RK Beach",category:"Beach & scenery",interests:["Scenery","Chill places","Fun"],duration:60,travel:35,emoji:"🌊",description:"Enjoy the seafront and a short walk. Avoid swimming unless conditions and local guidance permit."},
    {name:"Submarine Museum area",category:"Museum & culture",interests:["History","Fun"],duration:60,travel:35,emoji:"⚓",description:"A distinctive maritime attraction; check current opening times before you go."},
    {name:"Beachside café stop",category:"Food & chill",interests:["Food","Chill places"],duration:45,travel:20,emoji:"☕",description:"Relax with a drink or meal near the coast."},
    {name:"Kailasagiri",category:"Scenic viewpoint",interests:["Scenery","Fun"],duration:75,travel:50,emoji:"🌄",description:"A hilltop viewpoint that needs extra transport time and a weather check."},
    {name:"Local shopping stop",category:"Shopping",interests:["Shopping","Food"],duration:40,travel:25,emoji:"🛍",description:"Fit in a short shopping stop if it is near your route."}
  ]

};

Object.assign(places, {
  "Agra": [
    {name:"Taj Mahal",category:"Heritage",interests:["History","Scenery"],duration:100,travel:45,emoji:"🏛",description:"India’s iconic marble mausoleum. Only consider it with a generous layover; check current entry rules and travel time."},
    {name:"Agra Fort",category:"History",interests:["History"],duration:75,travel:40,emoji:"🏰",description:"A major Mughal fort; allow time for traffic and entry queues."},
    {name:"Sadar Bazaar",category:"Food & shopping",interests:["Food","Shopping"],duration:45,travel:35,emoji:"🛍",description:"A busy market area for local snacks and shopping."}
  ],
  "Ahmedabad": [
    {name:"Sabarmati Ashram",category:"History",interests:["History","Chill places"],duration:60,travel:30,emoji:"🕊",description:"A calm historic site associated with Mahatma Gandhi."},
    {name:"Sabarmati Riverfront",category:"Scenery",interests:["Scenery","Chill places"],duration:45,travel:30,emoji:"🌊",description:"A riverside promenade for a relaxed walk."},
    {name:"Manek Chowk",category:"Food",interests:["Food","Fun"],duration:50,travel:35,emoji:"🍲",description:"A well-known food area; check which stalls are operating at your visit time."}
  ],
  "Amritsar": [
    {name:"Golden Temple",category:"Culture & spirituality",interests:["History","Scenery"],duration:75,travel:35,emoji:"✨",description:"A major Sikh pilgrimage site. Dress respectfully and allow for security and queues."},
    {name:"Jallianwala Bagh",category:"History",interests:["History"],duration:45,travel:35,emoji:"🏛",description:"A memorial garden near the Golden Temple; verify opening hours."},
    {name:"Hall Bazaar",category:"Shopping & food",interests:["Shopping","Food"],duration:45,travel:35,emoji:"🛍",description:"A central market area for local shopping and snacks."}
  ],
  "Bengaluru": [
    {name:"Cubbon Park",category:"Green space",interests:["Scenery","Chill places"],duration:50,travel:45,emoji:"🌳",description:"A leafy central park; airport-to-city travel can be long, so check live traffic."},
    {name:"Bengaluru Palace",category:"Heritage",interests:["History","Fun"],duration:75,travel:50,emoji:"🏰",description:"A landmark palace; check visitor access and ticket timings."},
    {name:"Church Street",category:"Food & shopping",interests:["Food","Shopping","Fun"],duration:50,travel:45,emoji:"☕",description:"A lively central street with cafés and shops."}
  ],
  "Bhopal": [
    {name:"Upper Lake (Bhojtal)",category:"Lake & scenery",interests:["Scenery","Chill places"],duration:50,travel:35,emoji:"🌊",description:"A scenic lakefront area for a short break."},
    {name:"Taj-ul-Masajid area",category:"Architecture",interests:["History","Scenery"],duration:45,travel:35,emoji:"🕌",description:"A notable mosque and architectural landmark; respect visitor rules."},
    {name:"Van Vihar National Park",category:"Nature",interests:["Scenery","Fun"],duration:75,travel:40,emoji:"🌿",description:"A lakeside nature and wildlife area; verify opening hours before going."}
  ],
  "Bhubaneswar": [
    {name:"Lingaraj Temple area",category:"Heritage & spirituality",interests:["History","Scenery"],duration:60,travel:35,emoji:"🛕",description:"A major historic temple area; access for non-Hindu visitors may be restricted inside the shrine."},
    {name:"Udayagiri and Khandagiri Caves",category:"History",interests:["History","Scenery"],duration:75,travel:45,emoji:"🪨",description:"Ancient rock-cut caves on the outskirts; allow for road travel."},
    {name:"Ekamra Haat",category:"Shopping & food",interests:["Shopping","Food"],duration:45,travel:30,emoji:"🛍",description:"A craft and food market, useful for a shorter city visit."}
  ],
  "Chandigarh": [
    {name:"Sukhna Lake",category:"Lake & scenery",interests:["Scenery","Chill places"],duration:50,travel:30,emoji:"🌊",description:"A popular lakefront walk and viewpoint."},
    {name:"Rock Garden",category:"Art & gardens",interests:["History","Scenery","Fun"],duration:70,travel:30,emoji:"🗿",description:"An unusual sculpture garden; confirm current opening hours."},
    {name:"Sector 17 Plaza",category:"Shopping & food",interests:["Shopping","Food"],duration:45,travel:30,emoji:"🛍",description:"A central plaza with shops and places to eat."}
  ],
  "Chennai": [
    {name:"Marina Beach",category:"Beach & scenery",interests:["Scenery","Chill places"],duration:55,travel:50,emoji:"🌊",description:"A long urban beach for a walk; do not assume swimming is safe."},
    {name:"Kapaleeshwarar Temple area",category:"Culture",interests:["History","Scenery"],duration:50,travel:45,emoji:"🛕",description:"A colourful historic temple in Mylapore; check access and local customs."},
    {name:"Besant Nagar / Elliot’s Beach",category:"Beach & food",interests:["Scenery","Food","Chill places"],duration:55,travel:55,emoji:"🏖",description:"A beach neighbourhood with cafés; check traffic before choosing it."}
  ],
  "Coimbatore": [
    {name:"Perur Pateeswarar Temple",category:"Heritage",interests:["History","Scenery"],duration:50,travel:40,emoji:"🛕",description:"A historic temple known for its carved pillars."},
    {name:"Race Course walking area",category:"City walk",interests:["Scenery","Chill places"],duration:40,travel:30,emoji:"🌳",description:"A central walking area with cafés nearby."},
    {name:"Brookefields area",category:"Shopping & food",interests:["Shopping","Food"],duration:45,travel:30,emoji:"🛍",description:"A convenient shopping and dining area."}
  ],
  "Dehradun": [
    {name:"Robber’s Cave (Guchhupani)",category:"Nature",interests:["Scenery","Fun"],duration:70,travel:45,emoji:"🏞",description:"A rocky stream and cave-like gorge; wear suitable footwear and check conditions."},
    {name:"Sahastradhara",category:"Nature",interests:["Scenery","Chill places"],duration:75,travel:50,emoji:"💧",description:"A scenic spring area outside the centre; road time can vary."},
    {name:"Paltan Bazaar",category:"Shopping & food",interests:["Shopping","Food"],duration:40,travel:30,emoji:"🛍",description:"A central market for local shopping and snacks."}
  ],
  "Delhi": [
    {name:"Qutub Minar",category:"Heritage",interests:["History","Scenery"],duration:75,travel:60,emoji:"🏛",description:"A UNESCO-listed monument; airport-to-site travel can be substantial."},
    {name:"Humayun’s Tomb",category:"Heritage",interests:["History","Scenery"],duration:75,travel:55,emoji:"🏰",description:"A Mughal-era garden tomb; check entry timings."},
    {name:"India Gate and Kartavya Path",category:"Landmarks",interests:["Scenery","Chill places"],duration:45,travel:45,emoji:"🇮🇳",description:"A central landmark area; check security restrictions and traffic."},
    {name:"Connaught Place",category:"Food & shopping",interests:["Food","Shopping","Fun"],duration:50,travel:45,emoji:"☕",description:"A central circular market district with cafés and shops."}
  ],
  "Goa — Dabolim": [
    {name:"Bogmalo Beach",category:"Beach",interests:["Scenery","Chill places"],duration:55,travel:20,emoji:"🏖",description:"A beach relatively close to Dabolim Airport; check sea conditions."},
    {name:"Vasco da Gama town",category:"Local life & food",interests:["Food","Shopping"],duration:45,travel:20,emoji:"🍲",description:"A nearby town option for a meal or short walk."},
    {name:"Hollant Beach",category:"Beach & scenery",interests:["Scenery","Chill places"],duration:45,travel:25,emoji:"🌊",description:"A quieter coastal option; verify access and transport before leaving."}
  ],
  "Goa — Mopa": [
    {name:"Morjim Beach",category:"Beach",interests:["Scenery","Chill places"],duration:60,travel:45,emoji:"🏖",description:"A North Goa beach; check road traffic and return time."},
    {name:"Ashwem Beach",category:"Beach & food",interests:["Scenery","Food"],duration:60,travel:50,emoji:"🌊",description:"A coastal area with cafés; allow extra time for the drive."},
    {name:"Mapusa Market area",category:"Market & food",interests:["Shopping","Food"],duration:50,travel:40,emoji:"🛍",description:"A town market area; market activity varies by day and time."}
  ],
  "Guwahati": [
    {name:"Kamakhya Temple",category:"Culture & spirituality",interests:["History","Scenery"],duration:75,travel:40,emoji:"🛕",description:"A major hilltop pilgrimage site; crowds and queues can be significant."},
    {name:"Brahmaputra riverfront",category:"River views",interests:["Scenery","Chill places"],duration:45,travel:35,emoji:"🌊",description:"A riverside stop for views; confirm the specific access point."},
    {name:"Assam State Museum area",category:"Culture",interests:["History"],duration:60,travel:35,emoji:"🖼",description:"A central museum option; check opening days and hours."}
  ],
  "Imphal": [
    {name:"Kangla Fort",category:"History & culture",interests:["History","Scenery"],duration:65,travel:30,emoji:"🏰",description:"A historic complex in the heart of Imphal; check entry hours."},
    {name:"Ima Keithel (Women’s Market)",category:"Market & local life",interests:["Shopping","Food","History"],duration:50,travel:30,emoji:"🛍",description:"A distinctive women-run market; activity depends on the time of day."},
    {name:"Loktak Lake",category:"Nature & scenery",interests:["Scenery","Fun"],duration:150,travel:75,emoji:"🌊",description:"A beautiful but farther excursion; only consider with a long layover and verified transport."}
  ],
  "Indore": [
    {name:"Rajwada Palace",category:"Heritage",interests:["History","Scenery"],duration:50,travel:35,emoji:"🏛",description:"A central historic palace area."},
    {name:"Sarafa Bazaar",category:"Food",interests:["Food","Fun"],duration:60,travel:35,emoji:"🍲",description:"A famous street-food area; timings vary between daytime market and evening food stalls."},
    {name:"Chhappan Dukan",category:"Food",interests:["Food","Fun"],duration:45,travel:35,emoji:"🍽",description:"A popular food street with many local snack options."}
  ],
  "Jaipur": [
    {name:"Hawa Mahal area",category:"Heritage",interests:["History","Scenery","Shopping"],duration:60,travel:45,emoji:"🏰",description:"A famous pink-city landmark near markets; expect crowds."},
    {name:"City Palace area",category:"Heritage",interests:["History"],duration:75,travel:45,emoji:"🏛",description:"A royal complex in the old city; verify entry times and ticket queues."},
    {name:"Jal Mahal viewpoint",category:"Scenery",interests:["Scenery","Chill places"],duration:35,travel:45,emoji:"🌅",description:"A lakeside photo stop; access inside the palace is not generally implied."},
    {name:"Bapu Bazaar",category:"Shopping",interests:["Shopping","Food"],duration:45,travel:45,emoji:"🛍",description:"A busy market for textiles, crafts and souvenirs."}
  ],
  "Jammu": [
    {name:"Raghunath Temple area",category:"Culture",interests:["History","Scenery"],duration:50,travel:35,emoji:"🛕",description:"A prominent temple complex in the city; check access and security."},
    {name:"Bahू Fort and Bagh-e-Bahu",category:"Heritage & gardens",interests:["History","Scenery"],duration:60,travel:40,emoji:"🏰",description:"A fort and garden area overlooking the Tawi River."},
    {name:"Amar Mahal Palace area",category:"Heritage",interests:["History","Scenery"],duration:50,travel:35,emoji:"🏛",description:"A palace museum area; verify current opening hours."}
  ],
  "Jodhpur": [
    {name:"Mehrangarh Fort",category:"Heritage",interests:["History","Scenery"],duration:90,travel:40,emoji:"🏰",description:"A major hilltop fort; allow time for entry and exploring."},
    {name:"Jaswant Thada",category:"Heritage",interests:["History","Scenery"],duration:45,travel:40,emoji:"🏛",description:"A white-marble memorial near Mehrangarh Fort."},
    {name:"Clock Tower and Sardar Market",category:"Market & food",interests:["Shopping","Food","History"],duration:50,travel:35,emoji:"🛍",description:"A lively market area in the old city."}
  ],
  "Kochi": [
    {name:"Fort Kochi waterfront",category:"Coastal scenery",interests:["Scenery","Chill places"],duration:55,travel:60,emoji:"🌊",description:"A historic waterfront neighbourhood; airport-to-Fort Kochi travel can be long."},
    {name:"Chinese Fishing Nets",category:"Landmark",interests:["Scenery","History"],duration:35,travel:60,emoji:"🎣",description:"A well-known waterfront landmark in Fort Kochi."},
    {name:"Mattancherry Palace area",category:"Heritage",interests:["History","Shopping"],duration:60,travel:65,emoji:"🏛",description:"A heritage palace and surrounding old-town streets; check opening hours."}
  ],
  "Lucknow": [
    {name:"Bara Imambara",category:"Heritage",interests:["History","Scenery"],duration:75,travel:40,emoji:"🏛",description:"A major architectural landmark; check entry and visiting hours."},
    {name:"Rumi Darwaza",category:"Architecture",interests:["History","Scenery"],duration:30,travel:40,emoji:"🚪",description:"An iconic gateway that can be seen during an old-city visit."},
    {name:"Hazratganj",category:"Shopping & food",interests:["Shopping","Food"],duration:45,travel:30,emoji:"☕",description:"A central shopping and café district."}
  ],
  "Mumbai": [
    {name:"Gateway of India",category:"Waterfront landmark",interests:["History","Scenery"],duration:55,travel:75,emoji:"🌊",description:"An iconic waterfront landmark; airport-to-South-Mumbai traffic can be heavy."},
    {name:"Marine Drive",category:"Seafront walk",interests:["Scenery","Chill places"],duration:45,travel:70,emoji:"🌅",description:"A classic seafront promenade; check traffic before committing."},
    {name:"Bandra Bandstand",category:"Coastal walk",interests:["Scenery","Chill places"],duration:45,travel:35,emoji:"🌊",description:"A waterfront promenade option in Bandra."},
    {name:"Juhu Beach",category:"Beach & food",interests:["Scenery","Food"],duration:50,travel:35,emoji:"🏖",description:"A popular beach area with street-food options; keep an eye on traffic."}
  ],
  "Mysuru": [
    {name:"Mysore Palace",category:"Heritage",interests:["History","Scenery"],duration:75,travel:35,emoji:"🏰",description:"The city’s best-known royal palace; check visiting hours and queues."},
    {name:"Devaraja Market",category:"Market & local life",interests:["Shopping","Food","History"],duration:45,travel:30,emoji:"🛍",description:"A colourful traditional market."},
    {name:"Chamundi Hill viewpoint",category:"Scenery & spirituality",interests:["Scenery","History"],duration:70,travel:45,emoji:"⛰",description:"A hilltop temple and viewpoint; allow extra road time."}
  ],
  "Nagpur": [
    {name:"Deekshabhoomi",category:"History & culture",interests:["History","Scenery"],duration:45,travel:30,emoji:"🏛",description:"An important Buddhist monument and pilgrimage site."},
    {name:"Futala Lake",category:"Lake & scenery",interests:["Scenery","Chill places"],duration:45,travel:35,emoji:"🌊",description:"A popular lakeside spot for an evening walk."},
    {name:"Sitabuldi market area",category:"Shopping & food",interests:["Shopping","Food"],duration:40,travel:30,emoji:"🛍",description:"A central market area for a quick browse or meal."}
  ],
  "Patna": [
    {name:"Golghar",category:"Heritage",interests:["History","Scenery"],duration:45,travel:35,emoji:"🏛",description:"A distinctive historic granary and city landmark."},
    {name:"Bihar Museum",category:"Culture",interests:["History","Fun"],duration:75,travel:35,emoji:"🖼",description:"A modern museum; verify current opening hours."},
    {name:"Gandhi Maidan riverfront area",category:"Open space",interests:["Scenery","Chill places"],duration:40,travel:30,emoji:"🌳",description:"A central open area for a short walk; check access and conditions."}
  ],
  "Pune": [
    {name:"Shaniwar Wada",category:"Heritage",interests:["History","Scenery"],duration:60,travel:55,emoji:"🏰",description:"A historic fortification in the old city; account for airport travel."},
    {name:"Aga Khan Palace",category:"History",interests:["History","Scenery"],duration:75,travel:35,emoji:"🏛",description:"A historic palace and memorial; check opening hours."},
    {name:"FC Road cafés",category:"Food & local life",interests:["Food","Chill places","Fun"],duration:45,travel:50,emoji:"☕",description:"A lively café and shopping street; traffic can vary considerably."}
  ],
  "Srinagar": [
    {name:"Dal Lake Boulevard",category:"Lake & scenery",interests:["Scenery","Chill places"],duration:60,travel:35,emoji:"🌊",description:"A lakeside drive and promenade; confirm local conditions and access."},
    {name:"Mughal Gardens",category:"Gardens",interests:["Scenery","History"],duration:75,travel:45,emoji:"🌷",description:"A group of historic gardens; choose a specific garden and check seasonal hours."},
    {name:"Shankaracharya Temple viewpoint",category:"Viewpoint",interests:["Scenery","History"],duration:75,travel:45,emoji:"⛰",description:"A hilltop viewpoint; check access and security conditions before going."}
  ],
  "Surat": [
    {name:"Dumas Beach",category:"Beach & scenery",interests:["Scenery","Chill places"],duration:60,travel:45,emoji:"🏖",description:"A popular coastal outing; check traffic and sea conditions."},
    {name:"Gopi Talav",category:"Lake & recreation",interests:["Scenery","Fun"],duration:50,travel:35,emoji:"🌊",description:"A city recreation area with a lake and family activities."},
    {name:"Surat textile market area",category:"Shopping",interests:["Shopping","Food"],duration:45,travel:35,emoji:"🛍",description:"A well-known textile-shopping district; business hours vary."}
  ],
  "Thiruvananthapuram": [
    {name:"Kovalam Beach",category:"Beach",interests:["Scenery","Chill places"],duration:70,travel:40,emoji:"🏖",description:"A popular beach area south of the city; verify traffic and sea conditions."},
    {name:"Padmanabhaswamy Temple area",category:"Culture",interests:["History","Scenery"],duration:50,travel:25,emoji:"🛕",description:"A major temple landmark; entry rules are strict and vary by visitor eligibility."},
    {name:"Napier Museum and gardens",category:"Culture & gardens",interests:["History","Scenery"],duration:60,travel:25,emoji:"🖼",description:"A museum and green-space option; check opening days and hours."}
  ],
  "Tiruchirappalli": [
    {name:"Rockfort Temple",category:"Heritage & spirituality",interests:["History","Scenery"],duration:60,travel:30,emoji:"🛕",description:"A hilltop temple complex with city views; expect steps."},
    {name:"Sri Ranganathaswamy Temple",category:"Heritage",interests:["History","Scenery"],duration:75,travel:40,emoji:"🛕",description:"A vast historic temple complex in Srirangam; check darshan timings."},
    {name:"Kallanai (Grand Anicut)",category:"River & history",interests:["Scenery","History"],duration:60,travel:55,emoji:"🌊",description:"An ancient dam farther from the city; only consider with ample time."}
  ],
  "Udaipur": [
    {name:"City Palace",category:"Heritage",interests:["History","Scenery"],duration:90,travel:45,emoji:"🏰",description:"A large palace complex overlooking Lake Pichola; allow time for entry."},
    {name:"Lake Pichola waterfront",category:"Lake & scenery",interests:["Scenery","Chill places"],duration:50,travel:45,emoji:"🌊",description:"A scenic lakefront area; boat services depend on operating conditions."},
    {name:"Fateh Sagar Lake",category:"Lake & food",interests:["Scenery","Food","Chill places"],duration:50,travel:50,emoji:"🌅",description:"A popular lakefront stop with nearby food options."}
  ],
  "Varanasi": [
    {name:"Dashashwamedh Ghat",category:"River & culture",interests:["History","Scenery"],duration:60,travel:55,emoji:"🌅",description:"A major Ganges riverfront ghat; crowds and traffic can be intense."},
    {name:"Assi Ghat",category:"Riverfront",interests:["Scenery","Chill places"],duration:50,travel:55,emoji:"🌊",description:"A well-known riverside area; allow for city traffic."},
    {name:"Sarnath",category:"History & spirituality",interests:["History","Scenery"],duration:100,travel:50,emoji:"🛕",description:"An important Buddhist heritage site outside the city centre; best for a longer layover."}
  ],
  "Visakhapatnam": [
    {name:"RK Beach (Ramakrishna Beach)",category:"Beach & scenery",interests:["Scenery","Chill places","Fun"],duration:60,travel:35,emoji:"🌊",description:"A popular seafront promenade with nearby museums. The district tourism site lists it about 18 km from the airport; actual travel varies."},
    {name:"Rushikonda Beach",category:"Beach",interests:["Scenery","Fun"],duration:60,travel:45,emoji:"🏖",description:"A well-known beach north of the city. Check live travel time and sea conditions; do not assume swimming is safe."},
    {name:"Yarada Beach",category:"Beach & scenery",interests:["Scenery","Chill places"],duration:75,travel:55,emoji:"🌴",description:"A scenic beach surrounded by hills; it is farther away and access/transport should be checked before leaving the airport."},
    {name:"Kailasagiri Hill Park",category:"Scenic viewpoint",interests:["Scenery","Fun"],duration:75,travel:50,emoji:"🌄",description:"A hilltop park with wide coastal views. Check opening hours and transport."},
    {name:"INS Kursura Submarine Museum",category:"Museum & culture",interests:["History","Fun"],duration:60,travel:35,emoji:"⚓",description:"A submarine museum on RK Beach Road; check current ticketing and opening times."},
    {name:"TU-142 Aircraft Museum",category:"Museum & culture",interests:["History","Fun"],duration:45,travel:35,emoji:"✈️",description:"An aircraft museum on the beachfront museum stretch; confirm current access."},
    {name:"Thotlakonda Buddhist Complex",category:"History & views",interests:["History","Scenery"],duration:60,travel:55,emoji:"🪷",description:"An archaeological hilltop site overlooking the coast; check opening hours and travel time."},
    {name:"Simhachalam Temple",category:"Heritage & spirituality",interests:["History","Scenery"],duration:75,travel:40,emoji:"🛕",description:"A historic hill temple; queues and darshan timings can vary."},
    {name:"VUDA Park (Taraka Rama Park)",category:"Park & recreation",interests:["Scenery","Chill places","Fun"],duration:50,travel:35,emoji:"🌳",description:"A city park for a more relaxed stop; check current access and facilities."}
  ]
});

let travelType = "flight";
const selectedInterests = new Set(["Scenery","Chill places"]);
const typeLabels = {flight:"Flight layover",train:"Train connection",road:"Road trip / bus stop",free:"Free day"};
const cityEmoji = {Hyderabad:"🏛",Kolkata:"🌆",Agartala:"🌿",Visakhapatnam:"🌊"};

const $ = id => document.getElementById(id);
const form = $("plannerForm");
const airportOptions = $("airportOptions");
const cityInput = $("city");
const airportLabel = airport => `${airport.city} — ${airport.state} (${airport.iata})`;
airports.forEach(airport => {
  const option = document.createElement("option");
  option.value = airportLabel(airport);
  option.label = `${airport.airport} · ${airport.iata}`;
  airportOptions.appendChild(option);
});
cityInput.value = airportLabel(airports.find(airport => airport.city === "Hyderabad"));
function selectedCityName() {
  const value = cityInput.value.trim();
  const exact = airports.find(airport => airportLabel(airport).toLowerCase() === value.toLowerCase());
  if (exact) return exact.city;
  const byCode = airports.find(airport => airport.iata.toLowerCase() === value.toLowerCase());
  if (byCode) { cityInput.value = airportLabel(byCode); return byCode.city; }
  const byCity = airports.find(airport => airport.city.toLowerCase() === value.toLowerCase());
  if (byCity) { cityInput.value = airportLabel(byCity); return byCity.city; }
  return null;
}
const now = new Date();
const later = new Date(now.getTime() + 8*60*60*1000);
const dateValue = date => {
  const adjusted = new Date(date.getTime() - date.getTimezoneOffset()*60000);
  return adjusted.toISOString().slice(0,10);
};
const timeValue = date => {
  const hh = String(date.getHours()).padStart(2,"0");
  const mm = String(Math.floor(date.getMinutes()/15)*15).padStart(2,"0");
  return `${hh}:${mm}`;
};
function populateTimeSelect(select) {
  select.innerHTML = "";
  for (let minutes=0; minutes<24*60; minutes+=15) {
    const hour = String(Math.floor(minutes/60)).padStart(2,"0");
    const minute = String(minutes%60).padStart(2,"0");
    const option = document.createElement("option");
    option.value = `${hour}:${minute}`;
    option.textContent = `${hour}:${minute}`;
    select.appendChild(option);
  }
}

populateTimeSelect($("arrival"));
populateTimeSelect($("departure"));
$("arrivalDate").min = dateValue(now);
$("departureDate").min = dateValue(now);
$("menuToggle").addEventListener("click", () => {
  const nav = document.querySelector(".navbar nav");
  const isOpen = nav.classList.toggle("open");
  $("menuToggle").setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".navbar nav a").forEach(link => link.addEventListener("click", () => document.querySelector(".navbar nav").classList.remove("open")));
$("arrivalDate").addEventListener("change", () => {
  $("departureDate").min = $("arrivalDate").value || dateValue(now);
  if ($("departureDate").value && $("departureDate").value < $("arrivalDate").value) $("departureDate").value = $("arrivalDate").value;
});
$("arrivalDate").value = dateValue(now);
$("departureDate").value = dateValue(later);
$("arrival").value = timeValue(now);
$("departure").value = timeValue(later);

function combineDateAndTime(dateId, timeId) {
  const date = $(dateId).value;
  const time = $(timeId).value;
  if (!date || !time) return null;
  return safeDate(`${date}T${time}`);
}

// This edition intentionally supports flight layovers only.
travelType = "flight";
$("buffer").innerHTML = '<option value="150">2.5 hours — flight buffer</option><option value="180">3 hours — extra cautious</option><option value="120">2 hours — check requirements first</option>';
$("startPoint").value = "Airport";
$("returnPoint").value = "Airport";


document.querySelectorAll(".interest").forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.interest;
    if (selectedInterests.has(value)) selectedInterests.delete(value);
    else selectedInterests.add(value);
    button.classList.toggle("active", selectedInterests.has(value));
  });
});

document.querySelectorAll(".city-card").forEach(card => {
  card.addEventListener("click", () => {
    const selected = airports.find(airport => airport.city === card.dataset.city);
    if (selected) $("city").value = airportLabel(selected);
    $("planner").scrollIntoView({behavior:"smooth"});
  });
});

$("editPlan").addEventListener("click", () => $("planner").scrollIntoView({behavior:"smooth"}));

function formatTime(date) {
  return date.toLocaleTimeString([], {hour:"numeric", minute:"2-digit"});
}
function formatDuration(minutes) {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes/60), mins = minutes%60;
  return mins ? `${hours}h ${mins}m` : `${hours}h`;
}
function addMinutes(date, mins) { return new Date(date.getTime() + mins*60000); }
function safeDate(value) { const d = new Date(value); return Number.isNaN(d.getTime()) ? null : d; }

form.addEventListener("submit", event => {
  event.preventDefault();
  const city = selectedCityName();
  if (!city) { alert("Please choose a city from the India airport suggestions, or enter its airport code."); cityInput.focus(); return; }
  const arrival = combineDateAndTime("arrivalDate", "arrival");
  let departure = combineDateAndTime("departureDate", "departure");
  if (!arrival || !departure) {
    alert("Please enter valid arrival and departure times.");
    return;
  }
  if (departure <= arrival) {
    alert("Your end/departure time must be after your arrival time.");
    return;
  }

  const totalMinutes = Math.floor((departure-arrival)/60000);
  const bufferMinutes = Number($("buffer").value);
  // These are rough demo estimates, not live routing data.
  const transportEachWay = {"Airport":45,"Railway station":20,"Bus station":20,"City centre":15,"Other location":30,"Same starting point":20};
  let oneWay = transportEachWay[$("startPoint").value] ?? 30;
  if ($("transport").value === "Public transport") oneWay += 10;
  const travelMinutes = oneWay*2;
  const usable = Math.max(0, totalMinutes - bufferMinutes - travelMinutes);
  const returnDeadline = addMinutes(departure, -bufferMinutes);
  const curatedPlaces = places[city];
  const cityPlaces = curatedPlaces || [
    {name:`Find a café near ${city} Airport`,category:"Food & chill",interests:["Food","Chill places"],duration:45,travel:20,emoji:"☕",description:"This is a search suggestion, not a verified venue. Use a map to choose a café close to your actual route and check opening hours."},
    {name:`Explore a nearby local market in ${city}`,category:"Shopping & local life",interests:["Shopping","History","Food"],duration:45,travel:25,emoji:"🛍",description:"No specific market has been verified for this city yet. Search the map and choose one only if the return trip fits your buffer."},
    {name:`Choose a public place near ${city}`,category:"Scenery & local life",interests:["Scenery","Chill places"],duration:35,travel:20,emoji:"🌿",description:"A placeholder idea until local places are added. Confirm the exact place, transport, access and opening hours before leaving the airport."},
    {name:`Try a local food spot in ${city}`,category:"Local food",interests:["Food","Fun"],duration:50,travel:20,emoji:"🍲",description:"Search for a well-reviewed local food spot near your route; this is not a named or verified restaurant."}
  ];
  const interestArray = [...selectedInterests];
  let candidates = cityPlaces.filter(p => interestArray.length === 0 || p.interests.some(i => interestArray.includes(i)));
  if (!candidates.length) candidates = cityPlaces;
  // For short windows, avoid far-away excursions.
  candidates = candidates.filter(p => !(p.name.includes("Neermahal") && usable < 300));
  candidates.sort((a,b) => {
    const score = p => p.interests.filter(i=>interestArray.includes(i)).length;
    return score(b)-score(a) || a.duration-b.duration;
  });

  let availableForVisits = usable;
  const chosen = [];
  for (const place of candidates) {
    const needed = place.duration + place.travel;
    if (chosen.length >= 4) break;
    if (needed <= availableForVisits) {
      chosen.push(place);
      availableForVisits -= needed;
    }
  }
  const canExplore = usable;
  $("results").classList.remove("hidden");
  $("resultTitle").textContent = canExplore < 90 ? "Keep it close and simple." : `Make ${city} part of your story.`;
  $("resultSubtitle").textContent = `Flight layover · ${city} · ${interestArray.length ? interestArray.join(", ") : "A little bit of everything"}${curatedPlaces ? "" : " · general ideas, not curated local picks"}`;
  $("timeSummary").innerHTML = `
    <div class="summary-card"><span>Total time</span><strong>${formatDuration(totalMinutes)}</strong><small>${formatTime(arrival)} – ${formatTime(departure)}</small></div>
    <div class="summary-card"><span>Departure buffer</span><strong>${formatDuration(bufferMinutes)}</strong><small>Airport return buffer</small></div>
    <div class="summary-card"><span>Estimated transport</span><strong>${formatDuration(travelMinutes)}</strong><small>Round trip · sample estimate</small></div>
    <div class="summary-card highlight"><span>Potential explore time</span><strong>${formatDuration(canExplore)}</strong><small>${chosen.length} suggested ${chosen.length===1?"stop":"stops"} fit in the sample plan</small></div>`;
  const warning = $("warningBox");
  warning.classList.add("hidden");
  if (totalMinutes <= bufferMinutes + travelMinutes) {
    warning.textContent = "There may not be enough time to leave your departure area safely. Consider staying nearby. The calculation uses rough transport estimates, not live traffic.";
    warning.classList.remove("hidden");
  } else if (chosen.length === 0) {
    warning.textContent = "No sample attractions fit comfortably in the remaining time with these assumptions. Choose a nearby café or attraction, or allow more time.";
    warning.classList.remove("hidden");
  } else {
    warning.textContent = "Planning estimate only: confirm your airline's rules, live traffic, opening hours and the exact return deadline before you leave.";
    warning.classList.remove("hidden");
  }

  $("placeCount").textContent = `${chosen.length} stops · sample suggestions`;
  const transportChoice = $("transport").value;
  const transportLabel = transportChoice === "Public transport" ? "Bus / local transit" : transportChoice === "Cab / taxi" ? "Cab / taxi" : "Cab or public transport";
  const estimateCost = (p) => {
    // Illustrative per-person budget ranges, not live quotes.
    const transport = transportChoice === "Public transport" ? [80, 180] : transportChoice === "Cab / taxi" ? [500, 1200] : [150, 900];
    const ticket = /museum|palace|park|temple|complex|garden|fort|kailasagiri/i.test(p.name) ? [50, 250] : [0, 100];
    const food = [100, 250];
    return [transport[0]+ticket[0]+food[0], transport[1]+ticket[1]+food[1]];
  };
  const mapUrl = (name, city) => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(city + " Airport")}&destination=${encodeURIComponent(name + ", " + city)}&travelmode=driving`;
  $("placeList").innerHTML = chosen.length ? chosen.map((p,i)=>{
    const cost = estimateCost(p);
    return `<article class="place-card">
      <div class="place-content"><div class="place-meta">${p.category}</div><h4>${p.name}</h4><p>${p.description}</p>
      <div class="place-facts"><span>◷ ${formatDuration(p.duration)} at place</span><span>↗ ${formatDuration(p.travel)} one way (rough)</span><span>🚕 ${transportLabel}</span><span>₹${cost[0]}–₹${cost[1]} / person</span></div>
      <div class="place-actions"><a href="${mapUrl(p.name, city)}" target="_blank" rel="noopener noreferrer">Get directions ↗</a><span>${i+1} / ${chosen.length}</span></div></div>
    </article>`;
  }).join("") : `<article class="place-card"><div class="place-content"><div class="place-meta">Suggestion</div><h4>Stay close to your departure point</h4><p>Try a nearby café, lounge or short walk rather than travelling across the city.</p></div></article>`;

  let cursor = arrival;
  const timeline = [];
  timeline.push({time:formatTime(cursor),title:"Arrive at your stop",detail:$("startPoint").value});
  cursor = addMinutes(cursor, oneWay);
  chosen.forEach((p,i) => {
    timeline.push({time:formatTime(cursor),title:p.name,detail:`Spend about ${formatDuration(p.duration)}`});
    cursor = addMinutes(cursor, p.duration + p.travel);
  });
  if (chosen.length) timeline.push({time:formatTime(returnDeadline),title:"Return deadline",detail:`Be back at your ${$("returnPoint").value.toLowerCase()} by this time`});
  $("timeline").innerHTML = timeline.map(item=>`<div class="timeline-item"><div class="timeline-time">${item.time}</div><div class="timeline-track"><span class="timeline-dot"></span></div><div class="timeline-copy"><strong>${item.title}</strong><small>${item.detail}</small></div></div>`).join("");
  $("returnReminder").textContent = `Aim to be back at the airport by ${formatTime(returnDeadline)}. Confirm your airline’s check-in and boarding cutoff before leaving.`;
  $("results").scrollIntoView({behavior:"smooth",block:"start"});
});
