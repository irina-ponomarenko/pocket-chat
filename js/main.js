// Lang switcher
function langSwitcher(){
	var $langSwitcherBlock = $('.main-header-lang-switcher'),
		$langsList = $langSwitcherBlock.find('.lang-list'),
		$langsListItem = $langsList.children('li'),
		$currentLang = $langSwitcherBlock.find('.current-lang');

	// Events
	$langSwitcherBlock.hover(function() {
		$langsList.stop().slideDown('300');
	}, function() {
		$langsList.stop().slideUp('300');
	});

	$langsListItem.click(function(event) {
		var thisLang = $(this).html();

		$currentLang.html(thisLang);
	});
}

$(function() {
	// Init lang switcher
	langSwitcher();

	// Login modal
	$('#login-btn').on('click', function(event) {
		event.preventDefault();
		
		$('.light-overlay, .login-modal').addClass('visible');
	});

	$('.light-overlay').on('click', function(event) {
		event.preventDefault();

		$('.light-overlay, .login-modal').removeClass('visible');
	});
});