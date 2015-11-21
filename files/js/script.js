$(document).on('ready',function() {
	
	var data = {
		
		access_token  : 'IgABM3uzw4Wze-3z_xAt8U8V1pzeUZOQcMQ1oko_TonNSad1fth',
		Co            : 'rakuten',
		Clcd          : 'hack',
		year          : '2015',
		month         : '10',
		day           : '24',
		keibajou_code : '1'
		
	};
	
	$.ajax({
		
		type     : 'POST',
		dataType : 'jsonp',
		url      : 'https://app.rakuten.co.jp/engine/api/FavoriteBookmark/List/20130909',
		data     : data,
		success  : onSuccess,
		error    : onError
		
	});
	
	function onSuccess(data) {
		
		_.test(data);
		
	}
	
	function onError(data) {
		
		_.test(data);
		
	}
	
	return false;
	
	$.ajax({

		type : 'POST',
		url  : 'files/php/connectDB.php',
		data : { query:'SELECT * from items' }

	}).done(function(data) {
		
		var data   = JSON.parse(data);
		var html   = '<ul>';
		var length = data.length;
		
		for (var i = 0; i < length; i++) {
			
			var info = data[i];
			_.test(info);
			
			html += '<li data-id="' + info.id + '">';
			
			for (p in info) {
				
				var content = info[p];
				if (p === 'image') content = '<img src="' + content + '">';
				
				html += '<p class="' + p + '">' + content + '</p>';
				
			}
			
			html += '</li>';
			
		}
		
		$('#all').html(html + '</ul>');
		
		return false;
		
	});
	
	return false;
	
});