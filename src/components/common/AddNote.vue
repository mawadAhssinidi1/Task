<script setup>
import { ref } from 'vue';
import contenteditable from 'vue-contenteditable';
import { useNoteStore } from '../../stores/NoteStore';

const noteStore = useNoteStore();
const title = ref('');
const content = ref('');

const handleForm =(e) =>{
let insertId = noteStore.lastNoteId;
if (0 < title.value.length && insertId === ''){
    insertId = Date.now();
    noteStore.addNote({
        id : insertId,
        title : title.value,
        content : content.value,
        timestamp : Date.now(),
    });

    // Reset Form.

    title.value = '';
    content.value = '';

} else {
    alert ('Note Title can not be blank');
}
}

</script>

<template>
 <div class="notes-content">
    <form @submit.prevent="handleForm">
        <input
        type="text"
        class="input-title"
        placeholder="what is the note about ..."
        v-model="title"
         />
         <contenteditable
         tag="div"
         class="content-editable"
         :contenteditable="true"
         :no-nl="false"
         :no-html="true"
         v-model="content"

         />

       <button 
       type="submit"
       class="form-save-btn">
       <span class="material-symbols-sharp">save</span>
    </button>

    </form>
 </div>

</template>