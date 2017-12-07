(function(exports) {
  function NoteListView(noteList = new NoteList()) {
    this.noteList = noteList;
  }

  NoteListView.prototype.returnHTML = function() {
    var noteListMap = this.noteList.list.map(function(listItem) {
      return (`<li><div><a href="#id${listItem.id}">${listItem.text.slice(0,20)}</a></div></li>`);
    });
    return ("<ul>" + noteListMap.join("") + "</ul>");
  };

  exports.NoteListView = NoteListView;
})(this);
