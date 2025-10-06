tablesWrap();
iframesAndVideosWrap();

// TABLE (wysiwyg editor) responsive
function tablesWrap() {
  var contentTables = document.querySelectorAll(".o-content table"),
    i;

  for (i = 0; i < contentTables.length; ++i) {
    contentTables[i].classList.add("table");

    var contentTableWrap = document.createElement("div");
    contentTableWrap.classList.add("table-responsive");

    contentTables[i].parentNode.insertBefore(
      contentTableWrap,
      contentTables[i]
    );

    contentTableWrap.appendChild(contentTables[i]);
  }
}

// IFRAME & VIDEO responsive
function iframesAndVideosWrap() {
  var elements = document.querySelectorAll(
      ".o-content iframe, .o-content video"
    ),
    i;

  for (i = 0; i < elements.length; ++i) {
    elements[i].removeAttribute("height");
    elements[i].removeAttribute("width");

    var wrap = document.createElement("div");
    wrap.classList.add("ratio");
    wrap.classList.add("ratio-16x9");

    elements[i].parentNode.insertBefore(wrap, elements[i]);
    wrap.appendChild(elements[i]);
  }
}
