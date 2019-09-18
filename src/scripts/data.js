const api = {
    // fetching the local host - 
    getJournalEntries: function () {
        return fetch("http://localhost:3000/journalArray?_sort=date&_order=desc")
            .then(response => response.json());
    },
    saveJournalEntries: (entry) => {
        return fetch("http://localhost:3000/journalArray", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        });
    },
    // deletes journal entry
	deleteEntry: id => {
		return fetch(`http://localhost:3000/journalArray/${id}`, {
			method: "DELETE"
		}).then(response => response.json());
	},
    //edits journal entry
	editEntry: id => {
		const editedEntry = {
			date: document.querySelector("#date--id").value,
			concept: document.querySelector("#concepts--id").value,
            entry: document.querySelector("#journal--entry--id").value,
            mood: document.querySelector("#mood--entry--id").value,
		};
		return fetch(`http://localhost:3000/journalArray/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(editedEntry)
		}).then(response => response.json())
	},
    getSpecificEntry: (id) => {
        return fetch(`http://localhost:3000/journalArray/${id}`)
             .then(response => response.json())
     }
}

export default api