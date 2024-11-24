const webpush = require('web-push');

const vapidKeys = {
  publicKey: 'YOUR_PUBLIC_KEY',
  privateKey: 'YOUR_PRIVATE_KEY',
};

webpush.setVapidDetails(
  'mailto:your-email@example.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const subscription = {
  endpoint: 'SUBSCRIPTION_ENDPOINT',
  keys: {
    p256dh: 'P256DH_KEY',
    auth: 'AUTH_KEY'
  }
};

webpush.sendNotification(subscription, JSON.stringify({
  title: 'テスト通知',
  body: 'iPadでの通知を確認してください！'
})).catch(err => console.error(err));
