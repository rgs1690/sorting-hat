
voldArmy = []; 
studentArray = []
// const filterButtons = () => {
//     const domString =`
//     <button type="button" class="btn btn-primary" id="ravenclaw">Ravenclaw</button>
//     <button type="button" class="btn btn-primary" id="gryffindor">Gryffindor</button>
//     <button type="button" class="btn btn-primary" id="slytherin">Slytherin</button>
//     <button type="button" class="btn btn-primary" id="hufflepuff">Hufflepuff</button>
//     `;
//     renderToDom("#filterContainer", domString);
// }

const renderToDom =(divId, textToRender) => {
    const selectedDiv= document.querySelector(divId);
    selectedDiv.innerHTML = textToRender;
};

const introCard = () => {
    const domString =`
    <div class="intoCard">
     <div class="intoCardBody">
            <h5 class="introCardTitle">Welcome to Hogwarts!</h5>
            <p class="introCardText">"Now slip me snug around your ears,<br>
            I've never yet been wrong,<br>
            I'll have alook inside your mind<br>
            And tell where you belong!”.</p>
            <button type ="button" id="letsBegin" class="btn btn-primary">Let's begin!</button>
        </div>
    </div>
    `
    renderToDom("#introCard", domString);
};

const createForm = () => {
    const domString = `
    <form class="studentForm" id="studentForm">
    <div class="mb-3">
      <label for="name" class="form-label">Student's Name:</label>
      <input type="text" class="form-control" id="input" required/>
      <div id="formText" class="form-text"></div>
    <button type="submit"class="btn btn-form">Start Sorting!</button>
  </form>
     `
     renderToDom("#sortForm", domString);
};

const addForm =(event) => {
    const targetId = event.target.id;
    const targetType = event.target.type;
    if (targetType === "button"){
        createForm();
        formEvents();
    };
};

const createStudentCard = (array) =>{
    let domString=""
    array.forEach((student, i) => {
    domString += `
    <div class="hogCard" style="width: 18rem;">
        <div class="hogCardBody">
        <h5 class="hogCardTitle">${student.name}</h5>
        <p class="hogCardText">${student.house}</p>
        <button type="button" id=${i} class="btn btn-primary">Expel</button>
        </div>
    </div>
    `
});
renderToDom("#firstYears", domString);
    
};
const sortButton= (event) => {
    event.preventDefault();
    const student = {
        name: document.querySelector("#input").value,
        house: assignHouse(1,5),
       
    };
      studentArray.push(student);
      createStudentCard(studentArray);
};
 
const assignHouse = (min, max) => {
    const houseNum =  Math.floor(Math.random() * (max - min) + min);
    if (houseNum == 1) {
        return "Gryffindor";
    } else if (houseNum == 2) {
        return "Syltherin"; 
    } else if (houseNum == 3) {
        return "Ravenclaw";
    } else {
        return "Hufflepuff";
    };
    };

const expelStudents = (event) => {
    
    const targetType = event.target.type; 
    const targetId = event.target.id;
    if (targetType === "button") {
        const elm = studentArray.splice(targetId, 1);
        voldArmy.push(elm[0]);
        expelledStudents(voldArmy);
        createStudentCard(studentArray);
    
    };
};

const expelledStudents = (array) => {
    let domString=""
    array.forEach((student, i) => {
    domString += `
    <div class="expelCard" style="width: 18rem;">
        <img src="https://pm1.narvii.com/5824/d2b3344a66fa8a70d68ee6a0d06953bdf7679ea7_128.jpg" class="card-img-top" alt="death eater">
        <div class="expelCardBody">
        <h5 class="expelCardTitle">${student.name} </h5>
        <p class="expelCardText">Has joined Voldemort's Army!</p>
       
        </div>
    </div>
    `
    });
    renderToDom("#voldArmy", domString);
};
    // const filterStudents = (array,house) =>{
    // return array.filter((studentObject) => studentObject.house === house);
    // };

    // const handleFilter = (event) =>{
    //     if(event.target.id === "gryffindor") {
    //        const gryffindor = filterStudents(studentArray, event.target.id);
    //         createStudentCard(gryffindor);
    //        }
    //     if(event.target.id === "ravenclaw") {
    //         const ravenclaw = filterStudents(studentArray, event.target.id);
    //          createStudentCard(ravenclaw);
    //         }
    //     if(event.target.id === "slytherin") {
    //             const slytherin = filterStudents(studentArray, event.target.id);
    //              createStudentCard(slytherin);
    //         }
    //     if(event.target.id === "hufflepuff") {
    //             const hufflepuff = filterStudents(studentArray, event.target.id);
    //              createStudentCard(hufflepuff);
    //             }    
    //  };

    const buttonEvents = () => {
    document.querySelector("#introCard").addEventListener("click", addForm);
    document.querySelector("#firstYears").addEventListener("click", expelStudents);
    // document.querySelector("#filterContainer").addEventListener("click", handleFilter);
};


    const formEvents = () => {
    const formElement = document.querySelector("#studentForm");
    formElement.addEventListener("submit", sortButton);
};

    const startApp = () => {
    introCard();
    // filterButtons();
    createStudentCard(studentArray);
    buttonEvents();
  }; 

    startApp(); 