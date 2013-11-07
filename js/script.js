$(document).ready(function(e) {
    $("#click-btn").click(function(e){
		var txt1=$("#text1").val().length;
		var txt2=$("#text2").val().length;
		var ans="";
		
		if( txt1 == 0 ) {
			ans="Please Enter Your Name .."	
		}
		else if( txt2 == 0 ) {
			ans="Please Enter Friend Name .."	
		}
		else {
			ans=Math.abs( 99 - Math.abs(txt1-txt2)*8 );
			ans=ans>100?ans%95:ans;
			ans="You Have "+ans+"% of Friendship";
		}
		$("#ans").html(ans);
		e.preventDefault();
	});
});