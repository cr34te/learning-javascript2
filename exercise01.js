
function identity(n) {
	var a = [][];
	for(i=1; i<=n; i++) {
		for(j=1; j<=n; j++) {
			if(j===i) {
				a[i][j] = (1 + "  ");
			}
			else {	
				a[i][j] = (0 + "  ");
			}
		}
	
	}
	return a;
}
