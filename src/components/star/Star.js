import React, {Component} from 'react';

class Star extends Component {
    constructor(props) {
        super(props);

        this.state = {
            starList: [],
            star: {           
                name: '',
                role: '',
                popularity: ''
            }
        }
    }

    // handleRole = (event) => {
    //     console.log(event.target.value);
    //     this.setState({
    //         star: {
    //             ...this.state.star,
    //             role : event.target.value
    //         }
    //     })    
    // }

    // handleName = (event) => {
    //     console.log(event.target.value);
    //     this.setState({
    //         star : {
    //             ...this.state.star,
    //             name : event.target.value
    //         }
    //     })    
    // }

    handleChangeFor = (propertyName) => (event) => {
            this.setState({
                star: {
                    ...this.state.star,
                    [propertyName] : event.target.value
                }
            })
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log(this.state.star); 
        this.setState({
            starList:  [
                ...this.state.starList,
                this.state.star
              ],
            star : {
                name: '',
                role: '',
                popularity: ''
            }
        })
    }
    
    
    
    render() {
        
        let starListItemArray = this.state.starList.map ((star, index) => {
            return <li key={index}>{star.name} is famous for {star.role}. Their popularity rating is {star.popularity}</li>
          })


        return (
            <div>
            <form onSubmit={this.handleClick}>
            {/* <p> {this.state.star.name} is famous for {this.state.star.role}. Their popularity rating is {this.state.star.popularity} </p> */}
            <input value={this.state.star.name} type="text" onChange={this.handleChangeFor('name')}/>
            <input value={this.state.star.role} type="text" onChange={this.handleChangeFor('role')}/>
            <input value={this.state.star.popularity} type="number" onChange={this.handleChangeFor('popularity')}/>
            <input type="submit" value="Click me"/>
            </form>
            <ul className="App-intro">
                {starListItemArray}
            </ul>

            </div>
        )
    }
}

export default Star;