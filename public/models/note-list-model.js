(function(exports) {
  function NoteList() {
    this.list = [];

    NoteList.prototype.new = function(string) {
      var note = new Note(string);

      this.list.push(note);
    };

    NoteList.prototype.returnNoteList = function() {
      return this.list;
    };
  }

  exports.NoteList = NoteList;
})(this);
