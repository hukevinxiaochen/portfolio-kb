## Basics

This is a personal website and resume web application that takes a custom Markdown or MDX input and renders a nice resume and portfolio site.

## System Requirements

* [node][] - I chose to use the LTS as of 2020-11-02, v14.15.0. I know of at least one feature that I use, `fs/promises`, that was not made non-experimental until [14.0.0](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V14.md#other-notable-changes-1)

## Project Dependencies

* [@babel/core][]
* [@babel/preset-env][]
* [@babel/preset-react][]
* [@babel/register][]
* [dotenv][]
* [express][]
* [feather-icons][]
* [react][]
* [react-dom][]
* [react-feather][]

### Development Dependencies

* [jsdom][]
* [tap-spec][]
* [tape][]

## node version

* `.nvmrc` - contains the node version that this project was developed with

## package.json scripts

* `test`
* `start`
* `build`

## tests

## g7r

## b3d

## client

## component

## server

## How to run
### .env
### dist

## Database Schema

### Node:Author
- Given Name
- Family Name
- Unique ID
- Google ID
- Github ID
- Twitter ID
- Facebook ID
- LinkedIn ID

### Node:Note
- Title
- Date Created
- Date Last Modified
- Last Modified By
- Note
- ID

### Node:Question
- Date Created
- Date Last Modified
- Last Modified By
- Question
- ID

### Node:Story
- Title
- Date Created
- Date Last Modified
- Last Modified By
- Story
- ID

### Relation:Take
- Author(s) may take a Note

### Relation:Ask
- Author(s) may ask a Question

### Relation:Tell
- Author(s) may tell a Story

### Relation:Support
- A Note may support another Note

### Relation:Relate to
- Any Note, Story, Question may relate to another Note, Story, Question to be considered in totality
