var magic = {
	use: function(sparks){
		count = 0;
		var counter = setTimeout(function(){
			count++;
			if(count != sparks){
				console.log('(sparks and crap)');
			}else{
				clearTimeout(counter);
			}
		});
		return '(sparks and crap)';
	}
}
