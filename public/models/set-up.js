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

function callback() {
  controller.hashChangeListener();
}

window.addEventListener("hashchange", callback);
