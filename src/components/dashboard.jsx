import React , { Component } from 'react';
import { Menu, Card } from 'semantic-ui-react';

 class Dashboard extends Component{
  constructor(props){
    super(props);
  }
  render(){
    
    return (
     <div>
      { this.props.children }
      </div>
    );
  }
};

Dashboard.propTypes={

  children: function (props, propName, componentName) {
    const prop = props[propName]

    let error = null
    React.Children.forEach(prop, function (child) {
      
      if (child.type !== Card.Group || child.type !== Card ) {
        error = new Error('`' + componentName + '` children should be of type `Card` or `Card.Group`.');
      }
    });
    return error;
  }

};

export default Dashboard;
