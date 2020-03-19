import React from 'react';
import Item from './Item';

class Main extends React.Component{

constructor(){
        super();
        this.state = {
        items: [1,2,3],
        name:"Weipeng"
    }
    this.handleClick = this.handleClick.bind(this)
}

handleClick(){
    console.log("Button clicked")
    //to retrieve properties from states
    let arr = this.state.items;
    arr.push(arr.length+1)
    console.log(arr)
    //to set the value in state
    this.setState(()=>{
        this.state.items = arr
        return this.state.items
    })

}

render(){
    const items = this.state.items.map(val=><Item item={val}/>) 

    return (

    <div>
        <h1>Hello World</h1>
        <p>Welcome {this.state.name} to my App</p>
        <hr/>
        <button onClick={this.handleClick}>Click Me!</button>
        <h2>List of items</h2>
        <ul>
            {items}
        </ul>
    </div>
   )
}
}

export default Main;