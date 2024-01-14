const projects = [
    {
        name: 'AquaPod Frontend',
        about: `AquaPod is an innovative project designed to address 
            marine pollution by autonomously collecting waste from 
            the sea. This repository contains the code for the 
            frontend webpage of AquaPod.
            Connecting and displaying data from the backend using chart.js, 
            and integrating with Mapbox to visualize boats on a real map.`,
        tools: [ 'Vue3', 'Vite', 'tailwindcss', 'Pinia', 'Chartjs', 'Mapbox' ],
        sourceCode: "https://github.com/azuzic/aquapod-frontend",
        webPage: "https://aquapod.netlify.app"
    },
    {
        name: 'MacroQuiet Frontend',
        about: `Explore MacroQuiet Game Development Studio's Vue.js web frontend repository,
            featuring a responsive carousel showcasing the latest game, dynamic website changes
            upon clicking featured games, an 'About Us' section, horizontally scrollable news
            for updates, and a contact page. The user authentication section includes login and
            register functionalities. The user profile page allows users to edit description,
            avatar, cover image, view played games with trophies, achievement progress, last played
            time, and amount played. Additionally, users can edit settings for username and password,
            delete their profile, and access the privacy policy.`,
        tools: [ 'Vue3', 'Vite', 'tailwindcss', 'Pinia', 'VeeValidate', 'VueQuill', 'EmailJS', 'Axios' ],
        sourceCode: "https://github.com/azuzic/macroquiet-web",
        webPage: "https://macroquiet.com"
    },
    {
        name: 'MacroQuiet Backend',
        about: `Backend for MacroQuiet game development studio's Express.js 
            web server. Notable functionalities include MacroQuiet account registration directly within the 
            application, Google OAuth authentication powered by Passport.js, email confirmation for user 
            addresses, password reset via email, and user authorization through JSON Web Tokens (JWT).
            The server also features a REST API tailored for Unity games, enabling communication through specially 
            designed REST routes. Furthermore, an Admin Panel REST API provides control over data, encompassing tasks 
            such as reading data, managing documents in the MongoDB database (including removal and addition), 
            and uploading new images to the S3 bucket.`,
        tools: [ 'Nodejs', 'Expressjs', 'MongoDB', 'OAuth2', 'RESTAPI', 'Passportjs', 'JWTauthentication', 'Nodemailers', 'Unity'  ],
        sourceCode: "https://github.com/azuzic/macroquiet-express-server",
        webPage: "https://macroquiet.com"
    },
    {
        name: 'Process App',
        about: `Process App is an automation application for managing processes and tasks for a large number of people.
            It is built using Vue3 and Vite. It utilizes Firebase for data storage and authentication. The Process app 
            allows users to manage processes consisting of different blocks of activity. Users can view a list of processes, 
            click on a process to view its details, and interact with various blocks associated with the process.
            These blocks can include starting a process, completing a form, having a conversation, and receiving 
            system notifications. The app is divided into two main parts: ADMIN and USER.`,
        tools: [ 'Vue3', 'Vite', 'tailwindcss', 'Vuex', 'Firebase', 'VueFire'],
        sourceCode: "https://github.com/azuzic/process-app",
        webPage: ""
    },
    {
        name: 'OpenBCI-DL',
        about: `The project utilized the OpenBCI Neurotechnologist's starter kit and the OpenBCI GUI 
            streaming app for EEG data capture. The headset features 16 re-configurable dry sensors 
            operating at frequencies up to 120Hz. Data instances consist of 60 values per channel, 
            forming an array of shape (16, 60). Recordings were conducted at 90 FPS, resulting in 
            5400 instances for each action in one-minute recordings. The OpenBCI GUI app employed 
            the Fast Fourier Transform (FFT) option for signal transformation from time to frequency domain.`,
        tools: [ 'Numpy', 'TensorFlow', 'GoogleColab', 'EEGNet'],
        sourceCode: "https://github.com/fipu-lab/OpenBCI-DL",
        webPage: ""
    },
    {
        name: 'Detection and Classification of Speech Bubbles in Comics Using Convolutional Neural Networks',
        about: `This project addresses the classification of speech bubbles in comic book images, a crucial step
            in automating the analysis of visual narratives. The project employs a custom process for de-
            tection and extraction of speech bubbles. This is involved a multi-step process, including image
            preprocessing, OCR text recognition, grouping of text boxes, binary thresholding, and visualiza-
            tion. Convolutional Neural Network (CNN) model is trained from scratch on a dataset comprising
            1000 comic book images, encompassing five distinct speech bubble categories.`,
        tools: [ 'JupyterNotebook', 'PyQT5', 'Numpy', 'TensorFlow', 'Matplotlib', 'opencv', 'Pillow', 'EasyOCR'],
        sourceCode: "https://github.com/azuzic/Detection-and-Classification-of-Speech-Bubbles-in-Comics-Using-Convolutional-Neural-Networks",
        webPage: ""
    },
    {
        name: 'Bitnomia Frontend',
        about: `Bitnomia is a website created using the Vue.js framework.`,
        tools: [ 'Vue3', 'Vite', 'tailwindcss', 'Pinia', 'EmailJS'],
        sourceCode: "https://github.com/azuzic/bitnomia-frontend",
        webPage: "https://bitnomia.com"
    },
    {
        name: 'Fipu Internship System',
        about: `FIPU-praksa is an experimental research and development project aiming to simplify and automate internship processes. 
            Leveraging BPMN model-based development and a Python BPMN engine, the system dynamically adjusts its interface based 
            on the current process state. Functionalities include task overview, preference submission, application form completion, 
            practice log submission, and communication with supervisors. The system provides an interactive BPMN graph for process 
            instance tracking, quick search for students, employers, and tasks, task/project acceptance/rejection, 
            student communication, and task/project submission.`,
        tools: [],
        sourceCode: "https://github.com/stars/lukablaskovic/lists/fipu-praksa",
        webPage: "http://fipubot.unipu.hr:4000/login"
    },
    {
        name: 'Hotel Management Database App',
        about: `The SQL database features comprehensive functionalities, ensuring 
            accurate data entry, room availability checks, tourist season calculation, 
            and verification of free dates. It supports guest registration, selection 
            of hotel services, available dates, and automatic price calculation based 
            on chosen dates. Transactions and triggers validate data accuracy. 
            For staff, it enables room management (addition/deletion/update), invoice 
            overview, reservation handling, service tracking, and more. This modern web 
            application, developed in PHP, seamlessly executes all these 
            functionalities for efficient hotel management.`,
        tools: [ 'MySQL', 'PHP' ],
        sourceCode: "https://github.com/azuzic/hotel-db",
        webPage: ""
    },
    {
        name: 'Naive Bayes Spam Filter',
        about: `This project involves creating a naive Bayes spam filter in R. The SMS Spam Collection Dataset, 
            comprising 5,574 messages tagged as ham (legitimate) or spam, is used. The naive Bayes classifier 
            successfully categorizes messages, achieving high accuracy (0.984) and a Cohen's kappa value of 0.927.`,
        tools: [ 'R', 'dplyr' ],
        sourceCode: "https://github.com/azuzic/naive-bayes-classifier",
        webPage: ""
    },
    {
        name: 'Istra Music Shop',
        about: `"IstraMusicShop" is an application designed for musicians to sell their instruments. 
            Users can register, submit requests with instrument details via web forms, and receive a suggested price. 
            Confirmation emails are sent upon request submission. Employees can review, accept, reject, or adjust prices 
            for requests. Accepted requests trigger confirmation emails to users. The application facilitates seamless 
            interaction between musicians and the store.`,
        tools: [ 'Vue3', 'tailwindcss', 'Firebase', 'EmailJS'],
        sourceCode: "https://github.com/azuzic/istra_music_shop",
        webPage: "https://istramusicshop.netlify.app"
    },
    {
        name: 'PDF Template Maker Frontend',
        about: `PDF Template Maker is a Vue3 Vite web application designed for creating and exporting PDF templates. 
            This app provides a user-friendly interface for crafting personalized PDF documents by utilizing HTML elements.`,
        tools: [ 'Vue3', 'Vite', 'tailwindcss', 'Pinia', 'Firebase', 'VueFire', 'Axios', 'VueQuill', 'vuedraggablenext' ],
        sourceCode: "https://github.com/azuzic/pdf-maker",
        webPage: "https://html-to-pdf-maker.netlify.app"
    },
    {
        name: 'PDF Template Maker Service',
        about: `PDF Template Maker Service is part of FIPU Intership System.`,
        tools: [ 'Nodejs', 'Expressjs', 'Playwright', 'RESTAPI'],
        sourceCode: "https://github.com/azuzic/pdf-maker-service-node",
        webPage: "https://html-to-pdf-maker.netlify.app"
    },
    {
        name: 'MacroQuiet Game Launcher',
        about: `MacroQuiet game launcher written in Java. User inteface is created in JavaFX which runs on Gradle.
            MacroQuiet game launcher allows players to download/launch MacroQuiet games, log in, view their trophies and watch the game trailers.`,
        tools: [ 'Gradle', 'JavaFX' ],
        sourceCode: "https://github.com/azuzic/macroquiet-game-launcher",
        webPage: ""
    },
    {
        name: 'Bookstacker',
        about: `Bookstacker is an Android application that enables users to store their favourite books in a personal, 
            easy-to-manage digital library. The app is designed to assist book lovers in tracking their reading journey, 
            providing a platform to add, store, and update the status of their books in a more structured and efficient way.`,
        tools: [ 'Gradle', 'Kotlin', 'GoogleBooks', 'Android' ],
        sourceCode: "https://github.com/azuzic/bookstacker",
        webPage: ""
    },    
    {
        name: 'Dragana Žužić Apartments',
        about: `Website I made for my mom :]`,
        tools: [ 'Vue3', 'Vite', 'tailwindcss', 'Pinia'],
        sourceCode: "https://github.com/azuzic/dragana-zuzic-apartments",
        webPage: "https://www.apartments-premantura.com/home"
    },
];

const tools = {
    "Pinia": "https://pinia.vuejs.org", 
    "Vue3": "https://vuejs.org", 
    "Vite": "https://vitejs.dev", 
    "Chartjs": "https://www.chartjs.org", 
    "Mapbox": "https://www.mapbox.com", 
    "Axios": "https://axios-http.com", 
    "EmailJS": "https://www.emailjs.com", 
    "VueQuill": "https://vueup.github.io/vue-quill/m", 
    "tailwindcss": "https://tailwindcss.com", 
    "VeeValidate": "https://vee-validate.logaretm.com/v4/", 
    "Nodejs": "https://nodejs.org/en", 
    "Expressjs": "https://expressjs.com", 
    "MongoDB": "https://www.mongodb.com", 
    "OAuth2": "https://oauth.net/2/", 
    "RESTAPI": "https://www.ibm.com/topics/rest-apis#:~:text=the%20next%20step-,What%20is%20a%20REST%20API%3F,representational%20state%20transfer%20architectural%20style.", 
    "Passportjs": "https://www.passportjs.org", 
    "JWTauthentication": "https://jwt.io/introduction", 
    "Nodemailers": "https://nodemailer.com", 
    "Unity": "https://unity.com", 
    "Vuex": "https://vuex.vuejs.org", 
    "Firebase": "https://firebase.google.com", 
    "VueFire": "https://vuefire.vuejs.org", 
    "TensorFlow": "https://www.tensorflow.org", 
    "GoogleColab": "https://colab.google", 
    "EEGNet": "https://eegnet.org/#:~:text=EEGNet%20brings%20scientists%20and%20technical,across%20the%20Canadian%20scientific%20community.", 
    "Numpy": "https://numpy.org", 
    "JupyterNotebook": "https://jupyter.org",
    "PyQT5": "https://pypi.org/project/PyQt5/#:~:text=PyQt5%20is%20a%20comprehensive%20set,platforms%20including%20iOS%20and%20Android.",
    "JupyterNotebook": "https://jupyter.org",
    "Matplotlib ": "https://matplotlib.org",
    "opencv": "https://opencv.org",
    "Pillow": "https://pypi.org/project/Pillow/",
    "EasyOCR": "https://github.com/JaidedAI/EasyOCR",
    "MySQL": "https://www.mysql.com",
    "PHP": "https://www.php.net",
    "R": "https://www.r-project.org",
    "dplyr": "https://dplyr.tidyverse.org",
    "VueJSONPretty": "https://github.com/leezng/vue-json-pretty",
    "vuedraggablenext": "https://github.com/SortableJS/vue.draggable.next",
    "Playwright": "https://playwright.dev",
    "JavaFX": "https://openjfx.io",
    "Gradle": "https://gradle.org",
    "Kotlin": "https://kotlinlang.org",
    "GoogleBooks": "https://developers.google.com/books",
    "Android": "https://www.android.com",
}

export { projects, tools };
