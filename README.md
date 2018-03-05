# US states filter

US states filter is a little but smart web app, that filters the elements on a dropdown with all the US states. 

### Features

  - Fully responsive.
  - Text prediction and multiple selection.
  - Selected states are saved after refresh.
  - When selected states are clicked, a intro of a wikipedia artcile and a background image related to the state are loaded.

### Usage

It's easy!:
  - Type your search and select one of the states suggested in the dropdown.
  - You can also click inside the input box and choose one or more states.
  - Once you'are done try to click on the states selected to see the background change and read its wikipedia info.
  - You can delete them one by one or delete them all using the cross on the right side of the dropdown.


### Techs

It is build using mainly [React](https://reactjs.org/) together with [this](https://github.com/JedWatson/react-select) great third party library

### Installation

In order to run it in your machine you have to:
- Download or clone [US states filter](https://github.com/Salsatore89/usa-states-filter) repository. 
- Run in your Terminal the following scripts:
```sh
$ yarn install
$ yarn run start
```
- Now you can see the app running at http://localhost:8080/!

### Todos

 - Write more tests.
 - Think about the best way to implement google maps.
 
### Why React

 I chose to code this project using ReactJS mainly because I feel more comfortable using this library. VueJS is another Javascript library that I have used, but I have the feeling with it that things come a bit “out of the box”. While with React I think the overall logic and data flow is clearer, and I have almost all the time the feeling that I’m just writing Javascript, not a kind of different language. 
Leaving aside these subjective considerations there are reasons for a developer and for a company too to choose React over other Javascript frameworks. It is backed up by Facebook, and used by big companies like Uber, AirBnb, Netflix, Yahoo, Amazon Web Services… Moreover, based on the google trends and github trend statistics, it is the library that is growing at the fastest rate than all the others. In addition to this it has a very big and active community, a quite important thing when you’re looking for third party libraries or need some advice on forums. React Native is also a very useful library that allows us to develop mobile apps, for Android as well as for iOS. 
In any case, although all these facts should always be taken into consideration, at the end of the day, choosing one library over the other depends in a lot of variables: developer team, size and kind of project (for example, it is said that that React works better in bigger enviroments and Vue is preferred for smaller apps), personal preferences…, because, at least in the case of Vue and React, are quite similar, have more in common than differences, and is very hard to say (and risky): “this is better that this”, and that’s why every situation has to be studied thoroughly before making a decision.
Having said that, I must say that if the team I’m working is using Vue, or any other other Javascript framework, it wouldn’t be in any case a problem for me to catch up, refresh my knowledge and learn their “way of getting things done”, in order to contribute from the first day to the project. 

License
----

MIT

**Free Software**

