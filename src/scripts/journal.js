//Define the keys and value for a JavaScript object that
//represents a journal entry about what you learned today

//array - moved to entries.json

import api from "./data.js";
import injectDOM from "./entriesDOM.js";

/*
    Purpose: To render all journal entries to the DOM
    Arguments: entries (array of objects)
*/
//make sure this loads to page
api.getJournalEntries().then(data => injectDOM.addToDOM(data));

//add event listener to Submit button, grabs the value of the queried IDs and adds it to the DOM.
const addEntry = document.querySelector("#submit--button--id").addEventListener("click", event => {
    let dateInput = document.querySelector("#date--id").value;
    let conceptInput = document.querySelector("#concepts--id").value;
    let entryInput = document.querySelector("#journal--entry--id").value;
    let moodInput = document.querySelector("#mood--entry--id").value;
    console.log(dateInput)

    // creates the object with properties and values
        const journalEntry = {
            date: dateInput,
            concept: conceptInput,
            entry: entryInput,
            mood: moodInput
        };
    //taking object (journalEntry) and posting to database (api) and saving it there.
    api.saveJournalEntries(journalEntry).then( () => {
        //clearing entry log after api pulldown
        document.querySelector(".entryLog").innerHTML = ""
        //calling api journal entries because it needs the refreshed data
        api.getJournalEntries()
        //take data and add to DOM
        .then(data => injectDOM.addToDOM(data));
    })
        // makeJournalEntryComponent.innerHTML += journalBuilder(
        //     journalBuilder(dateInput, conceptInput, entryInput, moodInput)
        // );
    });

