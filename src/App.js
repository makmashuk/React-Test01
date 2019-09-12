import React from 'react';

import './App.css';

class App extends React.Component {
   
  render(){
    return (
      <div className="App">
         <Clock />
         <Toggle />
         <List persons={[
           {
             id:1,
             name:"mak"
           },
           {
             id:2,
             name:"jawad"
           },
           {
             id:3,
             name:"jon"
           },
           {
             id:4,
             name:"steven"
           },
         ]} />
      </div>
    );
  }
  
}








class ListItem extends React.Component{
  constructor(props){
    super(props);
    this.state={
      item:props.item
    };
  }
  render(){
    return(
      <li> {this.state.item}</li>
    )
  }
}
class List extends React.Component {
  constructor(props){
    super(props);
    this.state={
      persons: props.persons
    };
    this.list =this.state.persons.map(
      (person)=>
      <ListItem key={person.id} item={person.name}/> 
    )
  }

 
  render(){
    return(
     <ul>
       {this.list}
     </ul>
    );
  }
}








class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state={isToggleOn:false};

    this.handleToogle=this.handleToogle.bind(this);
  }
  handleToogle(data){
    this.setState(state=>({
      isToggleOn: !state.isToggleOn
    }));
    console.log(data);
  }
  render(){
    return(
      <div className="toggleBtn">
        <button onClick={this.handleToogle.bind(this,{name:"mak"})} >
        { this.state.isToggleOn? "Toogle On" : "Toggle Off" }
        </button>
      </div>
    );
  }
}



class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date() }
  }
  componentDidMount(){
    this.timer=setInterval(() => {
      this.updateTime()
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }

  updateTime(){
    this.setState({date: new Date()})
  }
  render(){
    return (
        <div>
          { this.state.date.toLocaleTimeString() }
        </div>
         
    );
  }
}

export default App;
