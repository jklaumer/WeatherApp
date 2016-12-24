# WeatherApp
project by Jeff Laumer

##Purpose:
*The purpose of this app is to build an Angular application that allows a user to search for weather data using the [OpenWeatherMap](http://openweathermap.org/) API*

<img src="http://i.imgur.com/vLI7hzb.png" />

## Tasks
1. Create a folder named `WeatherApp` in your `dev` folder.
2. Setup your Git workflow.
  - Initialize an empty git repository in `WeatherApp` by running `git init` in the command prompt.
  - Create a repository on GitHub called `WeatherApp` and follow the instructions to add a remote origin.
3. Request an API license key to use the open weather map API and confirm your ability to make calls to the API using a REST client such as Postman.
4. Setup this project to use live reload and inject file references into your index.html.
5. Make use of the following AngularJS features to build this application.
  - Create a `factory` and inject a `$http` service to be used for calling the OpenWeatherMap API. (Remember, separation of concerns!)
  - Create a `controller` and inject the factory you created above. Figure out the code you'll need to write to facilitate the given requirements.
  
  
## Requirements
- Must be able to search for a city by name and see weather for that location.
- Must have a Bootstrap `btn-group` with preloaded cities that when clicked, load weather information for that location.
- Must have a search history that tracks the term entered and the time that the term was entered.


## Extra Credit
- Implement client-side form validation using ngMessages to make the city name input a required field and display a helpful error message such as, "You must enter a city name", if the user clicks the Go! button without entering anything into this field.
