var a = new Boolean( false );
console.log(a);
if (!a) {
	console.log( "Oops" ); // never runs
}