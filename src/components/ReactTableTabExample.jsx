import React from 'react';
import Tableviews from 'react-table';


class ReactTableTabExample extends React.Component{

    constructor(){
        super();
        this.state={
            data:[
                {
                    title:"Welcome1",
                    number:"1",
                    id:1
                },
                
                {
                    title:"Welcome2",
                    number:"2",
                    id:2
                }
            ],
            data1:[
                {
                    title:"Hello1",
                    number:"3",
                    id:3
                },
                
                {
                    title:"Hello2",
                    number:"4",
                    id:4
                }
            ],
            renderdata:[],
            headers : [{
                Header: 'number',
                accessor: 'number' // String-based value accessors!
              }, {
                Header: 'title',
                accessor: 'title',
              
              },{    
                Header: 'thumbnailUrl',
                accessor: 'thumbnailUrl',
                Cell: row=><button name={row.original.id} value={row.original.id} onClick={()=>this.onThumbnailClick(row.original.id)}>Click Me</button>
              }],
              currentdiv:"Accept"
        }
    }

    onThumbnailClick(this_id){
        console.log(this_id);

        let datalocal=[];
        datalocal=this.state.data;
        let datalocal2=[];
        datalocal2=this.state.data2;
        var i=0;
        let obj={};
        for(i;i<=datalocal.length;i++){
            
            if(datalocal[i].id==this_id){
             obj={
                id:datalocal[i].id,
                title:datalocal[i].title,
                number:datalocal[i].number
            };
            datalocal.splice(i,1);
               
            break;
        }

        }
        
        this.setState({renderdata:datalocal});
        this.setState({data:datalocal});
        this.setState({data1:datalocal2});

        console.log("data1 "+datalocal);
        console.log("data2 "+datalocal2);
       

    }

    handleClickDiv(event){

        switch(event.target.id)
        {
            case "Accept":
            this.setState({renderdata:this.state.data});
            this.setState({currentdiv:"Accept"});
            break;
            
            case "AcceptWithEdits":
            this.setState({renderdata:this.state.data1});
            this.setState({currentdiv:"AcceptWithEdits"});
            break;

        }

    }

    componentDidMount(){
        this.setState({renderdata:this.state.data});
    }

    render(){

        return(
            <div>
            <div id="Accept" onClick={this.handleClickDiv.bind(this)}>Accept</div> <div id="AcceptWithEdits" onClick={this.handleClickDiv.bind(this)}>AcceptWithEdits</div> 
            <Tableviews columns={this.state.headers} data={this.state.renderdata}
             row={this.state.renderdata.id}/>
             </div>
        )
    }
}
export default ReactTableTabExample;