/**
 * Portfolio Data - Add new projects, blogs, and achievements here.
 * 
 * HOW TO ADD:
 * 
 * PROJECTS - Add a new object with: title, description, image (URL), link, alt, details (fullContent, technologies, features, contribution)
 * BLOGS    - Add a new object with: title, meta (e.g. "Tech · 5 min read"), description, link
 * ACHIEVEMENTS - Add a new object with: title, description, icon (fa-trophy, fa-certificate, fa-award, fa-medal, fa-star)
 */

const portfolioData = {
  projects: [
    {
      title: "AI-Based Piezoelectric Barrel Generator",
      description: "Designed and developed an AI-integrated piezoelectric energy harvesting system that converts mechanical pressure into electrical energy",
      image: "./pro1.jpg",
      link: "./pro1.html",
      alt: "AI Piezoelectric Barrel Generator",
      details: {
        fullContent: "Designed and developed an AI-integrated piezoelectric energy harvesting system that converts mechanical pressure into electrical energy. Multiple piezoelectric sensors were arranged in a barrel-shaped structure to generate voltage when external force is applied. Artificial intelligence was used to analyze real-time voltage data, predict energy output patterns, and improve system efficiency.",
        technologies: ["Piezoelectric Sensors", "Arduino / Microcontroller", "Python (Machine Learning)", "Bridge Rectifier Circuit", "Voltage Sensors", "Data Monitoring Dashboard"],
        features: ["AI-based energy prediction and monitoring", "Real-time voltage data analysis", "Sustainable energy generation system", "Compact barrel-shaped mechanical design", "Smart performance optimization"],
        contribution: ["Designed mechanical barrel structure", "Integrated piezoelectric sensors", "Developed electrical conversion circuit", "Implemented AI model for energy prediction", "Built monitoring and testing system"]
      }
    },
    {
      title: "Carbon Footprint Calculater",
      description: "A Carbon Footprint Calculator is a web-based tool that estimates the amount of carbon dioxide (CO₂) emissions produced by daily activities such as electricity usage, transportation, and food consumption.",
      image: "./pro2.jpg",
      link: "./pro2.html",
      alt: "Carbon Footprint Calculator",
      details: {
        fullContent: "A Carbon Footprint Calculator is a web-based tool that estimates the amount of carbon dioxide (CO₂) emissions produced by daily activities such as electricity usage, transportation, and food consumption. Users can input their habits and receive an estimate of their environmental impact, along with suggestions to reduce it.",
        technologies: ["HTML, CSS, JavaScript", "Web Forms & Validation", "Calculation Logic / Formulas", "Responsive Design"],
        features: ["Electricity usage emission estimates", "Transportation (car, bus, flights) carbon tracking", "Food consumption impact calculation", "Personalized CO₂ footprint summary", "Tips to reduce carbon footprint"],
        contribution: ["Designed and built the web interface", "Implemented emission calculation formulas", "Integrated multiple activity categories", "Created user-friendly input forms"]
      }
    },
    {
      title: "Arduino Simple Dice",
      description: "The Arduino Simple Dice is a beginner-friendly embedded systems project that simulates a digital dice using LEDs and a push button",
      image: "./pro3.jpg",
      link: "./pro3.html",
      alt: "Arduino Simple Dice",
      details: {
        fullContent: "The Arduino Simple Dice is a beginner-friendly embedded systems project that simulates a digital dice using LEDs and a push button. When the user presses the button, the LEDs display a random number from 1 to 6, mimicking the roll of a physical dice. Ideal for learning basic electronics and microcontroller programming.",
        technologies: ["Arduino (Uno / Nano)", "LEDs (7-segment or individual)", "Push Button", "Resistors & Breadboard", "C/C++ (Arduino IDE)"],
        features: ["Random number generation (1–6)", "Visual dice display using LEDs", "Push-button trigger", "Simple, compact circuit design", "Beginner-friendly assembly"],
        contribution: ["Designed the circuit layout", "Wrote the Arduino sketch for random logic", "Configured LED patterns for dice faces", "Built and tested the prototype"]
      }
    }
    // Add more projects - copy the block above and update the fields
  ],

  blogs: [
    {
      title: "Getting Started with AI/ML",
      meta: "Tech · 5 min read",
      description: "Exploring the basics of machine learning and how beginners can dive into the world of artificial intelligence.",
      link: "#"
    },
    {
      title: "Web Development Best Practices",
      meta: "Web Dev · 7 min read",
      description: "Clean code, responsive design, and performance tips for building modern web applications.",
      link: "#"
    },
    {
      title: "Embedded Systems with Arduino",
      meta: "IoT · 6 min read",
      description: "A beginner's guide to Arduino projects and bringing hardware ideas to life with code.",
      link: "#"
    }
    // Add more blogs - copy the block above and update the fields
  ],

  achievements: [
    {
      title: "Project Showcase Winner",
      description: "Recognized for innovative piezoelectric energy harvesting project",
      icon: "fa-trophy"
    },
    {
      title: "Java Certification",
      description: "Certified in Java programming and object-oriented design",
      icon: "fa-certificate"
    },
    {
      title: "DSA Problem Solver",
      description: "Solved 200+ problems on competitive programming platforms",
      icon: "fa-award"
    }
    // Add more achievements - icon options: fa-trophy, fa-certificate, fa-award, fa-medal, fa-star
  ]
};
