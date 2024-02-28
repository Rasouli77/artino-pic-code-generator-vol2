// Your Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAMk8UeUv2l3e5zC8kL5GtDU2ML0MUyngw',
    authDomain: 'artino-42702.firebaseapp.com',
    projectId: 'artino-42702',
    storageBucket: 'artino-42702.appspot.com',
    messagingSenderId: '628147026695',
    appId: '1:628147026695:web:1f24e4b4a029b612e163a2',
    databaseURL: 'https://artino-42702-default-rtdb.firebaseio.com'
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the Firebase Realtime Database
  const database = firebase.database();
  
// let number = 0
// Retrieve the stored value from localStorage or default to 0
let number = parseInt(localStorage.getItem('storedNumber')) || 0;
function test() {

    // subject: the first dropdown
    const subject = document.getElementById("subject");

    // style
    const style = document.getElementById("style");

    // ratio
    const ratio = document.getElementById("ratio");

    // type
    const type = document.getElementById("type");

    // year
    const d = new Date();
    let year = d.getFullYear();

    // source
    const source = document.getElementById("source");
   
   
    // week
    currentDate = new Date();
    startDate = new Date(currentDate.getFullYear(), 0, 1);
    let days = Math.floor((currentDate - startDate) /
    (24 * 60 * 60 * 1000));

   
    
 
    var result = document.querySelector(".result");

    // if errors
    if (source.options[source.selectedIndex].value === "انتخاب کنید") {
        alert("لطفا منبع را انتخاب کنید");
        result.classList.add("hide");
    } else if (subject.options[subject.selectedIndex].value === "انتخاب کنید") {
        alert("لطفا موضوع را انتخاب کنید");
        result.classList.add("hide");
    } else if (style.options[style.selectedIndex].value === "انتخاب کنید") {
        alert("لطفا سبک را انتخاب کنید");
        result.classList.add("hide");
    } else if (ratio.options[ratio.selectedIndex].value === "انتخاب کنید") {
        alert("لطفا نسبت تصویر را انتخاب کنید");
        result.classList.add("hide");
    } else if (type.options[type.selectedIndex].value === "انتخاب کنید") {
        alert("لطفا نوع را انتخاب کنید");
        result.classList.add("hide");
    } else {
        result.classList.remove("hide");
    }



    

    
      // Get the current value of 'number' from Firebase
      database.ref('variable/number').once('value')
        .then(snapshot => {
          // Retrieve the current 'number' value
          const firebaseNumber = snapshot.val();
    
          // Use the greater of the current 'number' from Firebase and the local 'number'
          number = Math.max(number, firebaseNumber) + 1;
    
          // Update the 'number' in Firebase
          database.ref('variable/number').set(number);
    

          
          result.innerHTML = year.toString().slice(-1) + String(Math.ceil(days / 7)).padStart(2, '0') +
            source.options[source.selectedIndex].value +
            subject.options[subject.selectedIndex].value +
            style.options[style.selectedIndex].value +
            ratio.options[ratio.selectedIndex].value +
            number.toString().padStart(3, '0') +
            type.options[type.selectedIndex].value;

            if (number === 999) {
                console.log("test")
                number = 0;
               
           } 
    
          // Store the updated number in localStorage
          localStorage.setItem('storedNumber', number);
        });
    
    

    
  

     
    

    
}



 
