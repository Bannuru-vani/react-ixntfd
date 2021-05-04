import React from 'react';
import Prop from './components/Prop';
function App(){
  return(
    <div className="contact">
          <Prop
            contact={{
              name:"vani",
              email:"vanibannuru11@gmail.com",
              mobile:"565121245422",
              para:"hii welcome trork",

            }}
              
            />
          <Prop
            contact={{
               name:"harsha",
               email:"vanibannuru11@gmail.com",
               mobile:"565121245422",
               para: "hii welcome trork"

            }}
             
          />
          <Prop
             contact={{
               name:"medha",
               email:"vanibannuru11@gmail.com",
               mobile:"565121245422",
               para: "hii welcome trork"

            }}
             
          />
    </div>
   
    
  )
}
export default App;