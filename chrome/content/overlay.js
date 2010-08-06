var android2cloud = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("android2cloud-strings");
	
	this.interval = 5000;
	var event = { notify: function(timer) { alert("Fire!"); } };
	this.timer = Components.classes["@mozilla.org/timer;1"].createInstance(Components.interfaces.nsITimer);
	this.timer.initWithCallback( event, this.interval, Components.interfaces.nsITimer.TYPE_REPEATING_SLACK );
  },
  
  onMenuItemCommand: function(e) {
    var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                                  .getService(Components.interfaces.nsIPromptService);
    promptService.alert(window, this.strings.getString("helloMessageTitle"),
                                this.strings.getString("helloMessage"));
  },

  onToolbarButtonCommand: function(e) {
    // just reuse the function above.  you can change this, obviously!
    android2cloud.onMenuItemCommand(e);
  }
};

window.addEventListener("load", android2cloud.onLoad, false);
