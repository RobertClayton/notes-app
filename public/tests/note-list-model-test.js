
function testNoteListCanStoreAnArrayOfNotes() {
  var note = new Note("My Note");
  var noteList = new NoteList();
  noteList.new(note);
  noteList.new(note);
  assert.isTrue(noteList.list.length == 2);
}

function testNoteListCanReturnAnArrayOfNotes() {
  var noteList = new NoteList();
  var note = new Note("My Note");
  var noteTwo = new Note("My second Note");
  noteList.new(note.text);
  noteList.new(noteTwo.text);
  assert.isTrue(noteList.returnNoteList()[0].text == "My Note");
  assert.isTrue(noteList.returnNoteList()[1].text == "My second Note");
}

function testNoteListWhenAddingNotesIncrementsNoteId() {
  var noteList = new NoteList();
  var note = new Note("My Note");
  var noteTwo = new Note("My second Note");
  noteList.new(note.text);
  noteList.new(noteTwo.text);
  assert.isTrue(noteList.returnNoteList()[0].id == 0);
  assert.isTrue(noteList.returnNoteList()[1].id == 1);
}

testNoteListCanStoreAnArrayOfNotes();
testNoteListCanReturnAnArrayOfNotes();
testNoteListWhenAddingNotesIncrementsNoteId();
