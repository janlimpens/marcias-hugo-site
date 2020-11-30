$(document).ready(function () {
  // breaks captions after commas
  $("figcaption").each(function (i, elm) {
    elm = $(elm);
    var txt = elm.html();
    elm.empty();
    elm.html(txt.replace(/, /g, ",<br/>"));
  });
  // removes empty paragraphs
  $("p")
    .filter(function () {
      return $.trim(this.innerHTML) == "";
    })
    .remove();

  if ($(window).width > 800) {
    //only @home
    if (window.location.pathname == "/") {
      var content = $(".content");
      var img = $(".content figure");
      var para = $(".content p:first");
      content.prepend("<div/>");
      var flex = $(".content div:first");
      flex.css("display", "flex");
      flex.css("align-items", "flex-end");
      img.css("margin-right", "1em");
      para.css("margin-bottom", "0");
      flex.append(img);
      flex.append(para);
    }
  }
});
