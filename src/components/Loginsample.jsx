import React from 'react';
import Demo from './Demo';
import { BrowserRouter } from 'react-router';

class Loginsample extends React.Component{
    
constructor(){
    super();

    this.state={
        data:""
    }
}

    handleChange(event){
        this.setState({data:event.target.value});
    }
    
    submitClicked(event){
 
        //alert("Clicked");.
       // console.log(this.props);
        this.props.histroy.push('/Demo');
    }
    render(){
        return(
            <div>
            {/* <form onSubmit={this.submitClicked.bind(this)}> */}
            <input type="text" value={this.state.data} onChange={this.handleChange.bind(this)}/>
            <input type="submit" value="submit" onClick={this.submitClicked.bind(this)}/>
            {/* </form> */}
            
            </div>
        );
    }
}
export default Loginsample;