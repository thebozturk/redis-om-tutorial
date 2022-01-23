<h1>About</h1>
<p>This repository has been created as a basic redis-om project with Redis Cloud.<p>

<h2>Technologies</h2>
<li>Express</li>
<li>Redis</li>
<li>Redis Cloud</li>

<h2>Requirements<h2>
<li>Redis Cloud</li>

<br>
<h3>Installation</h3>

 `$ git clone https://github.com/thebozturk/redis-om-tutorial.git`

 `$ cd redis-om-tutorial`
 
 `$ npm install `
 
  `$ npm start `
 <br>
 
### Redis Cloud Url 

```
REDIS_URL=redis://default:PASSWORD@HOST:PORT
```
<br>
```
You have to create your own `env` file for configs.
```

 <h2>Endpoints</h2>
 
- POST /products - creates new product
- GET /products/{id} - gets a product by id
