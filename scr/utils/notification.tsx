import PushNotification from 'react-native-push-notification';

PushNotification.createChannel(
  {
    channelId: 'notif-id', // Nama channel ID yang ingin Anda buat
    channelName: 'notif', // Nama channel yang ingin Anda tampilkan
    channelDescription: 'push notif', // Deskripsi channel (opsional)
    soundName: 'default',
    importance: 4,
    vibrate: true,
  },
  created => console.log(`CreateChannel returned '${created}'`),
);
