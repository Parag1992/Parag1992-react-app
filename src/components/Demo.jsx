import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
//import Pagination from "react-js-pagination";
//import { TableSimple } from 'react-pagination-table';
import Tableviews from 'react-table';
//import Table from './TableExampleSample'
import "react-table/react-table.css";
import Modal from 'react-modal';
import DemoGallery from './TableExampleSample';

class Demo extends React.Component{

    constructor(){
        super();
        this.state={
            arry1:[],
            arry2:[],
            activePage:0,
            headers : [{
                Header: 'id',
                accessor: 'id' // String-based value accessors!
              }, {
                Header: 'title',
                accessor: 'title',
              
              }, {
                
                Header: 'thumbnailUrl',
                accessor: 'thumbnailUrl',
                Cell: row=><button name={row.original.id} value={row.original.id} onClick={()=>this.onThumbnailClick(row.original.id)}> <img src={row.original.thumbnailUrl} /></button>
              }],
              modalIsOpen:false,
              btnIndex:0
        }
       
    }

    onThumbnailClick(btnID){
       
        console.log("Thumb"+btnID);
        this.setState({btnIndex:btnID});
        this.setState({modalIsOpen:true});

    }

    closePopUp(){
        this.setState({modalIsOpen:false});
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response=> {
          
         this.setState({arry1: response.data});
      
        }
        )

       
    }

    onDropdownChange(event){
        console.log("initial"+event);

        return ;
    }
    
   

    
    render(){

        return(
            <div>
         
                <br/>
                    
                       <Tableviews 
                        data={this.state.arry1}
                        columns={this.state.headers}
                       />

                   <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                       
                        contentLabel="Example Modal"
                        >
                
                        <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                        <button onClick={this.closePopUp.bind(this)}>close</button>
                        <div>I am a modal</div>

                           <DemoGallery arry={this.state.arry1} indexval={this.state.btnIndex}/>                  
                        </Modal>           
                    </div>
        );
    }

    
}

export default Demo;
