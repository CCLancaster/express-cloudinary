## Setup Step-by-Step

1. Create folder (and cd into it)
2. Make entry point (ie touch `app.js` or `index.js`)
3. ```npm init```
4. ```npm install express``` (and other dependencies like dotenv)

    Dependencies you will need:
    ```
    dotenv
    express
    ejs
    express-ejs-layouts
    multer
    cloudinary
    ```

5. create .gitignore (manually OR via terminal ```touch .gitignore```)
6. ```echo node_modules >> .gitignore```
7. ```touch .env```
8. ```echo .env >> .gitignore```
9. ```git init```
10. ```git add -A``` and ```git commit -m "foundation created"```


### Next…
1. Import express
2. Create instance of express (app)
3. Listen for app
4. Stubb out routes…

NOTE: use nodemon to auto restart server on save (npx nodemon index.js)

Finally...

Continue with Sara's Cloudinary Tutorial (you can skip step 2 now though)...
From [Sara King's](https://github.com/009Kings) GitHub [code-along](https://github.com/009Kings/express-cloudinary)

# Cloudinary Tutorial

## Step One: Create an env file
Copy the environment variable from your cloundinary dashboard.

## Step Two: Node modules
Run `npm install`, making sure that you have `dotenv`, `multer`, and `cloudinary` in your package.json and require them

## Step Three: Set up Post route
Stub out a post route and create a form. Make sure the form has `enctype="multipart/form-data"`. This should hit your stub route

## Step Four: Set up Multer
```javascript
let storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}`)
  },
  destination: (req, file, cb) => {
    cb(null, '/tmp/my-uploads')
  }
})
let upload = multer({ storage })
```

NOTE: I set up Multer with the following code...
```javascript
var upload = multer({ dest: './uploads' });
```
## Step Five: Fill in Post Route
* Accept the file
* Upload it to Cloudinary via the cloudinary uploader

## Step Six: Do stuff with results
Results has got a lot of goods, pass secure_url to wherever you want it