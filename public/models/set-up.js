var noteList = new NoteList();
var controller = new NoteController(noteList);
controller.newNote('Favourite Book1: The Philosophers Stone');
controller.newNote('Favourite Book2: The Chamber of Secrets');
controller.newNote('Favourite Book3: The Prisoner of Azkaban');
controller.newNote('Favourite Book4: The Goblet of Fire');
controller.newNote('Favourite Book5: The Order of the Phoenix');
controller.newNote('Favourite Book6: The Half Blood Prince');
controller.newNote('Favourite Book7: The Deathly Hallows');
controller.listView();
controller.getHTML();


hashChanged = window.addEventListener("hashchange", callbackHashChange);
submittedNote = window.addEventListener("submit", callbackSubmiteNewNote);


function callbackHashChange() {
  console.log('1', event);
  controller.hashChangeListener();
}
function callbackSubmiteNewNote() {
  console.log('2', event);
  event.preventDefault();
}
