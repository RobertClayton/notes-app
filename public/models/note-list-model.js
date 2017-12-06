(function(exports) {
  function NoteList() {
    this.list = [];

    NoteList.prototype.new = function(string) {
      var noteId = (this.list.length);
      var note = new Note(string, noteId);
      this.list.push(note);
    };

    NoteList.prototype.returnNoteList = function() {
      return this.list;
    };
  }

  exports.NoteList = NoteList;
})(this);
