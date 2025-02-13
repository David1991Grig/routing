import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";

import {HeaderContext} from "./utils/context.ts";

function App() {
    const [header , setHeader] = useState<string>("Luke Skywalker");
    const changeHeader = (text:string) => {
       setHeader(text);
    }


    return (
        <div>
            <HeaderContext.Provider value={{ changeHeader, header }}>
            <Header/>
            <Main/>
            </HeaderContext.Provider>
            <Footer/>
        </div>
    );
}
export default App;
