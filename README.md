# ONG Transformando Vidas

A responsive web application developed as part of a Front-end Development academic project.

The project simulates the digital platform of a non-governmental organization (NGO), providing information about social initiatives, donations, volunteering opportunities, and user registration.

## Features

- Responsive web interface
- Dynamic navigation using JavaScript
- Hash-based client-side routing
- Donation and volunteering information
- User registration form
- HTML5 form validation
- Local storage for form data
- Responsive navigation menu
- Keyboard accessibility with a skip link
- Semantic HTML structure
- Accessibility attributes and feedback messages

## Technologies

- HTML5
- CSS3
- JavaScript
- Web Storage API
- Git
- GitFlow

## Project Structure

ong-transformando-vidas/
├── css/
│   └── style.css
├── html/
│   ├── cadastro.html
│   ├── index.html
│   └── projetos.html
├── imagens/
│   └── images-5-1.jpg
├── js/
│   ├── formulario.js
│   ├── main.js
│   ├── storage.js
│   └── templates.js
└── README.md

## Application Architecture

The application uses JavaScript modules to separate responsibilities:

- `main.js` manages navigation and dynamic page rendering.
- `templates.js` contains the dynamic views used by the application.
- `formulario.js` manages form behavior.
- `storage.js` handles browser storage operations.

Navigation is based on URL hash routes, allowing different sections of the application to be rendered dynamically without reloading the entire page.

## Accessibility

The project includes accessibility improvements such as:

- Semantic HTML elements
- Form labels associated with their respective fields
- `fieldset` and `legend` elements for grouped form data
- ARIA attributes for the responsive navigation menu
- Status and alert roles for user feedback
- Descriptive alternative text for images
- Keyboard-accessible skip link to the main content

## Version Control

The project uses Git with a workflow based on GitFlow:

- `main` represents stable versions.
- `develop` integrates ongoing development.
- `feature/*` branches isolate new features before integration into `develop`.

Commit messages follow semantic conventions to keep the project history clear and traceable.

## Academic Context

This project was developed during the Front-end Development discipline of the Systems Analysis and Development degree program.

Its purpose is to apply concepts involving HTML5, CSS3, JavaScript, accessibility, responsive interfaces, browser storage, version control, and technical documentation.

## Author

Rodrigo de Carvalho Pavão