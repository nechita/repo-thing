import React, {Component} from 'react';
import './bookcard.css';



export default class BookCard extends Component {
    render(){
        return (
            <div className='card-container'>
              <img src={this.props.image ? this.props.image : 'nothing'} alt="" />
              <span>{this.props.title}</span>
              <span>{this.props.author}</span>
              <button type="button">Add to wishlist</button>
              <button type="button" className="buy">Buy</button>
            </div>
        )
    }
};

