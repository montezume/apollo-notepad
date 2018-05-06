import { Component } from 'react';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalItem: {
        ...props.item
      },
      changes: {
        ...props.item
      };
    }
  }
  
  render() {
    console.log('this.state', this.state);
    return (
      <div>edit</div>
    )
  }
};