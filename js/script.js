$(function(){

	var userTemplate = $('#userTemplate').html();
	
	// For JSONP use this URL instead: 'backend/rest.php?callback=?'
	
	$.getJSON('backend/rest.php', function(data){
		var html = '';
		$(data).each(function(){
			html += Mustache.to_html(userTemplate, this);
		});
		$('#users').append(html);
		$('#loading').hide();
	});
});