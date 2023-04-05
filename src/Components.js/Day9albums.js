import React from 'react'

export default function Albums() {
  return (
    <div>
      <table style={{ width: "30%", marginLeft: "32rem" }} class="table  table-bordered  table-hover mt-5 pd-5">
        <thead>
          <tr>
            <th scope="col"> Name </th>
            <th scope="col"> Albums </th>
          </tr>cd cc2
          
        </thead>
        <tbody>
          <tr>
            <td scope='row'>Selena Gomez</td>
            <td>I Promise You</td>
          </tr>
          <tr>
            <td scope='row'>Katy Perry</td>
            <td>Roar</td>
          </tr>
          <tr>
            <td scope='row'>Christina Grimmie</td>
            <td>The Game</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}