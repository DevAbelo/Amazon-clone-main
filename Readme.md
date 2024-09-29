
<br/>
<div align="center">
<a href="https://github.com/ShaanCoding/ReadME-Generator">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqfyM69uQAgS2N2kVox4s4Q0JlIwa9Ez5hVYX0KceKECqtRudIpO3VJCc6Gy89g8k2QQ&usqp=CAU" alt="Logo" width="80" height="80">
</a>
<h3 align="center">Amazon-Clone Project</h3>
<p align="center">

<br/>
<br/>
<a href="https://amazon-clone-by-abel-debalke.netlify.app">View Demo .</a>

</p>
</div>



**Project Title**: Amazon Clone

**Description**:  
This project is a full-stack Amazon clone built using React for the frontend, Node.js for the backend, Firebase for user authentication and database storage, and Stripe for payment integration. The application mimics core functionalities of the Amazon platform, providing a seamless online shopping experience with modern web development practices.

### Features:

1. **User Authentication**: Secure user authentication is implemented using Firebase, allowing users to register, log in, and manage their accounts.
2. **Product Display**: The app retrieves product data using the FakeStore API, allowing users to browse through various categories of products.
3. **Search & Filter**: An interactive search bar with suggestions based on user input helps customers easily find desired products.
4. **Shopping Cart**: Users can add and remove products from the shopping cart, with real-time updates and a preview of the total price.
5. **Stripe Payment Integration**: Secure payment processing is handled by Stripe, ensuring that users can complete their transactions smoothly.
6. **Order History**: After completing a purchase, users can view their order history and details of past transactions.
7. **Responsive Design**: The application is designed to work seamlessly on both desktop and mobile devices.

### Technologies Used:
- **React**: For building the user interface and managing the application's state.
- **Node.js**: For creating the server and handling API requests.
- **Firebase**: For managing user authentication and database storage.
- **Stripe**: For handling secure payments and checkout processes.
- **CSS**: For styling and ensuring a responsive user interface.

This project showcases the integration of various tools and technologies to build a functional e-commerce platform, simulating the real-world complexities of an online store like Amazon.

### Built With

This tech stack supports the creation of a scalable and secure Amazon clone with a focus on modern web development practices.

- [React](https://reactjs.org)
- [Node.js](https://nodejs.org/en)
- [Firebase](https://firebase.google.com/)
- [Stripe](https://stripe.com/)
- [Express](https://expressjs.com/)
- [FakeStore API](https://fakestoreapi.com/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Axios](https://axios-http.com/)
- [Vite](https://vitejs.dev/)
- [Git](https://git-scm.com/)

## Getting Started

### Getting Started

To get started with the Amazon clone project, follow these steps to set up and run the application on your local machine.

#### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: [Download and Install Node.js](https://nodejs.org/) (LTS recommended)
- **Git**: [Download and Install Git](https://git-scm.com/)
- **Firebase Account**: [Create a Firebase Account](https://firebase.google.com/)
- **Stripe Account**: [Create a Stripe Account](https://stripe.com/)

#### Installation Steps

1. **Clone the repository**:
   Open your terminal and clone the project repository:
   ```bash
   git clone <your-repository-url>
   ```
2. **Navigate to the project directory**:

   ```bash
   cd amazon-clone
   ```

3. **Install dependencies**:
   Install the necessary dependencies for both the frontend and backend:

   ```bash
   npm install
   ```

4. **Set up Firebase**:

   - Create a Firebase project in the [Firebase console](https://console.firebase.google.com/).
   - Enable **Authentication** and choose **Email/Password** as the sign-in method.
   - Enable **Firestore** for real-time database.
   - Add your Firebase configuration to your React app:
     - Create a `.env` file in your root directory.
     - Add your Firebase configuration variables:
       ```env
       REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
       REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
       REACT_APP_FIREBASE_PROJECT_ID=your_project_id
       REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
       REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
       REACT_APP_FIREBASE_APP_ID=your_app_id
       ```

5. **Set up Stripe**:

   - Go to the [Stripe Dashboard](https://dashboard.stripe.com/) and create an account.
   - Create a new payment key from the developers section in Stripe.
   - Add your Stripe public and secret keys to your `.env` file:
     ```env
     REACT_APP_STRIPE_PUBLIC_KEY=your_public_key
     STRIPE_SECRET_KEY=your_secret_key
     ```

6. **Set up FakeStore API**:
   The app uses the FakeStore API for product data. No additional setup is required, but you can explore the API here: [FakeStore API](https://fakestoreapi.com/).

7. **Run the application**:
   Start the development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000`. The app should be up and running.

#### Folder Structure

Here's an overview of the folder structure:

```
amazon-clone/
│
├── public/
├── src/
|    ├── Api/
│   ├── assets/
│   ├── Utility/
│   ├── components/
│   ├── pages/
│   ├── firebase.js
│   └── App.js
│
├── .env
├── package.json
└── README.md
```

#### Deployment

Once you're ready to deploy the project, you can follow these steps:

1. **Firebase Hosting**:

   - Initialize Firebase hosting in your project by running:
     ```bash
     firebase init
     ```
   - Follow the prompts to set up Firebase hosting, and deploy your app using:
     ```bash
     firebase deploy
     ```

2. **cPanel Deployment**:
   - Build the production-ready files:
     ```bash
     npm run build
     ```
   - Upload the build files to your cPanel account via File Manager or FTP.

That's it! You now have a functional Amazon clone with Firebase for authentication, Stripe for payments, and product data from the FakeStore API.

### Prerequisites

### Prerequisites

Before setting up and running the Amazon clone project, ensure you have the following tools and accounts:

1. **Node.js**:
   - Make sure Node.js is installed on your system.
   - [Download Node.js](https://nodejs.org/) (LTS version recommended).
2. **npm (Node Package Manager)**:

   - This usually comes bundled with Node.js. You can check if it's installed by running:
     ```bash
     npm -v
     ```

3. **Git**:

   - Install Git for version control.
   - [Download Git](https://git-scm.com/).

4. **Firebase Account**:

   - Create a Firebase account to handle user authentication and database storage.
   - [Sign up for Firebase](https://firebase.google.com/).

5. **Stripe Account**:

   - Create a Stripe account for payment integration.
   - [Sign up for Stripe](https://stripe.com/).

6. **Text Editor or IDE**:

   - You’ll need a code editor to modify the project files. Recommended options:
     - **[Visual Studio Code](https://code.visualstudio.com/)**: A powerful and free code editor.

7. **Basic Knowledge**:
   - Basic understanding of JavaScript, React, and Node.js.
   - Familiarity with npm and Git commands.

Make sure these prerequisites are fulfilled before proceeding with the installation steps to ensure smooth project setup and development.

## Contact

### Contact

For any questions or inquiries about the Amazon clone project, feel free to reach out via the following:

- **Email**: [abeldebalke12@gmail.com](mailto:abeldebalke12@gmail.com)
- **GitHub**: [GitHub Profile](https://github.com/DevAbelo)

Feel free to contact me if you encounter any issues, need further guidance, or have suggestions for improving the project!

## Acknowledgments
Special thanks to Evangadi Tech for their helpful resources and support.

- [Evangadi Tech](https://www.evangadi.com/)
