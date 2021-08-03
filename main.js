
voldArmy = []; 
studentArray = []

const renderToDom =(divId, textToRender) => {
    const selectedDiv= document.querySelector(divId);
    selectedDiv.innerHTML = textToRender;
};

const introCard = () => {
    const domString =`
    <div class="card">
     <div class="card-body">
            <h5 class="card-title">Welcome to Hogwarts!</h5>
            <p class="card-text">"Now slip me snug around your ears,<br>
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
    <form id="studentForm">
    <div class="mb-3">
      <label for="name" class="form-label">Student's Name:</label>
      <input type="text" class="form-control" id="input" required = "required"/>
      <div id="formText" class="form-text"></div>
    <button type="submit" id="sort"class="btn btn-primary">Start Sorting!</button>
  </form>
     `
     renderToDom("#sortForm", domString);
};

const addForm =(event) => {
    const targetId = event.target.id;
    const targetType = event.target.type;
    if (targetType === "button"){
        createForm();
    };
};

const createStudentCard = (array) =>{
    let domString=""
    array.forEach((student) => {
    domString += `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${student.name}</h5>
        <p class="card-text">${student.house}</p>
        <button type="submit" id="expel"class="btn btn-primary">Expel</button>
        </div>
    </div>
    `
    renderToDom("#firstYears", domString);
    });
    
};
const sortButton= (event) => {
    event.preventDefault();
    const targetType = event.target.type;
    if (targetType === "submit") {
    const student = {
        name: document.querySelector("#input").value,
        house: assignHouse(1,5)
      };
      studentArray.push(student);
      createStudentCard(studentArray);
    };
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

const buttonEvents = () => {
    document.querySelector("#introCard").addEventListener("click", addForm);
    document.querySelector("#sortForm").addEventListener("click", sortButton);
};

const formEvents = () => {
    const formElement = document.querySelector("#studentForm");
    formElement.addEventListener("submit", sortButton);
};

const startApp = () => {
    introCard();
    createStudentCard(studentArray);
    buttonEvents();
    formEvents();
};

startApp(); 