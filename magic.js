var numSparks;
var magic = {
	use: function(sparks){
		count = 0;
		numSparks = sparks;
		var counter = setTimeout(function(){
			count++;
			if(count != numSparks){
				console.log('(sparks and crap)');
			}else{
				clearTimeout(counter);
			}
		}, 50);
		return '(sparks and crap)';
	}
}
