const webComponent = {




    makeJournalEntry: (journalEntry) => {
        // Create your own HTML structure for a journal entry
        let newJournalObj = `
            <article>
                <p>Date: ${journalEntry.date}</p>
                <p>Concept: ${journalEntry.concept}</p>
                <p>Entry: ${journalEntry.entry}</p>
                <p>Mood: ${journalEntry.mood}</p>  
            </article>
        `;
        return newJournalObj;
    }
};