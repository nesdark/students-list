const studentsParent = document.querySelector("main")
studentsParent.innerHTML = `
        <h2>Nenhum estudante encontrado</h2>
`

function setStudentOnScreen(student, grade) {
  const studentStatus = grade >= 7 ? "approved" : "disapproved"

  studentsParent.innerHTML += `
    <div class="student">
      <div class="container">
        <h2>${student}</h2>
        <p>${grade}</p>
      </div>
      <p class="${studentStatus}">${studentStatus}</p>
    </div>
  `
}

const students = []

const totalStudents = window.prompt("Enter the total of students: ")

for (let c = 1; c <= totalStudents; c++) {
  let currentName = window.prompt("Enter student name: ")
  let currentGrade = window.prompt("Enter student grade: ")
  students.push({ name: currentName, grade: currentGrade })
}

students.forEach((student) => {
  setStudentOnScreen(student.name, student.grade)
})
