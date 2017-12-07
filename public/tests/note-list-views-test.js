function testNoteListViewCanTakeNoteList() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
}

function testNoteListViewCanReturnHTMLString() {
  var noteList = new NoteList();
  noteList.new('stringy');
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML() == `<ul><li><div><a href="#id0">stringy</a></div></li></ul>`);
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
  assert.isTrue(noteListView.returnHTML() == `<ul><li><div><a href="#id0">stringy</a></div></li><li><div><a href="#id1">stringy</a></div></li></ul>`);
}

function testNoteListViewShowsFirst20Characters() {
  var noteList = new NoteList();
  noteList.new('aaaaaaaaaaaaaaaaaaaaxxxxxxxx');
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML() == `<ul><li><div><a href="#id0">aaaaaaaaaaaaaaaaaaaa</a></div></li></ul>`);
}

function testNoteListViewHasURLForEachNote() {
  var noteList = new NoteList();
  noteList.new('stringy');
  var noteListView = new NoteListView(noteList);
  assert.isTrue(window.location.href.includes("#id0"));
}



testNoteListViewCanTakeNoteList();
testNoteListViewCanReturnHTMLString();
testNoteListViewCanHandleNoNotes();
testNoteListViewCanHandleManyNotes();
testNoteListViewShowsFirst20Characters();
testNoteListViewHasURLForEachNote();
