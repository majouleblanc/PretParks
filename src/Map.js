import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import data from './data/PretParken.json';

class Map extends React.Component {
    list = data.pretpark;

    row = this.list.map((item) => {
        return (
            <Marker position={[item.LAT, item.LON]} >
                <Popup>
                {item.name} 
                </Popup>
            </Marker>
        );
    });
  render() {
    
    return (
      <LeafletMap
        center={[this.props.data.LAT, this.props.data.LON]}
        zoom={15}
        maxZoom={17}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
        
        {this.row}
        
        <Marker position={[this.props.data.LAT, this.props.data.LON]}>
          <Popup>
            <span className="text-danger"> {this.props.data.name}  </span><br/>
            <span> {this.props.data.straat}</span><br/>
            <span> {this.props.data.gemeente} {this.props.data.postcode}</span>
          </Popup>
        </Marker>
        
      </LeafletMap>
    );
  }
}

export default Map;
