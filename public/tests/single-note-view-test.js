function testSingleNoteViewReturnsHTMLNoteModel() {
  var noteModel = new Note("Text of my Note");
  var singleNote = new SingleNoteView(noteModel);
  description = 'Single Note View returns the Text of a Note in HTML';
  assert.isTrue(description, singleNote.returnHTMLNoteModel() === "<div>Text of my Note</div>");
}


testSingleNoteViewReturnsHTMLNoteModel();
