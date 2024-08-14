# Comments Page

This project is a dynamic comments section built with React and Redux. It allows users to add comments, reply to existing comments, edit their comments, and delete comments. The project uses local storage to persist data, ensuring that comments remain even after page refresh.

## Demo

[Click here to watch the demo video](https://www.loom.com/share/001f6e0b95704de1a2754087669e12db?sid=f2749ab9-a75f-4b9d-bb29-c62c54e0a882)

## Features

- Add new comments
- Reply to existing comments
- Edit comments
- Delete comments with confirmation
- Persistence of comments using local storage
- Responsive design for mobile and desktop
- Modern UI with smooth animations

## Technologies Used

- React
- Redux for state management
- CSS for styling
- Local Storage API for data persistence

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v12.0 or later)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/harsh-kumar-patwa/comments-page
   ```

2. Navigate to the project directory
   ```
   cd react-comments-page
   ```

3. Install dependencies
   ```
   npm install
   ```

4. Start the development server
   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

## Project Structure

```
src/
|-- components/
|   |-- CommentForm.js
|   |-- CommentList.js
|   |-- Comment.js
|   |-- ReplyForm.js
|-- redux/
|   |-- actions.js
|   |-- reducers.js
|   |-- store.js
|-- utils/
|   |-- localStorage.js
|-- App.js
|-- index.js
|-- styles.css
```

## Usage

1. To add a new comment, fill out the comment form at the top of the page and click "Post Comment".
2. To reply to a comment, click the "Reply" button under the comment and fill out the reply form.
3. To edit a comment, click the "Edit" button on the comment. Make your changes and click "Save".
4. To delete a comment, click the delete (trash can) icon on the comment. Confirm your action in the popup dialog.

