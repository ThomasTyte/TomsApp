User Stories

User Story 1: As a user, I want to quickly navigate between the contact form and the to-do list so that I can easily access the feature I want to use without fussing around with menus.

User Story 2: As a user, I want to be able to rate games from a provided list so that I can keep track of my favorite games and help others by sharing my opinion.

User Story 3: As a user, I want to submit my contact information and comments through a form so that I can provide feedback or ask questions to the app's developers.

App State Tree
├── showContact (boolean)
└── TodoList State
├── ratedGames (array)
├── unratedGames (array)
├── currentGames (array)
├── games (array)
├── search (string)
├── ratings (array of numbers)
└── view (string: 'rated' or 'unrated')
![Screenshot 2024-12-02 191438](https://github.com/user-attachments/assets/4e150628-9dce-4deb-a55e-a300a131efb1)
![Screenshot 2024-12-02 191453](https://github.com/user-attachments/assets/578f39bb-b06a-4bda-91ca-2b32e8810ed3)

Contact Form State
└── formData (object)
├── firstName (string)
├── lastName (string)
├── email (string)
└── comments (string)

List of Container and Presentational Components
Container Components:

App (Manages the visibility of other components)
TodoList (Manages the game rating functionality and state)
Contact (Manages the contact form functionality and state)
Presentational Components:

Navbar (Displays navigation options)
GameCard (Displays individual game details and rating options)
ContactForm (Renders form fields for user input)
RatingButton (For individual ratings on games if separated)
This structure will enable clear separation of concerns, where containers handle the logic and state, and presentational components focus on rendering UI elements.
