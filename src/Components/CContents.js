import React, { Component } from 'react'

class CContents extends Component{
   
    constructor(){
        super()
        this.state = {msg: "Witaj użytkowniku. Kliknij przycisk aby poznać wiadomość"}
    // this.changeMsg = this.changeMsg.bind(this);
    }
   
    changeMsg= () => {
    this.setState({msg: 'Właśnie jesteś uczestnikiem kursu React, gratulacje'});
    console.log("przycisk")
    }

    render(){
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={() =>this.changeMsg()}>Kliknij, aby poznać tajemnicę</button>
            </div>
        )
    }
}

export default CContents