import React, { Component } from "react";

import IconButton from 'material-ui/IconButton';

import axios from "axios"; 

import ArtistStyle from '../ArtistStyle'

export default class ApiCaller extends Component {

    constructor(props) {
        super(props);

        this.state = {
            artists: [],
            randomArtist: {},
            addToList: ""

        };


        this.routeHandler=this.routeHandler.bind(this)
        this.artistInfo=this.artistInfo.bind(this)
        this.handleInput=this.handleInput.bind(this)   
        this.randomArtist=this.randomArtist.bind(this)
        this.handleInput=this.handleInput.bind(this)
    }

    //Look up lifecycle hooks!!!!
    componentDidMount() {
    //axios makes a request for data (loose interpretation)
            axios.get("/api/getApiData")
            .then(response => {
                return this.setState({ artists: response.data.artists.artist }, () => this.randomArtist() );
                
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

    // addToList(){
    //     this.setState
    // }

    // deleteItem(){

    // }

    render(){
        console.log(this.state)
        
        console.log(this.state.randomArtist.image, "Struggle is real!") 
        return (
            <div>


        
        
        
        
        
        
        
        
        
        
        
        {/* stringify puts artist info in string */}
         {/* generates random artist with floor random and onClick method    */}

        <button onClick={(e) => this.randomArtist()}>Random Artist</ button>


        
        
        
        
        
        
        
                
           

        {/* do NOT CHANGE THIS */}
            <select className="name" onChange={(e) => this.artistInfo(e.target.value)}>    
                {this.state.artists[0] && 
                    this.state.artists.map((bryce, spencer)  => {
                        return (
                        //everytime I map over an array I "need" a key //bryce = artists //spencer = key
                         <option  key={spencer} value={bryce.url}>{bryce.name}</option>
                    )})
                    }
            </select>
                <input  type="text" onChange={this.handleInput}></input>
               <ArtistStyle artist={this.state.randomArtist} />    
            </div>
        )}
    }
