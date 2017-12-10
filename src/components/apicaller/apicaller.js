import React, { Component } from "react";


import axios from "axios"; 

//import "./styles.css";

export default class ApiCaller extends Component {

    constructor(props) {
        super(props);

        this.state = {
            artists: [],

        };

        //bind something
        
        //this.axipost=this.axipost.bind(this);
        this.post=this.post.bind(this)
        this.handleInput=this.handleInput.bind(this)
    }
    componentDidMount() {
    
            axios.get("/api/getApiData")
            .then(response => {
                return this.setState({ artists: response.data.artists.artist });
                //console.log(response.data.artists.artist);

            });
        
        
    }
    
    post(){
        // this.axipost('Spencer!!!!')
        console.log(this.state.name)
    }
    handleInput(event){
        this.setState({name: event.target.value})
        console.log(event.target.value)
    }

    render(){
        console.log(this.state)
        return (
            <div>


                <h1>HellO!</h1>
                <button onClick={this.post}>POST!!</button>

            <select>    
                {this.state.artists[0] && 
                
                    this.state.artists.map((bryce, spencer)  => {
                        return (
                            //everytime I map over an array I "need" a key 
                         
                        <option key={spencer} value={bryce.name}>{bryce.name}</option>
                        
                        )}
                    )
                    
                    
                    }
            </select>
                <input  type="text" onChange={this.handleInput}></input>
          
            
            </div>
            
        )}

    }
