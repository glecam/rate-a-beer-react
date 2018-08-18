import React, { Component } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { compose, withProps, lifecycle } from 'recompose';

export default class MapRow extends Component {
  state = {
    location: { lat: 50, lng: 40 },
  };

  render() {
    const MyMapComponent = compose(
      withProps({
        googleMapURL:
          'https://maps.googleapis.com/maps/api/js?key=AIzaSyAXDtZpcayoKRAUK2j_oM1LaS8xhYVKxxk',
        loadingElement: <div style={{ height: '100%' }} />,
        containerElement: <div style={{ height: '400px' }} />,
        mapElement: <div style={{ height: '100%' }} />,
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({
        componentDidMount() {
          console.log('props: ', this.props);
          const geocoder = new window.google.maps.Geocoder();
          geocoder.geocode(
            { address: 'oosterwijkseweg 45 olen' },
            (results, status) => {
              if (status === 'OK') {
                const coords = results[0].geometry.location.toJSON();

                this.setState(state => ({
                  ...state,
                  location: { lat: coords.lat, lng: coords.lng },
                }));
              } else {
                console.log(
                  `Geocode was not successful for the following reason: ${status}`,
                );
              }
            },
          );
        },
      }),
    )(props => (
      <GoogleMap
        defaultZoom={7}
        defaultCenter={
          new window.google.maps.LatLng(
            this.state.location.lat,
            this.state.location.lng,
          )
        }
      />
    ));

    return <MyMapComponent />;
  }
}
