import {voldArmy, studentArray} from "./data.js"
import { createForm, filterButtons, introCard, createStudentCard} from "./domMethods.js"
import { buttonEvents } from "./handleEvents.js"




// the init function that starts the app and prints elements to dom first and handles events second.
    const startApp = () => {
    introCard();
    filterButtons();
    createStudentCard(studentArray);
    buttonEvents();
  }; 

    startApp(); //calls the start app, to start the app!