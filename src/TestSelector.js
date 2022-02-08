// import { useEffect, useState } from 'react'
// import './App.css'
// import './TestSelector.js'

// const TestSelect = () =>{
//   const [selected, setSelected] = useState('')//guarda el id
//   const [option, setOption] = useState([]);// carga todo el selec
//   const [user, setUser] = useState({});//optener personaje seleccionado
  
//   const dataApi =[
//     {
//       id:'1',
//       name:'Pedro'
//     },
//     {
//       id:'2',
//       name:'Marcos'
//     },
//   ]

//   useEffect(()=>{
//     setOption(dataApi)
//   },[]);

//   useEffect(()=>{
//     const usr = dataApi.find((u)=>u.id === selected);
//     setUser(usr);//setea al nuevo usuario
//     alert(`Hola ${user.name}`)
//   },[selected]);//

//   useEffect(()=>{
//     if(user?.name){//si existe user pasa a name
//     alert(`Bienvenido ${user.name}`)
//     }
//   }, [user]);

//   return (
//   <div className="contaner">
//      <h1>Test de Select</h1>
//      <select value={selected} onChange={(e)=>setSelected(e.target.value)}>
//        <option value="">-</option>
//        {option.map((opt, index)=>( //index en caso de no tener id
//          <option key={index} value={opt.id}>{opt.name}</option>
//        ))}
//      </select>
//   </div>
//   )
// }

// export default TestSelect