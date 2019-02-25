import React from 'react'
import Container from './Component/Container';

export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Container/>
      </div>
    );
  }
}