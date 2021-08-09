
import {expelledStudents, createForm, filterButtons, introCard, createStudentCard} from "./domMethods.js"
import {voldArmy, studentArray} from "./data.js"
//orders cards by name
const orderByName = (array) => {        //has an array as a parameter
    const cardNames = array.sort(function(a,b){ //
        const nameOne = a.name.toUpperCase(); // changes the text that is entered to all uppercase so it can be compared 
        const nameTwo = b.name.toUpperCase();
        if (nameOne < nameTwo) {            //if 1st name is < 2nd name place 2nd name before 1st
            return -1;
        };
        if (nameTwo > nameOne){         // if 2nd name is > 1st name then place 2nd first
            return 1;
        };
        return 0;           // starting place to compare 1 or -1 to. 
   
    });
};
// Creates form after "let's begin" button is clicked.
const addForm =(event) => {                      
    const targetId = event.target.id;   //adds id in event listener of #introCard to bubble
    const targetType = event.target.type; // selects button as target type, when you click "button" in div: #introCard
    if (targetType === "button"){
        createForm();               // calls the createForm function which prints it to the dom
        formEvents();           // calls formEvents function that handles the sumbit button
       
    };
};


// submit or 'start sorting' button action
const sortButton= (event) => {
    event.preventDefault();  // prevents page refresh
    const student = {
        name: document.querySelector("#input").value,  // inputs vaule in the form field after submission
        house: assignHouse(1,5),  //calls function that assigns house and assigns it to the house keyword in student object   
        
    };
     studentArray.push(student);       //pushes the newly input student to studentArray
     orderByName(studentArray);         // orders cards before printing to the dom.
     createStudentCard(studentArray);   // creates student card and prints to dom
     document.querySelector("#studentForm").reset();  //clears form field after submission
    };
    // function to assign house
    const assignHouse = (min, max) => {        // returns a value in the range of min-max
        const houseNum =  Math.floor(Math.random() * (max - min) + min); 
       /*math random generates a random number from 0 to 0.999999...
        so we multiply that by the range we are looking for, which is 4 numbers, so 5-1.
        Math random starts at 0 when counting so we need to add 1 to make our starting number 1.    
        Since math random only goes as high 0.9999 and never 1 we use math.floor to round down 
        to the closest integer 
       */    
        
        if (houseNum == 1) {    // if else statements that assigns houseNum generated to house name.
            return "gryffindor";
        } else if (houseNum == 2) {
            return "slytherin"; 
        } else if (houseNum == 3) {
            return "ravenclaw";
        } else {
            return "hufflepuff";
        };
            };
                //expel students function
const expelStudents = (event) => {
    
    const targetType = event.target.type; 
    const targetId = event.target.id;   //adds id in event listener of #firstYears to bubble
    if (targetType === "button") {
        const badStudent = studentArray.splice(targetId, 1); // creates a new array when expelbutton is clicked removing the one student
        voldArmy.push(badStudent[0]);   //pushes the first element of the new bad student array to voldArmy array
        expelledStudents(voldArmy);     //prints student card to vold army div
        createStudentCard(studentArray); //prints the new "good" student array 
    
    };
};
  // function that filters student by house
  const filterStudents = (array, house) =>{
    return array.filter((student) => student.house === house);
    };
       // handles button clicks for each house and prints the student cards only if they are in said house
       const handleFilter = (event) => {
        event.preventDefault();
        if(event.target.id === "gryffindor") {
            const gryffindorStudents = filterStudents(studentArray, event.target.id);
            createStudentCard(gryffindorStudents);
        }
        if(event.target.id === "ravenclaw") {
            const ravenclawStudents = filterStudents(studentArray, event.target.id);
             createStudentCard(ravenclawStudents);
            }
        if(event.target.id === "slytherin") {
               const slytherinStudents = filterStudents(studentArray, event.target.id);
                createStudentCard(slytherinStudents);
                }
        if(event.target.id === "hufflepuff") {   
            const hufflepuffStudents = filterStudents(studentArray, event.target.id);
                 createStudentCard(hufflepuffStudents);
                }    
        if(event.target.id === "all"){
            createStudentCard(studentArray);
        }
            };      
        //event listeners for button events
        const buttonEvents = () => {
            document.querySelector("#introCard").addEventListener("click", addForm);
            document.querySelector("#firstYears").addEventListener("click", expelStudents);
            document.querySelector("#filterContainer").addEventListener("click", handleFilter);
        };
        
//event listener for submit button events
    const formEvents = () => {
        const formElement = document.querySelector("#studentForm");
        formElement.addEventListener("submit", sortButton);
    
        
    };

 
    export { buttonEvents }