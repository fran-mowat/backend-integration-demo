// src/components/StudentsTable.js
import React from 'react';

const StudentsTable = ({ students, handleEdit, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Enrollment Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
  {students.map((student) => (
    <tr key={student.id}>
      <td>{student.id}</td>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
      <td>{student.enrollmentDate}</td>
      <td>
        <button onClick={() => handleEdit(student.id)}>Edit</button>
        <button onClick={() => handleDelete(student.id)}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>

    </table>
  );
};

export default StudentsTable;