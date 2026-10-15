function Profile() {
  const student = {
    name: 'Rahul',
    age: 20,
    branch: 'CSE',
    marks: 75,
    image: '/avatar.svg',
  }

  return (
    <div className="profile-card">
      <img src={student.image} alt="Profile" className="profile-img" />
      <h2>{`Name: ${student.name}`}</h2>
      <p>Age: {student.age}</p>
      <p>Branch: {student.branch}</p>
      <p>Marks: {student.marks}</p>
      <p style={{ color: student.marks >= 40 ? 'green' : 'red' }}>
        Status: {student.marks >= 40 ? 'Pass' : 'Fail'}
      </p>
    </div>
  )
}

export default Profile
