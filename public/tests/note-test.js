function testNoteStoresNoteInPropertyCalledText() {
  var note = new Note("My Note");
  description = 'Note stores the note in a property called Text';
  assert.isTrue(description, note.text === "My Note");
}

function testNotesReturnsTheNoteText() {
  var note = new Note("My Note");
  description = 'Note can return the Notes text';
  assert.isTrue(description, note.returnNoteText() === "My Note");
}

function testNotesHaveIndividualID() {
  var note = new Note("My Note", 0);
  var noteTwo = new Note("My Second Note", 1);
  description = 'Notes have individual IDs - first note';
  assert.isTrue(description, note.id === 0);
  description = 'Notes have individual IDs - second note';
  assert.isTrue(description, noteTwo.id === 1);
}

testNoteStoresNoteInPropertyCalledText();
testNotesReturnsTheNoteText();
testNotesHaveIndividualID();
