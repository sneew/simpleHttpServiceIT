//ajax + json
$(function(){
	var $insert = $('#insert');
	var $name = $('#n1');
	var $role = $('#r1');
	var $baseUrl = "http://localhost:8080";
	var $roleSearch = $('#role-search');
	var $insertRole = $('#insert-role')
	
	$.ajax({
		type: 'GET',
		url:'/employees',
		success: function(employees){
			/* let ul = document.createElement('ul');
            for(let e in employees) // array's lector
            {
                let li = document.createElement('li');
 
                ul.appendChild(li);
                li.appendChild += employees;
 
                document.getElementById("showEmployeesList").appendChild(ul);
 
                li.innerHTML = "ID: " + employees[e].id + ", Name: " + employees[e].name + ", Role: " + employees[e].role + ", Salary:  "+ employees[e].salary + " gold.";
            }*/
			$.each(employees, function(i, employee){
				$insert.append(
						"<li id='" + employee.id + "'>" +
							"<p><strong>" + employee.name + "</strong> <input type='text' id='editName" + employee.id + "'/></p>" + 
							"<p><strong>Role: </strong> " + employee.role + 
								" <select type='text' id='editRole" + employee.id + "'>" +
									"<option>BOSS</option>" +
									"<option>MANAGER</option>" +
									"<option>EMPLOYEE</option>" +
									"<option>VOLUNTEER</option>" +
								"</select>" +
							"</p>" +
							"<button id='" + employee.id + "' class='remove'>Delete</button>" +
							"<button id='" + employee.id + "' class='save'>Save</button>" +
						"</li>");
				console.log('success',employee)
			});
		},
		error: function(){
			alert('error loading');
		}
	});
	$('#add-item').on('click', function() {
		var employee = {
			name: $name.val(),
			role: $role.val(),
		};
		
		$.ajax({
			type: 'POST',
			url:'/employees',
			contentType: "application/json",
			data: JSON.stringify(employee),
			success: function(newEmployee){
				$insert.append(
						"<li id='" + newEmployee.id + "'>" +
							"<p><strong>" + newEmployee.name + "</strong><input type='text' id='editName" + newEmployee.id + "'/></p>" +
							"<p><strong>Role: </strong>" + newEmployee.role + 
								"<select type='text' id='editRole" + newEmployee.id + "'>" +
									"<option>BOSS</option>" +
									"<option>MANAGER</option>" +
									"<option>EMPLOYEE</option>" +
									"<option>VOLUNTEER</option>" +
								"</select>" +
							"</p>" +
							"<button id='" + newEmployee.id + "' class='remove'>Delete</button>" +
							"<button id='" + newEmployee.id + "' class='save'>Save</button>" +
						"</li>");
				console.log('success',newEmployee)
			},
			error: function(){
				alert('error posting new employee');
			}
		});
	});
	$insert.delegate('.remove', 'click', function(){//delegate és per coses que no s'han creat encara, no existeixen i es generen més tard
		var $li = $(this).closest('li');//s'ha d'instanciar aquí amb el this, a dins la funció del succes no aniria
		$.ajax({
			type:'DELETE',
			url: '/employees/' + $(this).attr('id'),
			success: function(){
				$li.fadeOut(200, function(){
					$(this).remove();
				});
				//$li.remove();
			}
		});
	});
	$insert.delegate('.save', 'click', function(){
		var $newName = $('#editName' + $(this).attr('id'));
		var $newRole = $('#editRole' + $(this).attr('id'));
		var employee = {
				name: $newName.val(),
				role: $newRole.val(),
		};
		
		$.ajax({
			type: 'PUT',
			url:'/employees/' + $(this).attr('id'),
			contentType: "application/json",
			data: JSON.stringify(employee),
			success: function(editEmployee){
				window.location.href=$baseUrl;
				console.log('success',editEmployee)
			},
			error: function(){
				alert('error updating employee');
			}
		});
		
	});
	
	
	$('#role-search').on('change', function(){
		var $role = $roleSearch.val();
		$.ajax({
			type: 'GET',
			url:'/employees/search/' + $role,
			success: function(employeesByRole){
				$.each(employeesByRole, function(i, employee){
					$insertRole.append(
							"<li id='" + employee.id + "'>" +
								"<p><strong>" + employee.name + "</strong></p>" + 
								"<p><strong>Role: </strong> " + employee.role + "</p>" +
								"<button id='" + employee.id + "' class='remove'>Delete</button>"+
							"</li>");
					console.log('success',employee)
				});
			},
		});
	});
		
	
});/*
//ajax + js GET
function getMethod(){
	$.ajax({
		type: 'GET',
		url:'/employees',
		success: function(employee){
			for (var i = 0; i<employee.length; i++){
				var insert = document.getElementById("insert");
				var nLine = document.createElement("li"); 
				nLine.textContent= employee[i].name + ": " + employee[i].role;
				nLine.innerHTML += "<button id='" + employee[i].id + "' class='remove'>X</button>";
				insert.appendChild(nLine);
			}
			console.log(employee);
		},
		error: function(){
			alert('error loading');
		}
	});
}
//POST
function addEmployee(){
	var baseUrl = "http://localhost:8080";
	var insertar = document.getElementById("insert");
	var name = document.getElementById("n1").value;//el nom declarat ha de ser el mateix que tingui el bean a la base de dades
	var role = document.getElementById("r1").value;//en aquest cas, role és igual que el que hi ha la base de dades
	var data = {name, role};

	$.ajax({
		type: "POST",
		url: baseUrl + "/employees",
		contentType: "application/json",
		data: JSON.stringify(data), //employee que hem instanciat amb name i role
		success: function(response){
			window.location.href=baseUrl;
			console.log(response);
		},
		error: function(error){
			alert(error);
		},
	});
}
//DELETE
function remove(){
	
}
*/


