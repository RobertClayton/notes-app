var noteList = new NoteList();
var noteController = new NoteController(noteList);
noteController.newNote('Favourite Book and it has text');
noteController.listView();
noteController.getHTML();

function callback() {
  noteController.hashChangeListener();
}

window.addEventListener("hashchange", callback);
