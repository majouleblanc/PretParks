import React from 'react';


function ALabel(props) {
    const style = {
        display: "inline-block",
        color: "#ffffff",
        backgroundColor: "#3d94f6",
        textShadow: "0px 1px 0px #1570cd",
        padding: "6px 24px",
        borderRadius: "6px",
        border: "1px solid #337fed"
    }
    return (<div>
        <label style={style}>{props.caption}</label>
    </div>);
}


export function AButton(props) {
    const style = {
        boxShadow: "inset 0px 1px 0px 0px #97c4fe",
        background: "linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%)",
        backgroundColor: "#3d94f6",
        borderRadius: "6px",
        border: "1px solid #337fed",
        display: "inline-block",
        cursor: "pointer",
        color: "#ffffff",
        fontFamily: "Arial",
        fontSize: "1em",
        fontWeight: "bold",
        padding: "6px 24px",
        textShadow: "0px 1px 0px #1570cd"
    }

    return (<button onClick={props.onClick}
        style={style}>{typeof props.caption !== 'undefined'
            ? props.caption : 'button'}</button>);
}


export default class LikePanel extends React.Component {

async componentDidMount(){
    // let url = `http://localhost:58013/api/MmtLike/${this.props.pretParkKey}`;
    // //  const url = "https://api.randomuser.me/";
    //  const response = await fetch(url);
    //  const data = await response.json();
    // //  console.log(data);
    

    //  loading
    //  this.setState({ loading: true });
 
     //get all the comments
     let url = `http://localhost:58013/api/MmtLike/${this.props.pretParkKey}`;
    //  const url = "https://api.randomuser.me/";
     const response = await fetch(url);
     const data = await response.json();
     fetch(url)
       .then(res => res.json())
       .then(res => {
         this.setState({
           likes: res.likes,
           loading: false
         })
       })
       .catch(err => {
         this.setState({ loading: false });
       })
     
}

    async getLike () {
        // loading
    //  this.setState({ loading: true });
 
     // get all the comments
    //  let url = `http://localhost:58013/MmtLike/${this.props.pretParkKey}`;
    //  const url = "https://api.randomuser.me/";
    //  const response = await fetch(url);
    //  const data = await response.json();
    //  fetch(url)
    //    .then(res => res.json())
    //    .then(res => {
    //      this.setState({
    //        likes: res,
    //        loading: false
    //      })
    //    })
    //    .then(res => console.log(res)) //for debugging 
    //    .catch(err => {
    //      this.setState({ loading: false });
    //    })
    //  return data
    }
   

   



    constructor(props) {
        super(props); // Now 'this' is initialized by calling the parent constructor.
        this.state = {
            likes: 0
        };
        // console.log(this.getLike())
        this.incrementLike = this.incrementLike.bind(this);
    }

    incrementLike = () => {
        // let newCount = this.state.likes + 1;
        // this.setState({
        //     likes: newCount
        // });


        // Build formData object.
        let data = {key: `${this.props.pretParkKey}`}

        // loading status and clear error
        this.setState({ error: "", loading: true });

        // persist the comments on server
        // let { likes } = this.state;
        let url = `http://localhost:58013/api/MmtLike/`
        // console.log(comment);
        fetch(url, {
            method: "post",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            // .then(res=> console.log(res))
            .then(res => {
                if (res.error) {
                    this.setState({ loading: false, error: res.error });
                } else {
             this.setState({likes:res.likes})

                    // add time return from api and push comment to parent state
                    // comment.time = res.time;
                    // this.props.addComment(comment);

                    // clear the message box
                    this.setState({
                        loading: false,
                    });
                }
            })
            .catch(err => {
                this.setState({
                    error: "Something went wrong while adding your like.",
                    loading: false
                });
            })
        }


    render() {
        return (
            <div>
                    <div className="d-flex justify-content-around ">
                        <AButton caption="I like" onClick= {this.incrementLike} />
                        <ALabel caption={this.state.likes} />
                    </div>
            </div>);
    }
}