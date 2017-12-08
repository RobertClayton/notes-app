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

    NoteController.prototype.hashChangeListener = function() {
      noteListModel = this.noteListModel;
      showNote(getNoteFromUrl(window.location, noteListModel));

      function getNoteFromUrl(location, noteList) {
        var currentID = location.hash.split("#notes/id")[1];
        return noteList.list[currentID].text;
      }

      function showNote(note) {
        document.getElementById("noteText").innerHTML = note;
      }
    };
  }
exports.NoteController = NoteController;
})(this);
