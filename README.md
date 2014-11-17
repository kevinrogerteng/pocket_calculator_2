#Pocket Calculator#

Your typical pocket calculator!

I developed this calculator using Yeoman to generate the AngularJS, NodeJS and ExpressJS framework which I have never done before. I worked on this for three days and used OOP services in Angular. I used NodeJS as my API serving for calculations. 

Unfortunately, I was unable to implement unit and E2E testing. Hopefully, I would be able to do it on my spare time. 


##How To Run This APP##

1. You will need to make sure you have NodeJS installed (and npm, which normally comes with NodeJS).
2. Clone repository.
3. Cd into client folder and run npm install, bower install then grunt.
4. Cd into server folder and run npm install
5. While still on server folder, run npm test and open localhost:3000 on browser

##Particular Files To Look At##

1. /server/app.js
2. /server/api/calculator.js
3. /client/app/scripts/app.js
4. /client/app/scripts/controllers/calculator.js
5. /client/app/scripts/services/calculator_object.js

##What's Next?##
- Adding unit testing and end to end testing
- Adding other pocket calculator functionality such as Memory+, Memory- and MemoryC