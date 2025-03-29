# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.


0. Connect to site for first time
- loads html, css, js
-- on activation serviceworker (if this is the correct lifecycle)
    -- nothing happens
-- on opening a tab on the domain FetchEvent will be fired to load the initial html document
   -- this call can be intercepted and gives Client.id
    -- fetch tuple from indexdb (clientid, keypair, jwt)
    -- validate if "con" of jwt is same as public of keypair
     
            -- create keypair/use fetched keypair
            -- ask for challenge
            -- sign clientid,+jwt.sign, challenge
            -- send to server, 
              -- authorization header = serialized public key, jwt, clientid signed (jwt.sig+clientId+challenge)
              -- POST/GET/PUT/DELETE
            -- response is updated new jwt or anon jwt
            -- update/insert indexdb entry
            -- fetch all active clients
            -- trim indexdb of unused clients
            

            -- send to server     
    -- get clients.id
    -- creates public private key per client.id (non extractable private key)
    -- store in indexdb table | client.id | keypair |
    -- notify backend of clientid not in use in the table for delettion
    -- send to backend for each clientid the tuple
        -- (clientid, public-key, signature over the clientid)
        -- backend returns, (anonymous) jwt with the "con" field filled in, representing the public key


- service worker gets all client ids
- browser creates private/public keypair
- stores keyp

1. User does refresh (shift f-5)
- 

anytime browser goes to website
 if cookies not set?
  -- server generates sessionId (if session id cookie absent) (http only)
  -- server generates SIGNER TOken