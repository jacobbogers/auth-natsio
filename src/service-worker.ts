
/// <reference types="@sveltejs/kit" />

console.log('hello')

async function init(): Promise<void> {
    console.log('waypoint 1')
    const allClients = await self.clients.matchAll({ type: 'window' });
    console.log('allClients', allClients);
    for (const client of allClients) {
        console.log('client', client);
    }
    console.log('waypoint end')
}

addEventListener("fetch", (event: FetchEvent) => {
    const url = new URL(event.request.url);
    const { clientId } = event;
    console.log('url', { clientId, url });
    event.respondWith(fetch(event.request));
});


init();