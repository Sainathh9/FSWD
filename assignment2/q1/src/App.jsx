import './App.css'

function App() {
  const courses = [
    { id: 1, name: 'Web Development', credits: 4, faculty: 'Dr. Smith' },
    { id: 2, name: 'Data Structures', credits: 4, faculty: 'Prof. Johnson' },
    { id: 3, name: 'Database Systems', credits: 3, faculty: 'Dr. Williams' },
  ]

  return (
    <div className="container">
      <h2>Courses</h2>
      {courses.length === 0 ? (
        <p>No courses available</p>
      ) : (
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <h3>{course.name}</h3>
              <p>Credits: {course.credits}</p>
              <p>Faculty: {course.faculty}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
