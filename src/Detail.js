import React, {Component} from 'react';
import Map from "./Map.js";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";



class Detail extends Component {

    style = {
        detail: {
            display: "flex",
            flexDirection: "column",
            width: "70%"
        },
        top: {
            display: "flex",
            flexDirection: "row"
        },
        middle: {
            display: "flex",
            flexDirection: "row"
        },
        comment: {
            display: "block",
            rows: "8",
             cols: "150",
            maxlength: "250"
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            loading: false
          };
        this.addComment = this.addComment.bind(this);
    }



    componentDidMount() {
      // loading
      this.setState({ loading: true });
  
      // get all the comments
      let url = `http://localhost:58013/api/MmtComments/comments/${this.props.data.key}`;
      // const url = "https://api.randomuser.me/";
    //   const response = await fetch(url);
    //   const data = await response.json();
      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({
            comments: res,
            loading: false
          });
        })
        .then(res => console.log(res)) //for debugging 
        .catch(err => {
          this.setState({ loading: false });
        });
    // console.log(data)
     }

  /**
   * Add new comment
   * @param {Object} comment
   */
  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
  }



    render() {
        let url = `/images/small/${this.props.data.image}`;
        let alt = ` foto van ${this.props.data.name}`;

        
        return (
           
           <div className="container DCon">
                <div className="row">
                    <div className="col-md-4">
                        <h1 className="text-danger">{this.props.data.name}</h1><hr/>
                        <div><span>Address : </span>{this.props.data.straat} | {this.props.data.gemeente} {this.props.data.postcode}</div>
                        <div><span>Email   : </span> {this.props.data.email}</div>
                        <div><span>Link    : </span><a href={`${this.props.data.link}`} target="_blank" rel="noopener noreferrer">Homepage Pretpark</a></div>
                        <div><span>GSM     : </span>{this.props.data.telefoon}</div>
                        <div className="Com-Text">{this.props.data.comment}</div>
                        <div><button className="btn btn-info" onClick={()=> this.props.action('List')}>Lijst Pretparken</button></div>
                    </div>
            
                    <div className="col-md-8 myImg">
                        <img className=" myImg" src={url} alt={alt}/>
                    </div>
                </div>
                <hr/>
            
                <div className="row ">
                     <div className="col-md-12">
                       <Map data={this.props.data}/>
                    </div>
                </div>
                
                <hr/>
              
                <div className="row">
                    <div className="App container bg-light shadow">
                 

                    <div className="row">
                      <div className="col-4  pt-3 border-right">
                        <h6>Say something about {this.props.data.name}</h6>                       
                        <CommentForm test = {this.props.data.key} addComment={this.addComment}/>
                    </div>
                    <div className="col-8  pt-3 bg-white">
                        <CommentList
                            loading={this.state.loading}
                            comments={this.state.comments}
                        />
                    </div>
                 </div>
            </div>
            </div>
            </div>
)}
}

export default Detail; 


