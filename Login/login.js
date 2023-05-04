document.getElementById('sign-up-form').style.display="none";
document.getElementById('map').style.display = 'none';


var latitide = 19.1661473;
var longitude = 72.9562225;

var filter_distance=0,filter_price=0, filter_rent=0, arrangement=0;

const news = [];


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
    
    add_distance();

  } else { 
    alert("Distance Cannot be Calculated !")
  }
}

function showPosition(position) {
  latitide = Number(position.coords.latitude);
  longitude = Number(position.coords.longitude);
}

// function get_news(){

//   const url = 'https://newsapi.org/v2/everything?q=property%20rates%20OR%20affordable%20home%20loans%20OR%20cheap%20home%20prices%20OR%20investing';
//   const apiKey = 'beb22a72eb9c4f8985e9ad475d58b45a';


//   // Make a GET request to the API endpoint
//   fetch(`${url}&apiKey=${apiKey}`)
//     .then(response => response.json())
//     .then(data => {
//       // Process the data and display news articles
//       var articles = data.articles;
//       news.push(articles);

//       articles.forEach(article => {
//         const title = article.title;
//         const description = article.description;
//         const source = article.source.name;
//         const url = article.url; 
//       });
//     })
//     .catch(error => {
//       console.error('Error fetching news articles:', error);
//     });

// }

//get_news();




function toggle_tabs(_id){
    var element = document.getElementById(_id);
    let group= document.getElementsByClassName('nav-link');

    for (let i = 0; i < group.length; i++){
        group[i].classList.remove('active');
        group[i].style.border="none";
    }

    element.classList.add('active');
    element.style.borderTop="solid 3px";
    element.style.borderLeft="solid 1px";
    element.style.borderRight="solid 1px";
    element.style.borderRadius="10px 10px 0 0";
    element.style.borderBottom="none";
    document.getElementById('sign-in-form').style.display="none";
    document.getElementById('sign-up-form').style.display="none";
    if (_id=='signin'){
        document.getElementById('sign-in-form').style.display="block";
    }
    if (_id=='signup'){
        document.getElementById('sign-up-form').style.display="block";
    }
}



const details = [

  {
    id: 1,
    name: 'PREMVISHNU',
    distance : '-',
    area : 800,
    bhk : "3-BHK",
    price : "45 K - 75 K",
    min_price: 45000,
    address : "C-302, Premvishnu, Mulund - East, Mumbai - 400081, Maharashtra",
    img : "./imgs/premvishnu.jpg",
    contact : "9324098270",
    email : "pranav07@somaiya.edu",
    latitide : 18.922064,
    longitude : 72.834641,
    type : "rent",
    images : "www.google.com"

  },
  {
    id: 2,
    name: 'SUNFLOWER HEIGHTS',
    distance : '-',
    area : 900,
    bhk : "3-BHK",
    price : "85 L - 95 L",
    min_price: 8500000,
    address : "A-101, Sunflower Heights, Mulund - West, Mumbai - 400080, Maharashtra",
    img : "./imgs/Sunflower.jpg",
    contact : "9324098270",
    email : "pranav07@somaiya.edu",
    latitide : 19.2089391,
    longitude : 72.9713999,
    type : "buy",
    images : "www.google.com"

  },
  {
    id: 3,
    name: 'PREMVISHNU 2',
    distance : '-',
    area : 500,
    bhk : "3-BHK",
    price : "45 K - 75 K",
    min_price: 45000,
    address : "C-302, Premvishnu, Mulund - East, Mumbai - 400081, Maharashtra",
    img : "./imgs/Premvishnu2.jpg",
    contact : "9324098270",
    email : "pranav07@somaiya.edu",
    latitide : 19.072864,
    longitude : 72.899917,
    type : "rent",
    images : "www.google.com"

  },
  {
    id: 4,
    name: 'SPRING MEADOWS',
    distance : '-',
    area : 1200,
    bhk : "2-BHK",
    price : "60 L - 80 L",
    min_price: 6000000,
    address : "A-202, Spring Meadows, Kandivali - West, Mumbai - 400067, Maharashtra",
    img : "./imgs/SpringMeadows.jpg",
    contact : "9823765876",
    email : "johndoe@gmail.com",
    latitide : 19.205174,
    longitude : 72.842493,
    type : "buy",
    images : "www.google.com"

  },
  {
    id: 5,
    name: 'GREEN ACRES',
    distance : '-',
    area : 800,
    bhk : "1-BHK",
    price : "35 K - 45 K",
    min_price: 35000,
    address : "B-101, Green Acres, Powai, Mumbai - 400076, Maharashtra",
    img : "./imgs/GreenAcres.jpg",
    contact : "9823765876",
    email : "johndoe@gmail.com",
    latitide : 19.117246,
    longitude : 72.904724,
    type : "rent",
    images : "www.google.com"

  },
  {
    id: 6,
    name: 'OASIS TOWER',
    distance : '-',
    area : 1500,
    bhk : "3-BHK",
    price : "1.2 Cr - 1.5 Cr",
    min_price: 12000000,
    address : "D-801, Oasis Tower, Andheri - East, Mumbai - 400069, Maharashtra",
    img : "./imgs/OasisTower.jpg",
    contact : "9823765876",
    email : "johndoe@gmail.com",
    latitide : 19.118473,
    longitude : 72.864311,
    type : "buy",
    images : "www.google.com"

  },
  {
    id: 7,
    name: 'ENZO SANZA',
    distance : '-',
    area : 1700,
    bhk : "4-BHK",
    price : "1.3 Cr - 1.5Cr ",
    min_price: 13000000,
    address : "C-202, Enso Sanza, Kandivali - East, Mumbai - 400067, Maharashtra",
    img : "./imgs/EnzoSanza.jpg",
    contact : "7382973647",
    email : "divekar@gmail.com",
    latitide : 20.748132,
    longitude : 72.829348,
    type : "buy",
    images : "www.google.com"

  },
  {
    id: 8,
    name: 'RAHEJA EXOTICA VERONA',
    distance : '-',
    area : 1300,
    bhk : "2-BHK",
    price : "1.6 Cr - 1.7Cr ",
    min_price: 16000000,
    address : "C-202, RHV, Bandra - East, Mumbai - 400067, Maharashtra",
    img : "./imgs/Raheja.jpg",
    contact : "8473921874",
    email : "tomy@gmail.com",
    latitide : 19.948738,
    longitude : 72.829374,
    type : "buy",
    images : "www.google.com"

  },
  {
    id: 9,
    name: 'ROMELL ORBIS',
    distance : '-',
    area : 1600,
    bhk : "3-BHK",
    price : "47 K - 60 K ",
    min_price: 47000,
    address : "C-102, Romell orbis, Andheri - East, Mumbai - 400067, Maharashtra",
    img : "./imgs/Romell.jpg",
    contact : "8746738293",
    email : "damon@gmail.com",
    latitide : 19.942798,
    longitude : 72.849774,
    type : "rent",
    images : "www.google.com"

  },
  {
    id: 10,
    name: 'RUNWAL AVENU',
    distance : '-',
    area : 1300,
    bhk : "2-BHK",
    price : "1 Cr -1.8Cr ",
    min_price: 10000000,
    address : "D-406, Runwal avenue, Kanjurmarg - East, Mumbai - 400067, Maharashtra",
    img : "./imgs/Runwal.jpg",
    contact :  "7263927362",
    email : "aliza@gmail.com",
    latitide : 19.848738,
    longitude : 72.849874,
    type : "buy",
    images : "www.google.com"

  },
  {
    id: 11,
    name: 'CONDENAME ARTCLAVE',
    distance : '-',
    area : 1500,
    bhk : "2-BHK",
    price : "35 K - 40 Kr ",
    min_price: 35000,
    address : "C-202, condename artclave, Bandra - West, Mumbai - 400067, Maharashtra",
    img : "./imgs/Condename.jpg",
    contact : "8438495738",
    email : "elena@gmail.com",
    latitide : 19.948738,
    longitude : 72.649394,
    type : "rent",
    images : "www.google.com"

  },
  {
    id: 12,
    name: 'LODHA NEW CUFFE PARADE',
    distance : '-',
    area : 1800,
    bhk : "3-BHK",
    price : "2 Cr - 2.7Cr ",
    min_price: 20000000,
    address : "A-202, LNCP Sion - West, Mumbai - 400067, Maharashtra",
    img : "./imgs/LodhaNew.jpg",
    contact : "7387283827",
    email : "elena@gmail.com",
    latitide : 19.948448,
    longitude : 72.049374,
    type : "buy",
    images : "www.google.com"

  },
  {
    id: 13,
    name: 'DOTOM ISLE TOWER 2',
    distance : '-',
    area : 1800,
    bhk : "3-BHK",
    price : "50 K - 75 K ",
    min_price: 50000,
    address : "B-604, Isle Tower, Malad - West, Mumbai - 400067, Maharashtra",
    img : "./imgs/Dotom.jpg",
    contact : "8438495789",
    email : "stefan@gmail.com",
    latitide : 19.248738,
    longitude : 72.849174,
    type : "rent",
    images : "www.google.com"

  },
  {
    id: 14,
    name: 'KONARK ARIA PARK',
    distance : '-',
    area : 1900,
    bhk : "4-BHK",
    price : "35 K - 40 K ",
    min_price: 35000,
    address : "A-202, aria park, Bandra - West, Mumbai - 400067, Maharashtra",
    img : "./imgs/Konark.jpg",
    contact : "9838495738",
    email : "erica@gmail.com",
    latitide : 19.945638,
    longitude : 72.149374,
    type : "rent",
    images : "www.google.com"

  },
  {
    id: 15,
    name: 'Arihant Residency',
    distance : '-',
    area : 1200,
    bhk : "2-BHK",
    price : "1 Cr - 1.2Cr ",
    min_price: 10000000,
    address : "D-202, arihant residency,  Sion- West, Mumbai - 400067, Maharashtra",
    img : "./imgs/Arihant.jpg",
    contact : "8458495738",
    email : "elena@gmail.com",
    latitide : 19.948138,
    longitude : 72.949374,
    type : "buy",
    images : "www.google.com"

  },
  {
    id: 16,
    name: 'SUMIT ATULYAM',
    distance : '-',
    area : 1600,
    bhk : "3-BHK",
    price : "1 Cr - 1.8Cr ",
    min_price: 10000000,
    address : "C-101, sumit atulyam, Bandra - East, Mumbai - 400067, Maharashtra",
    img : "./imgs/Sumit.jpg",
    contact : "9438495738",
    email : "sofi@gmail.com",
    latitide : 19.948738,
    longitude : 72.841374,
    type : "buy",
    images : "www.google.com"

  },
  {
    id: 17,
    name: 'Runwal Bliss',
    distance : '-',
    area : 1800,
    bhk : "3-BHK",
    price : "2 Cr - 2.2Cr ",
    min_price: 20000000,
    address : "F-102, Runwal bliss, Thane - West, Mumbai - 400067, Maharashtra",
    img : "./imgs/RunwalBliss.jpg",
    contact : "8998495738",
    email : "mayank@gmail.com",
    latitide : 19.948778,
    longitude : 72.342374,
    type : "buy",
    images : "www.google.com"

  },
  {
    id: 18,
    name: 'FOREFRONT PRIMERIA',
    distance : '-',
    area : 1700,
    bhk : "2-BHK",
    price : "30 L - 35L ",
    min_price: 30000,
    address : "G-111, forefront primeria, Vile Parle - West, Mumbai - 400067, Maharashtra",
    img : "./imgs/ForeFront.jpg",
    contact : "7438495738",
    email : "sofia@gmail.com",
    latitide : 19.648738,
    longitude : 72.849994,
    type : "rent",
    images : "www.google.com"

  },
  {
    id: 19,
    name: 'ASTHA HEIGHTS',
    distance : '-',
    area : 1200,
    bhk : "1-BHK",
    price : "1.8 Cr - 2Cr ",
    min_price: 18000000,
    address : "F-809, Astha heights, Goregaon - West, Mumbai - 400067, Maharashtra",
    img : "./imgs/Astha.jpg",
    contact : "8438495738",
    email : "mannat@gmail.com",
    latitide : 19.928768,
    longitude : 72.141374,
    type : "buy",
    images : "www.google.com"

  },
  {
    id: 20,
    name: 'SAMAR HEIGHTS',
    distance : '-',
    area : 1900,
    bhk : "3-BHK",
    price : "40 K - 50 k ",
    min_price: 40000,
    address : "I-05, Samar heights, Wadala - West, Mumbai - 400067, Maharashtra",
    img : "./imgs/Ashta.jpg",
    contact : "7594738475",
    email : "karan@gmail.com",
    latitide : 19.948738,
    longitude : 72.819374,
    type : "rent",
    images : "www.google.com"

  }
]


function add_distance(){
  for (let i=0; i<details.length; i++){
    
    try{
      details[i].distance=Math.floor(distance(latitide, longitude, details[i].latitide, details[i].longitude));
   
    }
    catch(error){
      console.log(error);
    }
  }
}

var display_list = [...details]

// let card = `
// <div>
//             <div class="jumbotron text-center hoverable p-4" style=" margin: 15px; border-radius: 10px; box-shadow: 0 0 7px #000; max-width: 1200px;">
    
//                 <!-- Grid row -->
//                 <div class="row" style="align-items: center; justify-content: space-evenly;">
              
//                   <!-- Grid column -->
//                   <div class="col-md-4 " style="margin: 0; height: min-content;" >
              
//                     <!-- Featured image -->
//                     <div class="view overlay" style="height: 80%; width: 100%; display: flex; justify-content: center; ">
//                       <img src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.webp" class="img-fluid" alt="Sample image for first version of blog listing" style="min-height: 300px; min-width: 280px;">
                      
              
//                     </div>
              
//                   </div>
//                   <!-- Grid column -->
              
//                   <!-- Grid column -->
//                   <div class="col-md-7 text-md-left ml-3 mt-3">
              
//                     <!-- Excerpt -->
//                     <a href="#!" class="green-text"  style="text-align: right;">
//                       <h6 class="h6 pb-1" ><i class="fa fa-walking"></i> &nbsp;${details[i].distance} kms </h6>
//                     </a>
              
//                     <h2 class="h2 mb-4" style="text-align: left; color: #003fb4; letter-spacing: 2px; margin-bottom: 5px;">${details[i].name}</h2>
              
                   
              
//                     <h4 class="font-weight-normal" style="text-align: left;">
//                       ₹ ${details[i].price}    </h4>
//                       <p class="font-weight-normal" style="text-align: left;">${details[i].bhk}</p>
              
//                     <p class="font-weight-normal" style="text-align: left;"><i class="fa fa-map-marker-alt"></i>&nbsp;&nbsp;
//                     ${details[i].address}</p>
              
                    
                    
//                     <p class="font-weight-normal" style="text-align: left;"><i class="fa fa-phone"></i> &nbsp;&nbsp;${details[i].contact}<br><i class="fa fa-envelope"></i> &nbsp;&nbsp;${details[i].email}  </p>
              
//                     <div style="justify-content: flex-end; display: flex; margin-top: 10px;">
//                       <input type="button" value="CONTACT" style="width: 120px; height: 40px; background-image: linear-gradient(70deg, #007e28, #3ab506); color: #fff; border: none; border-radius: 7px; letter-spacing: 2px;" >
//                     </div>
              
//                   </div>
//                   <!-- Grid column -->
              
//                 </div>
//                 <!-- Grid row -->
              
//               </div>
//         </div>

// `


const CardList= document.getElementById("propertylist");
renderer(details);


function loader(){
  setTimeout(function() {
    spinner.classList.add('visually-hidden');
    document.getElementById('propertylist').classList.remove("visually-hidden");
  }, 500);
}

function renderer(details){
  CardList.innerHTML = '';
  spinner = document.getElementById('spinner');
  spinner.classList.remove('visually-hidden');
  document.getElementById('propertylist').classList.add("visually-hidden");

  loader();

  for (let i=0; i<details.length; i++){
    

      
      let fetch = CardList.innerHTML
      let card = `
  <div>
              <div class="jumbotron text-center hoverable p-4" style=" margin: 15px 5px; border-radius: 10px; box-shadow: 0 0 5px #000; max-width: 99%;">
      
                  <!-- Grid row -->
                  <div class="row" style="align-items: center; justify-content: space-evenly;">
                
                    <!-- Grid column -->
                    <div class="col-md-4 " style="margin: 0; height: min-content;" >
                
                      <!-- Featured image -->
                      <div class="view overlay" style="height: 80%; width: 100%; display: flex; justify-content: center; max-height: 400px">
                        <img src="${details[i].img}" class="img-fluid" alt="Property image" style="min-height: 300px; min-width: 280px;">
                        
                
                      </div>
                
                    </div>
                    <!-- Grid column -->
                
                    <!-- Grid column -->
                    <div class="col-md-7 text-md-left ml-3 mt-3">
                
                      <!-- Excerpt -->
                      <a href="#!" class="green-text"  style="text-align: right;" onclick="show_map(${details[i].latitide}, ${details[i].longitude})">
                        <h6 class="h6 pb-1" ><i class="fa fa-walking"></i> &nbsp;${details[i].distance} kms </h6>
                      </a>
                
                      <h2 class="h2 mb-4" style="text-align: left; color: #003fb4; letter-spacing: 2px; margin-bottom: 5px;">${details[i].name}</h2>
                
                    
                
                      <h4 class="font-weight-normal" style="text-align: left;">
                        ₹ ${details[i].price}    </h4>
                        <p class="font-weight-normal" style="text-align: left;">${details[i].bhk}</p>
                
                      <p class="font-weight-normal" style="text-align: left;"><i class="fa fa-map-marker-alt"></i>&nbsp;&nbsp;
                      ${details[i].address}</p>
                
                      
                      
                      <p class="font-weight-normal" style="text-align: left;"><i class="fa fa-phone"></i> &nbsp;&nbsp;${details[i].contact}<br><i class="fa fa-envelope"></i> &nbsp;&nbsp;${details[i].email}  <br><a href="https://www.example.com" target="_blank" style="padding-top: 12px;">View-Images</a></p>
                      
                
                      <div style="justify-content: flex-end; display: flex; margin-top: 10px;">
                        <input class="contact-btn" type="button" value="CONTACT" onclick="window.open('./contact/contact.html', '_blank');" >
                      </div>
                
                    </div>
                    <!-- Grid column -->
                
                  </div>
                  <!-- Grid row -->
                
                </div>
          </div>

  `
      CardList.innerHTML=fetch+card;
  }
  
  
}











// Search Suggestions 
var suggestions = ["apple", "banana", "cherry", "date", "elderberry", "fig", "bana", "ba", "bananana"];

function picked(val)
{   console.log(val);
    var input = document.getElementById("searchBox");
    input.value = val;
    var suggestionList = document.getElementById("suggestions");
    suggestionList.innerHTML = "";
    if (val==''){
      renderer(display_list);

    }
    else if (val == 'refresh'){
      renderer(details);
      input.value = "";
    
    }
    else{filter_list('search', val);}

}

function showSuggestions() {

  var input = document.getElementById("searchBox").value;

  var matchedSuggestions = details.filter(function(suggestion) {
    display_list.length=0;
    return suggestion.name.toLowerCase().startsWith(input.toLowerCase());
    
  });

  var suggestionList = document.getElementById("suggestions");
  suggestionList.innerHTML = "";
  if ((input.trim() !== "")){
    
    if (matchedSuggestions.length > 0) {
        

        suggestionList.classList.remove("hidden");
        matchedSuggestions.slice(0,10).forEach(function(suggestion) {

            let fetch = document.getElementById("suggestions").innerHTML;
            let new_li = `<li onClick="picked(this.innerHTML)">${suggestion.name}</li>`;
            suggestionList.innerHTML = new_li+fetch;

            display_list.push(suggestion);
            renderer(display_list);

        //   var li = document.createElement("li");
        //   li.textContent = suggestion;
        //   suggestionList.appendChild(li);
        });
    } 

    else{
        suggestionList.innerHTML="";
    }
}
}

// Search Suggestion



function filter_list(category, value){
    if(category=='search'){
      display_list.length = 0;
      details.forEach(detail => {
        if (detail.name.toLowerCase() === value.toLowerCase()) {

          display_list.push(detail);
        }
      });
    }
    else if(category=='distance'){
      display_list.length = 0;
      details.forEach(detail => {
       
        if (detail.distance<=value) {
          display_list.push(detail);
        }
      });
 
    }
    else if (category=='type'){
      display_list.length = 0 ;
      details.forEach(detail => {
        if (detail.type==value){
          display_list.push(detail)
        }
      })
    }
    renderer(display_list);

    
}

function distance(lat1, lon1, lat2, lon2) {
  const r = 6371; // Earth's radius in kilometers
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = r * c;
  return distance;
}

function toRad(Value) {
  /** Converts numeric degrees to radians */
  return (Value * Math.PI) / 180;
}


function compareByDistance(detailA, detailB) {

  const distanceA = detailA.distance;
  const distanceB = detailB.distance;

  
  if (distanceA=='-'){
    return 0;
  }
  if (distanceA < distanceB) {
    return -1;
  }
  if (distanceA > distanceB) {
    return 1;
  }
  return 0;
}

function compareByArea(detailA, detailB) {

  const AreaA = detailA.area;
  const AreaB = detailB.area;

  

  if (AreaA < AreaB) {
    return -1;
  }
  if (AreaA > AreaB) {
    return 1;
  }
  return 0;
}

function compareByArea_desc(detailA, detailB) {

  const AreaA = detailA.area;
  const AreaB = detailB.area;

  if (AreaA > AreaB) {
    return -1;
  }
  if (AreaA < AreaB) {
    return 1;
  }
  return 0;
}

function arrange(category){
  
  if (category=='distance'){
    display_list.sort(compareByDistance);
    renderer(display_list);
  }
  else if (category=='small_area'){
    display_list.sort(compareByArea);
    renderer(display_list);
  }
  else if (category=='large_area'){
    display_list.sort(compareByArea_desc);
    renderer(display_list);
  }


}


function show_map(latitude, longitude){
  link_map_url = `https://www.google.com/maps/embed/v1/view?key=AIzaSyA2hnT2wE-zEOIQuR7D6oUEjXxreTtc_MQ&center=${latitude},${longitude}&zoom=15`
  map = document.getElementById('map')
  map_link = document.getElementById('map_link')
  map_link.setAttribute('src', link_map_url);
  map.style.display = 'block';

}

function hide_map(){
  document.getElementById('map').style.display = 'none';
} 


const news_worker = new Worker('news_worker.js');
news_worker.postMessage('start');
