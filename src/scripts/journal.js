//Define the keys and value for a JavaScript object that
//represents a journal entry about what you learned today

//creates the object with properties and values
// let journalBuilder = (dateValue, conceptValue, entryValue, moodValue) => {
//     const journalEntry = {
//         date: dateValue.date,
//         concept: conceptValue.concept,
//         entry: entryValue.entry,
//         mood: moodValue.mood
//     };
//     return journalEntry;
// };

// journalBuilder();

//array - moved to entries.json



// function addEntry(newEntry) {
//     journalEntry.push(newEntry);
// }

// document.querySelector("#submit--button--id").addEventListener("click", event => 
//     {
//         let dateInput = document.querySelector("#date--id").value;
//         let conceptInput = document.querySelector("concepts--id").value;
//         let entryInput = document.querySelector("journal--entry--id").value;
//         let moodInput = document.querySelector("#mood--entry--id").value;

//         makeJournalEntryComponent.innerHTML += journalBuilder(
//             objectBuilder(dateInput, conceptInput, entryInput, moodInput)
//         );
//     });

// const makeJournalEntryComponent = (journalEntry) => {
//     // Create your own HTML structure for a journal entry
//     let newJournalObj = `
//         <article>
//             <p>Date: ${journalEntry.date}</p>
//             <p>Concept: ${journalEntry.concept}</p>
//             <p>Entry: ${journalEntry.entry}</p>
//             <p>Mood: ${journalEntry.mood}</p>  
//         </article>
//     `;
//     return newJournalObj;
// };

// const journalContainer = document.querySelector(".entryLog");

/*
    Purpose: To render all journal entries to the DOM
    Arguments: entries (array of objects)
*/

//fetching the local host - 
// fetch("http://localhost:3000/journalArray")
//     .then(response => response.json())
//     .then(data => {
//         // data.forEach(item => {
//         //     const journalContainer = document.querySelector(".entryLog");
//         //     journalContainer.innerHTML += makeJournalEntry(item);
//         // })
//     })

api.getJournalEntries().then(data => injectDOM.addToDOM(data));