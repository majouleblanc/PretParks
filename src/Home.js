import React, {Component} from 'react';

class Home extends Component {

    render() {
        return (
               <div className="container-fluid">
                      <div className="row">
                        <div class="col-12 px-0">
                             <img src="/bg.PNG" alt="placeholder 960" className="Card image cap aaron"/>
                        </div>
                    
                        <div className="col-8 offset-2 mt-5 ">
                           <button className="btn btn btn-info btn-block" onClick={() => this.props.action('List')}>Lijst Pretparken in Europa</button>
                        </div>
                      </div>  
               </div>
               )
             }
}

export default Home;
