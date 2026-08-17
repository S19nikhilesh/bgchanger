import React, { useEffect, useState } from "react"
import reactDom from "react-dom/client"



function App(){
    let [Color,setColor]=useState('black')
    
    useEffect(()=>{document.body.style.backgroundColor=Color},[Color])
       
    return(
        <>
                <div className="rect">
                   
                    <h1 style={{color: Color}}>Background Changer</h1>
                    <div className="buts">
                        <button style={{color:"red"}} onClick={()=>{setColor("red") }}>Red</button>
                        <button style={{color:"green"}} onClick={()=>setColor("green")}>Green</button>
                        <button style={{color:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
                    </div>
                </div>
            
        </>
    )
}

const Reactroot= reactDom.createRoot(document.getElementById('root'))
Reactroot.render(<App/>)