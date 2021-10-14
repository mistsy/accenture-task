I would definitely try to find out more about the project, at least it's future goals, 
estimated target user base. Any information at this stage can be quite meaningfull in terms of tool choice.

e. g. do future plans include:
  - adding/removing profiles
  - profile editing (picture, text, ...) 
  - filtering the list
  - maybe authentication
  - how many view components/subpages

Frontend part: 
a) 
  Tools, frameworks, libraries: 
    - create-react-app, for faster start
    - maybe react-redux for the future (with redux @reduxjs/toolkit), for complexed app state control 
    - maybe styled components (depends what the team prefers), for more control over styling the app
    - react-router-dom, for navigation
    - axios for API calls, to set grounds for future upgrades
    - testing library (e.g. Jest), every app needs testing, jest seems to be a good choice for me, but it is a flexible choice

b)
  Proposition of directory structure in folder 'task3/frontend'
  If app is about to scale a lot some additional structure inside components folder may be required (atomic-like)
  Basic folder structure:
  /components
  /shared
    /constants for any constants if needed
    /hooks for future custom hooks
    /utils for helper functions
    /store for redux stuff
    /theme for better styles management (not always ideal, depends on styling solutions used)

c)
  Components to implement (for now):
  - Title/Heading for easier management of different kinds of heading throughout the project
  - Image for more control over displaying images, using default html <img> is usually not enough
  - Typography/Text for consistency of and better control over typography
  - ProfileCard composition component to be used in profiles list aswell as inside profile page (Image, Title, Text)
  - Link for linking stuff or we can just use premade components from react-router-dom for that

d)
  ProfilePage in 'task3/frontend' folder, i prefer keeping all components in their dedicated folders, with all related resaurces, 
  project is better organised that way

e)
  Benefits - highly interactive, app-like UX, freedom of architecture

  Drawbacks - long initial load time (noticable for bigger apps), SEO (hard to optimize) - is it a problem with this client?

f)
  It's always important to find out what client needs, maybe some SSR approach (e. g. Next.js) would be a better choice here if we can be less interactive but faster and better in terms of SEO

Backend part:
a)
  Short description of API – URI, format, why needed:

  Folder/files basic structure in 'task3/back-end'
  API calls: /api/path?query#fragment

  / as separator
  - instead of _
  lowercase
  plural endpoint names (e. g. /profiles/{id} instead of /profile/{id})

b)
	Framework:
  Express - faster setup and development since we use Nodejs

c)
  Suggestions:
  I would recommend some noSQL document based databse, like MongoDB or Firestore since it works well with nodejs backend 

