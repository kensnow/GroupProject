import React from "react"
import { render } from "react-dom"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import DataHandler from "./DataHandler"

render(
    <BrowserRouter>
        <DataHandler>
            <App />
        </DataHandler>
    </BrowserRouter>,
    document.getElementById("root"))

