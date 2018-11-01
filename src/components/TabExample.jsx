import {Tab,Tabs} from 'react-tabs';
import React from 'react';
import axios from 'axios';


class TabExample extends React.Component {

    constructor(){
        super();

        this.state={
            data:[],
            data1:[],
            dropdowncount:10,
            pagecount:1,
            previndexcount:0,
            totalpagecount:0
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response=> {
          
         this.setState({data: response.data});
         var i=0;
         let rawdata=[];
         var dropcount=this.state.dropdowncount;
         for(i=0;i<dropcount;i++){
             rawdata.push(this.state.data[i])
         }

         var datalength=this.state.data.length;
          this.setState({totalpagecount:datalength/dropcount});
         this.setState({data1:rawdata});
        }
        )

       
    }

    renderTable(obj,index){
       if(index% 5==0){
       return( <td style={{float:"left",lineHeight:"22px"}}><img style={{ width:"200px",height:"200px"}} src={obj.url} /></td> );
       } else{
        return( <td><img  style={{ width:"200px",height:"200px"}} src={obj.url} /></td>)
       }
}

    changetableview(event)
    {
        console.log(event.target.value);
        var count=parseInt(event.target.value);
        this.setState({dropdowncount:count});
        let rawdata=[];
        var i=0;
        var datalength=this.state.data.length;
        this.setState({totalpagecount:datalength/count});
        if(this.state.pagecount>1){
            
            i=this.state.previndexcount;
           count= count+i;
        }
        for(i;i<count;i++){
            console.log(this.state.data[i]);
            rawdata.push(this.state.data[i])
        }
       
        this.setState({data1:rawdata});
        
    }

    onclickNext(){
        var counter=this.state.pagecount;
         counter=counter+1;
         this.setState({pagecount:counter});
        let rawdata=[];
        var i=0;
        var j=this.state.dropdowncount*counter;
        j=j-this.state.dropdowncount;
        this.setState({previndexcount:j});
        var dropdowncountlocal=0;
        dropdowncountlocal=this.state.dropdowncount;
        var finaliteration=0;
        finaliteration=j+dropdowncountlocal;
        for(i=j;i<finaliteration;i++){
            console.log(this.state.data[i]);
            rawdata.push(this.state.data[i])
        }
        this.setState({data1:rawdata});
    }

    onclickPrev(){
        var dropdowncountlocal=this.state.dropdowncount;
        var pagecountlocal=this.state.pagecount;
        var previndexcountlocal=this.state.previndexcount;
        var rawdata=[];
        var startindex=previndexcountlocal-dropdowncountlocal;
     //   if((pagecountlocal-1)>0){
            if(startindex<0){
                startindex=0;
                pagecountlocal=1;
                this.setState({pagecount:pagecountlocal});        
                this.setState({previndexcount:startindex});
                previndexcountlocal=dropdowncountlocal;//as it has reached page 1 it should start from 0 till dropdown takes
            } else{
            this.setState({pagecount:pagecountlocal-1});        
            this.setState({previndexcount:startindex});
            }
            for(startindex;startindex<previndexcountlocal;startindex++){
                console.log(this.state.data[startindex]);
                rawdata.push(this.state.data[startindex]);
            }
            this.setState({data1:rawdata});
        // } else{
        //     alert('This is first page');
        // }
    }

    bulkApprove(){
        console.log("Prev index"+this.state.previndexcount);
        var nextindex=this.state.previndexcount+this.state.dropdowncount;
        console.log("next index"+nextindex);
    }

    bulkReject(){

    }
    
    render(){
      
        return(
            <div>
                <select onChange={this.changetableview.bind(this)}>
                    <option value="5" id="5">5</option>
                    <option value="10" id="10">10</option>
                    <option value="20" id="20">20</option>
                </select>

                <input type="submit" value="Bulk Approve" onClick={this.bulkApprove.bind(this)} /> <input type="submit" value="Bulk Reject" />
            <table>
                <tr>
                    <td>Gallery</td>
                </tr>
                <tbody>
                    <tr style={{display:"block"}}>
                        {this.state.data1.map(this.renderTable)}
                    </tr>
                </tbody>
            </table>
            <div> <input type="button" value="Previous" onClick={this.onclickPrev.bind(this)}/> <input type="text" value={this.state.pagecount}/> <input type="label" value={this.state.totalpagecount}/> <input type="button" value="Next" onClick={this.onclickNext.bind(this)}/></div>
            </div>
            );
    }
}
export default TabExample;