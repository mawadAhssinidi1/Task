<script setup>
import Listitem from '../partials/Listitem.vue'
import {useNoteStore} from '../../stores/NoteStore'

 const noteStore = useNoteStore ();
</script>

<template>
<div class="notes-sidebar">
 <Listitem
     :notes="noteStore.allNotes" 
     :title="'all Notes'"
      :type ="'list'"
     /> 
</div>
</template>


