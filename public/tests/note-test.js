function testNoteTakesTextOnInstantiation() {
  var note = new Note("My first Note");
}

function testNoteStoresNoteInPropertyCalledText() {
  var note = new Note("My second Note");
  assert.isTrue(note.text === "My second Note");
}

function testNoteReturnsTheNoteText() {
  var note = new Note("My third Note");
  assert.isTrue(note.returnNoteText() === "My third Note");
}

console.log('here');
console.log(document);
testNoteTakesTextOnInstantiation();
testNoteStoresNoteInPropertyCalledText();
testNoteReturnsTheNoteText();
