import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
// import { InfoWindow, Marker } from 'google-maps-react';
// import vendorSeed from '../../../../scripts/seedDB'


import {products} from './places';

import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Maps';
const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  
    
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };
    
  //  filterCategory = (e) =>{
  //   var categoryPicked = e;
  //   console.log(categoryPicked+ "category passed to filter category")
  // } 
  
    render() {

     
      
    
      const product = products[0];
    
      return (
        
        <CurrentLocation
          centerAroundCurrentLocation
          google={this.props.google}
        >
          <Marker onClick={this.onMarkerClick} name={"my location"} icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}/>
          <Marker onClick = {this.onMarkerClick} name={product.Name}
position={{lat: 32.715736, lng: -117.161087}} />
<Marker onClick = {this.onMarkerClick} name={'here'}
position={{lat: 32.7560, lng: -117.161087}} />
<Marker onClick = {this.onMarkerClick} name={'here'}
position={{lat: 32.842674, lng: -117.257767}} />

 
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </CurrentLocation>
      );
    }
  }

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDcVj1DhyIDz72KxCdYdlyYfeYn01e_SAw'
})(MapContainer);

export const categoryFilter = (e) =>{

  
  
  console.log(e + " here");
  //this.filterCategory(e);//figure out how to pass this to the function
      }
  