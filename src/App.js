import React, { Component } from 'react';
import BoxComponent from './BoxComponent';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      page: 0,
      userData: [],
      userBoxes: []
    }

    this.createBoxComponent = this.createBoxComponent.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.infiniteScroll)
    this.getData();
  }

  createBoxComponent() {
    const start = this.state.page * 5, end =  (this.state.page + 1) * 5;
    let fivebyfive = this.state.userData.slice(start, end);
    for (var i = 0; i < fivebyfive.length; i++) {
      const component = <BoxComponent key={fivebyfive[i].id} data={fivebyfive[i]} />
      this.setState(prevState => ({
        userBoxes: [...prevState.userBoxes, component]
      }))
    }

  }

  getData() {
    try {
      axios.get(`http://localhost:3001/posts`).then(resp => {
    
        this.setState(prevState => ({ ...prevState, userData: resp.data }), () => {
          this.setState({ page: 1 });
          this.createBoxComponent();
        })
      })
    } catch (err) {
      console.error(err);
    }
  }

  infiniteScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight
    ) {
      let newPage = this.state.page;
      newPage++;
      if (this.state.userData.length > this.state.page * 5) {
        this.setState({
          page: newPage
        });
        this.createBoxComponent();
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.userBoxes}
      </div>
    )
  }
}