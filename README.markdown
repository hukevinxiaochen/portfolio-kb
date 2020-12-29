## Basics

This is a personal website and resume web application that takes a custom Markdown or MDX input and renders a nice resume and portfolio site.

### Author Experience

- Write MDX and get a landing page, search, contact form, and blog

### Reader Experience

- See name of author
- Click on name of author -> Search input -> Click icon -> Name of author
- See Online contact options
  - Github
  - LinkedIn
  - Orcid
  - Twitter
  - Contact Form
- onScroll -- show an up-down arrow to facilitate rapid paging only for rapid paging
  - engage rapid paging when tap-and-hold-and-move up and down occurs
  - on rapid paging, show an outline window and option to show outline in full
- tap -- to show app bar with search functionality and outline button
  - AppBar
    - Search
    - Home
    - Blog
    - Contact
- About
  - I am a board-certified family physician (ABFM) who occasionally builds
   web applications, frequently works in a federally qualified health center, and is
   always asking: How do we eliminate my job? Can you please house my
   patients without homes, feed the ones without food, protect the ones who are
   being hurt, and treat them all with respect? Wanna team up?
- Projects
  - Vinto
- Blog
  - Posts
- Publications
- Work
  - ACCESS Community Health Network
  - Simple Fractal
  - East Harlem Software
- Education
- Tools
  - Digital Ocean
  - Debian
  - LetsEncrypt
  - React
  - Git
  - Node
  - Ruby
  - Python
- Each clickable item needs to have its own page.
- Each page should be shareable with copy to clipboard for link, tweet, linkedin post, etc.

### Architecture

MDX -> renderWithReact -> renderToStaticMarkup -> HTML

MDX needs to be converted to JSX, evaluated and then rendered using ReactDOMServer render functions.

- Assets
  - [fontawesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react)
    - faGithub
    - faLinkedin
    - faOrcid
    - faTwitter
  - material-ui

## System Requirements

* [node][] - I chose to use the LTS as of 2020-11-02, v14.15.0. I know of at least one feature that I use, `fs/promises`, that was not made non-experimental until [14.0.0](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V14.md#other-notable-changes-1)

## Project Dependencies

* [@babel/core][]
* [@babel/preset-env][]
* [@babel/preset-react][]
* [@babel/plugin-transform-react-jsx](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx#pragma)
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
