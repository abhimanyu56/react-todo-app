import React, { Component } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    items:[],
    id:0,
    title:'',
    editItem:false
  };
  
  handleChange = (e) => {
    this.setState({
      title:e.target.value
    })
  };

  clearList = (e) => {
    this.setState({
      items:[]
    })
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items:filteredItems
    })
  };

  handleEdit = (id) => {
    
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items:filteredItems,
      title:selectedItem.title,
      editItem: true,
      id:id
    });
    
  };
  
  handleSubmit = (e) => {
    e.preventDefault();


    const newItem = {
      id: this.state.id,
      title:this.state.title
    };

    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items:updatedItems,
      title:'',
      id:this.state.id + 1,
      editItem:false
    })

  };
  render() { 
    return (
      <div className= "contrainer">
        <div className= "row">
        <div className= "col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">Todo list</h3> 
          <TodoInput title={this.state.title} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}  />
         <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
        </div>
        </div>  
      </div>
      );
  }
}
 
export default App;
