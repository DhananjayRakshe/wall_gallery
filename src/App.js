import React, { Component } from 'react'
import './App.css';
import PhotoContainer from './components/PhotoContainer/PhotoContainer'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0')
      .then(response => {
        console.log('response', response);
        if (!response.ok) {
          throw Error("Error occures when fetching the API");
        }

        return response.json()

          .then(allData => {
            this.setState({ photos: allData });
          })

          .catch(err => {
            throw Error(err.message);
          });

      }
      );
  }

  render() {
    return (
      <div className='App'>
        <PhotoContainer photos={this.state.photos} />
      </div>
    )
  }
}

