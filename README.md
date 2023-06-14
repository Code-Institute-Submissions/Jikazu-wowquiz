# WOW QUIZ

# The purpose with this project

The purpose of my project is to test the knowledge of World of Warcraft players on how much they know about the game.

The target audience are World of Warcraft players wanting to test their game knowledge.

This website is the second of five projects that needs to be completed in order to receive a diploma in Software Development from The Code Institute.

Requirements for the project is that the website has to be static and responsive using HTML5, CSS3 and Javascript.

A live version of the project can be found here - https://jikazu.github.io/wowquiz/

# Index

+ [UX](#ux "UX")
   + [Site Purpose](#site-purpose "Site Purpose")
   + [Site Goal](#site-goal "Site Goal")
   + [Audience](#audience "Audience")
   + [User Goals](#user-goals "User Goals")
   + [Requirements](#requirements "Requirements")
+ [Design](#design "Design")
   + [Colour](#colour "Colour")
   + [Typography](#typography "Typography")
   + [Images](#images "Images")
+ [Features](#features "Features")
+ [Technologies Used](#technologies-used "Technologies used")
+ [Testing](#testing "Testing")
   + [Validator Testing](#validator-testing "Validator Testing")
   + [Unfixed bugs](#unfixed-bugs "Unfixed bugs")
+ [Development and Deployment](#development-and-deployment "Development and Deployment")
+ [Content](#content "Content")
+ [Credits](#credits "Credits")
+ [Great Webpages](#great-webpages "Great webpages")


# UX

### Site Purpose:
* This site is meant for anyone that would like to try their game knowledge of World of Warcraft classic.
 
### Site Goal:
* It's here to give entertainment for anyone looking to do a quiz about World of Warcraft classic. 

### Audience:
* Anyone who is a fan of the World of Warcraft franchise. 

### User goals:
* To test their game knowledge about World of Warcraft Classic.

### Requirements
A responsive website that incorporates the languages I have learned so far, with a development process that needs to be well documented through a version controls system such as GitHub.

Required technologies: HTML, CSS, Javascript.


## Design
This is my second project, and I've been inspired by other student's P2 quizes that I've seen on Slack, but doing it my own way. My footer has been taken from my previous P1 project. Basic css and structure is inspired from [GreatStack](https://www.youtube.com/watch?v=PBcqGxrr9g8&list=LL&index=1&t=663s) although a quite modified version.

As for the background and colours I decided to go with the classic login screen when you log in to the game, as that is the first thing one used to see when logging in to the classic version of the game back in the day, and a quiz background with parchment background as that is similar to the questlog window in the game.

![questlog](/assets/readmeImages/quizbackground.jpg)


### Colour
The colour palette is taken from the colours from the site's background. 

### Typography

The google fonts [Cabin](https://fonts.google.com/specimen/Barlow?query=barlow) and [Open Sans](https://fonts.google.com/specimen/Open+Sans) was used for this project with a fallback of Sans-Serif. 

### Images

I've borrowed a screenshot of the login screen from [Spas Dimitrov at ArtStation](https://www.artstation.com/artwork/KrzPP9), parchment picture from [Wikipedia Commons](https://commons.wikimedia.org/wiki/File:Parchment.00.jpg) and favicon from [Logos Download](https://logos-download.com/456-world-of-warcraft-logo-download.html). 



## Features

The quiz has one area, which is the main area of the quiz where all the interactions are. It also have a footer with links to my guild's discord and Warcraftlogs page.



### Existing features

#### Main quiz

   - The main quiz area contains the title, where the questions are displayed, the multiple choices, along with the buttons to check your answer, go to the next question, and resetting the quiz. 

   #### Footer Section

   - The footer contains my guilds social media links.


   ## Technologies used

   - [HTML](https://en.wikipedia.org/wiki/HTML)
   - [CSS](https://en.wikipedia.org/wiki/CSS)
   - [Javascript](https://en.wikipedia.org/wiki/JavaScript)

   ## Testing
   Test of functionality and appearance of the website has have been dealt with troughout the development process. 
   Tests has been conducted with Google Chrome, Firefox, Edge and Safari and on different devices.

   - Selecting an answer lights up the button to indicate what you've selected.
   - Clicking on Check answer shows if you're correct or incorrect.
   - Clicking on Next displays the next question along with the choices and resets the colours.
   - Clicking on Reset refreshes the page.
   - Getting to the end of the quiz hides all the buttons and shows you your final score.
   - The footer links works and brings you to the links.

   I've listed my main issues here - 

   1. After clicking Check answer and clicking next button the colours wouldn't reset to the original colour.
   - Solution: Added a section in the on click function for the next button to reset all buttons to it's original css.
   2. Early on in deployment I had a section to display the score and where the question was at the end to show the final score, so you'd see your score twice.
   - Solution: Added in the code to hide the scorebox h3 and change the text in the question area to what the final score is.
   3. Showing only the choices and not the placeholder text as well in the choice buttons.
   - Solution: Changed the way entirely I was displaying them to get the values from the array of questions. 
   4. Clicking next button without having made a choice threw an error in the console.
   - Added in the code that if useranswer is above 1 rather than 0, then the buttons changes back to it's original colour.  

   Other than the above, I had some general difficulties knowing where to begin, but after having talks with my mentor and peers I decided to completely revamp my code at one point. I also had some general spelling mistakes and open brackets that has been remedied. 



### Validator Testing

-HTML


![W3C HTML Validator]



![Jigsaw Validator]

- Lighthouse testing

![Lighthouse testing score]

   
### Unfixed Bugs

1. I've had reports from a beta tester with Safari on Mac that the choices did not change color as it should. I have not been able to replicate this by myself as I do not use Safari or a Mac.This seems to be working fine on an android phone, and on pc in Chrome, Firefox and Edge on different devices.

2. When selecting a choice that is incorrect, and then changing it to correct choice, and clicking the Next button does not reset the first button changed back to it's original color and stays red.

All known bugs are in the [Testing](#testing) section, with their solution. 

## Development and Deployment

The development environment used for this project was GitPod. To track the development stage and handle version control I've done regular commits and pushes sto GitHub. The GitPod environment was created by using a template provided by Code Institute. 

The live version of the project is deployed at GitHub pages.

The procedure for deployment followed the "Creating your site" steps provided in [GitHub Docs.](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

1. Log into GitHub.
2. Locate the GitHub Repository that shall be deployed live.
3. At the top of the repository, select Settings from the menu items.
4. Scroll down the Settings page to the ”GitHub Pages" section.
5. At the ”Source” section choose ”main” as Branch and root as folder and click ”Save”
6. The website will deploy and the pages refreshes to provide the live link to the project.

The live link can be found here: https://jikazu.github.io/wowquiz/
   

## Content

- All content on this site has been produced by the author of this project. 
- The icons in the footer was taken from [Font Awesome](https://fontawesome.com/).


## Credits

Many thanks to:

Martina Terlevic
 - My mentor

 Ka Heng Ho 
 -  My boyfriend who was my rock when I struggled and calmed me down.

 Slack.

 ### Great webpages

 Sites that I've used a lot during this project to look up various things are:

 https://www.w3schools.com/
 https://www.youtube.com
 https://flexboxfroggy.com/

 And all the previous lessons in HTML-Essentials, CSS-Essentials and the Walkthrough project ”Love Maths!”.

 Kind Regards,

 [Back to top](#wow-quiz)
