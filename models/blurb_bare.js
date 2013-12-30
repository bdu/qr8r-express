var Blurb = function(url, title, description, image) {
  this.url = url;  // where blurb links to
  this.title = title;  // headline for blurb
  this.description = description;  // text of blurb
  this.image = image;  // url to image (TK: map of image properties)
};
module.exports = Blurb;
