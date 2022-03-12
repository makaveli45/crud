import React, {Component, Fragment } from "react";
import { connect } from "react-redux";
import { addtoItems, clearItems,clearItem,updateItem } from "../reduxActions/CreateItems";

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruitName:"",
            fruits:this.props.Items,
            showFruits:false,
            values:"",
            updateList:[],
            updatevalue:"",
          }
        
    }

    //add item to the store
    AddToItems = () =>{
        this.props.addtoItems(this.state.fruitName);
      setTimeout(()=>{
        this.ReadItems()
      },100)
    }

    //button to clear everything from the store
    ClearItems = () =>{
        this.props.clearItems();
        setTimeout(()=>{
            this.ReadItems()
          },100)
    }

    //clear item button to delete the item from the redux store
    ClearMe = (id) =>{
    this.props.clearItem(id);
    setTimeout(()=>{
        this.ReadItems()
      },100)
    }
//update button to update the particular item in the redux store
    UpdateMe = (id,value) =>{
        this.props.updateItem(id,this.state.updatevalue);
        this.setState({fruits:this.props.Items})
    

    }

    //when an update field is changed
    updateChange = (e)=>{
    const me=this.state.updateList;
    me[e.target.name]=e.target.value;
    this.setState(me);
    this.setState({updatevalue:me[e.target.name]})
    }

    //to read items from store
    ReadItems = ()=>{
   this.setState({fruits:this.props.Items})
    }

    
    render() { 
        return (  
            <Fragment>
                <div>
                <h1>Add a Fruit </h1>
                <label>Fruit Name</label>
                <input value={this.state.fruitName} onChange={(e)=>this.setState({fruitName:e.target.value})}/>
                <button type="button" onClick={this.AddToItems}>Add to List Items</button>
                <button type="button" onClick={this.ReadItems}>Read Items</button>
                <button type="button" onClick={this.ClearItems}>Clear Everthing</button>

                <h2>List of Fruits</h2>
                {this.state.fruits.map((value,id)=>(

          <div key={id}><p>Original name:{value}</p>
          <input placeholder="New Fruit Name"  name={id} onChange={(e)=>this.updateChange(e)}/>
          <button type="button" onClick={()=>this.ClearMe(id)}>Delete Me Please({id})</button>
         <button type="button" onClick={()=>this.UpdateMe(id,this.state)}>Update Me Please({id})</button>   
          </div>

                )
                )
                }
                </div>
            </Fragment>
        );
    }
}


const mapStateToProps = (state)=>{
    return {
        Items:state.itemsData,
    }
}

const mapDispatchToProps = (dispatch) =>{
   return {
    addtoItems:(item)=>{
        dispatch(addtoItems(item))
      },
      clearItems:()=>{
          dispatch(clearItems())
      },
      clearItem:(id)=>{
          dispatch(clearItem(id))
      },
    updateItem:(id,value)=>{
        dispatch(updateItem(id,value))
    }

   }
}
export default connect(mapStateToProps,mapDispatchToProps)(Create);