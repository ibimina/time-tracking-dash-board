# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![mobile](inde.html(NestHubMax)c.png)
![desktop](inde.html(iPhone6_7_8)c.png)

### Links
- Solution URL: (https://github.com/ibimina/time-tracking-dashboard)
- Live Site URL:(https://ibimina.github.io/time-tracking-dashboard/)


## My process


### Built with

- Reactjs
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

How to fetch data from json file stored in the src folder
- import and read json file inside any component like below.
```js
import db from "./data/db.json";

function App() {
  const [data, setData] = useState(db);
  const { time } = data;
  return (
    <div className="app">
      <Report />
      <Routes>
        <Route path="/" element={<Daily time={time} />} />
        <Route path="weekly" element={<Weekly time={time} />} />
        <Route path="monthly" element={<Monthly time={time} />} />
      </Routes>
    </div>
  );
}
```

## Author
Ibimina Hart
- Frontend Mentor - [@ibimina](https://www.frontendmentor.io/profile/ibimina)
- Twitter -[@ibiminaaH](https://www.twitter.com/ibiminaaH)
- Linkedin -[@ibimina](https://www.linked/in/ibimina-hart.com/ibiminaaH)

