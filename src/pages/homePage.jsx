import { useState } from "react"
import { FormNote } from "../features"
import { getInitialData } from "../utils"

export const HomePage = () => {
    const [data,setData] = useState(getInitialData())

    function handleAdd(note){
        setData([...data,note])
    }

  return (
    <>
        <FormNote onAdd={handleAdd} />
    </>
  )
}
