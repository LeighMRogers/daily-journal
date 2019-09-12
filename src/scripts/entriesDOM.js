import webComponent from "./entryComponent.js"

const injectDOM = {
    
    addToDOM: function (entries){
        entries.forEach(entry => {
            const journalContainer = document.querySelector(".entryLog");
            journalContainer.innerHTML += webComponent.makeJournalEntry(entry);
        })
    }
}

export default injectDOM