import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return <div className="ui three item menu">
              <a className="active item">Editorials</a>
              <a className="item">Reviews</a>
              <a className="item">Upcoming Events</a>
          </div>
  }
}

ReactDOM.render(<Hello/>, document.getElementById('app'));
