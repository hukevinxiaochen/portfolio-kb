## Basics

This is a personal website and resume web application that takes a custom
Markdown or MDX input and renders a nice resume and portfolio site.

### Dev and Documentation Tasks

- It should be clear how to:
  - Write MDX
    - Import an MDX file
    - Pass MDX to a component
    - Import a component
    - Use a component in an MDX file

### Author Experience

- Write MDX and get:
  - [x] landing page
  - [ ] search
  - [ ] contact form
  - [ ] blog
- The build process should be explained:
  - [x] Entrypoint is `client/Main.mdx`
- The build process should come with informative logs regarding what it is
  doing.
  - design my main page
  - [x] design a custom component to be used by any component
    - [x] make new components in the components directory
  - style a component
  - style the entire application globally
  - [x] create the total project list as seed data, and then...
    - [x] derive it from the LaTeX resumes I've built
  - [ ] whiteboard the data model
  - [ ] query an API for data stored in a database from our react components
    - [ ] write schema setup boilerplate to import JSON data into the Neo4j
          database with the appropriate node types.
    - [ ] try writing straight JSON and also try writing graphql schema code
          with Apollo server.
    - [ ] write Express routes that will run Cypher queries on a Neo4j database.
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
- [ ] Use a WYSIWYG Editor to modify all aspects of this blog.
  - [ ] Spec out the editing flow UI and write tests for the full stack.

### Reader Experience

- [x] See Online contact options
  - Github
  - LinkedIn
  - Orcid
  - Twitter
  - Contact Form
- [ ] See the projects (and details) that the Author has been working on.
  - [ ] Design the project view.
  - [ ] Prepare JSON with the relevant project details.
  - [ ] Persist project details in a database.
  - [ ] Pull project data into React components and render it all as part of the
        server-side build process.
- [ ] Dive deeper into each project by clicking on links associated with each
      project. Examples include: deploy links, repo links, blog post links,
      people profile links, other project links, note links, tags.
- [ ] See most recent content uploaded or updated. Should include date written,
      updated, and excerpt (150 characters).
- [ ] Click to navigate to a page with an individual blog post.
  - Each content type should be shareable with copy to clipboard for link,
    tweet, linkedin post, etc.
- [ ] Expect consistent branding.
  - [ ] Expect a successful response to requests for a `favicon.ico`.
  - [x] See name of author
- [ ] Expect to be able to search for various content of interest. Click on name
      of author -> Search input -> Click icon -> Name of author
  - [ ] Design search bar
  - [ ] Render search bar
  - [ ] Animate transition to displaying search bar
  - [ ] Encapsulate toggling logic in React component
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

The mdx is transpiled to jsx which is transpiled to JavaScript, which is
executed, outputs a react element, which gets rendered by
ReactDOMServer.renderToStaticMarkup.

In that JavaScript, we want to incorporate legitimate server-side API queries
that pull in the necessary data to populate our server-side rendered HTML.

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
