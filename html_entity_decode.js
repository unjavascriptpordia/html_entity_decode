var unJsPorDia=(function(window,undefined){
	function html_entity_decode(string_encode){
  	pattern=/(&#)(\d+)(;)/g;
    return string_encode.replace(
    	pattern,
      function(
      	match,
        p1,
        p2,
        p3,
        offset,
        string
      ){
      	return String.fromCharCode(p2);
       }
    );
  }
  return {
  	"html_entity_decode":html_entity_decode
  }
})(window);
window.addEventListener("load",function(){
	var htmlentities=document.getElementById("html_entity_decode");
	html_entity_decode.addEventListener("click",function(){
  	var data=document.getElementById("data").value;
    var resultDecode=unJsPorDia.html_entity_decode(data);
		document.getElementById("resultDecode").value=resultDecode;
  });
});
