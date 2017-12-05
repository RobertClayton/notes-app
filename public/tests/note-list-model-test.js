
function testNoteListCanStoreAnArrayOfNotes() {
  var note = new Note("My first Note");
  var noteList = new NoteList();
  noteList.new(note);
  noteList.new(note);
  assert.isTrue(noteList.list.length == 2);
}

function testNoteListCanReturnAnArrayOfNotes() {
  var noteList = new NoteList();
  var noteTwo = new Note("My second Note");
  var noteThree = new Note("My third Note");
  noteList.new(noteTwo.text);
  noteList.new(noteThree.text);
  assert.isTrue(noteList.returnNoteList()[0].text == "My second Note");
  assert.isTrue(noteList.returnNoteList()[1].text == "My third Note");
}

testNoteListCanStoreAnArrayOfNotes();
testNoteListCanReturnAnArrayOfNotes();
