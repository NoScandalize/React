import { useState } from 'react'

const ListRender = () => {

    const [list] = useState(["Douglas", "Matheus", "Aline", "Camila"])

  return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender;