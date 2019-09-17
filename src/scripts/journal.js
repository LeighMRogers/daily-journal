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

//delete button api call:

document.querySelector(".entryLog").addEventListener("click", event => {
    if (event.target.id.startsWith("deleteButton--")) {
        // Extract delete button id from the button's id attribute
        console.log(event, event.target.id.split("--")[1])
        // clear container before adding new entry
        document.querySelector(".entryLog").innerHTML = "";
        // call api.deleteEntry with a split on the "--" (event.target.id.split) and target the second index to get the ID
        api.deleteEntry(event.target.id.split("--")[1])
            .then(() => {
                // 6. get all the entries again
                api.getJournalEntries().then(data => injectDOM.addToDOM(data));
            })
    //if you see an edit button, do the following
    } else if (event.target.id.startsWith("editButton--")) {
        console.log("edit", event.target.id.split("--")[1])
        editForm(event.target.id.split("--")[1])
    }
});


