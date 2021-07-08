import CONFIG from '../globals/config';
import NotificationHelper from './notification-helper';

let socket = null;

const WebSocketInitiator = {
  init(url) {
    socket = new WebSocket(url);
    console.log('ws connected to => ', socket.url);
    socket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    console.log('websocket onmessage handler => ', message);
    const resto = JSON.parse(message.data);
    console.log(resto);
    NotificationHelper.sendNotification({
      title: 'Bakso is on Menu !',
      options: {
        body: 'Dapatkan Promo segera',
        icon: '/icons/icon-192x192.png',
        image: `${CONFIG.BASE_IMAGE_URL + resto.pictureId}`,

      },
    });
  },
};

export default WebSocketInitiator;
