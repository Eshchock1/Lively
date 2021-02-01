# Lively

<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="assets/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Live.ly</h3>

  <p align="center">
    Changing the way we engage audiences.
</p>

## About The Project

Intorducing Live.Ly, a fan engagement app focussed on sporting events that is guarenteed to keep viewership as high as can be. There is so much available to watch nowadays, so you can’t fault the customer for leaving to another program the moment things get less entertaining.There is so much available to watch nowadays, so you can’t fault the customer for leaving to another program the moment things get less entertaining.

Lively has 2 main components
* Mobile app (for users to play trivia) (https://github.com/Eshchock1/Lively/)
* Web app (for producer to manage the schedule and generate trivias) (https://github.com/hassanalawie/LiveLy)


In short, here's why our app is the optimal choice for your television production workflow:
* Generate Questions on Web Dashboard
* Manage All Daily Events 
* Push Trivia to Users through App

### Installation (mobile)

This cross platform mobile application (IOS and Android) was created with react native to serve as the platform for users to play daily trivia and view leaderboards. Using firebase realtime db to store information like trivia questions, leaderboard stats, and other live data, as well as firebase authentication for our mobile app auth. Using figma, we designed our mobile application to include 3 main pages, current events, leaderboard, and profile. Furthermore, an elegant trivia flow was also created for when trivia goes live. \
A link demonstrating the mobile app: https://drive.google.com/file/d/1UqTonXkkxi4dau_8_H2WibSOJ_19UA1_/view?usp=sharing \
A link to the figma: https://www.figma.com/file/jk1MFeLW0GF1EtrJ1rtj4R/Untitled?node-id=23%3A1520

1. Clone the repo
   ```sh
   git clone https://github.com/Eshchock1/Lively
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run Expo 
   ```sh
   expo start
   ```
   
   
### Installation (web-app)
The web application is a significant portion of the product. The web application serves as a producer dashboard for the producer to 1. manage when events go live based on the RSS feeds, 2. Generate trivia questions at the click of a single button, 3. Integrate seamlessly with RSS feeds. Once logged into the react web app, the producer is shown all the corresponding events from the RSS feed, and can choose when events will go live. Based on this, when sports related events are playing, the producer has the option to generate a certain number of questions of their choice at the click of a button. The web app uses public facing APIs to automatically generate questions and answers corresponding to the information from the RSS feed. 

Link to web app repo: https://github.com/hassanalawie/LiveLy

1. Clone the repo
   ```sh
   git clone https://github.com/hassanalawie/LiveLy.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run Npm 
   ```JS
   npm start
   ```
   
## Video Link

VIdeo Link: https://drive.google.com/file/d/1UqTonXkkxi4dau_8_H2WibSOJ_19UA1_/view?usp=sharing
   
   
## Contact

Eshwar Chockalingam - eshchock1@gmail.com

Vansh Sethi - vanshsethi17@gmail.com

Hassan Alawie - hassan.alawie10@gmail.com

Nushaine Ferdinand  - nushainef@gmail.com
