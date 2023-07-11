// var elementos = document.getElementsByClassName({class})

function cambiodehash(){

var pageurl = window.location.hash
    
// var idcelus = 

if (pageurl == ('#celumoto') ){
    
    document.getElementById('me32').style.display = "contents";
    document.getElementById('me32').style.overflow = "hidden";

    document.getElementById('me13').style.display = "contents";
    document.getElementById('me13').style.overflow = "hidden";

    document.getElementById('mg9').style.display = "contents";
    document.getElementById('mg9').style.overflow = "hidden";

    document.getElementById('mg32').style.display = "contents";
    document.getElementById('mg32').style.overflow = "hidden";
    
    document.getElementById('mg42').style.display = "contents";
    document.getElementById('mg42').style.overflow = "hidden";

    document.getElementById('me22').style.display = "contents";
    document.getElementById('me22').style.overflow = "hidden";


    
    document.getElementById('sgs22').style.display = "none";
	   

		document.getElementById('sga13').style.display = "none";
	    
	
		document.getElementById('sga33').style.display = "none";
	    
  
					
	
		document.getElementById('sga23').style.display = "none";
	    
  
		document.getElementById('sgs20').style.display = "none";
	   
       

}else if
 (pageurl == ('#celusg')){
        document.getElementById('sgs22').style.display = "contents";
	    document.getElementById('sgs22').style.overflow = "hidden";

		document.getElementById('sga13').style.display = "contents";
	    document.getElementById('sga13').style.overflow = "hidden";
   
	
		document.getElementById('sga33').style.display = "contents";
	    document.getElementById('sga33').style.overflow = "hidden";
       
        document.getElementById('sgs20').style.display = "contents";
	    document.getElementById('sgs20').style.overflow = "hidden";
	
        document.getElementById('sga23').style.display = "contents";
	    document.getElementById('sga23').style.overflow = "hidden";

        document.getElementById('me32').style.display = "none";
   

        document.getElementById('me13').style.display = "none";
       

        document.getElementById('mg9').style.display = "none";
       

        document.getElementById('mg32').style.display = "none";
       
        document.getElementById('mg42').style.display = "none";

        document.getElementById('me22').style.display = "none";

};
};

window.addEventListener("hashchange", cambiodehash);

cambiodehash();