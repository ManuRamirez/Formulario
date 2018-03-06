var formElement=null;var nota=0;var palabraSecreta=null;var palabraSecreta1=null;var respuestaSelect=null;var respuestaSelect1=null;var respuestasCheckbox=[];var respuestasMultiple=[];var respuestasCheckbox1=[];var respuestasMultiple1=[];var respuestaRadio=null;var respuestaRadio1=null;window.onload=function(){formElement=document.getElementById('myform');formElement.onsubmit=function(){inicializar()
corregirinput();corregirinput1();corregirSelect();corregirSelect1();corregirMultiple();corregirMultiple1();corregirCheckbox();corregirCheckbox1();corregirRadio();corregirRadio1();presentarNota();return!1}
var url="https://cdn.rawgit.com/ManuRamirez/Formulario/6fea62c3/json/preguntas.json";var xhttp=new XMLHttpRequest();xhttp.onreadystatechange=function(){if(this.readyState==4&&this.status==200){gestionarJson(this.responseText)}};xhttp.open("GET",url,!0);xhttp.send();function gestionarJson(dadesJson){var object=JSON.parse(dadesJson);var numPreguntas=object.question.length;document.getElementById("p1").innerHTML=object.question[0].title;palabraSecreta=object.question[0].answer;document.getElementById("p2").innerHTML=object.question[1].title;palabraSecreta1=object.question[1].answer;document.getElementById("p3").innerHTML=object.question[2].title;respuestaSelect=object.question[2].answer;var numOpciones=object.question[2].option.length;var select=document.getElementsByTagName("select")[0];for(var j=0;j<numOpciones;j++){var option=document.createElement("option");option.text=object.question[2].option[j];option.value=j+1;select.options.add(option)}
document.getElementById("p4").innerHTML=object.question[3].title;respuestaSelect1=object.question[3].answer;var numOpciones=object.question[3].option.length;var select=document.getElementsByTagName("select")[1];for(var j=0;j<numOpciones;j++){var option=document.createElement("option");option.text=object.question[3].option[j];option.value=j+1;select.options.add(option)}
document.getElementById("p5").innerHTML=object.question[4].title;var nres=object.question[4].answer.length;for(i=0;i<nres;i++){respuestasMultiple[i]=object.question[4].answer[i]}
var numOpciones=object.question[4].option.length;var select=document.getElementsByTagName("select")[2];for(var j=0;j<numOpciones;j++){var option=document.createElement("option");option.text=object.question[4].option[j];option.value=j+1;select.options.add(option)}
document.getElementById("p6").innerHTML=object.question[5].title;var nres=object.question[5].answer.length;for(i=0;i<nres;i++){respuestasMultiple1[i]=object.question[5].answer[i]}
var numOpciones=object.question[5].option.length;var select=document.getElementsByTagName("select")[3];for(var j=0;j<numOpciones;j++){var option=document.createElement("option");option.text=object.question[5].option[j];option.value=j+1;select.options.add(option)}
document.getElementById("p7").innerHTML=object.question[6].title;var nres=object.question[6].answer.length;for(i=0;i<nres;i++){respuestasCheckbox[i]=object.question[6].answer[i]}
var numOpciones=object.question[6].option.length;var cajacontenedor=document.getElementsByClassName("checkbox")[0];for(var j=0;j<numOpciones;j++){var input=document.createElement("input");var label=document.createElement("label");label.innerHTML=object.question[6].option[j];label.setAttribute("for","r7"+j);input.type="checkbox";input.name="respuesta7";input.id="r7"+j;cajacontenedor.appendChild(input);cajacontenedor.appendChild(label);cajacontenedor.appendChild(document.createElement("br"))}
document.getElementById("p8").innerHTML=object.question[7].title;var nres1=object.question[7].answer.length;for(i=0;i<nres1;i++){respuestasCheckbox1[i]=object.question[7].answer[i]}
var numOpciones=object.question[7].option.length;var cajacontenedor1=document.getElementsByClassName("checkbox")[1];for(var j=0;j<numOpciones;j++){var input=document.createElement("input");var label=document.createElement("label");label.innerHTML=object.question[7].option[j];label.setAttribute("for","r8."+j);input.type="checkbox";input.name="respuesta8";input.id="r8."+j;cajacontenedor1.appendChild(input);cajacontenedor1.appendChild(label);cajacontenedor1.appendChild(document.createElement("br"))}
document.getElementById("p9").innerHTML=object.question[8].title;respuestaRadio=parseInt(object.question[8].answer);var rad=document.getElementsByClassName("radio")[0];var nopt=object.question[8].option.length;for(var
i=0;i<nopt;i++){var opt=document.createElement("input");var label=document.createElement("label");label.innerHTML=object.question[8].option[i];opt.setAttribute("type","radio");opt.setAttribute("name","sdfsdf");opt.value=i+1;opt.text=object.question[2].option[i];rad.appendChild(opt);rad.appendChild(label)}
document.getElementById("p10").innerHTML=object.question[9].title;respuestaRadio1=parseInt(object.question[9].answer);var rad=document.getElementsByClassName("radio")[1];var nopt=object.question[9].option.length;for(var
i=0;i<nopt;i++){var opt=document.createElement("input");var label=document.createElement("label");label.innerHTML=object.question[9].option[i];opt.setAttribute("type","radio");opt.setAttribute("name","sdfsdf");opt.value=i+1;opt.text=object.question[2].option[i];rad.appendChild(opt);rad.appendChild(label)}}}
function corregirinput(){var s=formElement.elements[0].value;if(s==palabraSecreta){darRespuestaHtml("P1: Correcto");nota+=1}
else{darRespuestaHtml("P1: Incorrecto")}}
function corregirinput1(){var s=formElement.elements[1].value;if(s==palabraSecreta1){darRespuestaHtml("P2: Correcto");nota+=1}
else{darRespuestaHtml("P2: Incorrecto")}}
function corregirSelect(){var sel=formElement.elements[2];if(sel.selectedIndex-1==respuestaSelect){darRespuestaHtml("P3: Correcto");nota+=1}
else{darRespuestaHtml("P3: Incorrecto")}}
function corregirSelect1(){var sel=formElement.elements[3];if(sel.selectedIndex-1==respuestaSelect1){darRespuestaHtml("P4: Correcto");nota+=1}
else{darRespuestaHtml("P4: Incorrecto")}}
function corregirMultiple(){var sel=formElement.elements[4];var selected=[];var n=0;var correcto=0;for(i=0;i<sel.length;i++){if(sel[i].selected){selected[n]=sel[i].value;n+=1}}
for(i=0;i<respuestasMultiple.length;i++){if(selected[i]-1==respuestasMultiple[i]){correcto+=1}}
if(correcto==respuestasMultiple.length){darRespuestaHtml("P5: Correcto")
nota+=1}
else{darRespuestaHtml("P5: Incorrecto")}}
function corregirMultiple1(){var sel=formElement.elements[5];var selected=[];var n=0;var correcto=0;for(i=0;i<sel.length;i++){if(sel[i].selected){selected[n]=sel[i].value;n+=1}}
for(i=0;i<respuestasMultiple1.length;i++){if(selected[i]-1==respuestasMultiple1[i]){correcto+=1}}
if(correcto==respuestasMultiple1.length){darRespuestaHtml("P6: Correcto")
nota+=1}
else{darRespuestaHtml("P6: Incorrecto")}}
function corregirCheckbox(){var f=formElement;var escorrecta=[];for(i=0;i<f.color.length;i++){if(f.color[i].checked){escorrecta[i]=!1;for(j=0;j<respuestasCheckbox.length;j++){if(i==respuestasCheckbox[j]){escorrecta[i]=!0}}
if(escorrecta[i]){nota+=1/respuestasCheckbox.length;darRespuestaHtml("P7: "+i+" correcta")}
else{nota-=1/respuestasCheckbox.length;darRespuestaHtml("P7: "+i+" incorrecta")}}}}
function corregirCheckbox1(){var f=formElement;var escorrecta=[];for(i=0;i<f.color1.length;i++){if(f.color1[i].checked){escorrecta[i]=!1;for(j=0;j<respuestasCheckbox1.length;j++){if(i==respuestasCheckbox1[j]){escorrecta[i]=!0}}
if(escorrecta[i]){nota+=1/respuestasCheckbox1.length;darRespuestaHtml("P8: "+i+" correcta")}
else{nota-=1/respuestasCheckbox1.length;darRespuestaHtml("P8: "+i+" incorrecta")}}}}
function darRespuestaHtml(r){var p=document.createElement("p");var node=document.createTextNode(r);p.appendChild(node);document.getElementById('resultadosDiv').appendChild(p)}
function presentarNota(){document.getElementById('resultadosDiv').style.display="block"
darRespuestaHtml("Nota: "+nota+" puntos sobre 10")}
function inicializar(){document.getElementById('resultadosDiv').innerHTML="";nota=0.0}
