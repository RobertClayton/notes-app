function doBeforeEach() {
  this.noteList = new NoteList();
  var note = new Note("My Note");
  var noteTwo = new Note("My second Note");
  noteList.new(note.text);
  noteList.new(noteTwo.text);
}

function testNoteListCanStoreAnArrayOfNotes() {
  doBeforeEach();
  description = 'Note List can store an array of Notes';
  assert.isTrue(description, noteList.returnNoteList().length == 2);
}

function testNoteListCanReturnAnArrayOfNotes() {
  doBeforeEach();
  description = 'Note List can return Notes from the array - first note';
  assert.isTrue(description, noteList.returnNoteList()[0].text == "My Note");
  description = 'Note List can return Notes from the array - second note';
  assert.isTrue(description, noteList.returnNoteList()[1].text == "My second Note");
}

function testNoteListWhenAddingNotesIncrementsNoteId() {
  doBeforeEach();
  description = 'Note List can increments ID for Notes - first note';
  assert.isTrue(description, noteList.returnNoteList()[0].id == 0);
  description = 'Note List can increments ID for Notes - second note';
  assert.isTrue(description, noteList.returnNoteList()[1].id == 1);
}

testNoteListCanStoreAnArrayOfNotes();
testNoteListCanReturnAnArrayOfNotes();
testNoteListWhenAddingNotesIncrementsNoteId();
