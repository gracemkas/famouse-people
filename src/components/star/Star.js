import React, {Component} from 'react';

class Star extends Component {
    constructor(props) {
        super(props);

        this.state = {
            star: {           
                name: '',
                role: ''
            }
        }
    }

    handleRole = (event) => {
        console.log(event.target.value);
        this.setState({
            star: {
                ...this.state.star,
                role : event.target.value
            }
        })    
    }

    handleName = (event) => {
        console.log(event.target.value);
        this.setState({
            star : {
                ...this.state.star,
                name : event.target.value
            }
        })    
    }

    handleClick = () => {
        console.log(this.state); 
    }
    
    
    
    render() {
        return (
            <div>
            <p> {this.state.star.name} is famous for {this.state.star.role} </p>
            <input type="text" onChange={this.handleName}/>
            <input type="text" onChange={this.handleRole}/>
            <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}

export default Star;