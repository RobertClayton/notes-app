var noteList = new NoteList();
var controller = new NoteController(noteList);
controller.newNote('Favourite food');
controller.newNote('Favourite food2');
controller.newNote('Favourite food3');
controller.newNote('Favourite food4');
controller.newNote('Favourite food5');
controller.newNote('Favourite food6');
controller.listView();
controller.getHTML();

function callback() {
  controller.hashChangeListener();
}

window.addEventListener("hashchange", callback);
