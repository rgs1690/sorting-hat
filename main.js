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
    <form>
    <div class="mb-3">
      <label for="name" class="form-label">Student's Name:</label>
      <input type="text" class="form-control" id="input" aria-describedby="studentsName" required ="required"/>
      <div id="formText" class="form-text">Type your name into the field and I'll tell you what house you belong in!</div>
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


voldArmy = []; 
studentArray = []

const newStudents= () => {
  
    const student = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${document.querySelector("#input").value}</h5>
        <p class="card-text">${assignHouse(1,5)}</p>
        <button type="submit" id="expel"class="btn btn-primary">Expel</button>
        </div>
    </div>
    `
   studentArray.push(student);
  
};


const sortButton= (event) => {
  
    event.preventDefault();
    const targetId = event.target.id;
    const targetType = event.target.type;
    if(targetType === "submit" && document.querySelector("#input")) {
        renderToDom("#firstYears", studentArray);
    };
};


assignHouse = (min, max) => {
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
    document.querySelector("#sortForm").addEventListener("click", newStudents);
};

const startApp = () => {
    introCard();
    buttonEvents();
};

startApp(); 