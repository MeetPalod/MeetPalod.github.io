/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Meet Palod",
  title: "Hi all, I'm Meet",
  subTitle: emoji(
    "Data scientist with strong technical skills in SQL, Python, AWS, and PowerBI. Experienced in designing and developing ETL pipelines, creating complex SQL queries, and optimizing data processing."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/meetpalod/",
  github: "https://github.com/MeetPalod",
  gmail: "mpalod@iu.edu",
  kaggle: "https://www.kaggle.com/meetpalod",
  medium: "https://medium.com/@meetpalod",
  instagram: "https://www.instagram.com/meet__ji",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DATA ENTHUSIAST WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ DATA ANALYSIS AND INSIGHTS: I specialize in transforming raw data into actionable insights. Whether it's extracting patterns from large datasets, performing statistical analysis, or visualizing trends through interactive dashboards, I excel in turning data into valuable information."
    ),
    emoji("⚡ END-TO-END DATA PIPELINES: I design, develop, and manage end-to-end data pipelines that enable efficient data collection, processing, and analysis. From integrating various data sources to deploying real-time analytics solutions, I ensure data flows seamlessly to drive informed decision-making."),
    emoji(
      "⚡ PREDICTIVE MODELING AND MACHINE LEARNING: Leveraging advanced machine learning techniques, I build predictive models to forecast trends, make informed predictions, and optimize processes. My expertise in developing models for stock prediction, sentiment analysis, and more adds a layer of predictive power to data-driven strategies."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },  
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Airflow",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Snowflake",
      fontAwesomeClassname: "fa-light fa-snowflake" 
    },
    {
      skillName: "dbt",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "IICS",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Databricks",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Spark",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "PowerBI",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Tablue",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indiana University-Bloomington",
      logo: require("./assets/images/iulogo.png"),
      subHeader: "Master of Science in Data Science",
      duration: "August 2022 - May 2024",
      desc: "Ranked top 5% in the program. Currently working as a Teaching Assistant for Product Management course.",
      descBullets: [
        "CGPA: 3.95",
        "Relevant Coursework: Advanced Database Concepts, Applied Machine Learning, Exploratory Data Analysis Applied Algorithms, Financial Econometrics, Big Data."
      ]
    },
    {
      schoolName: "SGSITS",
      logo: require("./assets/images/sgsitslogo.png"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "July 2017 - May 2021",
      desc: "Participated in the research on a feature matching algorithm and published a paper. Received scholarship for excellent academic performance.",
      descBullets: [
        "CGPA: 8.11",
        "Relevant Coursework: Data Mining and Warehousing, Cloud Computing, Mathematics, Object-Oriented Programming, Operating Systems.",
        "Participated in inter-branch basketball, volleyball, and chess competitons"
    ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python and SQL", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Engineering and ETL(Airflow, dbt, IICS, Kafka)",
      progressPercentage: "75%"
    },
    {
      Stack: "Cloud Technologies and Big Data (AWS, Snowflake, Spark, Databricks)",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer",
      company: "Quantiphi Analytics Pvt. Ltd.",
      companylogo: require("./assets/images/qlogo.png"),
      date: "Nov 2021 – Jul 2022",
      desc: "Helped a Fortune 100 company migrate from legacy systems to AWS Cloud, resulting in a 50% reduction in system downtime and a 35% increase in performance. Designed and developed ETL pipelines processing over 1 million data points daily with 99.99% accuracy. Used IICS, Python, and SQL to load data into AWS Redshift.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Data Engineer - Intern",
      company: "Quantiphi Analytics Pvt. Ltd.",
      companylogo: require("./assets/images/qlogo.png"),
      date: "Jul 2021 – Nov 2021",
      desc: "Developed Lambda functions for Change Data Capture and ETL on Automobile Insurance Claims data. Created interactive dashboards using Tableau to reveal underlying patterns and insights."
    },
    {
      role: "Data Analyst - Intern",
      company: "Med Tour Easy",
      companylogo: require("./assets/images/mtelogo.png"),
      date: "Mar 2021 – April 2021",
      desc: "Conducted impactful data analysis on health data acquired from smartwatches, revealing vital trends and patterns crucial to the improvement of health monitoring features."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME AWESOME ACADEMIC AND PERSONAL PROJECTS THAT I CREATED.",
  projects: [
    {
      image: require("./assets/images/streamify.png"),
      projectName: "STREAMIFY",
      projectDesc: "Developed an end-to-end pipeline for real-time data analysis of 1 million users using Google Looker Studio. Utilized Kafka, Spark, Google Cloud Storage, and BigQuery for efficient data processing and analytics. Containerized Airflow and dbt using Docker for streamlined workflow management.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/MeetPalod/Streamify"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/duetscheboerselogo.png"),
      projectName: "Stock Prediction of Deutsche Borse using AWS",
      projectDesc: "Implemented ARCH and GARCH models in Python for EUR currency prediction. Leveraged AWS EMR and SageMaker to process 45.5 million data points from S3. Executed PySpark within SageMaker Notebook for advanced data analysis and machine learning tasks.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/MeetPalod/Stock-Prediction-of-Deutsche-Borse-using-AWS"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Deploying a Sentiment Analysis Model",
      projectDesc: "Built an LSTM network for sentiment analysis on movie reviews with 87.65% accuracy. Deployed the model on Amazon SageMaker and created a simple web app using HTML and CSS for user interaction.",
      footerLink: [
        {
          name: "Github",
          url: "http://fsdfs4efsf.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications and Pulications 🏆 "),
  subtitle:
    "Achievements, Certifications, Publications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Solution Architect Associate (SAA-02)",
      subtitle:
        "Gained skills to architect secure, scalable, and cost-effective solutions on the Amazon Web Services platform, enabling me to drive innovation through cloud-based designs.",
      image: require("./assets/images/awssaalogo1.png"),
      imageAlt: "AWS SAA Certificate",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        {
          name: "Verify here",
          url: "https://www.credly.com/badges/d54f6213-29aa-4820-9f26-16c66e50e6ff/public_url"
        }
      ]
    },
    {
      title: "Microsoft PowerBI Data Analyst",
      subtitle:
        "Earning this certification has empowered me with the expertise to transform data into insightful visualizations, enabling data-driven decision-making for organizations.",
      image: require("./assets/images/powerbilogo.png"),
      imageAlt: "PowerBI certificate",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        {
          name: "Verify here",
          url: "https://www.credly.com/badges/d54f6213-29aa-4820-9f26-16c66e50e6ff/public_url"
        }
      ]
    },

    {
      title: "Feature Matching with SIRB using RANSAC",
      subtitle: "Combined ORD and SIFT to get the best of both the algorithms and used RANSAC to remove outliers.",
      image: require("./assets/images/globaljournal.jpeg"),
      imageAlt: "Research paper",
      footerLink: [
        {name: "Publication", url: "https://computerresearch.org/index.php/computer/article/view/2057"},
        {
          name: "Final Project",
          url: "https://computerresearch.org/index.php/computer/article/view/2057"
        }
      ]
    }
    ,{
      title: "Udacity Deep Learning Nanodegree",
      subtitle: "Provided me with a comprehensive and hands-on learning experience, equipping me with the practical skills and theoretical foundation to excel in the field of deep learning",
      image: require("./assets/images/udacitylogo.png"),
      imageAlt: "Deep Learning certification",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
    ,{
      title: "DataCamp Data Scientist with Python",
      subtitle: "Fortified my skills in utilizing Python for data analysis, empowering me to extract meaningful insights and create impactful solutions from complex datasets",
      image: require("./assets/images/datacamplogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
    ,{
      title: "Snowflake - A Complete Masterclass",
      subtitle: "Gained proficiency to leverage Snowflake's cloud data platform, enabling efficient data warehousing and analytics to drive data-driven strategies.",
      image: require("./assets/images/snowflakelogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love to write and share with others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://wwww.google.com",
      title: "Advanced optimizations of SQL queries",
      description:
        "Various optimizations techniques that I learned from my course Advanced Database Concepts."
    },
    {
      url: "wwww.sdlfjesofl.com",
      title: "Handling NoSQL in PostGres?",
      description:
        "How to create arrays and work with JSON and Spark in PostGres"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 812 671 5910",
  email_address: "mpalod@iu.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
