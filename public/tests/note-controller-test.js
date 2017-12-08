function testNoteListControllerIncludesString() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);

  noteController.newNote('This is the string');
  noteController.listView();
  noteController.getHTML();
  description = 'Note List Controller includes string';
  assert.isTrue(description, document.getElementById("app").innerHTML.includes('This is the string'));
}

function testNoteListControllerChangesHTML() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);

  noteController.newNote('Favourite food');
  noteController.listView();
  noteController.getHTML();
  description = 'Note List Controller Changes HTML';
  assert.isTrue(description, document.getElementById("app").innerHTML == (`<ul><li><div><a id="#notes/id0" href="#notes/id0">Favourite food...</a></div></li></ul>`));
}

testNoteListControllerIncludesString();
testNoteListControllerChangesHTML();
