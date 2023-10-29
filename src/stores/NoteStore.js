import { defineStore } from 'pinia';

export const useNoteStore = defineStore( 'noteStore', {

	state: () => ({
		notes: [],
		lastNoteId : ''
	
	}),
	getters: {
		allNotes: ( state ) => {
			return state.notes;
		},
    },
	actions: {
	
        
		addNote (note){
			const newNoteArr =[note, ... this.notes];
			this.notes = newNoteArr;
		}
	}

} );