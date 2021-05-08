# Take Values Chatbot

This repo contains the code for a deployed web server and chatbot flow,
as required by the challenge specifications.


## Server

The server is a Node.js application written in Typescript, using
Express and Axios frameworks, and it's deployed on [Heroku](https://take-blip.herokuapp.com).

Typescript was chosen for this project to ease debugging process, as well as ensuring data standardization and getting the productivity benefits of autocomplete for strongly typed data.

When the server receives a GET request, it performs the following:
* Consults the Github API for [Take](https://github.com/takenet)'s repositories
* Filters the five oldest ones which have C# as their main language
* Returns the following object:
```
{
  repo_1: {
    avatar_url,
    full_name,
    description
  },
  repo_2: {
    avatar_url,
    full_name,
    description
  },

  {...},

  repo_5: {
    avatar_url,
    full_name,
    description
  }
}
```

## Chatbot

The chatbot flow was created in [Blip's Portal](https://portal.blip.ai), also as described by the challenge specifications, except for minor language corrections, and the following flow adjustments:
* Default error asks if user wants to start from the beginning
* A "Bye" block if user says "No" on Default error, which by default returns to the beginning when prompted again by user


### Other Code Pattern Tools

The code was standardized using:

- ESlint (AirBnb pattern)
- Prettier
