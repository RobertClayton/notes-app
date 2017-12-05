function testNoteStoresNoteInPropertyCalledText() {
  var note = new Note("My second Note");
  assert.isTrue(note.text === "My second Note");
}

function testNotesReturnsTheNoteText() {
  var note = new Note("My third Note");
  assert.isTrue(note.returnNoteText() === "My third Note");
}

testNoteStoresNoteInPropertyCalledText();
testNotesReturnsTheNoteText();
