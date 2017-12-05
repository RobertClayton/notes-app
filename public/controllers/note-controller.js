(function(exports) {
  function NoteController(noteListModelParam) {
    this.noteListModel = noteListModelParam;
    this.view = null;

    NoteController.prototype.newNote = function(string) {
      this.noteListModel.new(string);
    };

    NoteController.prototype.listView = function() {
      this.view = new NoteListView(this.noteListModel);
    };

    NoteController.prototype.getHTML = function() {
      document.getElementById("app").innerHTML = (this.view.returnHTML());
    };
  }
exports.NoteController = NoteController;
})(this);
