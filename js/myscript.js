var stdRollNumber = document.getElementById("stdRollNumber");
var stdName = document.getElementById("stdName");
var stdSemester = document.getElementById("stdSemester");
var tbody = document.getElementsByTagName("tbody")[0];
var button = document.getElementsByTagName("button")[0];

var students = [];

function createRowDataInTable(){
	tbody.innerHTML = "";

	for(let i =0; i<students.length; i++){

		let student = students[i];

	//row

	let row = document.createElement("tr");

	//td
	let sNtD = document.createElement("td");
	let tDRollNumber = document.createElement("td");
	let tdStdName = document.createElement("td");
	let tdStdSemester = document.createElement("td");
	let tdAction = document.createElement("td");
	let tdEdit = document.createElement("td");

	//delete button
	let deleteButton = document.createElement("button");
	deleteButton.innerHTML = "Delete";

	deleteButton.addEventListener("click", (e) =>{
		students.splice(i, 1);
		createRowDataInTable();
	})

//update
	let updateButton = document.createElement("button");
	updateButton.innerHTML = "Update";

	updateButton.addEventListener("click", (e) =>{
		let std = students[i];
		stdRollNumber.value = std.rollNumber
		stdName.value = std.name
		stdSemester.value = std.semester;


		button.addEventListener("click", () => onMouseEnterUpdateObjectListener(e, i));
		button.innerHTML = "Update";

	});

	tdEdit.appendChild(updateButton);



	//text


	sNtD.innerHTML = "#";
	tDRollNumber.innerHTML = student.rollNumber;
	tdStdName.innerHTML = student.name;
	tdStdSemester.innerHTML = student.semester;
	tdAction.appendChild(deleteButton);

	//td-row
	row.appendChild(sNtD);
	row.appendChild(tDRollNumber);
	row.appendChild(tdStdName);
	row.appendChild(tdStdSemester);
	row.appendChild(tdAction);
	row.appendChild(tdEdit);


	//row-tbody
	tbody.appendChild(row);

}
}


function onClickAddObjectListener (event) {

	let studentObject = {
		name: stdName.value,
		rollNumber: stdRollNumber.value,
		semester: stdSemester.value
	}

	students.push(studentObject);

	createRowDataInTable();

	stdRollNumber.value = "";	
	stdName.value = "";	
}


function onMouseEnterUpdateObjectListener (event, student_index) {
	let student = {
	rollNumber: stdRollNumber.value,
	name: stdName.value,
	semester: stdSemester.value
	}


	students[student_index] = student;

	console.log(students);


	// students.push(studentObject);

	// createRowDataInTable();

	// stdRollNumber.value = "";	
	// stdName.value = "";	
	button.addEventListener("click", onClickAddObjectListener);
	button.innerHTML = "Add Student";
	createRowDataInTable();
}


button.setAttribute("id", "addButton");
button.addEventListener("click",onClickAddObjectListener);


