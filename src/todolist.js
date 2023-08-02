import { Component } from "react";

export class ToDoList extends Component{
    state = {
        userInput: "",
        toDoList: []
     }
     onChangeEvent(e){
        this.setState({userInput: e})
     }
     addItem(input){
         if(input === ''){
             alert("Please enter an item")
         }
         else{
         let listArray = this.state.toDoList;
         listArray.push(input);
         this.setState({toDoList: listArray, userInput: '' })
        
     }}
     deleteItem(){
         let listArray = this.state.toDoList;
         listArray = [];
         this.setState({toDoList: listArray})   
     }
     crossedWord(event){
         const li = event.target;
         li.classList.toggle("crossed");
     }
     onFormSubmit(e){
         e.preventDefault();
 
     }
 render(){
     return(
         <div className="containerTwo">
             <form onSubmit={this.onFormSubmit}>
         <div className="containerTwo">
             <input type="text" 
             placeholder="What to you want to do today?"
             onChange={(e) => {this.onChangeEvent(e.target.value)} }
             value={this.state.userInput}/>
         </div>
         <div className="containerTwo">
             <button onClick={() => this.addItem(this.state.userInput)} className="add">ADD</button>
         </div>
         <ul>
             {this.state.toDoList.map((item, index) => (
                 <li onClick={ this.crossedWord} key = {index}>
                    
                     {item}
                     
                 </li>
             ))}
             
         </ul>
         <div className="containerTwo">
         <button onClick={() => this.deleteItem()} className="delete">Delete</button>
         </div>
         </form>
         </div>
     )
 }
 }
