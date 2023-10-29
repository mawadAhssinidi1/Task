<script setup>
import { useNoteStore } from '../../stores/NoteStore'
const props = defineProps (['notes' , 'title' , 'type']);

const noteStore = useNoteStore();
</script>

<template>
 <h4 class="sidebar-title" v-if="'list' === type">
 {{ title }}
</h4>
<ul class="note-list"  v-if="'list' === type">
    <li v-for="note in notes" :key="note.id">
<pre><b>{{note.title}} </b>
{{note.content}} </pre> 
 </li>

</ul>
</template>

