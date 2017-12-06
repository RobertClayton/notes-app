(function(exports) {
  function Note(noteText, id) {
    this.text = noteText;
    this.id = id;

    Note.prototype.returnNoteText = function() {
      return this.text;
    };
  }
  exports.Note = Note;
})(this);
