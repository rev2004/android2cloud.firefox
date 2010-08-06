android2cloud.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ android2cloud.showFirefoxContextMenu(e); }, false);
};

android2cloud.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-android2cloud").hidden = gContextMenu.onImage;
};

window.addEventListener("load", android2cloud.onFirefoxLoad, false);
