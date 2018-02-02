# Project 2: Word Study App!

## Introduction

This is a study app I made for students who want to study for SAT/GRE or simply to expand their vocabulary. It also helps English language learners. Technologies used: HTML, CSS, JavaScript, jQuery, Node.js, Express.js, AJAX, PostgreSQL.

![Word app](https://media.giphy.com/media/l2Je66zG6mAAZxgqI/giphy.gif)

## Features
In this app, the user must create an account and then log in. Once logged in, the user can search for words using the Wordnik API. These words can then be saved onto the app's wordbank, allowing users to study the words at a later time. A delete feature for the words was also almost completed, and is something I plan to finish soon when time permits.

## Installation Instructions
Run `npm install` to install all required packages. If any bugs occur, run `npm install bcryptjs body-parser cookie-parser dotenv express express-session moment morgan mustache-express passport passport-local pg-promise --save`.

Then run `psql -f db/schema.sql` to start the database. You must have PostgreSQL already installed.

Finally run `node index.js`.

## Pain Points
![Pain Points](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4X74rtuhnFsCgOy2x_s8ze0I3F-VPh_VFTyJwjBt5asq65i7Z)

The biggest pain point was working with AJAX on the client side and getting all my requests to work. Working with so many different files was also overwhelming and took me a while to get used to as this was my first real full stack app.

## Link to app and presentation
[https://james-s-project-2.herokuapp.com//](https://james-s-project-2.herokuapp.com/)
https://docs.google.com/presentation/d/1DA--54u6sZeecspaLIL4ESmuWIyxP0IBwIkQttGPYYM/edit?usp=sharing
