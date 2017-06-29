$(document).ready(function(){
	var idCounter = 1; //contador para agregar id a cada checkbox, label y su p contenedor
	
	$("#tarea").click(function(){ //click para añadir tareas
		var inputVal = $("#tarea").val();
		$("#to-do").append("<p id='task-" + idCounter + "'><input type='checkbox' id='chk-" + idCounter + "'/><label class='black-text' for='chk-" + idCounter + "'>" + inputVal + "</label>" + "<a class='btn right-align' id='remove-btn-" + idCounter + "'>Remove</a></p>");
		idCounter ++;
	});
	
	$("#remove-btn-" + idCounter).click(function(event){ //click para remover tareas con el botón 'Remove'
		event.preventDefault();
		var parentId = $(this).parent("#task-" + idCounter);
		$(parentId).remove();
	});
	

	$(":checkbox").click(function(event){ //cambiar tareas completadas a sección completed-cont
		event.preventDefault();
		var parentElement = $(this).parent("p");
		$("#completed").append(parentElement);
	});
});

