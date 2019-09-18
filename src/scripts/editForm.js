import api from "./data.js"

//responsible for displaying data from the database within input fields.
const editForm = (id) => {
    let hiddenEntryId = document.querySelector("#hiddenInput")
    let editDate = document.querySelector("#edit--date--id")
    let editConcepts = document.querySelector("#edit--concepts--id")
    let editJournalText = document.querySelector("#edit--journal--entry--id")
    let editMood = document.querySelector("#edit--mood--entry--id")


    api.getSpecificEntry(id).then(response => {
        hiddenEntryId.value = id
        editDate.value = response.date
        editConcepts.value = response.concept
        editJournalText.value = response.entry
        editMood.value = response.mood.toUpperCase()
    })
}
console.log(editForm)

export default editForm