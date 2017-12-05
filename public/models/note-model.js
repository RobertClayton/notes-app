(function(exports) {
  function Note(noteText) {
    this.text = noteText;

    Note.prototype.returnNoteText = function() {
      return this.text;
    };
  }
  exports.Note = Note;
})(this);
