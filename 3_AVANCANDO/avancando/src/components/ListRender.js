import { useState } from 'react'

const ListRender = () => {

    const [list] = useState(["Douglas", "Matheus", "Aline", "Camila", "Julia"])

    const [users] = useState([
      {id: 1, name: "Douglas", age: 25},
      {id: 112312, name: "Camila", age: 23},
      {id: 23124, name: "Aline", age:24}
    ])

  return (
    <div>
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} - {user.age}</li>
          ))}
        </ul>
    </div>
  )
}

export default ListRender;