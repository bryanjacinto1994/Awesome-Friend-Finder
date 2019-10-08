# Awesome-Friend-Finder

### Links: 

Deployed Website: <br>
https://bryanjacinto1994.github.io/Awesome-Friend-Finder/
<br>

Github: <br>
https://github.com/bryanjacinto1994/Awesome-Friend-Finder


<hr>

### Screenshots: <br>
NOTE: (PICTURES IS NOT SHOWING FOR SOME REASON, WILL FIX THIS:)
* Home page: <br> <br>
![Site](./Screenshots/survey.png) <br> <br>
* Survey Page: <br> <br>
![Site](./Screenshots/survey2.png) <br> <br>

* Results on Modal on the Survey Page: <br> <br>
![Site](./Screenshots/survey1.png) <br> <br> <hr>

<hr>


## Tools Used:

* Visual Studio Code - Open source code editor for building and debugging web and cloud applications.
* JavaScript - A scripting language that uses curly-bracket syntax, first class functions and object-oriented.
* jQuery - A JavaScript library that simplifys to manipulate HTML DOM.
* Git - Version control system to track changes to source code.
* Github - Hosts respository that can be deployed to GitHub pages.
* NodeJS - A JavaScript runtime built on Chrome's V8 JavaScript engine
<br>

### NPM Packages Used:

* Express
* Path



<hr>

## Get Started :
* Run Terminal/Git Bash.
* Do an npm install on these following packages:<br>
##### * Express
##### * Path


#### (The Summary Section Will Explain How To Do A Proper Installation On These NPM Packages)
* Go into the files where the javascript file is located. <br>
Run on the Terminal / Gitbash<br>
### node server.js:
Once this command is run, "node server.js", the listener will make a PORT to local host: 8080. Then on the web browser, the screenshots above should show the page on the screen.

<hr>

## Summary

Using JavaScript and all the NPM packages listed above via Visual Studio Code, a friend survey matchmaking was created. By using two npm packages, express and path, I was able to create a connection and different routes for the web browser to display in. 

How it works:

Once the users goes on the homepage, they will click the button to start the survey. Once they click they button, it will take them to a different route.<br><br>

Homepage: "http://localhost:8080/" <br>

Survey Page: "http://localhost:8080/survey" <br>

Then they will fill out the required text and start the survey depending on their personality. Once they click the submit button, they should be able to get a random match depending on what their scores are.






<hr>





## Code Snippet

htmlRoutes.js : <br>

*  This code snippet below shows the routes name. The "*" represents the default page so in that case, it will automatically take you the the home.html page since that is the default. Once a user starts the survey, it will give them a direct patch to a different route called "/survey". It will then execute the survey.html page.
<br> 

```javascript

var path = require('path');

module.exports = function(app){

    app.get('/survey', function(req,res){
        res.sendFile(path.join(__dirname, '../public/survey.html'));

    });
    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    
}
    
```

<hr>



## Author Links
Linkedin:<br>
https://www.linkedin.com/in/bryan-jacinto-100438aa/

Github:<br>
https://github.com/bryanjacinto1994
<br>


<hr>