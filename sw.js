// sw.js - ระบบแจ้งเตือนชัยรัตน์ฟาร์ม V14 Final
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(clients.claim()));

self.addEventListener('message', (event) => {
    if (event.data.type === 'SET_ALARM') {
        const { delay, title, body } = event.data;
        setTimeout(() => {
            self.registration.showNotification(title, {
                body: body,
                icon: 'https://cdn-icons-png.flaticon.com/512/1131/1131751.png',
                vibrate: [500, 110, 500, 110, 450, 110],
                tag: 'farm-alert'
            });
        }, delay);
    }
});