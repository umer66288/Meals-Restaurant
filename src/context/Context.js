import { createContext, useState } from "react";
const AppContext = createContext();

const AppProvider = (props) => {
const [aleart, setaleart] = useState(null);
let showaleart = (message, type) => {
    setaleart({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setaleart(null)
    }, 2000);
  }
    return (
        <AppContext.Provider value={{aleart, setaleart, showaleart}}>
            {props.children}
        </AppContext.Provider>
    )
}
export  {AppContext, AppProvider};