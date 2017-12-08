/*jshint esversion: 6 */
function testNoteListControllerIncludesString() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);

  noteController.newNote('This is the string');
  noteController.listView();
  noteController.getHTML();
  description = 'Note List Controller includes string';
  assert.isTrue(description, document.getElementById("app").innerHTML.includes('This is the string'));
}

function testNoteListControllerChangesHTML() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);

  noteController.newNote('Favourite food');
  // noteController.newNote('Favourite food2');
  // noteController.newNote('Favourite food3');
  // noteController.newNote('Favourite food4');
  // noteController.newNote('Favourite food5');
  // noteController.newNote('Favourite food6');
  noteController.listView();
  noteController.getHTML();
  description = 'Note List Controller Changes HTML';
  assert.isTrue(description, document.getElementById("app").innerHTML == (`<ul><li><div><a href="#notes/id0">Favourite food</a></div></li></ul>`));
}

testNoteListControllerIncludesString();
testNoteListControllerChangesHTML();




// console.log(location.hash.split("#notes/id")[1]);
// console.log(document.getElementById("app").innerHTML);
// var currentID = location.hash.split("#notes/id")[1];
// console.log('text for note:', noteList.list[currentID].text);
