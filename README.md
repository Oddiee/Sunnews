🌞 SunNews Weather Dashboard
SunNews is a simple and visually appealing weather dashboard built with React, Tailwind CSS, Daisy UI, and the OpenWeatherMap API. The dashboard provides real-time weather information for any city, including details like temperature, weather conditions, humidity, and wind speed. It is designed with a clean and modern interface inspired by a Figma design.

🚀 Live Demo
You can access the live version of the app here: SunNews Live Demo

📸 Preview

✨ Features
🌍 Search Functionality: Users can search for weather data by entering a city name.
🌡️ Current Weather: Displays the current temperature, weather condition, humidity, and wind speed.
⛅ Weather Icons: Dynamically updates weather icons based on the city's current weather.
📱 Responsive Design: Fully responsive layout that works seamlessly across different devices.
🎨 Gradient Background: Aesthetic gradient background matching a clean and modern Figma design.
🛠️ Built With
React: JavaScript library for building user interfaces.
Tailwind CSS: Utility-first CSS framework for custom designs.
Daisy UI: Tailwind CSS components for a beautiful UI.
OpenWeatherMap API: Real-time weather data API.
📚 How It Works
User Input: Users can input a city name in the search bar.
API Call: SunNews fetches the weather data from the OpenWeatherMap API.
Display Data: The app displays the city's weather information, including:
Temperature (in Celsius)
Weather condition (e.g., clear sky, clouds, rain)
Humidity percentage
Wind speed in Km/h
Weather Icon: The weather icon changes dynamically based on the weather conditions returned by the API.
🖥️ Local Setup & Installation
Prerequisites
Node.js and npm installed on your machine.
An API key from OpenWeatherMap.
Installation Steps
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/sunnews.git
cd sunnews
Install Dependencies:

bash
Copy code
npm install
Create an .env File: Create a .env file in the root of your project with the following content:

env
Copy code
REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key_here
Start the Development Server:

bash
Copy code
npm start
Access the App: Open http://localhost:3000 in your browser to view the app.

📂 Project Structure
arduino
Copy code
sunnews/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── WeatherCard.jsx
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .env
├── tailwind.config.js
├── package.json
└── README.md

🔑 API Key Configuration
To use SunNews, you'll need to sign up for an API key from OpenWeatherMap.

Once you have the API key:

Replace your_openweathermap_api_key_here in your .env file with your actual key.
The app will automatically pick up the environment variable when you run the development server.

🖌️ Customization
Changing the Gradient Background: You can modify the gradient background in App.js using Tailwind's bg-gradient-to-r classes or by editing the Tailwind configuration.
Modifying the Weather Icons: SunNews uses OpenWeatherMap's icon set. You can replace or customize these icons by editing the WeatherCard.jsx component.
🔧 Technologies & Tools Used
React: For building UI components.
Tailwind CSS: For responsive and utility-first styling.
Daisy UI: For pre-built UI components.
OpenWeatherMap API: For fetching weather data.
Figma: For the original design inspiration.

🤝 Contributing
Contributions, issues, and feature requests are welcome!

Fork the project
Create your feature branch (git checkout -b feature/yourFeature)
Commit your changes (git commit -m 'Add some feature')
Push to the branch (git push origin feature/yourFeature)
Open a pull request
📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author
Said Mouhtadi

GitHub: @Oddiee
LinkedIn: Said Mouhtadi
IG: Odd_eii