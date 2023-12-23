const projects = [
    {
        name: 'AquaPod Frontend',
        about: `AquaPod is an innovative project designed to address 
            marine pollution by autonomously collecting waste from 
            the sea. This repository contains the code for the 
            frontend webpage of AquaPod.
            Connecting and displaying data from the backend using chart.js, 
            and integrating with Mapbox to visualize boats on a real map.`,
        tools: [ 'Vue3', 'Vite', 'tailwindcss', 'Pinia', 'Chartjs', 'Mapbox' ]
    },
    {
        name: 'MacroQuiet Web',
        about: `Explore MacroQuiet Game Development Studio's Vue.js web frontend repository,
        featuring a responsive carousel showcasing the latest game, dynamic website changes
        upon clicking featured games, an 'About Us' section, horizontally scrollable news
        for updates, and a contact page. The user authentication section includes login and
        register functionalities. The user profile page allows users to edit description,
        avatar, cover image, view played games with trophies, achievement progress, last played
        time, and amount played. Additionally, users can edit settings for username and password,
        delete their profile, and access the privacy policy.`,
        tools: [ 'Vue3', 'Vite', 'tailwindcss', 'Pinia', 'VeeValidate', 'VueQuill', 'EmailJS', 'Axios' ]
    },
];

const tools = {
    "Pinia": "https://pinia.vuejs.org", 
    "Vue3": "https://vuejs.org", 
    "Vite": "https://vitejs.dev", 
    "Chart.js": "https://www.chartjs.org", 
    "Mapbox": "https://www.mapbox.com", 
    "Axios": "https://axios-http.com", 
    "EmailJS": "https://www.emailjs.com", 
    "VueQuill": "https://vueup.github.io/vue-quill/m", 
    "tailwindcss": "https://tailwindcss.com", 
    "VeeValidate": "https://vee-validate.logaretm.com/v4/", 
}

export { projects, tools };
