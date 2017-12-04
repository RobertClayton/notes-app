function testNoteHasIdOfOne() {
  var note = new Note();
  assert.isTrue(note.id === 1);
}

function testNote() {
  var list = new List();
  list.addNote("My first Note");
  assert.isTrue(list.notes[0].returnText("My first Note"));
}

testNoteHasIdOfOne();
testNote()
