var student = {
	name: "David Rayy",
	sclass: "VI",
	rollno: 12
};

console.log("Object before deleting rollno property:", student);

delete student.rollno;

console.log("Object after deleting rollno property:", student);
