let yar=10;
	num = yar % 100;
	if (num >= 5 && num <= 20) {
		txt = 'лет';
	} else {
		num = num % 10;
		if (num == 1) {
			txt = 'год';
		} else if (num >= 2 && num <= 4) {
			txt = 'года';
		} else {
			txt = 'лет';
		}
	}
	console.log(yar+" "+txt);