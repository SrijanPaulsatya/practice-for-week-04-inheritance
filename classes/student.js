const Person = require('./person');

// Your code here

class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA (student1, student2) {
    let higherMarksStudent = null;
    if (student1.GPA === student2.GPA) {
      return "Both students have the same GPA";
    }
    else if (student1.GPA > student2.GPA) {
      higherMarksStudent = student1;
    }
    else {
      higherMarksStudent = student2;
    }

    return `${higherMarksStudent.firstName} ${higherMarksStudent.lastName} has the higher GPA.`;
  }
  
}

//let srijan = new Student('srijan', 'paulsatya', 23, 'electronics', 4);
//console.log(srijan.major);
//
//console.log(srijan.firstName);
//console.log(srijan);
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
