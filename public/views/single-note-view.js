(function(exports) {
  function SingleNoteView(note) {
    this.noteModel = note;
  }

  SingleNoteView.prototype.returnHTMLNoteModel = function() {
    return ("<div>" + this.noteModel.returnNoteText() + "</div>");
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
