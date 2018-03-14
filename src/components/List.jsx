import React from 'react';

const arrHobies = ['Leer', 'Escuchar música', 'Cantar']

const List = () => (
  <div>
    <h5>Mis hobbies</h5>
    <ul>{arrHobies.map(el => (
        <li>{el}</li>
      ))}</ul>
  </div>
)

//

export default List;
