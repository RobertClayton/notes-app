function testNoteListViewCanTakeNoteList() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
}

function testNoteListViewCanReturnHTMLString() {
  var noteList = new NoteList();
  noteList.new('stringy');
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML() == "<ul><li><div>stringy</div></li></ul>");
}

function testNoteListViewCanHandleNoNotes() {
  var noteListView = new NoteListView();
  assert.isTrue(noteListView.returnHTML() == "<ul></ul>");
}

function testNoteListViewCanHandleManyNotes() {
  var noteList = new NoteList();
  noteList.new('stringy');
  noteList.new('stringy');
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML() == "<ul><li><div>stringy</div></li><li><div>stringy</div></li></ul>");
}

testNoteListViewCanTakeNoteList();
testNoteListViewCanReturnHTMLString();
testNoteListViewCanHandleNoNotes();
testNoteListViewCanHandleManyNotes();
