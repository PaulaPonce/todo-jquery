$(document).ready(function(){
	var idCounter = 1; //contador para agregar id a cada checkbox, label y su p contenedor
	$("#tarea").click(function(){ //click para añadir tareas
		var inputVal = $("#tarea").val();
		$("#to-do").append("<p id='task-" + idCounter + "'><input type='checkbox' id='chk-" + idCounter + "'/><label class='black-text' for='chk-" + idCounter + "'>" + inputVal + "</label>" + "<a class='btn right-align' id='remove-btn-" + idCounter + "'>Remove</a></p>");
		idCounter ++;
	});
	/*
	$("button[id~='remove-btn']").click(function(){ //click para remover tareas
		$(":checkbox").parent().remove();
	});
	*/
});
