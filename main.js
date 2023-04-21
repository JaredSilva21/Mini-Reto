function loadVideo() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
      document.getElementById("video").innerHTML =
      this.responseText;
  }
  xhttp.open("GET", "media/youtube.txt");
  xhttp.send();
}

$(document).ready(function(){
	$('.jqRedirectWeb1').click(function(){
    	$(location).attr("href","https://vandal.elespanol.com/guias/guia-league-of-legends-trucos-consejos-y-secretos/personajes-campeones#malphite"); 
    });
});

$(document).ready(function(){
	$('.jqRedirectWeb2').click(function(){
    	$(location).attr("href","https://vandal.elespanol.com/guias/guia-league-of-legends-trucos-consejos-y-secretos/personajes-campeones#blitzcrank"); 
    });
});