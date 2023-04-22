# MBTI Test

This is a simple web application that allows users to take a Myers-Briggs Type Indicator (MBTI) test consisting of 20 questions and get their MBTI personality result. The project was built using React for the front-end and JSON as the backend.

## Project Summary

The MBTI Test project is designed to provide users with a quick and easy way to determine their MBTI personality type. The user interface is clean and user-friendly, allowing users to answer 20 questions in a straightforward manner. Once the test is completed, the user will receive their MBTI personality type result, based on their answers.

The project also includes brief summaries of the different personality types on the home page, providing users with a general overview of each type's characteristics. This allows users to learn more about themselves and others based on their personality type.

## Installation

To get started with the MBTI Test project, follow these steps:

1. Install all the necessary packages by running `npm install` in the project directory.
2. Navigate into the `mbti-test` folder and start the front-end React app by running `npm start` in the terminal.
3. To start the JSON backend, go into the `public` folder directory and start two JSON servers using the following commands:
   - `json-server --watch questions.json -p 3001`
   - `json-server --watch mbti-personality.json -p 3002`

## Features

The MBTI Test project includes the following features:

- 20-question MBTI test to determine user's personality type
- JSON backend to store questions and personality type data
- Brief summaries of different MBTI personality types on the home page

## Technologies Used

The MBTI Test project was built using the following technologies:

- React
- JSON
- JSON-server