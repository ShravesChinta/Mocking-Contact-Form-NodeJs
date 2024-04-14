# Mock Contact Form with Express.js

This is a simple Express.js application that demonstrates how to mock a contact form by saving user-submitted data to a file instead of sending it via email.

## Purpose

The purpose of this application is to provide a basic example of handling form submissions in Express.js and simulating the process of sending contact form data to an email address. Instead of integrating with an actual email service, the application saves the submitted data to a file named `user_details.txt`.

## Functionality

- Users can fill out a contact form with their name, email address, and message.
- When the form is submitted, the application saves the user's details (name, email, message) to a file named `user_details.txt`.
- The application also displays a success message to the user after submitting the form.

## Technologies Used

- Express.js: A web application framework for Node.js used to build the backend server.
- EJS (Embedded JavaScript): A templating engine used for rendering dynamic HTML content.
- HTML/CSS: Frontend markup and styling.
- Node.js File System (`fs` module): Used to write user data to a file.

## Setup and Usage

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies using `npm install`.
4. Start the server using `npm start`.
5. Open your web browser and navigate to `http://localhost:4000` to access the application.
6. Fill out the contact form and submit it to see the mock functionality in action.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

