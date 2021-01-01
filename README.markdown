## Basics

This is a personal website and resume web application that takes a custom
Markdown or MDX input and renders a nice resume and portfolio site.

### Author Experience

- Write MDX and get a landing page, search, contact form, and blog
- The build process should be:
  - Easy to explain
  - Transparent with informative logs regarding what it is doing
  - Customizable
- It should be clear how to:
  - Write MDX
    - Import an MDX file
    - Pass MDX to a component
    - Import a component
    - Use a component in an MDX file
  - design my main page
  - [x] design a custom component to be used by any component
    - [x] make new components in the components directory
  - style a component
  - style the entire application globally
  - pass data to a page
  - store data that I want to be used by my components
  - modify data very quickly and easily (e.g. I should be able to describe a new
    project or job description in less than 10 minutes and it should be nicely
    redeployed to my site within that same time)
  - [ ] use a library like material-ui or bootstrap
- I should be able to easily check:
  - [x] the runtime environment to see if a database instance is running.
  - If I have all required dependencies installed.
  - Which dependencies are needed only development and which ones are actually
    needed by my production environment.
  - What is my target production environment?
  - What is my test coverage?
  - What are my outstanding security issues?
  - When should I update a dependency?
  - What are my dependencies?
- I should be able to:
  - [x] deploy the site with a one-liner `git push`
    - [x] expect a webhook to run automatically when a new release or push to
          main occurs

### Reader Experience

- [x] See name of author
- Click on name of author -> Search input -> Click icon -> Name of author
- [x] See Online contact options
  - Github
  - LinkedIn
  - Orcid
  - Twitter
  - Contact Form
- onScroll -- show an up-down arrow to facilitate rapid paging only for rapid
  paging
  - engage rapid paging when tap-and-hold-and-move up and down occurs
  - on rapid paging, show an outline window and option to show outline in full
- tap -- to show app bar with search functionality and outline button
  - AppBar
    - Search
    - Home
    - Blog
    - Contact
- [x] About
- Projects
  - Vinto
- Blog
  - 1 Post : 1 File (MDX)
  - Reads files --> Array of Posts
  - Renders posts
  - Each Post has:
- Publications
- Work
  - ACCESS Community Health Network
  - Simple Fractal
  - East Harlem Software
  - Northwestern Feinberg School of Medicine
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
- Each page should be shareable with copy to clipboard for link, tweet, linkedin
  post, etc.

### Visuals and Design

- [x] social media icons should lay out horizontally

### Architecture

MDX -> renderWithReact -> renderToStaticMarkup -> HTML

MDX needs to be converted to JSX, evaluated and then rendered using
ReactDOMServer render functions.

- Assets
  - [fontawesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react)
    - faGithub
    - faLinkedin
    - faOrcid
    - faTwitter
  - material-ui

## System Requirements

- [node][] - I chose to use the LTS as of 2020-11-02, v14.15.0. I know of at
  least one feature that I use, `fs/promises`, that was not made
  non-experimental until
  [14.0.0](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V14.md#other-notable-changes-1)

## Project Dependencies

- [@babel/core][]
- [@babel/preset-env][]
- [@babel/preset-react][]
- [@babel/plugin-transform-react-jsx](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx#pragma)
- [@babel/register][]
- [dotenv][]
- [express][]
- [feather-icons][]
- [react][]
- [react-dom][]
- [react-feather][]

### Development Dependencies

- [jsdom][]
- [tap-spec][]
- [tape][]

## node version

- `.nvmrc` - contains the node version that this project was developed with

## package.json scripts

- `test`
- `start`
- `build`

## tests

## g7r

This module actually does the work of applying transformations to MDX and
turning it into HTML. The entry file for the build is `client/Main.mdx`. This is
hard-coded into the `g7r` module so you need to name the main page `Main.mdx`
and locate it in the `client` directory for any of the build process to work.

## b3d

This module turns our MDX into HTML.

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

- Any Note, Story, Question may relate to another Note, Story, Question to be
  considered in totality
