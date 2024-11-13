const students = [
  {
    "id": 1,
    "name": "Alice",
    "department": "Computer Science",
    "semester": 3,
    "enrolledCourses": [],
    "completedCourses": []
  },
  {
    "id": 2,
    "name": "Sylvia Rose",
    "department": "Computer Science",
    "semester": 3,
    "enrolledCourses": [
      {
        "id": 1,
        "name": "Data Structures & Algorithms",
        "department": "Computer Science"
      },
      {
        "id": 2,
        "name": "Modern Web Technologies",
        "department": "Computer Science"
      },
      {
        "id": 4,
        "name": "Computer Programming",
        "department": "Computer Science"
      }
    ],
    "completedCourses": [
      {
        "id": 5,
        "name": "Object-Oriented-Programming",
        "department": "Computer Science",
        "grade": 85
      },
      {
        "id": 6,
        "name": "Web Programming & Design",
        "department": "Computer Science",
        "grade": 90
      }
    ]
  },
  {
    "id": 3,
    "name": "Hailey Madge",
    "department": "Psychology",
    "semester": 1,
    "enrolledCourses": [
      {
        "id": 7,
        "name": "Critical Thinking",
        "department": "Psychology"
      },
      {
        "id": 8,
        "name": "ASL",
        "department": "Psychology"
      }
    ],
    "completedCourses": []
  },
  {
    "id": 4,
    "name": "Lucas Briones",
    "department": "Media Studies",
    "semester": 2,
    "enrolledCourses": [],
    "completedCourses": []
  }
];

module.exports = students;