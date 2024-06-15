To-Do List App
This is a simple yet functional To-Do List application built with Flask, SQLAlchemy, and a front-end enhanced with HTML, CSS, and JavaScript. The app allows users to add, complete, and delete tasks, with real-time updates synchronized between the front-end and the Flask back-end using AJAX.

Features
Add Tasks: Add new tasks to the to-do list.
Complete Tasks: Mark tasks as completed.
Delete Tasks: Remove tasks from the list.
Filter Tasks: View all tasks, completed tasks, or to-do tasks.
Persistent Storage: Tasks are stored in a SQLite database.
Real-time Updates: Uses AJAX for real-time synchronization without page reloads.
Responsive Design: User interface is responsive and works on various device sizes.
Prerequisites
Ensure you have the following installed:

Python 3.x
pip (Python package installer)
Setup and Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/todo-app.git
cd todo-app
Create and activate a virtual environment:

bash
Copy code
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
Install dependencies:

bash
Copy code
pip install -r requirements.txt
Set up the database:

bash
Copy code
flask db init
flask db migrate -m "Initial migration"
flask db upgrade
Run the application:

bash
Copy code
flask run
The application will be available at http://127.0.0.1:5000.

Project Structure
csharp
Copy code
todo-app/
├── app.py              # Flask application
├── models.py           # Database models
├── templates/
│   └── index.html      # Main HTML template
├── static/
│   ├── css/
│   │   └── style.css   # CSS styles
│   └── js/
│       └── script.js   # JavaScript functions
├── forms.py            # WTForms for form handling
├── config.py           # Configuration file
├── requirements.txt    # Python dependencies
└── README.md           # Project documentation
Usage
Adding Tasks: Type a task in the input field and click the '+' button to add it to the list.
Completing Tasks: Click the checkmark button next to a task to mark it as completed.
Deleting Tasks: Click the trash button next to a task to delete it.
Filtering Tasks: Use the dropdown menu to filter tasks by their status (All, Completed, To-Do).
Technologies Used
Flask: Web framework for Python.
SQLAlchemy: ORM for database interactions.
WTForms: Form handling in Flask.
HTML/CSS: Front-end structure and styling.
JavaScript: Client-side interactions and AJAX calls.
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add your feature').
Push to the branch (git push origin feature/YourFeature).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Flask
SQLAlchemy
WTForms
Font Awesome
Google Fonts
Contact
For any inquiries or feedback, please contact communication.harshit10@gmail.com.