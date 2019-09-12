const api = {

    getJournalEntries: function() {
        return fetch("http://localhost:3000/journalArray")
            .then(response => response.json());
    }
// fetching the local host - 
}

export default api