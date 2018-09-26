/* w utils/AuthService funckajch setAccessToken setIdToken zrobilem poprawke zeby przy wpisaniu z palca w przegladace /callback nie wyskakiwal blad*/
import { Component } from 'react';
import { setIdToken, setAccessToken } from '../utils/AuthService';

class Callback extends Component {

  /*constructor() {
    super()
  }*/

  componentDidMount() {
    console.log('wlazlem tu 1');
    setAccessToken();
    console.log('wlazlem tu 2');
    setIdToken();
    console.log('wlazlem tu 3');

    window.location.href = "/";
    console.log('wlazlem tu 4')
  }

  render() {
    return null;
  }
}

export default Callback;
