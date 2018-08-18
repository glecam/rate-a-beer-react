import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  state = {
    center: { lat: 0, lng: 0 },
  };

  initGeocoder = ({ map, maps }) => {
    const geocoder = new maps.Geocoder();

    geocoder.geocode({ address: this.props.center }, (results, status) => {
      if (status === 'OK') {
        const coords = results[0].geometry.location.toJSON();

        this.setState(state => ({
          ...state,
          center: { lat: coords.lat, lng: coords.lng },
        }));

        /* eslint-disable-next-line */
        const marker = new maps.Marker({
          position: { lat: coords.lat, lng: coords.lng },
          map,
        });
      } else {
        console.log(
          `Geocode was not successful for the following reason: ${status}`,
        );
      }
    });
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          onGoogleApiLoaded={this.initGeocoder}
          bootstrapURLKeys={{ key: 'AIzaSyAXDtZpcayoKRAUK2j_oM1LaS8xhYVKxxk' }}
          center={this.state.center}
          defaultZoom={15}
          yesIWantToUseGoogleMapApiInternals
        />
      </div>
    );
  }
}

export default Map;
