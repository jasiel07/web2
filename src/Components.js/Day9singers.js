import React from 'react'

export default function Singers() {
  return (
    <div>
      <table style={{width:"30%" ,marginLeft:"32rem"}} class="table  table-bordered  table-hover mt-5 pd-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>Selena Gomez</td>
            <td>2008</td>
          </tr>
          <tr>
            <td scope='row'>Katy Perry</td>
            <td>2010</td>
          </tr>
          <tr>
            <td scope='row'>Christina Grimmie</td>
            <td>2022</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}