
import React from 'react';
import ImageGallery from 'react-image-gallery';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
class DemoGallery extends React.Component{
  constructor(){
    super();
    this.state={
      lightboxvar:0
    }
  }

  onImgClick(event){
    //console.log(event.target.value);
    return( <div>
    <ImageGallery items={this.props.arry[this.props.indexval].url}/>
    </div> )
  }

render(){

  return(
    <div>
    
    <img src={this.props.arry[this.props.indexval-1].url} onClick={this.onImgClick.bind(this)} />
    <onImgClick/>
  </div>
  );
}

}

export default DemoGallery;