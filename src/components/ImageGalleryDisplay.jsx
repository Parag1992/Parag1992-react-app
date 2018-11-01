import React from 'react';
import ImageGallery from 'react-image-gallery';
import axios from 'axios';
import Gallery from 'react-photo-gallery';


class ImageGalleryDisplay extends React.Component{

    constructor(){
        console.log("Reached");
        super();
        this.state={
            arry1:[],
            arry2:[]
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response=> {
          
       //  this.setState({arry1: response.data});
        var temparr=[];
        var temparr2=[];
        temparr=response.data;
        

        temparr.map(temparr=>{
            var temp={}
            temp.src=temparr.url,
            temp.width=3,
            temp.height=4,
            temparr2.push(temp)
        });
       

            this.setState(this.state.arry2=temparr2);
            console.log("New arr"+this.state.arry2);
        }
        )

       
    }
    render(){

        return(
            <Gallery photos={this.state.arry2} />
        );
    }
}

export default ImageGalleryDisplay;