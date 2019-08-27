//Define the keys and value for a JavaScript object that 
//represents a journal entry about what you learned today

//creates the object with properties and values
let journalEntry = {
    date: "", 
    conceptsCovered: "",
    journalMood: "",
    content: "",
}

//array 
const journalArray = [];


function addEntry(newEntry) {
    journalEntry.push(newEntry);
    return journalEntry;
}
