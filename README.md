# netlify-lambda-typescript-starter
A simple boilerplate template for netlify typescript functions

### Tech

This Project uses the following and few other services to work:

* [Typescript] - Strongly typed language based on Javascript
* [Netlify] - To build and deploy serverless apps
* [Webpack] - To bundle and package the code
* [Babel] - To transpile ESNext to ES5 compatible code

### Development

Open your favorite Terminal and run these commands.

```
git clone https://github.com/jefreesujit/netlify-lambda-typescript-starter.git
```

```
npm install
```
```
npm run build
```
```
npm run serve
```

Make sure the local configuration is setup properly. Refer [Configuration](#configuration) section below.

Verify the deployment by navigating to your server address in your preferred browser. Should load an unauthorized screen.

```sh
127.0.0.1:9000
```
or
```sh
http://localhost:9000
```

Try accessing the function handler from Postman or any API service tools
(Name of the file will be the name of the route)

```sh
http://localhost:9000/api/handler
```

### Deployments

Continuous Integration pipeline can be setup between `Github` and `Netlify`.

Any branch commits would create a preview deployment.

Pushing changes to `master` would trigger a `production` deployment.

Refer `https://docs.netlify.com/site-deploys/create-deploys/` for further details on deployments.
