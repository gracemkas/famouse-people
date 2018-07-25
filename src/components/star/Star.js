import React, {Component} from 'react';

class Star extends Component {

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
            return <li key={index}>{star.name} is famous for {star.role}. His popularity rating is {star.popularity}</li>
          })


        return (
            <div>

            <ul className="App-intro">
                {starListItemArray}
            </ul>

            </div>
        )
    }
}

export default Star;