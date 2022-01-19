import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import api from "../api/api";
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import { countryList } from "../countryList";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phone: "",
      confirmpassword: "",
      gender: "",
      username: "",
      age: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      firstnameErr: "",
      emailErr: "",
      passwordErr: "",
      lastnameErr: "",
      phoneErr: "",
      confirmpasswordErr: "",
      ageErr: "",
      genderErr: "",
      usernameErr: "",
      countryErr: "",
      stateErr: "",
      cityErr: "",
      pincodeErr: "",
      countries: [],
      states: [],
      cities: [],
      selectedCountry: "Country",
      selectedState: "State",
      selectedCity: "",
    };
  }

  componentDidMount() {
    this.setState({
      countries: [
        {
          name: "India",
          states: [
            { name: "Andaman and Nicobar Islands", cities: ["Port Blair"] },
            {
              name: "Andhra Pradesh",
              cities: [
                "Adoni",
                "Amalapuram",
                "Anakapalle",
                "Anantapur",
                "Bapatla",
                "Bheemunipatnam",
                "Bhimavaram",
                "Bobbili",
                "Chilakaluripet",
                "Chirala",
                "Chittoor",
                "Dharmavaram",
                "Eluru",
                "Gooty",
                "Gudivada",
                "Gudur",
                "Guntakal",
                "Guntur",
                "Hindupur",
                "Jaggaiahpet",
                "Jammalamadugu",
                "Kadapa",
                "Kadiri",
                "Kakinada",
                "Kandukur",
                "Kavali",
                "Kovvur",
                "Kurnool",
                "Macherla",
                "Machilipatnam",
                "Madanapalle",
                "Mandapeta",
                "Markapur",
                "Nagari",
                "Naidupet",
                "Nandyal",
                "Narasapuram",
                "Narasaraopet",
                "Narsipatnam",
                "Nellore",
                "Nidadavole",
                "Nuzvid",
                "Ongole",
                "Palacole",
                "Palasa Kasibugga",
                "Parvathipuram",
                "Pedana",
                "Peddapuram",
                "Pithapuram",
                "Ponnur",
                "Proddatur",
                "Punganur",
                "Puttur",
                "Rajahmundry",
                "Rajam",
                "Rajampet",
                "Ramachandrapuram",
                "Rayachoti",
                "Rayadurg",
                "Renigunta",
                "Repalle",
                "Salur",
                "Samalkot",
                "Sattenapalle",
                "Srikakulam",
                "Srikalahasti",
                "Srisailam Project (Right Flank Colony) Township",
                "Sullurpeta",
                "Tadepalligudem",
                "Tadpatri",
                "Tanuku",
                "Tenali",
                "Tirupati",
                "Tiruvuru",
                "Tuni",
                "Uravakonda",
                "Venkatagiri",
                "Vijayawada",
                "Vinukonda",
                "Visakhapatnam",
                "Vizianagaram",
                "Yemmiganur",
                "Yerraguntla",
              ],
            },
            { name: "Arunachal Pradesh", cities: ["Naharlagun", "Pasighat"] },
            {
              name: "Assam",
              cities: [
                "Barpeta",
                "Bongaigaon City",
                "Dhubri",
                "Dibrugarh",
                "Diphu",
                "Goalpara",
                "Guwahati",
                "Jorhat",
                "Karimganj",
                "Lanka",
                "Lumding",
                "Mangaldoi",
                "Mankachar",
                "Margherita",
                "Mariani",
                "Marigaon",
                "Nagaon",
                "Nalbari",
                "North Lakhimpur",
                "Rangia",
                "Sibsagar",
                "Silapathar",
                "Silchar",
                "Tezpur",
                "Tinsukia",
              ],
            },
            {
              name: "Bihar",
              cities: [
                "Araria",
                "Arrah",
                "Arwal",
                "Asarganj",
                "Aurangabad",
                "Bagaha",
                "Barh",
                "Begusarai",
                "Bettiah",
                "Bhabua",
                "Bhagalpur",
                "Buxar",
                "Chhapra",
                "Darbhanga",
                "Dehri-on-Sone",
                "Dumraon",
                "Forbesganj",
                "Gaya",
                "Gopalganj",
                "Hajipur",
                "Jamalpur",
                "Jamui",
                "Jehanabad",
                "Katihar",
                "Kishanganj",
                "Lakhisarai",
                "Lalganj",
                "Madhepura",
                "Madhubani",
                "Maharajganj",
                "Mahnar Bazar",
                "Makhdumpur",
                "Maner",
                "Manihari",
                "Marhaura",
                "Masaurhi",
                "Mirganj",
                "Mokameh",
                "Motihari",
                "Motipur",
                "Munger",
                "Murliganj",
                "Muzaffarpur",
                "Narkatiaganj",
                "Naugachhia",
                "Nawada",
                "Nokha",
                "Patna*",
                "Piro",
                "Purnia",
                "Rafiganj",
                "Rajgir",
                "Ramnagar",
                "Raxaul Bazar",
                "Revelganj",
                "Rosera",
                "Saharsa",
                "Samastipur",
                "Sasaram",
                "Sheikhpura",
                "Sheohar",
                "Sherghati",
                "Silao",
                "Sitamarhi",
                "Siwan",
                "Sonepur",
                "Sugauli",
                "Sultanganj",
                "Supaul",
                "Warisaliganj",
              ],
            },
            { name: "Chandigarh", cities: ["Chandigarh"] },
            {
              name: "Chhattisgarh",
              cities: [
                "Ambikapur",
                "Bhatapara",
                "Bhilai Nagar",
                "Bilaspur",
                "Chirmiri",
                "Dalli-Rajhara",
                "Dhamtari",
                "Durg",
                "Jagdalpur",
                "Korba",
                "Mahasamund",
                "Manendragarh",
                "Mungeli",
                "Naila Janjgir",
                "Raigarh",
                "Raipur*",
                "Rajnandgaon",
                "Sakti",
                "Tilda Newra",
              ],
            },
            { name: "Dadra and Nagar Haveli", cities: ["Silvassa"] },
            { name: "Daman and Diu", cities: ["Daman and Diu"] },
            {
              name: "Delhi",
              cities: [
                "Lal Kot or Qila Rai Pithora",
                "Mehrauli",
                "Siri",
                "Tughlakabad",
                "Firozabad",
                "Shergarh",
                "Shahjehabanad",
                "New Delhi",
              ],
            },
            { name: "Goa", cities: ["Mapusa", "Margao", "Marmagao", "Panaji"] },
            {
              name: "Gujarat",
              cities: [
                "Adalaj",
                "Ahmedabad",
                "Amreli",
                "Anand",
                "Anjar",
                "Ankleshwar",
                "Bharuch",
                "Bhavnagar",
                "Bhuj",
                "Chhapra",
                "Deesa",
                "Dhoraji",
                "Godhra",
                "Jamnagar",
                "Kadi",
                "Kapadvanj",
                "Keshod",
                "Khambhat",
                "Lathi",
                "Limbdi",
                "Lunawada",
                "Mahesana",
                "Mahuva",
                "Manavadar",
                "Mandvi",
                "Mangrol",
                "Mansa",
                "Mahemdabad",
                "Modasa",
                "Morvi",
                "Nadiad",
                "Navsari",
                "Padra",
                "Palanpur",
                "Palitana",
                "Pardi",
                "Patan",
                "Petlad",
                "Porbandar",
                "Radhanpur",
                "Rajkot",
                "Rajpipla",
                "Rajula",
                "Ranavav",
                "Rapar",
                "Salaya",
                "Sanand",
                "Savarkundla",
                "Sidhpur",
                "Sihor",
                "Songadh",
                "Surat",
                "Talaja",
                "Thangadh",
                "Tharad",
                "Umbergaon",
                "Umreth",
                "Una",
                "Unjha",
                "Upleta",
                "Vadnagar",
                "Vadodara",
                "Valsad",
                "Vapi",
                "Vapi",
                "Veraval",
                "Vijapur",
                "Viramgam",
                "Visnagar",
                "Vyara",
                "Wadhwan",
                "Wankaner",
              ],
            },
            {
              name: "Haryana",
              cities: [
                "Bahadurgarh",
                "Bhiwani",
                "Charkhi Dadri",
                "Faridabad",
                "Fatehabad",
                "Gohana",
                "Gurgaon",
                "Hansi",
                "Hisar",
                "Jind",
                "Kaithal",
                "Karnal",
                "Ladwa",
                "Mahendragarh",
                "Mandi Dabwali",
                "Narnaul",
                "Narwana",
                "Palwal",
                "Panchkula",
                "Panipat",
                "Pehowa",
                "Pinjore",
                "Rania",
                "Ratia",
                "Rewari",
                "Rohtak",
                "Safidon",
                "Samalkha",
                "Sarsod",
                "Shahbad",
                "Sirsa",
                "Sohna",
                "Sonipat",
                "Taraori",
                "Thanesar",
                "Tohana",
                "Yamunanagar",
              ],
            },
            {
              name: "Himachal Pradesh",
              cities: [
                "Mandi",
                "Nahan",
                "Palampur",
                "Shimla*",
                "Solan",
                "Sundarnagar",
              ],
            },
            {
              name: "Jammu and Kashmir",
              cities: [
                "Anantnag",
                "Baramula",
                "Jammu",
                "Kathua",
                "Punch",
                "Rajauri",
                "Sopore",
                "Srinagar*",
                "Udhampur",
              ],
            },
            {
              name: "Jharkhand",
              cities: [
                "Adityapur",
                "Bokaro Steel City",
                "Chaibasa",
                "Chatra",
                "Chirkunda",
                "Medininagar (Daltonganj)",
                "Deoghar",
                "Dhanbad",
                "Dumka",
                "Giridih",
                "Gumia",
                "Hazaribag",
                "Jamshedpur",
                "Jhumri Tilaiya",
                "Lohardaga",
                "Madhupur",
                "Mihijam",
                "Musabani",
                "Pakaur",
                "Patratu",
                "Phusro",
                "Ramgarh",
                "Ranchi*",
                "Sahibganj",
                "Saunda",
                "Simdega",
                "Tenu dam-cum-Kathhara",
              ],
            },
            {
              name: "Karnataka",
              cities: [
                "Adyar",
                "Afzalpur",
                "Arsikere",
                "Athni",
                "Bengaluru",
                "Belagavi",
                "Ballari",
                "Chikkamagaluru",
                "Davanagere",
                "Gokak",
                "Hubli-Dharwad",
                "Karwar",
                "Kolar",
                "Lakshmeshwar",
                "Lingsugur",
                "Maddur",
                "Madhugiri",
                "Madikeri",
                "Magadi",
                "Mahalingapura",
                "Malavalli",
                "Malur",
                "Mandya",
                "Mangaluru",
                "Manvi",
                "Mudalagi",
                "Mudabidri",
                "Muddebihal",
                "Mudhol",
                "Mulbagal",
                "Mundargi",
                "Mysore",
                "Nanjangud",
                "Nargund",
                "Navalgund",
                "Nelamangala",
                "Pavagada",
                "Piriyapatna",
                "Puttur",
                "Rabkavi Banhatti",
                "Raayachuru",
                "Ranebennuru",
                "Ramanagaram",
                "Ramdurg",
                "Ranibennur",
                "Robertson Pet",
                "Ron",
                "Sadalagi",
                "Sagara",
                "Sakaleshapura",
                "Sindagi",
                "Sanduru",
                "Sankeshwara",
                "Saundatti-Yellamma",
                "Savanur",
                "Sedam",
                "Shahabad",
                "Shahpur",
                "Shiggaon",
                "Shikaripur",
                "Shivamogga",
                "Surapura",
                "Shrirangapattana",
                "Sidlaghatta",
                "Sindhagi",
                "Sindhnur",
                "Sira",
                "Sirsi",
                "Siruguppa",
                "Srinivaspur",
                "Tarikere",
                "Tekkalakote",
                "Terdal",
                "Talikota",
                "Tiptur",
                "Tumkur",
                "Udupi",
                "Vijayapura",
                "Wadi",
                "Yadgir",
              ],
            },
            {
              name: "Kerala",
              cities: [
                "Adoor",
                "Alappuzha",
                "Attingal",
                "Chalakudy",
                "Changanassery",
                "Cherthala",
                "Chittur-Thathamangalam",
                "Guruvayoor",
                "Kanhangad",
                "Kannur",
                "Kasaragod",
                "Kayamkulam",
                "Kochi",
                "Kodungallur",
                "Kollam",
                "Kottayam",
                "Kozhikode",
                "Kunnamkulam",
                "Malappuram",
                "Mattannur",
                "Mavelikkara",
                "Mavoor",
                "Muvattupuzha",
                "Nedumangad",
                "Neyyattinkara",
                "Nilambur",
                "Ottappalam",
                "Palai",
                "Palakkad",
                "Panamattom",
                "Panniyannur",
                "Pappinisseri",
                "Paravoor",
                "Pathanamthitta",
                "Peringathur",
                "Perinthalmanna",
                "Perumbavoor",
                "Ponnani",
                "Punalur",
                "Puthuppally",
                "Koyilandy",
                "Shoranur",
                "Taliparamba",
                "Thiruvalla",
                "Thiruvananthapuram",
                "Thodupuzha",
                "Thrissur",
                "Tirur",
                "Vaikom",
                "Varkala",
                "Vatakara",
              ],
            },
            {
              name: "Ladakh",
              cities: ["Chuglamsar", "Kargil", "Leh", "Spituk"],
            },
            {
              name: "Lakshadweep",
              cities: [
                "Amini",
                "Andrott",
                "Kadmat",
                "Kalpeni",
                "Kavaratti",
                "Minicoy",
              ],
            },
            {
              name: "Madhya Pradesh",
              cities: [
                "Alirajpur",
                "Ashok Nagar",
                "Balaghat",
                "Bhopal",
                "Ganjbasoda",
                "Gwalior",
                "Indore",
                "Itarsi",
                "Jabalpur",
                "Lahar",
                "Maharajpur",
                "Mahidpur",
                "Maihar",
                "Malaj Khand",
                "Manasa",
                "Manawar",
                "Mandideep",
                "Mandla",
                "Mandsaur",
                "Mauganj",
                "Mhow Cantonment",
                "Mhowgaon",
                "Morena",
                "Multai",
                "Mundi",
                "Murwara (Katni)",
                "Nagda",
                "Nainpur",
                "Narsinghgarh",
                "Narsinghgarh",
                "Neemuch",
                "Nepanagar",
                "Niwari",
                "Nowgong",
                "Nowrozabad (Khodargama)",
                "Pachore",
                "Pali",
                "Panagar",
                "Pandhurna",
                "Panna",
                "Pasan",
                "Pipariya",
                "Pithampur",
                "Porsa",
                "Prithvipur",
                "Raghogarh-Vijaypur",
                "Rahatgarh",
                "Raisen",
                "Rajgarh",
                "Ratlam",
                "Rau",
                "Rehli",
                "Rewa",
                "Sabalgarh",
                "Sagar",
                "Sanawad",
                "Sarangpur",
                "Sarni",
                "Satna",
                "Sausar",
                "Sehore",
                "Sendhwa",
                "Seoni",
                "Seoni-Malwa",
                "Shahdol",
                "Shajapur",
                "Shamgarh",
                "Sheopur",
                "Shivpuri",
                "Shujalpur",
                "Sidhi",
                "Sihora",
                "Singrauli",
                "Sironj",
                "Sohagpur",
                "Tarana",
                "Tikamgarh",
                "Ujjain",
                "Umaria",
                "Vidisha",
                "Vijaypur",
                "Wara Seoni",
              ],
            },
            {
              name: "Maharashtra",
              cities: [
                "Ahmednagar",
                "Akola",
                "Akot",
                "Amalner",
                "Ambejogai",
                "Amravati",
                "Anjangaon",
                "Arvi",
                "Aurangabad",
                "Bhiwandi",
                "Dhule",
                "Kalyan-Dombivali",
                "Ichalkaranji",
                "Kalyan-Dombivali",
                "Karjat",
                "Latur",
                "Loha",
                "Lonar",
                "Lonavla",
                "Mahad",
                "Malegaon",
                "Malkapur",
                "Mangalvedhe",
                "Mangrulpir",
                "Manjlegaon",
                "Manmad",
                "Manwath",
                "Mehkar",
                "Mhaswad",
                "Mira-Bhayandar",
                "Morshi",
                "Mukhed",
                "Mul",
                "Greater Mumbai*",
                "Murtijapur",
                "Nagpur",
                "Nanded-Waghala",
                "Nandgaon",
                "Nandura",
                "Nandurbar",
                "Narkhed",
                "Nashik",
                "Navi Mumbai",
                "Nawapur",
                "Nilanga",
                "Osmanabad",
                "Ozar",
                "Pachora",
                "Paithan",
                "Palghar",
                "Pandharkaoda",
                "Pandharpur",
                "Panvel",
                "Parbhani",
                "Parli",
                "Partur",
                "Pathardi",
                "Pathri",
                "Patur",
                "Pauni",
                "Pen",
                "Phaltan",
                "Pulgaon",
                "Pune",
                "Purna",
                "Pusad",
                "Rahuri",
                "Rajura",
                "Ramtek",
                "Ratnagiri",
                "Raver",
                "Risod",
                "Sailu",
                "Sangamner",
                "Sangli",
                "Sangole",
                "Sasvad",
                "Satana",
                "Satara",
                "Savner",
                "Sawantwadi",
                "Shahade",
                "Shegaon",
                "Shendurjana",
                "Shirdi",
                "Shirpur-Warwade",
                "Shirur",
                "Shrigonda",
                "Shrirampur",
                "Sillod",
                "Sinnar",
                "Solapur",
                "Soyagaon",
                "Talegaon Dabhade",
                "Talode",
                "Tasgaon",
                "Thane",
                "Tirora",
                "Tuljapur",
                "Tumsar",
                "Uchgaon",
                "Udgir",
                "Umarga",
                "Umarkhed",
                "Umred",
                "Uran",
                "Uran Islampur",
                "Vadgaon Kasba",
                "Vaijapur",
                "Vasai-Virar",
                "Vita",
                "Wadgaon Road",
                "Wai",
                "Wani",
                "Wardha",
                "Warora",
                "Warud",
                "Washim",
                "Yavatmal",
                "Yawal",
                "Yevla",
              ],
            },
            {
              name: "Manipur",
              cities: ["Imphal", "Lilong", "Mayang Imphal", "Thoubal"],
            },
            { name: "Meghalaya", cities: ["Nongstoin", "Shillong", "Tura"] },
            { name: "Mizoram", cities: ["Aizawl", "Lunglei", "Saiha"] },
            {
              name: "Nagaland",
              cities: [
                "Dimapur",
                "Kohima",
                "Mokokchung",
                "Tuensang",
                "Wokha",
                "Zunheboto",
              ],
            },
            {
              name: "Orissa",
              cities: [
                "Balangir",
                "Baleshwar Town",
                "Barbil",
                "Bargarh",
                "Baripada Town",
                "Bhadrak",
                "Bhawanipatna",
                "Bhubaneswar*",
                "Brahmapur",
                "Byasanagar",
                "Cuttack",
                "Dhenkanal",
                "Jatani",
                "Jharsuguda",
                "Kendrapara",
                "Kendujhar",
                "Malkangiri",
                "Nabarangapur",
                "Paradip",
                "Parlakhemundi",
                "Pattamundai",
                "Phulabani",
                "Puri",
                "Rairangpur",
                "Rajagangapur",
                "Raurkela",
                "Rayagada",
                "Sambalpur",
                "Soro",
                "Sunabeda",
                "Sundargarh",
                "Talcher",
                "Tarbha",
                "Titlagarh",
              ],
            },
            {
              name: "Pondicherry",
              cities: ["Karaikal", "Mahe", "Pondicherry", "Yanam"],
            },
            {
              name: "Punjab",
              cities: [
                "Amritsar",
                "Barnala",
                "Batala",
                "Bathinda",
                "Dhuri",
                "Faridkot",
                "Fazilka",
                "Firozpur",
                "Firozpur Cantt.",
                "Gobindgarh",
                "Gurdaspur",
                "Hoshiarpur",
                "Jagraon",
                "Jalandhar Cantt.",
                "Jalandhar",
                "Kapurthala",
                "Khanna",
                "Kharar",
                "Kot Kapura",
                "Longowal",
                "Ludhiana",
                "Malerkotla",
                "Malout",
                "Mansa",
                "Moga",
                "Mohali",
                "Morinda, India",
                "Mukerian",
                "Muktsar",
                "Nabha",
                "Nakodar",
                "Nangal",
                "Nawanshahr",
                "Pathankot",
                "Patiala",
                "Pattran",
                "Patti",
                "Phagwara",
                "Phillaur",
                "Qadian",
                "Raikot",
                "Rajpura",
                "Rampura Phul",
                "Rupnagar",
                "Samana",
                "Sangrur",
                "Sirhind Fatehgarh Sahib",
                "Sujanpur",
                "Sunam",
                "Talwara",
                "Tarn Taran",
                "Urmar Tanda",
                "Zira",
                "Zirakpur",
              ],
            },
            {
              name: "Rajasthan",
              cities: [
                "Ajmer",
                "Alwar",
                "Bikaner",
                "Bharatpur",
                "Bhilwara",
                "Jaipur*",
                "Jodhpur",
                "Lachhmangarh",
                "Ladnu",
                "Lakheri",
                "Lalsot",
                "Losal",
                "Makrana",
                "Malpura",
                "Mandalgarh",
                "Mandawa",
                "Mangrol",
                "Merta City",
                "Mount Abu",
                "Nadbai",
                "Nagar",
                "Nagaur",
                "Nasirabad",
                "Nathdwara",
                "Neem-Ka-Thana",
                "Nimbahera",
                "Nohar",
                "Nokha",
                "Pali",
                "Phalodi",
                "Phulera",
                "Pilani",
                "Pilibanga",
                "Pindwara",
                "Pipar City",
                "Prantij",
                "Pratapgarh",
                "Raisinghnagar",
                "Rajakhera",
                "Rajaldesar",
                "Rajgarh (Alwar)",
                "Rajgarh (Churu)",
                "Rajsamand",
                "Ramganj Mandi",
                "Ramngarh",
                "Ratangarh",
                "Rawatbhata",
                "Rawatsar",
                "Reengus",
                "Sadri",
                "Sadulshahar",
                "Sadulpur",
                "Sagwara",
                "Sambhar",
                "Sanchore",
                "Sangaria",
                "Sardarshahar",
                "Sawai Madhopur",
                "Shahpura",
                "Shahpura",
                "Sheoganj",
                "Sikar",
                "Sirohi",
                "Sojat",
                "Sri Madhopur",
                "Sujangarh",
                "Sumerpur",
                "Suratgarh",
                "Taranagar",
                "Todabhim",
                "Todaraisingh",
                "Tonk",
                "Udaipur",
                "Udaipurwati",
                "Vijainagar, Ajmer",
              ],
            },
            {
              name: "Sikkim",
              cities: [
                "Gangtok",
                "Mangan",
                "Namchi",
                "GeyzingPakyong",
                "Soreng",
              ],
            },
            {
              name: "Tamil Nadu",
              cities: [
                "Arakkonam",
                "Aruppukkottai",
                "Chennai*",
                "Coimbatore",
                "Erode",
                "Gobichettipalayam",
                "Kancheepuram",
                "Karur",
                "Lalgudi",
                "Madurai",
                "Manachanallur",
                "Nagapattinam",
                "Nagercoil",
                "Namagiripettai",
                "Namakkal",
                "Nandivaram-Guduvancheri",
                "Nanjikottai",
                "Natham",
                "Nellikuppam",
                "Neyveli (TS)",
                "O' Valley",
                "Oddanchatram",
                "P.N.Patti",
                "Pacode",
                "Padmanabhapuram",
                "Palani",
                "Palladam",
                "Pallapatti",
                "Pallikonda",
                "Panagudi",
                "Panruti",
                "Paramakudi",
                "Parangipettai",
                "Pattukkottai",
                "Perambalur",
                "Peravurani",
                "Periyakulam",
                "Periyasemur",
                "Pernampattu",
                "Pollachi",
                "Polur",
                "Ponneri",
                "Pudukkottai",
                "Pudupattinam",
                "Puliyankudi",
                "Punjaipugalur",
                "Ranipet",
                "Rajapalayam",
                "Ramanathapuram",
                "Rameshwaram",
                "Rasipuram",
                "Salem",
                "Sankarankoil",
                "Sankari",
                "Sathyamangalam",
                "Sattur",
                "Shenkottai",
                "Sholavandan",
                "Sholingur",
                "Sirkali",
                "Sivaganga",
                "Sivagiri",
                "Sivakasi",
                "Srivilliputhur",
                "Surandai",
                "Suriyampalayam",
                "Tenkasi",
                "Thammampatti",
                "Thanjavur",
                "Tharamangalam",
                "Tharangambadi",
                "Theni Allinagaram",
                "Thirumangalam",
                "Thirupuvanam",
                "Thiruthuraipoondi",
                "Thiruvallur",
                "Thiruvarur",
                "Thuraiyur",
                "Tindivanam",
                "Tiruchendur",
                "Tiruchengode",
                "Tiruchirappalli",
                "Tirukalukundram",
                "Tirukkoyilur",
                "Tirunelveli",
                "Tirupathur",
                "Tirupathur",
                "Tiruppur",
                "Tiruttani",
                "Tiruvannamalai",
                "Tiruvethipuram",
                "Tittakudi",
                "Udhagamandalam",
                "Udumalaipettai",
                "Unnamalaikadai",
                "Usilampatti",
                "Uthamapalayam",
                "Uthiramerur",
                "Vadakkuvalliyur",
                "Vadalur",
                "Vadipatti",
                "Valparai",
                "Vandavasi",
                "Vaniyambadi",
                "Vedaranyam",
                "Vellakoil",
                "Vellore",
                "Vikramasingapuram",
                "Viluppuram",
                "Virudhachalam",
                "Virudhunagar",
                "Viswanatham",
              ],
            },
            {
              name: "Telangana",
              cities: [
                "Adilabad",
                "Bellampalle",
                "Bhadrachalam",
                "Bhainsa",
                "Bhongir",
                "Bodhan",
                "Farooqnagar",
                "Gadwal",
                "Hyderabad*",
                "Jagtial",
                "Jangaon",
                "Kagaznagar",
                "Kamareddy",
                "Karimnagar",
                "Khammam",
                "Koratla",
                "Kothagudem",
                "Kyathampalle",
                "Mahbubnagar",
                "Mancherial",
                "Mandamarri",
                "Manuguru",
                "Medak",
                "Miryalaguda",
                "Nagarkurnool",
                "Narayanpet",
                "Nirmal",
                "Nizamabad",
                "Palwancha",
                "Ramagundam",
                "Sadasivpet",
                "Sangareddy",
                "Siddipet",
                "Sircilla",
                "Suryapet",
                "Tandur",
                "Vikarabad",
                "Wanaparthy",
                "Warangal",
                "Yellandu",
              ],
            },
            {
              name: "Tripura",
              cities: [
                "Agartala*",
                "Belonia",
                "Dharmanagar",
                "Kailasahar",
                "Khowai",
                "Pratapgarh",
                "Udaipur",
              ],
            },
            {
              name: "Uttarakhand",
              cities: [
                "Bageshwar",
                "Dehradun",
                "Haldwani-cum-Kathgodam",
                "Hardwar",
                "Kashipur",
                "Manglaur",
                "Mussoorie",
                "Nagla",
                "Nainital",
                "Pauri",
                "Pithoragarh",
                "Ramnagar",
                "Rishikesh",
                "Roorkee",
                "Rudrapur",
                "Sitarganj",
                "Srinagar",
                "Tehri",
              ],
            },
            {
              name: "Uttar Pradesh",
              cities: [
                "Achhnera",
                "Agra",
                "Aligarh",
                "Allahabad",
                "Amroha",
                "Azamgarh",
                "Bahraich",
                "Chandausi",
                "Etawah",
                "Firozabad",
                "Fatehpur Sikri",
                "Hapur",
                "Hardoi *",
                "Jhansi",
                "Kalpi",
                "Kanpur",
                "Khair",
                "Laharpur",
                "Lakhimpur",
                "Lal Gopalganj Nindaura",
                "Lalitpur",
                "Lalganj",
                "Lar",
                "Loni",
                "Lucknow*",
                "Mathura",
                "Meerut",
                "Modinagar",
                "Moradabad",
                "Nagina",
                "Najibabad",
                "Nakur",
                "Nanpara",
                "Naraura",
                "Naugawan Sadat",
                "Nautanwa",
                "Nawabganj",
                "Nehtaur",
                "Niwai",
                "Noida",
                "Noorpur",
                "Obra",
                "Orai",
                "Padrauna",
                "Palia Kalan",
                "Parasi",
                "Phulpur",
                "Pihani",
                "Pilibhit",
                "Pilkhuwa",
                "Powayan",
                "Pukhrayan",
                "Puranpur",
                "Purquazi",
                "Purwa",
                "Rae Bareli",
                "Rampur",
                "Rampur Maniharan",
                "Rampur Maniharan",
                "Rasra",
                "Rath",
                "Renukoot",
                "Reoti",
                "Robertsganj",
                "Rudauli",
                "Rudrapur",
                "Sadabad",
                "Safipur",
                "Saharanpur",
                "Sahaspur",
                "Sahaswan",
                "Sahawar",
                "Sahjanwa",
                "Saidpur",
                "Sambhal",
                "Samdhan",
                "Samthar",
                "Sandi",
                "Sandila",
                "Sardhana",
                "Seohara",
                "Shahabad, Hardoi",
                "Shahabad, Rampur",
                "Shahganj",
                "Shahjahanpur",
                "Shamli",
                "Shamsabad, Agra",
                "Shamsabad, Farrukhabad",
                "Sherkot",
                "Shikarpur, Bulandshahr",
                "Shikohabad",
                "Shishgarh",
                "Siana",
                "Sikanderpur",
                "Sikandra Rao",
                "Sikandrabad",
                "Sirsaganj",
                "Sirsi",
                "Sitapur",
                "Soron",
                "Suar",
                "Sultanpur",
                "Sumerpur",
                "Tanda",
                "Thakurdwara",
                "Thana Bhawan",
                "Tilhar",
                "Tirwaganj",
                "Tulsipur",
                "Tundla",
                "Ujhani",
                "Unnao",
                "Utraula",
                "Varanasi",
                "Vrindavan",
                "Warhapur",
                "Zaidpur",
                "Zamania",
              ],
            },
            {
              name: "West Bengal",
              cities: [
                "Adra",
                "Alipurduar",
                "Arambagh",
                "Asansol",
                "Baharampur",
                "Balurghat",
                "Bankura",
                "Darjiling",
                "English Bazar",
                "Gangarampur",
                "Habra",
                "Hugli-Chinsurah",
                "Jalpaiguri",
                "Jhargram",
                "Kalimpong",
                "Kharagpur",
                "Kolkata",
                "Mainaguri",
                "Malda",
                "Mathabhanga",
                "Medinipur",
                "Memari",
                "Monoharpur",
                "Murshidabad",
                "Nabadwip",
                "Naihati",
                "Panchla",
                "Pandua",
                "Paschim Punropara",
                "Purulia",
                "Raghunathpur",
                "Raghunathganj",
                "Raiganj",
                "Rampurhat",
                "Ranaghat",
                "Sainthia",
                "Santipur",
                "Siliguri",
                "Sonamukhi",
                "Srirampore",
                "Suri",
                "Taki",
                "Tamluk",
                "Tarakeswar",
              ],
            },
          ],
        },
        {
          name: "Philippines",
          states: [
            {
              name: "Central Luzon",
              cities: ["Angeles City", "Olongapo", "San Fernando"],
            },
            { name: "NCR", cities: ["Pasay City", "Makati", "Marikina"] },
          ],
        },
        {
          name: "United States of America",
          states: [
            {
              name: "California",
              cities: ["Sacramento", "Los Angeles", "Bakersfield", "Carson"],
            },
            { name: "Florida", cities: ["Tallahassee", "Jacksonville"] },
            { name: "Illinois", cities: ["Springfield", "Chicago"] },
            { name: "New Jersey", cities: ["Trenton", "Newark"] },
          ],
        },
      ],
    });
  }

  validForm = () => {
    var isValid = true;
    var pattern = " ^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$.";
    var epattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";
    var usernameRegex = "";
    var phonepattern = "[a-z0-9.-]";
    console.log(this.state.firstname);

    if (this.state.firstname.length === 0) {
      console.log(this.state.firstname.length);
      this.setState({
        firstnameErr: "First name should not be empty",
      });
      isValid = false;
    } else if (this.state.firstname.length > 1) {
      console.log(this.state.firstname.length);

      this.setState({
        firstnameErr: "",
      });
      isValid = true;
    }

    if (this.state.lastname.length === 0) {
      this.setState({
        lastnameErr: "Last name should not be empty",
      });
      isValid = false;
    } else if (this.state.lastname.length > 1) {
      this.setState({
        lastnameErr: "",
      });
      isValid = true;
    }

    if (this.state.username.length === 0) {
      //need to add regex
      this.setState({
        usernameErr: "Please enter valid username",
      });
      isValid = false;
    } else if (this.state.username.length > 1) {
      this.setState({
        usernameErr: "",
      });
      isValid = true;
    }

    if (!this.state.email.match(epattern)) {
      this.setState({
        emailErr: "Please Enter valid mail id",
      });
      isValid = false;
    } else if (this.state.email.match(epattern)) {
      this.setState({
        emailErr: "",
      });
      isValid = true;
    }

    if (!this.state.phone.match(phonepattern)) {
      this.setState({
        phoneErr: "Please enter valid phone number",
      });
      isValid = false;
    } else if (this.state.phone.match(phonepattern)) {
      this.setState({
        phoneErr: "",
      });
      isValid = true;
    }

    if (!this.state.password.match(pattern)) {
      console.log(this.state.password);
      this.setState({
        passwordErr:
          "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
      });
      isValid = false;
    } else if (this.state.password.match(pattern)) {
      this.setState({
        passwordErr: "",
      });
      isValid = true;
    }
    if (this.state.gender.length === 0) {
      this.setState({
        genderErr: "Please select gender",
      });
      isValid = false;
    } else if (this.state.gender.length > 1) {
      this.setState({
        genderErr: "",
      });
      isValid = true;
    }
    if (this.state.selectedCountry.length === 0) {
      this.setState({
        countryErr: "Please select country",
      });
      isValid = false;
    } else if (this.state.selectedCountry.length > 1) {
      this.setState({
        countryErr: "",
      });
      isValid = true;
    }
    if (this.state.selectedState.length === 0) {
      this.setState({
        stateErr: "Please select state",
      });
      isValid = false;
    } else if (this.state.selectedState.length > 1) {
      this.setState({
        stateErr: "",
      });
      isValid = true;
    }
    if (this.state.selectedCity.length === 0) {
      this.setState({
        cityErr: "Please select city",
      });
      isValid = false;
    } else if (this.state.selectedCity.length > 1) {
      this.setState({
        cityErr: "",
      });
      isValid = true;
    }
    if (this.state.pincode.length === 0) {
      this.setState({
        pincodeErr: "Please enter pincode",
      });
      isValid = false;
    } else if (this.state.pincode.length > 1) {
      this.setState({
        pincodeErr: "",
      });
      isValid = true;
    }

    return isValid;
  };

  submitData = () => {
    const validForm = this.validForm();
    var t = true;

    if (validForm === true) {
      var data = {
        firstName: this.state.firstname,
        lastName: this.state.lastname,
        emailId: this.state.email,
        phoneNumber: this.state.phone,
        gender: this.state.gender,
        username: this.state.username,
        password: this.state.password,
        confirmPassword: this.state.confirmpassword,
        age: this.state.age,
        country: this.state.selectedCountry,
        state: this.state.selectedState,
        city: this.state.selectedCity,
        pincode: this.state.pincode,
      };

      // console.log("signup data----", data);
      api.usercrud
        .createuser(data)
        .then((result) => {
          console.log("signup api==", result);
          alert("Thank you! Your registration was successful!");
          // window.location.replace("/login");
        })
        .catch((error) => {
          console.log("signup err=====", error);
          alert("Your registration was unsuccessful.");
        });
    }
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    // console.log(this.state);
  };

  changeCountry = (event) => {
    this.setState({ selectedCountry: event.target.value });
    this.setState({
      states: this.state.countries.find(
        (cntry) => cntry.name === event.target.value
      ).states,
    });
  };

  changeState = (event) => {
    this.setState({ selectedState: event.target.value });
    const stats = this.state.countries.find(
      (cntry) => cntry.name === this.state.selectedCountry
    ).states;
    this.setState({
      cities: stats.find((stat) => stat.name === event.target.value).cities,
    });
  };

  changeCity = (event) => {
    this.setState({ selectedCity: event.target.value });
  };

  render() {
    const {
      firstname,
      lastname,
      email,
      password,
      phone,
      confirmpassword,
      gender,
      username,
      age,
      country,
      state,
      city,
      pincode,
    } = this.state;
    return (
      <div className="container-xxl">
        <Announcement />
        <Navbar />
        <div className="container mx-auto" style={{ marginTop: "10%" }}>
          <div className="logo mb-3">
            <div className="col-md-12 text-center">
              <h1>Register</h1>
            </div>
          </div>

          <form
            onSubmit={this.submitHandler}
            autoComplete="off"
            className="row g-3"
          >
            <div className="form-group col-md-4">
              <label>First Name</label>
              <input
                type="text"
                name="firstname"
                value={firstname}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter Firstname"
              />
              <pre style={{ color: "red" }}>{this.state.firstnameErr}</pre>
            </div>
            
            <div className="form-group col-md-4">
              <label>Last Name</label>
              <input
                type="text"
                name="lastname"
                value={lastname}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter Lastname"
              />
              <pre style={{ color: "red" }}>{this.state.lastnameErr}</pre>
            </div>

            <div className="form-group col-md-4">
              <label>Username</label>
              <input
                type="username"
                name="username"
                value={username}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter Username"
              />
              <pre style={{ color: "red" }}>{this.state.usernameErr}</pre>
            </div>

            <div className="form-group col-md-6">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter Email Address"
              />
              <pre style={{ color: "red" }}>{this.state.emailErr}</pre>
            </div>
            <div className="form-group col-md-6">
              <label>Phone Number</label>
              <input
                type="phone"
                name="phone"
                value={phone}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter Phone Number"
              />
              <pre style={{ color: "red" }}>{this.state.phoneErr}</pre>
            </div>

            <div className="form-group col-md-6">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter Password"
              />
              <pre style={{ color: "red" }}>{this.state.passwordErr}</pre>
            </div>

            <div className="form-group col-md-6">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmpassword"
                value={confirmpassword}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter Confirm Password"
              />
              <pre style={{ color: "red" }}>
                {this.state.confirmpasswordErr}
              </pre>
            </div>

            <div className="form-group col-md-6">
              <label>Age</label>
              <input
                type="age"
                name="age"
                value={age}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter Age"
              />
              <pre style={{ color: "red" }}>{this.state.ageErr}</pre>
            </div>

            <div className="form-group col-md-6">
              <label for="gender">Select your Gender</label>
              <select
                className="form-select"
                name="gender"
                onChange={this.changeHandler}
                value={gender}
              >
                <option value="none" selected>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <pre style={{ color: "red" }}>{this.state.genderErr}</pre>
            </div>

            <div className="form-group col-md-3">
              <label>Country</label>
              <select
                className="form-select"
                placeholder="Country"
                value={this.state.selectedCountry}
                onChange={this.changeCountry}
              >
                <option>Country</option>
                {this.state.countries.map((e, key) => {
                  return <option key={key}>{e.name}</option>;
                })}
              </select>
              <pre style={{ color: "red" }}>{this.state.countryErr}</pre>
            </div>

            <div className="form-group col-md-3">
              <label>State</label>
              <select
                className="form-select"
                placeholder="State"
                value={this.state.selectedState}
                onChange={this.changeState}
              >
                <option>State</option>
                {this.state.states.map((e, key) => {
                  return <option key={key}>{e.name}</option>;
                })}
              </select>
              <pre style={{ color: "red" }}>{this.state.stateErr}</pre>
            </div>

            <div className="form-group col-md-3">
              <label>City</label>
              <select
                className="form-select"
                placeholder="City"
                value={this.state.selectedCity}
                onChange={this.changeCity}
              >
                <option>City</option>
                {this.state.cities.map((e, key) => {
                  return <option key={key} value={e}>{e}</option>;
                })}
              </select>
              <pre style={{ color: "red" }}>{this.state.cityErr}</pre>
            </div>

            <div className="form-group col-md-3">
              <label>Pincode</label>
              <input
                type="pincode"
                name="pincode"
                value={pincode}
                onChange={this.changeHandler}
                className="form-control"
                placeholder="Enter Pincode"
              />
              <pre style={{ color: "red" }}>{this.state.pincodeErr}</pre>
            </div>

            <div className="text-center mb-3">
              <button
                exact
                to="/login"
                onClick={this.submitData}
                type="submit"
                className=" btn btn-block btn-primary"
              >
                Register
              </button>
            </div>
            <div className="">
              <div className="form-group">
                <p className="text-center">
                  <NavLink exact to="/login">
                    Already have an account?
                  </NavLink>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
