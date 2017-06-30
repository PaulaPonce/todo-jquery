$(document).ready(function(){

	$("#tarea").on("keyup", function(event){
		event.preventDefault();
		var idCounter = 1; //contador para agregar id a cada checkbox, label y su p contenedor
		if(event.keyCode == 13){
			var inputVal = $("#tarea").val(); //datos del input
			//añadir tareas en sección To Do
			if(inputVal == ""){ //validación input
				alert("Debes agregar una tarea");
			}else{ //añade checkbox, label y button a sección To Do
				$("#to-do").append("<p id='task-" + idCounter + "'><input type='checkbox' id='chk-" + idCounter + "'/><label class='black-text' for='chk-" + idCounter + "'>" + inputVal + "</label>" + "<a class='btn right-align remove-btn' id='remove-btn-" + idCounter + "'><i class='fa fa-trash' aria-hidden='true'></i></a></p>");
				$("#tarea").val(""); //limpia input
				idCounter ++; //aumenta el contador de Id
			}
		}
		//click para remover tareas con el botón 'Remove'
		$(".remove-btn").click(function(){ 
			var parentElement = $(this).parent("p");
			$(parentElement).remove();
		});
		//cambiar tareas completadas a sección Completed
		$(":checkbox").click(function(){ 
			var parentElement = $(this).parent("p");
			$("#completed").append(parentElement);
		});
	});
});

