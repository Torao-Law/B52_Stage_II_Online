import { useState, useEffect } from "react"
import Card from "./components/navbar/Navbar"

function App() {
  const [data, setData] = useState(0)

  return (
    <>
      <Card />

      <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
        <p style={{backgroundColor: 'red', fontWeight: 'bold', color: "white"}}>{data}</p>
        <p style={{backgroundColor: 'red', fontWeight: 'bold', color: "white"}}>1</p>
      </div>
    </>
  )
}

export default App



// import { useState } from "react"

// function App() {
//   const [data, setData] = useState(0)
  
//   console.log(data)
  
//   const sum = () : void => {
//     setData(data + 1)
//   }
  
//   let start = 0;
//   const sumss = () : void => {
//     start++;
//     console.log(start)
//   }


//   return (
//     <>
//       <p>Counting</p>
//       <p>{data}</p>
//       <button onClick={sum}>Add</button>
//       <p>Counting using variable</p>
//       <p>{start}</p>
//       <button onClick={sumss}>Add</button>
//     </>
//   )
// }

// export default App


// import SayHello from "./SayHello"
// import Navbar from "./components/navbar/Navbar"

// // Create a new function as Component React
// function Morning() {
//   return (
//     <h1>Good morning</h1>
//   )
// }

// function App() {
  
//   return (
//     <>
//       <p>putri maharani hehe</p>
//       <p>dimas hehe</p>
//       <SayHello />
//       <Navbar />
//     </>
//   )
// }

// export default App



// https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json
// fetch / axios untuk fetch API
// gunakan useEffect untuk pase Mounting (untuk fetch data pertama kali diakses), dan gunakan useEffect untuk handle dalam pase updating.
// gunakan useState untuk menampung data dari API
// async function fetchData() {
//   // code fetch API etc.
// }

// useEffect(() => {
//   fetchData()
// }, [])