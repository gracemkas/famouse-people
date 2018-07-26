import React, {Component} from 'react';

class Star extends Component {
    render() {
     
        return(
            <li>{this.props.stars.name} is famous for {this.props.stars.role}. Their popularity rating is {this.props.stars.popularity}</li>
        )  
    }
}

export default Star;