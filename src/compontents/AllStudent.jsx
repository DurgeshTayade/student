import React from 'react'


const AllStudents = () => {
  return (

    <div>
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Branch</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Durgesh</td>
            <td>Tayade</td>
            <td>BE-CSE</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Digvijay</td>
            <td>Patil</td>
            <td>BE-CSE</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Divansh</td>
            <td>marathe</td>
            <td> BE-CSE</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AllStudents