import { Component } from "react";
import ItemForm from './components/Items/ItemForm';


class App extends Component {
  state = { items: [
    {id:1, title: 'apples', price: 1, complete: true },
    {id:2, title: 'pear', price: 2, complete: true },
    {id:3, title: 'strawberry', price: 5, complete: true },
  ]}


  getunqId = () => {
  return Math.floor((1 + Math.random()) * 0X10000)
  .toString(16)
  .substring(1);
  }


  addItem = (incomingItem) => {
  const { items } = this.state
  const newItem = {id: this.getUniqId(), ...incomingItem}
  this.setState({ items: [...items, newItem]})
  }

  render () {
    const { items } = this.state
    return (
    <>
      <h1> Grocery Item </h1>
      <ItemForm addItem={this.addItem}/>
      {/* <ItemList items={items} listName="Coding"/> */}
    </>
    )
  }
}

export default App;
