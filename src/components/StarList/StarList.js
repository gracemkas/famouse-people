import React, {Component} from 'react';
import Star from '../Star/Star';

class StarList extends Component {
    render() {
        let starListItemArray = this.props.list.map ((star, index) => {
            return <Star stars={star} key={index}/>
          })
        return(
            <ul className="App-intro">
                {starListItemArray}
            </ul>

        )
    }
}

export default StarList;