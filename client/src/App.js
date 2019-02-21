import React from 'react'
import Header from "./components/Header"
import MainView from "./components/MainView"
require("./assets/sass/main.sass")


const App = () => {
    return (
        <div>
            <Header />
            <MainView />

        </div>
    )
}

export default App
