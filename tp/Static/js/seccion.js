


// var elementos = document.getElementsByClassName({class})
var pageurl = window.location.hash

var final = "";

switch(pageurl){
	case "#sgs22":
       /* 
        var sgs22 = document.getElementById('sgs22'); // show
        
        sgs22.style.display = "contents"; 
        sgs22.style.overflow = "hidden"; */
        
        document.getElementById('sgs22').style.display = "contents";
	    document.getElementById('sgs22').style.overflow = "hidden";
		break;
	case "#sga13":
		document.getElementById('sga13').style.display = "contents";
	    document.getElementById('sga13').style.overflow = "hidden";
        break;
	case "#sga33":
		document.getElementById('sga33').style.display = "contents";
	    document.getElementById('sga33').style.overflow = "hidden";
        break;
					
	case "#sga23":
		document.getElementById('sga23').style.display = "contents";
	    document.getElementById('sga23').style.overflow = "hidden";
        break;	
	case "#sgs20":
		document.getElementById('sgs20').style.display = "contents";
	    document.getElementById('sgs20').style.overflow = "hidden";
        break;	
	case "#me32":
		document.getElementById('me32').style.display = "contents";
	    document.getElementById('me32').style.overflow = "hidden";
        break;			
	case "#me13":
		document.getElementById('me13').style.display = "contents";
	    document.getElementById('me13').style.overflow = "hidden";
        break;
	case "#mg9":
		document.getElementById('mg9').style.display = "contents";
	    document.getElementById('mg9').style.overflow = "hidden";
        break;
	case "#mg32":
		document.getElementById('mg32').style.display = "contents";
		document.getElementById('mg32').style.overflow = "hidden";
		break;
	case "#mg42":
		document.getElementById('mg42').style.display = "contents";
	    document.getElementById('mg42').style.overflow = "hidden";
        break;
	case "#me22":
		document.getElementById('me22').style.display = "contents";
		document.getElementById('me22').style.overflow = "hidden";
		break;
	default:
		final = "error";					
}
