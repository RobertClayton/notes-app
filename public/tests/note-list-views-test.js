function testNoteListViewCanTakeNoteList() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
}

function testNoteListViewCanReturnHTMLString() {
  var noteList = new NoteList();
  noteList.new('stringy');
  var noteListView = new NoteListView(noteList);
  description = 'Note List View returns a string of HTML';
  assert.isTrue(description, noteListView.returnHTML() == `<ul><li><div><a id="#notes/id0" href="#notes/id0">stringy...</a></div></li></ul>`);
}

function testNoteListViewCanHandleNoNotes() {
  var noteListView = new NoteListView();
  description = 'Note List View returns a string of HTML - with 0 notes';
  assert.isTrue(description, noteListView.returnHTML() == "<ul></ul>");
}

function testNoteListViewCanHandleManyNotes() {
  var noteList = new NoteList();
  noteList.new('stringy');
  noteList.new('stringy');
  var noteListView = new NoteListView(noteList);
  description = 'Note List View returns a string of HTML - with multiple notes';
  assert.isTrue(description, noteListView.returnHTML() == `<ul><li><div><a id="#notes/id0" href="#notes/id0">stringy...</a></div></li><li><div><a id="#notes/id1" href="#notes/id1">stringy...</a></div></li></ul>`);
}

function testNoteListViewShowsFirst20Characters() {
  var noteList = new NoteList();
  noteList.new('aaaaaaaaaaaaaaaaaaaaxxxxxxxx');
  var noteListView = new NoteListView(noteList);
  description = 'Note List View shows only the first 20 characters of a note';
  assert.isTrue(description, noteListView.returnHTML() == `<ul><li><div><a id="#notes/id0" href="#notes/id0">aaaaaaaaaaaaaaaaaaaa...</a></div></li></ul>`);
}

function testNoteListViewHasURLForEachNote() {
  var noteList = new NoteList();
  noteList.new('stringy');
  var noteListView = new NoteListView(noteList);
  description = 'Note List View has a unique URL for each note';
  assert.isTrue(description, document.getElementById("#notes/id0").href.includes("#notes/id0"));
}



testNoteListViewCanTakeNoteList();
testNoteListViewCanReturnHTMLString();
testNoteListViewCanHandleNoNotes();
testNoteListViewCanHandleManyNotes();
testNoteListViewShowsFirst20Characters();
testNoteListViewHasURLForEachNote();
