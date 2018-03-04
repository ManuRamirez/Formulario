// fichoro xml que está en el servidor rawgit
var url="https://cdn.rawgit.com/ManuRamirez/Formulario/e62e3ed0/json/preguntas.json";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
  // función personalizada que gestiona la respuesta a la petición de fichero
  gestionarJson(this.responseText); 
 }
};
xhttp.open("GET", url, true); //url del fichero
xhttp.send();

// función personalizada que gestiona la respuesta a la petición de fichero
function gestionarJson(dadesJson){
  var object = JSON.parse(dadesJson);

   
    
/* PREGUNTA 1 TEXTO */    
    
  document.getElementById("p1").innerHTML = object.question[0].title;
  /*document.getElementById("t1").innerHTML = object.question[0].type;*/
  /*document.getElementById("r1").innerHTML = object.question[0].answer;*/

/* PREGUNTA 2 TEXTO */ 

  document.getElementById("p2").innerHTML = object.question[1].title;
  /*document.getElementById("t2").innerHTML = object.question[1].type;*/
  /*document.getElementById("r2").innerHTML = object.question[1].answer;*/
 
 /* PREGUNTA 3 SELECT */    
    
  document.getElementById("p3").innerHTML = object.question[2].title;
  /*document.getElementById("t3").innerHTML = object.question[2].type;
  /*document.getElementById("r3").innerHTML = object.question[2].answer;*/
    /*document.getElementById("f3").innerHTML = object.question[2].option;*/
     var numOpciones=object.question[2].option.length;
	var select = document.getElementsByTagName("select")[0];
	for (var j = 0;j<numOpciones;j++){
		
		 var option = document.createElement("option");
		 option.text =  object.question[2].option[j];
		option.value=j+1;
		select.options.add(option);
	}
    
    
    
   /* PREGUNTA 4 SELECT */  
    
    
    
  document.getElementById("p4").innerHTML = object.question[3].title;
  /*document.getElementById("t4").innerHTML = object.question[3].type;*/
  /*document.getElementById("r4").innerHTML = object.question[3].answer;*/
    /*document.getElementById("f4").innerHTML = object.question[3].option;*/
    
    var numOpciones=object.question[3].option.length;
	var select = document.getElementsByTagName("select")[1];
	for (var j = 0;j<numOpciones;j++){
		
		 var option = document.createElement("option");
		 option.text =  object.question[3].option[j];
		option.value=j+1;
		select.options.add(option);
	}
   
    
    
  /* PREGUNTA 5 MULTIPLE */   

   document.getElementById("p5").innerHTML = object.question[4].title;
   /*document.getElementById("t5").innerHTML = object.question[4].type;*/
  /*document.getElementById("r5").innerHTML = object.question[4].answer;*/
    /*document.getElementById("f5").innerHTML = object.question[4].option;*/
    
    var numOpciones=object.question[4].option.length;
	var select = document.getElementsByTagName("select")[2];
	for (var j = 0;j<numOpciones;j++){
		
		 var option = document.createElement("option");
		 option.text =  object.question[4].option[j];
		option.value=j+1;
		select.options.add(option);
	}
    

 /* PREGUNTA 6 MULTIPLE */    
    
    
    
document.getElementById("p6").innerHTML = object.question[5].title;
  /*document.getElementById("t6").innerHTML = object.question[5].type;*/
  /*document.getElementById("r6").innerHTML = object.question[5].answer;*/
   /* document.getElementById("f6").innerHTML = object.question[5].option;*/
    
     var numOpciones=object.question[5].option.length;
	var select = document.getElementsByTagName("select")[3];
	for (var j = 0;j<numOpciones;j++){
		
		 var option = document.createElement("option");
		 option.text =  object.question[5].option[j];
		option.value=j+1;
		select.options.add(option);
	}
    
    
   /* PREGUNTA 7 CHECKBOX */  

	document.getElementById("p7").innerHTML = object.question[6].title;
	/*document.getElementById("t7").innerHTML = object.question[2].type;*/
	/*document.getElementById("r7").innerHTML = object.question[6].answer;*/
	
	
	var numOpciones=object.question[6].option.length;
	var cajacontenedor = document.getElementsByClassName ("checkbox")[0];
	for (var j = 0;j<numOpciones;j++){
		var input = document.createElement("input");
		var label =document.createElement("label");
		label.innerHTML = object.question[6].option[j];
		label.setAttribute("for","r7"+j);
		input.type ="checkbox";
		input.name="respuesta7";
		input.id="r7"+j;
		cajacontenedor.appendChild(input);
		cajacontenedor.appendChild(label);
		 cajacontenedor.appendChild(document.createElement("br"));
	}

    
    
    
    
    
    
    
  /* PREGUNTA 8 CHECKBOX */   
    
    
	/*pregunta 8 checkbox*/
	document.getElementById("p8").innerHTML = object.question[7].title;
	/*document.getElementById("t8").innerHTML = object.question[2].type;*/
	/*document.getElementById("r8").innerHTML = object.question[7].answer;*/
	
	
	
	var numOpciones=object.question[7].option.length;
	var cajacontenedor1 = document.getElementsByClassName("checkbox")[1];
	for (var j = 0;j<numOpciones;j++){
		var input = document.createElement("input");
		var label =document.createElement("label");
		label.innerHTML = object.question[7].option[j];
		label.setAttribute("for","r8."+j);
		input.type ="checkbox";
		input.name="respuesta8";
		input.id="r8."+j;
		cajacontenedor1.appendChild(input);
		cajacontenedor1.appendChild(label);
		 cajacontenedor1.appendChild(document.createElement("br"));
	}
    
    
    
    
    
    
    
   /* PREGUNTA 9 RADIO */  
    
    
document.getElementById("p9").innerHTML = object.question[8].title;    
    

var rad =
document.getElementsByClassName("radio")[0];

var nopt=object.question[8].option.length;

for(var
i=0;i<nopt;i++){

var opt=document.createElement("input");

var label =document.createElement("label");

label.innerHTML =
object.question[8].option[i];

opt.setAttribute("type","radio");

opt.setAttribute("name","sdfsdf");

opt.value=i+1;

opt.text=object.question[2].option[i];

rad.appendChild(opt);

rad.appendChild(label);

}
    
 
  
    
    /* PREGUNTA 10 RADIO */ 

document.getElementById("p10").innerHTML = object.question[9].title;
 /* document.getElementById("t10").innerHTML = object.question[9].type;*/
  /* document.getElementById("r10").innerHTML = object.question[9].answer;*/
   /*  document.getElementById("f10").innerHTML = object.question[9].option;*/
    
    
   var rad =
document.getElementsByClassName("radio")[1];

var nopt=object.question[9].option.length;

for(var
i=0;i<nopt;i++){

var opt=document.createElement("input");

var label =document.createElement("label");

label.innerHTML =
object.question[9].option[i];

opt.setAttribute("type","radio");

opt.setAttribute("name","sdfsdf");

opt.value=i+1;

opt.text=object.question[2].option[i];

rad.appendChild(opt);

rad.appendChild(label);

} 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


}
