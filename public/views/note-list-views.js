(function(exports) {
  function NoteListView(noteList = new NoteList()) {
    this.noteList = noteList;
  }

  NoteListView.prototype.returnHTML = function() {
    var noteListMap = this.noteList.list.map(function(listItem) {
      return ("<li><div>" + listItem.text + "</div></li>");
    });
    return ("<ul>" + noteListMap.join("") + "</ul>");
  };

  exports.NoteListView = NoteListView;
})(this);
