# Simon Game

The goal of the Simon Game is to exercise your mind, remembering the color order that is passed to you. How many colors do you remember?

Have fun!!

Project developed to improve concepts in React.

[Demo](https://joaocorner.github.io/genius-game/)

![Preview Mobile](https://raw.githubusercontent.com/joaocorner/genius-game/main/public/img/preview-mobile.png)
![Preview](https://raw.githubusercontent.com/joaocorner/genius-game/main/public/img/preview.png)

## Sumary

- [Simon Game](#simon-game)
  - [Sumary](#sumary)
  - [My process](#my-process)
    - [Made using](#made-using)
    - [Run in your computer](#run-in-your-computer)
    - [Learn more...](#learn-more)
  - [Author](#author)
  - [To-do list](#to-do-list)

## My process

### Made using

- React
- CSS

### Run in your computer

You need to have [Node](https://nodejs.org/en/) installed on your computer.

After downloading the government download, in the project's root folder using the `npm install` command for the project ass, and after the dependency, use `npm start`

The application will run in developer mode.
Open [http://localhost:3000](http://localhost:3000) to view in your browser.

If you make any changes to the project, you will see it in real-time updating.
If there is an error, it will be reported in the console.

### Learn more...

To learn React, check out the [React documentation](https://reactjs.org/)

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)

## Author

- Github - [joaocorner](https://github.com/joaocorner)
- LinkedIn - [joaoeduardocorner](https://www.linkedin.com/in/joaoeduardocorner/)

## To-do list

- [ ] when loading the page
  - [ ] show score/time saved in history (local storage)
  - [ ] provide customization for the game
    - [ ] insert a time to pass the colors
- [ ] when clicking start
  - [ ] trigger an activity start time
  - [ ] in loop:
    - [ ] generate a random number between 1 and 4
    - [ ] associate that number to a button style and show the player
    - [ ] in case of empty array
    - [ ] in case it already has value
      - [ ] fetch the values ​​and display them with a spaced time
      - [ ] generate a random number between 1 and 4
      - [ ] associate that number to a button style and show the player
    - [ ] receive user input by clicking in the same order as the displayed value
    - [ ] compare input value with stored value
    - [ ] if the value is equal:
      - [ ] add a point to the user
      - [ ] move to the next comparison
    - [ ] if the value is different
      - [ ] end of the game
      - [ ] end time
      - [ ] save the maximum score achieved
- [ ] when clicking reset
  - [ ] ask if you really want to reset the record
  - [ ] if so, delete the score from the local storage, otherwise return
- [ ] when clicking stop
  - [ ] button changes to resume
  - [ ] pauses the timer
  - [ ] if running color execution, pause
- [ ] when clicking on the resume
  - [ ] the timer continues to count
  - [ ] if it was showing the colors before, it picks up where it left off
- [ ] design

extras

- [ ] play sound on click
- [ ] use shortcut keys
- [ ] choose difficulty
