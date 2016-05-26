markActivePage = function() {
  $('.navigation .link').filter(function() {
    return $(this).attr('href') === window.location.pathname;
  }).addClass('link--active');
};

$().ready(function() {
	markActivePage();
});