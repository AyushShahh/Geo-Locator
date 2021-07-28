# Geo-Locator ![logo](assets/favicons/favicon-32x32.png)

[![Views](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FAyushShahh%2FGeo-Locator&count_bg=%23000000&title_bg=%23555555&icon=github.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com)
[![GitHub stars](https://img.shields.io/github/stars/AyushShahh/Geo-Locator)](https://github.com/AyushShahh/Geo-Locator/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/AyushShahh/Geo-Locator)](https://github.com/AyushShahh/Geo-Locator/network)
[![GitHub issues](https://img.shields.io/github/issues/AyushShahh/Geo-Locator)](https://github.com/AyushShahh/Geo-Locator/issues)
[![Twitter](https://img.shields.io/twitter/url?logoColor=black&style=social&url=https%3A%2F%2Fgithub.com%2FAyushShahh%2FGeo-Locator)](https://twitter.com/intent/tweet?text=Woah!%20This%20is%20cool.&url=https%3A%2F%2Fgithub.com%2FAyushShahh%2FGeo-Locator)

Get your **geo-location** details with **live position** on map.<br>
Check the live site **[here](https://geo-locator.netlify.app)**.
**<p>For using this code check [instructions](#instructions-for-using-this-code).**

## Table of Contents
- [Site walkthrough](#site-walkthrough)
- [Brief](#brief)
- [Using the site](#using-the-site)
- [Web App](#web-app)
- [Encountering an Error](#encountering-an-error)
- [Tech-Stack](#tech-stack)
- [APIs used](#apis-used)
- [External Libraries used](#external-libraries-used)
- [To-Do List](#to-do-list)
- [Instructions for using this code](#instructions-for-using-this-code)
- [Got some questions?](#got-some-questions)
- [Found a bug?](#found-a-bug)
- [Contributing](#contributing)
- [Contact](#contact)

## Site Walkthrough
Example of the site made:<br>

<img src="assets/demos/walkthrough.gif" width=90%>

## Brief
Geo-Locator is a website that will show your geo-location details and a map with your current position.

### Information Displayed
- **Country:** "Your country name"
- **Address:** "City, Region"
- **Postal Code:** "Postal code of your city/region"
- **IP Address:** "Your current IP Address"
- **ISP:** "Your currrent Internet Service Provider"
- **Latitude:** "Latitude of your location"
- **Longitude:** "Longitude of your location"
- **Red pin** on the map shows your current position.

## Using the site
When you open the site, press `Allow` if it asks for location to display the map and show accurate results.<br>
Keep your location(GPS) on.<br>

> **Note:** The location might be inaccurate sometimes or it may happen that it shows totally wrong coordinates.<br>
But the other information such as Country, ISP and IP will be accurate almost everytime.

## Web App
 While you can go to the browser everytime for using the [website](https://geo-locator.netlify.app), I would suggest you to use the **web app** so that you don't have to go to the browser and type in the website everytime. You can directly open the **web application** on your **home screen** or the **desktop shortcut** on your computer to use the website.<br>

 **Follow the steps:**
1. For desktop users
- Chrome
    - Open the [website](https://geo-locator.netlify.app)
    - Tap the **three dots &#8942;** on the top right corner
    - Click on **More tools**
    - Click on **Create shortcut**
    - Check **Open as window** option and click create
2. For mobile users
- Chrome
    - Navigate to the [website](https://geo-locator.netlify.app)
    - Tap the **three dots &#8942;** on the top right corner
    - Scroll down and click on **Add to home screen**
    - Click **Add**
- Safari
    - Navigate to the [website](https://geo-locator.netlify.app)
    - Click on **Share icon** at bottom<br> 
    (On the iPad, share icon is located at the **top-right**)
    - Tap **Add to home screen** from the menu
    - Type name for shortcut and then tap **Add** button

Now you can use this site as a **Web App**.<br>
The process might be similar for other browsers too.

## Encountering an Error
```
User denied the request for location.
Click allow to see your location on map.
```
This comes if you click `Deny` when asked for location access. Map won't be displayed and coordinates would be inaccurate.<br><br>

```
Map is currently unavailable.
Turn on your Location(GPS).
```
This comes when your location(GPS) is turned off or the application you are using don't have location permissions.<br>Turn on the location(GPS) or go to devices settings > Apps > Navigate to the app and give location permission.<br><br>

```
The request for map location timed out.
```
This comes when the server takes too long to respond to your request, server might be down or your internet connectivity gets interrupted (you suddenly lose internet connection).<br><br>

```
An unknown error occurred.
```
This comes when something unexpected happens.<br><br>

```
Geo-Location is not supported on this browser.
```
This means that Geo-Location is not supported on the browser you are using. Map will not  be displayed and the coordinates shown won't be accurate.

## Tech-Stack
Languages used:
1. **HTML5**<br>
2. **CSS3**<br>
3. **JavaScript**<br>

## APIs used
[Geolocation DB](https://geolocation-db.com) - It is used to get the information of a user's Country and IP Address in JSON format. __*(Available without location access)*__

[ipinfo.io](https://ipinfo.io) - It is used to get the information of a user's City, Region, Postal Code, Internet Service Provider (and Latitude/Longitude if a user denied location access) in JSON format. __*(Available without location access)*__

[HTML Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) - The HTML Geolocation API is used to get the geographical position of a user if they allowed. Here it is used by default to show Latitude and Longitude because it is mostly accurate. __*(Not available without location access)*__

[Google Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started) - The Maps Embed API lets you place an interactive map on your web page. To make the map dynamic for this website, *HTML Geolocation API* is used to obtain the coordinates of the user and then those coordinates are placed in the map source. __*(Not available without location access)*__

## External Libraries used
[jQuery](https://jquery.com/) - jQuery is a JavaScript library. Here it is used for fetching the data in JSON format from APIs and putting those values in html.

[PWACompat](https://github.com/GoogleChromeLabs/pwacompat) - PWACompat is a library that brings the Web App Manifest to non-compliant browsers for better Progressive Web Apps.<br>
Read more on their [blog](https://developers.google.com/web/updates/2018/07/pwacompat).

## To-Do List
- [ ] Showing proper postal codes
- [ ] Adding some more functionality and features

## Instructions for using this code
The code won't work directly if you copy this code or clone this repository. If you want to use this code, you will need your own API key and token for the code to work properly.<br>

- Go to [ipinfo.io](https://ipinfo.io) and create your account. You will get your API token there.
- Go through [this documentation](https://developers.google.com/maps/documentation/javascript/get-api-key) for creating and using Google Maps API key.

After you get your API key and token, paste them in **location.js** file inside **scripts** folder like this:

Google maps API key in: <br>

```javascript
const map_api = "YOUR_KEY";
```
and ipinfo token in:
```javascript
const geoinfo_token = "YOUR_TOKEN";
```
Now this code will work perfectly.<br>
**Note:** Paste them in between ``` " " ``` quotes.

---
**Never share your token or API with anyone or post it publicly.**

## Got some questions?
If you got some questions or you want to tell something, you can discuss them in the [discussions](https://github.com/AyushShahh/Geo-Locator/discussions) tab.

## Found a bug?
If you find a bug, you can always **open an issue** in the [issues tab](https://github.com/AyushShahh/Geo-Locator/issues) to talk about it. Still, if you want to **contact me**, check [here](#contact).

---
**Note:** Make sure you browse through the existing issues to check if the issue already exists.<br>
>Know a fix or want to contribute? Check **contributions** section.

## Contributing
Pull requests are always welcome. But before making any major changes you can open an [issue](https://github.com/AyushShahh/Geo-Locator/issues) to discuss.<br>
For less major or minor changes, you can open a [pull request](https://github.com/AyushShahh/Geo-Locator/pulls).

Make sure you see the [instructions](#instructions-for-using-this-code) for using this code.

**Thanks for contributing.**

# Contact
I don't like spams
<p>
<a href="https://twitter.com/ayushshah__" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/plasticine/100/000000/twitter.png" width="50" /></a>  
&nbsp; <a href="https://www.instagram.com/ayushshah__/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/plasticine/100/000000/instagram-new.png" width="50"/></a>
&nbsp; <a href="https://www.quora.com/profile/Ayush-Shah-133/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/clouds/50/000000/quora.png"/></a>
&nbsp; <a href="https://www.clubhouse.com/@ayushshah_" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/fluent/45/000000/so-so.png"/></a>
&nbsp; <a href="https://www.discordapp.com/users/810944110046740491" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/doodle/46/000000/discord-new-logo.png"/></a><br><br>

**[Back to top](#geo-locator-)**
