$(document).ready(function(){

	$("#tarea").on("keyup", function(event){
		event.preventDefault();
		var idCounter = 1; //contador para agregar id a cada checkbox, label y su p contenedor
		if(event.keyCode == 13){
			var inputVal = $("#tarea").val(); //datos del input
			
			if(inputVal == ""){ //validación input
				alert("Debes agregar una tarea");
			}else{ //añade checkbox, label y button a sección To Do
				$("#to-do").append("<p id='task-" + idCounter + "'><input type='checkbox' id='chk-" + idCounter + "'/><label class='black-text' for='chk-" + idCounter + "'>" + inputVal + "</label>" + "<a class='btn right-align remove-btn' id='remove-btn-" + idCounter + "'>Remove</a></p>");
				$("#tarea").val(""); //limpia input
				idCounter ++; //aumenta el contador de Id
			}
		}
		$(".remove-btn").click(function(){ //click para remover tareas con el botón 'Remove'
		var parentElement = $(this).parent("p");
		$(parentElement).remove();
		});
	});
	
});

