
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
            <button type ="button" id="letsBegin" class="btn introBtn">Let's begin!</button>
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
    <img src="data:image/jpeg;base64,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" class="card-img-top" alt="hogwarts crest">
        <div class="hogCardBody">
        <h5 class="hogCardTitle">${student.name}</h5>
        <p class="hogCardText">${student.house}</p>
        <button type="button" id=${i} class="btn expelBtn">Expel</button>
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
      document.querySelector("#studentForm").reset();
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