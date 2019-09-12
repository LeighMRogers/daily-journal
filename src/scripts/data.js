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
    }
}

export default api