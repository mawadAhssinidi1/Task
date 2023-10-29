# notes app


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

 [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```mawadahssindi
npm install
```

### Compile and Hot-Reload for Development

```mawadahssindi
npm run dev
```

### Compile and Minify for Production

```mawadahssindi
npm run build
```
 -------------------------------------------------------------------------------------------------

# Documentation

# The framework that i pick and why :

 1- This App developing with Vue 3 in Vite.
using components and pinia for state management

I choose vue js because i want to use state management in my project and it is easy to use pinia with Vue js 
from use redux with react so i choose Vue js , and Vue js it is a framework and not just a library
It requires some experience to get used to it to make it really beneficial, but once it is done,
 the application becomes more change-tolerable and maintainable.


## What framework appealed to me for this project :

 2- simplicity, ease of learning, and flexibility. Vue's component-based architecture promotes reusability, making development faster and more efficient. 

### Alternative framework :

3- I consider Angular js as alternative framework because it is simple too but Angular requires you to be skilled in TypeScript, which according to the StackOverflow survey, is favored by 30% of developers. Therefore, learning Angular requires greater effort than other frameworks.


#### Resources that I read/watch/ listen to :
 
 4- Reading :
 * https://www.w3schools.com/vue/
 * https://www.browserstack.com/guide/angular-vs-react-vs-vue
 * https://www.visual-craft.com/blog/should-you-prefer-react-over-vue-js/

   Watching and listening to :
 * https://www.vuemastery.com/
 * https://www.youtube.com/channel/UC7H2HJUUqvdArYMBsrDmecw
  
  ##### Description the project :

 5- this project called note app i make it to organize my notes 
  this project allow me to add a new note and show all notes that i added befor
 I have added a pinia store to it as NoteStore.js file and put in that file three section :
 - state : to save the notes that be added in an array
 - getters : put here computed function that will return all the notes
 - actions : declare a function that will add a new note at the end of notes array 

 and I have added 3 folders in components folder like this:
  - common folder contains : AddNote.vue component that handle title and content and save button to add the note
                            Toolbar.vue component here i determine what will show in the header of the project and in my project there is the title just.
  - list folder contains : SideBar.vue component that show the side bar section in my project it contain title and the notes list.
                           ListView.vue component show the list of notes.
  - partial folder contains : Listitem.vue component contain the list of notes that i have added befor.


                              


