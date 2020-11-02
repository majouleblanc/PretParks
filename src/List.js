import React, {Component} from 'react';
import data from './data/PretParken.json';
import LikePanel from './likePanel';


class List extends Component {
list = data.pretpark;


row = this.list.map(item => {
let url = `/images/small/${item.image}`;
let alt = ` foto van ${item.name}`;

        return (
                <div className="movie-card  ">
                    <div>
                        <div className="movie-card card ">
                            <img className="card-img-top" src={url} alt={alt} />
                            <div className="card-footer">
                                <div className="mt-1 d-flex justify-content-around ">
                                    <div className="h6 btn btn-outline-primary disabled">{item.name}</div>      
                                    <LikePanel pretParkKey={item.key}></LikePanel>
                                    <button onClick={()=> this.props.action('Detail', item)} className="mr-0 btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                
                    </div>
                </div>
               )
})


render() {
       return (
                <div className="container">
                    <div className="row">
                        <div className="card-deck">
                            {this.row}
                        </div>
                    </div>
                </div>

               )
         ;}
}

export default List;