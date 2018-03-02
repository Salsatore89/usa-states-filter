import React, { Component } from 'react';
import { connect } from 'react-redux';
import cred from '../cred';
import Filter from './filter';
import axios from 'axios';

class App extends Component {
  state = {
    img: '', // Here we store the Unsplash background image
    query: 'usa', // keyword for the API call that retrieves the images
    numberOfImgs: 30, // number of images form which we want to randomly choose our background image
    errorMsg: '', // to store a possible error message after trying to get the images, and the wikipedia info
  }
  fetchUnsplashImg() {
    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=1&per_page=${this.state.numberOfImgs}&query=${this.props.selectedState ? this.props.selectedState : this.state.query}&client_id=${cred.UNSPLASH_ID}`
      )
      .then(data => {
        this.setState({
          // Get a random url image, regular is the size (full>regular>small)
          img: data.data.results[Math.floor(Math.random() * 30)].urls.regular
        });
      })
      .catch(err => {
        this.setState({
          errorMsgUnsplashImg: 'Sorry, an error occurred, the background image could not be loaded' + err
        });
      });
  }
  // Once that App is mounted, make the call
  componentDidMount() {
    this.fetchUnsplashImg()
  }
  // Every time "selectedState" changes, fetch a new background image 
  // related to the state that was clicked
  componentWillReceiveProps() {
    this.fetchUnsplashImg()
  };
  render() {
    return (
      // Two backgrounds in case the first is not available
      <div className="background" style={{ backgroundImage: `url(${this.state.img}), url(../public/img/texture-grey.jpg)` }}>
        <Filter />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedState: state.stateSelected
  };
}

export default connect(mapStateToProps)(App);