<img src="/images/logo.webp" alt="Logo" height="256">

# NutriCalc: Daily Calorie Tracker

## Overview
This Calorie Calculator Website is designed to help users track and calculate the calorie content of various products. Users can add products to a list, specifying the product's name, weight in grams, and calories per 100 grams. The website automatically calculates the total calories for each product and displays the cumulative calories for all products listed. Features include the ability to add, edit, and delete products, as well as clear the entire product list. Data is persisted in the browser's localStorage, making it a convenient tool for daily use.

## Features
- **Add Products:** Users can add products by entering the product name, weight (in grams), and calories per 100 grams.
- **Delete Products:** Users can delete individual products or clear the entire list.
- **Calorie Calculation:** Automatic calculation of total calories for each product and a cumulative total for all products listed.
- **LocalStorage Integration:** Products are saved in the browser's localStorage, ensuring data persistence between sessions.
- **Responsive Design:** The website is fully responsive and can be used on devices of various sizes.

Given your project now uses Vite and pnpm, the installation instructions in your `README.md` need to reflect these changes. Here’s how you can update the "Installation" section to guide users and developers through setting up the project with these tools:

## Installation

For most users, simply visiting the deployed website is sufficient. However, developers or users who wish to run NutriCalc locally can set up a development environment using the following steps:

1. **Clone the repository:**
   Open a terminal and run the following command to clone the NutriCalc repository:
   ```bash
   git clone https://github.com/BarAppTeam/NutriCalc-Daily-Calorie-Tracker.git
   ```

2. **Navigate to the project directory:**
   Change into the project directory with:
   ```bash
   cd NutriCalc-Daily-Calorie-Tracker
   ```

3. **Install dependencies:**
   Ensure you have `pnpm` installed on your system. If you don't, you can install it by following the instructions on [pnpm's official site](https://pnpm.io/installation). Once `pnpm` is installed, run the following command to install the project dependencies:
   ```bash
   pnpm install
   ```

4. **Start the development server:**
   Run the following command to start a local development server using Vite. This command compiles the application and opens it in your default web browser, with hot reload enabled for development:
   ```bash
   pnpm run dev
   ```

   The application will be available at `http://localhost:3000` or another port if 3000 is already in use. The terminal will display the exact URL to access the application.

By following these steps, developers can quickly set up NutriCalc in a local development environment, leveraging Vite for efficient development and `pnpm` for dependency management.

## Usage

To use the Calorie Calculator Website, follow these steps:

1. **Add a Product:** Fill in the product's name, weight in grams, and calories per 100 grams in the form fields. Submit the form to add the product to the list.
2. **Delete a Product:** Click the "Delete" button next to a product to remove it from the list.
3. **View Total Calories:** The total calories of all products listed will be displayed at the bottom of the product list.
4. **Clear Product List:** Click the "Clear All Products" button to remove all products from the list and reset the total calories.

## Contributing

Contributions to the Calorie Calculator Website are welcome! If you have suggestions for improvements or bug fixes, please open an issue or a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Icons and images sourced from [FontAwesome](https://fontawesome.com/) and [Unsplash](https://unsplash.com/), respectively.
- Calorie calculation formulas and nutritional information references from [USDA FoodData Central](https://fdc.nal.usda.gov/).
