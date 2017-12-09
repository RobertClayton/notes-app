function doBeforeEach() {
  this.noteList = new NoteList();
  this.noteController = new NoteController(noteList);
  noteController.newNote('Favourite Book and it has text');
  noteController.listView();
  noteController.getHTML();
}

function testNoteListControllerIncludesString() {
  doBeforeEach();
  description = 'Note List Controller includes string';
  assert.isTrue(description, document.getElementById("app").innerHTML.includes('Favourite Book and i'));
}

function testNoteListControllerChangesHTML() {
  doBeforeEach();
  description = 'Note List Controller Changes HTML';
  assert.isTrue(description, document.getElementById("app").innerHTML == (`<ul><li><div><a id="#notes/id0" href="#notes/id0">Favourite Book and i...</a></div></li></ul>`));
}

function testNoteListControllerDisplaysTheTextOfClickedNote() {
  doBeforeEach();
  description = 'Note List Controller Changes NoteText';
  // document.getElementById("#notes/id0").click();
  // assert.isTrue(description, document.getElementById("noteText").innerHTML == 'Favourite Book1: The Philophers Stone');
}

testNoteListControllerIncludesString();
testNoteListControllerChangesHTML();
testNoteListControllerDisplaysTheTextOfClickedNote();
