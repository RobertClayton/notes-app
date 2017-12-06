function testNoteStoresNoteInPropertyCalledText() {
  var note = new Note("My Note");
  assert.isTrue(note.text === "My Note");
}

function testNotesReturnsTheNoteText() {
  var note = new Note("My Note");
  assert.isTrue(note.returnNoteText() === "My Note");
}

function testNotesHaveIndividualID() {
  var note = new Note("My Note", 0);
  var noteTwo = new Note("My Second Note", 1);
  assert.isTrue(note.id === 0);
  assert.isTrue(noteTwo.id === 1);
}

testNoteStoresNoteInPropertyCalledText();
testNotesReturnsTheNoteText();
testNotesHaveIndividualID();
