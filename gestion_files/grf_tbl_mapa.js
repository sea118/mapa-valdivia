var dLanco=[];
var dLagoRanco=[];
var dLaUnion=[];
var dCorral=[];
var dPaillaco=[];
var dRioBueno=[];
var dFutrono=[];
var dLosLagos=[];
var dMafil=[];
var dMariquina=[];
var dPanguipulli=[];
var dValdivia=[{
  "CANT_ATENCIONES":57,
  "ID_COMUNA":"VALDIVIA",
  "ID_SUBESPEC":226,
  "SUBESPECIALIDAD":"MEDICINA GENERAL",
  "DETALLES":[{
  "COMUNA": "VALDIVIA",
  "DIAGNOSTICO": "DOLOR ABDOMINAL",
  "ID_CIE10": 50,
  "ID_SUB": 226}]}];

var idComunas=['CO','FU','LU','LR','LA','LL','MA','MAR','PA','PAN','RB','VA'];

$(document).ready(function(){


			// for(var j=0; j<dValdivia.length;j++){
			// 	if(dValdivia[j].DESC_COMUNA=='VALDIVIA'){
	    //       datosValdivia.push(dValdivia[j]);
      //     var cons=dDetalles.pop();
      //     var id=cons[0].ID_SUB;
      //     for(var k=0;k<datosValdivia.length;k++){
      //       if(datosValdivia[k].ID_SUBESPEC==id){
      //         datosValdivia[k].DETALLES=cons;
              
      //       }
      //     }

			// 	}
     // }	
	$("path").mousemove(function(e) {
  		$('#info-box2').css('display','block');
  		$('#info-box2').html($(this).data('title'));
  		$('#info-box2').css('top',e.pageY-$('#info-box2').height()-50);
 		$('#info-box2').css('left',e.pageX-($('#info-box2').width()))
	}).mouseover();
	$("path").mouseleave(function(e) {
		$('#info-box2').css('display','none');
	});
	$("path").click(function(e) {
  		$('#info-box2').css('display','none');
 	});
});

target=0;
comunaActiv=[];
function info(id){
	for(i=0;i<idComunas.length;i++){
		if(idComunas[i]==id){
			if(target<1){
			document.getElementById(idComunas[i]).setAttribute('class','active');
			abrirInfo(idComunas[i]);
			target++;
			comunaActiv=id;
		}
			else{
				if(comunaActiv!=id){
					CerrarInfo(comunaActiv);
					comunaActiv=id;
					abrirInfo(id);
				}
				else{
				comunaActiv='';
				CerrarInfo(id);
				document.getElementById(id).removeAttribute('class');
				target--;}
			}
		}
	}
}
function abrirInfo(id){
	for(i=0; i<idComunas.length;i++){
		if(idComunas[i]!=id){
			document.getElementById(idComunas[i]).style.fill='#1c1a1a';
		}
		else{
			if(id=='CO'){
				document.getElementById(id).style.fill='#a30507';
				CreaTabla(dCorral);
			}
			else if(id=='FU'){
				document.getElementById(id).style.fill='#915d1e';
				CreaTabla(dFutrono);
			}
			else if(id=='LU'){
				document.getElementById(id).style.fill='#06800cf2';
				CreaTabla(dLaUnion);
			}
			else if(id=='LR'){
				document.getElementById(id).style.fill='#440b98';
				CreaTabla(dLagoRanco);
			}
			else if(id=='LA'){
				document.getElementById(id).style.fill='#084d24';
				CreaTabla(dLanco);
			}
			else if(id=='LL'){
				document.getElementById(id).style.fill='#11829b';
				CreaTabla(dLosLagos);
			}
			else if(id=='MA'){
				document.getElementById(id).style.fill='#940873';
				CreaTabla(dMafil);
			}
			else if(id=='MAR'){
				document.getElementById(id).style.fill='#8e064e';
				CreaTabla(dMariquina);
			}
			else if(id=='PA'){
				document.getElementById(id).style.fill='#b52905';
				CreaTabla(dPaillaco);
			}
			else if(id=='PAN'){
				document.getElementById(id).style.fill='#94196c';
				CreaTabla(dPanguipulli);
			}
			else if(id=='RB'){
				document.getElementById(id).style.fill='#a9022b';
				CreaTabla(dRioBueno);
			}
			else if(id=='VA'){
				document.getElementById(id).style.fill='#00694e';
        		CreaTabla(dValdivia);
			}
		}
	}
}
function CerrarInfo(id){
	//console.log('funcion cerrar2, se cerrara '+id);
	//document.getElementById('tabla').remove();
	var element=document.getElementById('divtabla');
	while(element.firstChild){
		element.removeChild(element.firstChild);
	}
	document.getElementById(id).setAttribute('style','fill: #1c1a1a!important');

}
function AbrirDetalles(id){
	var icon=document.getElementById('icon'+id);
	if(icon.getAttribute('class')=='fa fa-plus'){
		icon.setAttribute('class','fa fa-minus text-danger');
		document.getElementById("jsmartable-row-"+id).setAttribute('style','display:');
	}
	else{
		icon.setAttribute('class','fa fa-plus')
		document.getElementById("jsmartable-row-"+id).setAttribute('style','display:none');
	}
}
function CreaTabla(array){
  console.log(array);
	if(array[0]!=null){
			$('#divtabla').append("<table class='table' id='tabla'><thead><th># Aten.</th><th>Especialidad</th></thead><tbody id='items'></tbody></table>");
			console.log(array.length);
			for(j=0; j<array.length;j++){
    			$('#items').append("<tr id='idtr"+j+"'><td><a class='mx-auto' data-opened='true' id='detalles'onclick='AbrirDetalles("+j+")'><i id='icon"+j+"' class='fa fa-plus'></i></a>"+array[j].CANT_ATENCIONES+"</td><td>"+array[j].SUBESPECIALIDAD+"</td></tr><tr id='jsmartable-row-"+j+"' class='jsmartable-row' style='display: none'><td colspan='100%' class='jsmartable-col'><table class='jsmartable-subtable table table-bordered' style='box-shadow: 1px 6px 8px 3px #00000052;'><tbody id=bodySub"+j+"></tbody></table></td></tr>");
   				console.log(array[j].DETALLES.length);
   				for(var k=0; k<array[j].DETALLES.length; k++){
   	  				$("#bodySub"+j+"").append("<tr class='jsmartable-subrow'><td class='jsmartable-subcol' id='number' style='background:#eee;'>"+array[j].DETALLES[k].ID_CIE10+"</td><td class='jsmartable-subcol'>"+array[j].DETALLES[k].DIAGNOSTICO+"</td></tr>");
   				}
    		}	
	}
	else{
		$('#divtabla').append('<div class="text-left" >Sin datos</div>');
	}
}