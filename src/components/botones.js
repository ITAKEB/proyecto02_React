import React,{Component } from "react"

export class Boton extends Component{
    render(){
        return(
            <button 
            className={this.props.clase}
            id={this.props.id}>
            {this.props.icon}
            {this.props.children}
            </button>
        );
    }   
}