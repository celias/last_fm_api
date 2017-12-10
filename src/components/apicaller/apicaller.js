import React, { Component } from "react";

import IconButton from 'material-ui/IconButton';

import axios from "axios"; 

export default class ApiCaller extends Component {

    constructor(props) {
        super(props);

        this.state = {
            artists: [],

        };

        
    this.randomArtist=this.randomArtist.bind(this)
    this.handleInput=this.handleInput.bind(this)
    }

    //Look up lifecycle hooks!!!!
    componentDidMount() {
    //axios makes a request for data (loose interpretation)
            axios.get("/api/getApiData")
            .then(response => {
                return this.setState({ artists: response.data.artists.artist });
                //console.log(response.data.artists.artist);
            });
        }
    

    handleInput(event){
        this.setState({name: event.target.value})
        //console.log(event.target.value)
    }

    artistInfo(url){
        window.location.href = `${url}`
        //console.log(url);   
    }

    routeHandler(){
        this.artist
    }

    randomArtist(value){
        this.setState({ randomArtist: this.state.artists[Math.floor((Math.random() * 50))] }) 
    }

    render(){
        console.log(this.state)
        return (
            <div>


            {/* <h1>HellO!</h1> */}
            {/* trying to generate a random artist with an onClick method */}
            
        <button onClick={(e) => this.randomArtist()}>Random</ button>
        {JSON.stringify(this.state.randomArtist)}
                
                

                
    
            
          
          
          {/* do NOT CHANGE THIS */}
            <select onChange={(e) => this.artistInfo(e.target.value)}>    
                {this.state.artists[0] && 
                
                    this.state.artists.map((bryce, spencer)  => {
                        return (
                            //everytime I map over an array I "need" a key //bryce = artists //spencer = key
                         
                        <option  key={spencer} value={bryce.url}>{bryce.name}</option>
                        
                        )})
                    }
            </select>
                <input  type="text" onChange={this.handleInput}></input>
                

          
            
            </div>
            
        )}

    }
