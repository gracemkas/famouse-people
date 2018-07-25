import React, { Component } from 'react';


class NewStar extends Component {

    render() {
        return (
            <form onSubmit={this.props.handleClick}>
            <input value={this.props.newForm.name} type="text" onChange={this.props.handleChangeFor('name')}/>
            <input value={this.props.newForm.role} type="text" onChange={this.props.handleChangeFor('role')}/>
            <input value={this.props.newForm.popularity} type="number" onChange={this.props.handleChangeFor('popularity')}/>
            <input type="submit" value="Click me"/>
            </form>
);
}
}

export default NewStar;