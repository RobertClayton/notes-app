function testNoteListControllerIncludesString() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);

  noteController.newNote('This is the string for a note');
  noteController.listView();
  noteController.getHTML();

  assert.isTrue(document.getElementById("app").innerHTML.includes('This is the string for a note'));
}

function testNoteListControllerChangesHTML() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);

  noteController.newNote('Favourite food: pesto');
  noteController.listView();
  noteController.getHTML();

  assert.isTrue(document.getElementById("app").innerHTML == ('<ul><li><div>Favourite food: pesto</div></li></ul>'));
}

testNoteListControllerIncludesString();
testNoteListControllerChangesHTML();
