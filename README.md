# Meal Search Application

A **Meal Search Application** built using **React**. This frontend project integrates with an external API to search for meals, displays detailed information, and allows users to save their favorite meals using localStorage.

---

# Features

- **Search for Meals**: Find meals by name or ingredients using an API.
- **Meal Details**: View detailed information about each meal, including ingredients and preparation instructions.
- **Favorite Meals**: Save meals to your favorites list using localStorage.
- **Responsive Design**: Fully optimized for both desktop and mobile devices.

---

# Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/meal-search.git
   cd meal-search
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

# Usage

1. **Search for Meals**:
   - Use the search bar to enter a meal name or ingredient.
   - Results will be fetched from the API and displayed.

2. **View Meal Details**:
   - Click on any meal from the search results to view its detailed information.

3. **Add to Favorites**:
   - Click the "Add to Favorites" button on a meal to save it.
   - Favorites are stored in localStorage and persist across sessions.

4. **Manage Favorites**:
   - Navigate to the favorites section to view, remove, or revisit your saved meals.

---

# API

This application uses an external API to fetch meal data. Example API endpoint:
- [TheMealDB API](https://www.themealdb.com/api.php)

Key Endpoints:
- Search meals by name: `https://www.themealdb.com/api/json/v1/1/search.php?s=<meal-name>`
- Lookup meal by ID: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=<meal-id>`

---

# Project Structure

```
/meal-search
├── public          # Static files
├── src
│   ├── components  # React components
│   ├── pages       # Page components (e.g., Search, Favorites)
│   ├── styles      # CSS files
│   ├── utils       # Helper functions (e.g., API calls, localStorage management)
│   ├── App.js      # Main application file
│   └── index.js    # Entry point
├── package.json
└── README.md       # Project documentation
```

---

# Technologies Used

- **React**: Frontend framework.
- **Axios/Fetch API**: For making API calls.
- **localStorage**: To persist favorite meals.
- **CSS/SCSS**: For styling.

---

# Contribution

Contributions are welcome! If you have ideas for new features or improvements, feel free to submit a pull request.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit: `git commit -m 'Add feature-name'`.
4. Push to your branch: `git push origin feature-name`.
5. Open a pull request.

---

# License

This project is licensed under the MIT License. See the LICENSE file for details.

---

# Acknowledgements

- [TheMealDB API](https://www.themealdb.com/api.php) for meal data.
- [React](https://reactjs.org/) for the frontend framework.

