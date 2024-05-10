# Pokemon List App

This React Native application displays a list of Pokemon grouped by their types. It uses a `SectionList` component to organize the data.

## Features

- **SectionList**: Displays Pokemon grouped by their types.
- **FlatList**: (Commented out) Alternative display using a flat list.
- **Styling**: Cards for each Pokemon are styled with borders and padding.
- **Empty List Handling**: Shows a message when no Pokemon are found.
- **List Header and Footer**: Displays header and footer messages for the list.

## Components

### `App.js`

- **Data Import**: Imports Pokemon data from `data.json` and grouped data from `grouped-data.json`.
- **SectionList**: Renders a `SectionList` component to display grouped Pokemon.
- **Styling**: Applies styles for the container, cards, and text elements.

## Styling

- **Container**: Sets the background color and padding for the entire app.
- **ScrollView**: Adds horizontal padding to the scrollable content.
- **Card**: Styles each Pokemon card with a white background, padding, and border.
- **Text**: Sets the font size for text elements.

## How to Run

1. Ensure you have Node.js and npm installed on your machine.
2. Clone the repository:

   ```bash
   git clone https://github.com/levladik/RN_List.git
   ```

3. Navigate to the project directory:

   ```bash
   cd RN_List
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Run the application:

   ```bash
   npm start
   ```

6. Open the app on your emulator or device using Expo.

## Contributing

Feel free to contribute to the project by submitting pull requests or opening issues.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.