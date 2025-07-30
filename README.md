# Goholidays 🏝️

**Goholidays** is a full-stack holiday stay booking web application inspired by Airbnb. It enables users to register, log in, create travel listings, upload images, view locations on a map, and leave reviews on other listings. It is built using the **MVC architecture**, with secure authentication, interactive mapping, and cloud-based storage.

---

## 🌐 Live Demo
This Project is Depolyed on Render .
You can access it via this Link : https://goholidays-dwu7.onrender.com

---

## 📌 Features

- 🔐 User Authentication with **Passport.js**
- 🏕️ Create, edit, delete listings with **Cloudinary** image upload
- 🗺️ Interactive map using **Mapbox GL JS**
- ✍️ Add, delete reviews on listings
- 🧭 Cloud database using **MongoDB Atlas**
- 📄 Server-side rendering using **EJS**
- 🎨 Responsive frontend with **Bootstrap**
- 📦 MVC architecture with **Express routers and controllers**
- 🔒 Session management, flash messages, and error handling

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS, Bootstrap 5, HTML5, CSS3
- **Database**: MongoDB Atlas (Mongoose ODM)
- **Authentication**: Passport.js, express-session
- **File Storage**: Cloudinary
- **Map Integration**: Mapbox
- **Other Tools**: dotenv, connect-flash, method-override, ejs-mate

---

## 🧱 Project Structure

- Goholidays/
- │
- ├── models/ # Mongoose schemas (Listing, Review, User)
- ├── routes/ # Express routes (listings, reviews, users)
- ├── views/ # EJS templates (forms, home, listings)
- ├── public/ # Static files (CSS, JS, images)
- ├── utils/ # Utility functions (error handler, middleware)
- ├── app.js # Main application entry point
- ├── .env # Environment configuration
- ├── package.json # NPM dependencies

---

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yashshuklaa001/GoHolidays.git
cd GoHolidays
```
---

2. **Install Dependices**
```bash
npm install
```
---

3. **Configure environment variables**

## Create a .env file in the root with the following:

- ATLASDB_URL=your_mongodb_atlas_url
- SECRET=your_session_secret
- CLOUD_NAME=your_cloud_name
- CLOUD_API_KEY=your_key
- CLOUD_API_SECRET=your_secret
- MAP_TOKEN=your_mapbox_token

---

4. **Run The App**
```bash
npm start
```
---

Visit http://localhost:3000 in your browser.

---

## 🧪 Usage
- Register as a new user.
- Add listings with images, description, and location.
- Browse listings on map and detail view.
- Add/edit/delete your listings and reviews.

---

## 🛡️ Security & Error Handling
- All routes protected with middleware (isLoggedIn, isOwner).
- ExpressError utility for custom error messages.
- Flash messages for success/failure feedback.

---

 ## ☁️ Deployment Notes
- Hosted on Render.
- MongoDB Atlas used for cloud database.
- Store all secrets in Render environment variables for production.

---

## 👨‍💻 Author
name - Yash Shukla
email - yashshukla18jul@gmail.com