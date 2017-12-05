function testSingleNoteViewReturnsHTMLNoteModel() {
  var noteModel = new Note("Text of my Note");
  var singleNote = new SingleNoteView(noteModel);
  assert.isTrue(singleNote.returnHTMLNoteModel() === "<div>Text of my Note</div>");
}


testSingleNoteViewReturnsHTMLNoteModel();
