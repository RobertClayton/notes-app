function testNoteListControllerIncludesString() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);

  noteController.newNote('This is the string');
  noteController.listView();
  noteController.getHTML();

  assert.isTrue(document.getElementById("app").innerHTML.includes('This is the string'));
}

function testNoteListControllerChangesHTML() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);

  noteController.newNote('Favourite food');
  noteController.listView();
  noteController.getHTML();

  assert.isTrue(document.getElementById("app").innerHTML == ('<ul><li><div>Favourite food</div></li></ul>'));
}

testNoteListControllerIncludesString();
testNoteListControllerChangesHTML();
