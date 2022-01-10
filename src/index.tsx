import React from 'react'
import ReactDOM from 'react-dom'
import Header from "./components/header";

const App = (): JSX.Element => {
    const name = "Nikita"
    return (
        <div>
            <Header/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'))
