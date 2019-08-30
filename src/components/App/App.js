import React, {Component} from 'react'
import {getDataByCityName} from '../../services/gismeteo-api'

class App extends Component{
    componentDidMount() {
        const data = getDataByCityName('москва')
        console.log(data)
    }
    render(){
        return(
            <h1>henlo</h1>
        )
    }
}

export default App