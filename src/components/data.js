import myVideoImg from "../assets/images/myvideoapp-img.png"
import movieApiImg from "../assets/images/movie-api-img.png"
import myMeetAppImg from "../assets/images/mymeetapp-img.png"
import pokedexImg from "../assets/images/pokedex-project.png"   

export const cards = [{
    id: 1,
    img: pokedexImg,
    title: "The Pokedex Project",
    content: "The application is built with<strong> HTML, CSS, JavaScript, and Bootstrap </strong>. On the main page, which is also the only one, 150 Pokemon get listed. The aplication uses an existing API.",
    live: "https://ensklc93.github.io/pokedex-project",
    github: "https://github.com/ensklc93/pokedex-project",
    showMoreContent: false,
    moreContent:{
        content: "This project was initially created to present my newly learned programming skills. On the main page, which is also the only one, 150 Pokemon get listed. When clicked on the Pokemon names, a modal will pop-up and show the details, such as name, height, type and an image of the Pokemon. The application is built with HTML, CSS, JavaScript, and Bootstrap for a responsive design. Polyfills were implemented for cross-browser compatibility.",
        features:["Search functionality to filter Pokémon by name.","Modal display for detailed Pokémon information including image, height, and types.", "Responsive design using Bootstrap."],
        technologiesUsed:["HTML", "CSS", "JavaScript", "Bootstrap", "PokeAPI (https://pokeapi.co)", "ESLint and Prettier (for code quality and consistency)"]
    }
},
{
    id: 2,
    img: myVideoImg,
    title: "MyVideo App",
    content: "MyVideoApp is a client-side application built using <strong>HTML, CSS, React and Bootstrap</strong>.",
    live: "https://myvideo-ensklc.netlify.app",
    github: "https://github.com/ensklc93/myVideo-client",
    showMoreContent: false,
    moreContent:{
        content: "myVideoApp is a client-side application built using React. It is designed to interface with an existing server-side REST API and database to provide a comprehensive movie browsing experience. The objective of this project is to use React to build the client-side for an app called myVideo based on its existing server-side code(REST API and database). ",
        features:["User Authentication: Users can log in and sign up.","Profile Management: Users can update their profile information and delete their account.", "Movie Browsing: Users can browse movies, view details, and filter by genre or director.", "Favorites Management: Users can add or remove movies from their favorites list."],
        technologiesUsed:["HTML", "CSS", "JavaScript", "React", "Bootstrap", "React-Bootstrap (for Bootstrap components in React)", "React Router (for navigation and routing)"]
    }
},
{
    id: 3,
    img: movieApiImg,
    title: "Movie API",
    content: "The Movie API is a server-side component of a movie web application, which is hosted at <strong>Heroku</strong> and is built using <strong>Node.js, Express, MongoDB, Mongoose and Passport</strong>.",
    github: "https://github.com/ensklc93/Movie-API",
    showMoreContent: false,
    moreContent:{
        content: "The Movie API is a server-side component of a movie web application that allows users to manage and retrieve movie data. It features user authentication using JWT, and provides various endpoints for accessing movie information and user profiles.",
        features:["User Authentication: Secure user authentication using JWT.","CRUD Operations: Create, read, update, and delete user profiles.", "Add and remove movies from a user's list of favorites.", "Movie Information: Retrieve detailed information about movies, directors, and genres."],
        technologiesUsed:["Node.js", "Express", "MongoDB", "Mongoose", "Passport", "JWT", "Bcrypt"]
    }
},
{
    id: 4,
    img: myMeetAppImg,
    title: "MyMeetApp",
    content: "MyMeetApp is a <strong>serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique</strong>.",
    live: "https://ensklc93.github.io/MyMeetApp/",
    github: "https://github.com/ensklc93/MyMeetApp",
    showMoreContent: false,
    moreContent:{
        content: "MyMeetApp is a web application designed to help users manage and view events. It integrates with Google Calendar to fetch and display events, allowing users to filter events by city and view event details. The aim of this project was to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique.",
        features:["Event List: Displays a list of upcoming events.","City Search: Allows users to search for events in specific cities.", "Event Details: Users can view more details about each event.","Event Genres Chart: Visual representation of event genres.", "City Events Chart: Visual representation of events per city.", "Offline Support: The app can function offline using cached data."],
        technologiesUsed:["React", "Bootstrap", "Node.js", "AWS Lambda", "Google Calendar API", "Recharts", "Jest", "Puppeteer"]
    }
},

]