const facebook = document.querySelector('.facebook-circle');
const twitter = document.querySelector('.twitter-circle');
const instagram = document.querySelector('.instagram-circle');
const github = document.querySelector('.github-circle');
const linkedin = document.querySelector('.linkedin-circle');

export const socialNetworks = [facebook, twitter, instagram, github, linkedin];
export const URLs = ['https://www.facebook.com/ChavaTI', 'https://twitter.com/ChavaTI_', 'https://www.instagram.com/chavatloz/', 'https://github.com/ChavaTI', 'https://www.linkedin.com/in/salvador-hernández-lópez-a2ab7315a/'];


export const menuItems = [
    document.querySelector('#toAbout'),
    document.querySelector('#toSkills'),
    document.querySelector('#toPortafolio'),
    document.querySelector('#toExperience'),
    document.querySelector('#toContact')
];
export const targets = ['#about', '#skills', '#portafolio', '#experience', '#contact'];

export const skills = [
    document.querySelector('#react'),
    document.querySelector('#angular'),
    document.querySelector('#node'),
    document.querySelector('#php'),
    document.querySelector('#java'),
    document.querySelector('#db'),
    document.querySelector('#linux'),
    document.querySelector('#docker'),
    document.querySelector('#diagram'),
    document.querySelector('#language'),
    document.querySelector('#learning')
];


export const skillsName = [
    'React',
    'Angular',
    'NodeJS',
    'PHP',
    'Java',
    'Data Bases',
    'Linux',
    'Docker',
    'Software engineering',
    'Languages',
    'Learning'
];

export const iconSkill = [
    ['fab fa-react', 'react-card'],
    ['fab fa-angular', 'angular-card'],
    ['fab fa-node-js', 'node-card'],
    ['fab fa-php', 'php-card'],
    ['fab fa-java', 'java-card'],
    ['fas fa-database', 'db-card'],
    ['fab fa-linux', 'linux-card'],
    ['fab fa-docker', 'docker-card'],
    ['fas fa-project-diagram', 'diagram-card'],
    ['fas fa-language', 'language-card'],
    ['fas fa-book-reader', 'learning-card']
];

export const SkillThemes = [
    '#282c34',
    '#f0f0f080',
    '#333333',
    '#7478ae',
    '#f13d3d',
    '#2f5676',
    '#f0f0f080',
    '#309aeb',
    '#1d2f3f',
    '#87c540',
    '#3be1f0'
];

export const aboutSkillText = [
    `ReactJs is my favorite frontend library develop. I fully know how to use both the props and class components, stateless functional components and hook components. 
    I’m also a person who likes following good practices. I’m skilled at using Redux in ReactJS. When I use this tool I usually connect the react app with the API Rest using axios.`,
    `Angular was the first frontend framework that I knew.  I master using the components of this framework and I alway try to take advantage of the angular materials to have good UI results. Also, I always stick to good practices when I code in TypeScript and Angular.`,
    `NodeJS was the first backend framework I’ve ever worked with. At the beginning I used to develop web apps using NodeJS Express and Jade. But, nowadays I’ve tended to make API rests in order to make MEAN stack apps and MERN stack apps. 
    The data bases that I’ve used are MySQL, MariaBD and Mongoo.  Consequently, I’ve learned how to connect them with Node apps. And Finally, the technology that I use to make authorization tokens is JWT.`,
    `My first web language was PHP, I’ve used this language since university. My knowledge of this field goes from  PHP 7 on web server, connecting the app with MySQL and SQLServer databases, to how to print the data in order`,
    `Java is my first POO language. I have a lot of experience coding in Java since I’ve worked with it for a long time. I know  how to make either CLI apps, GUI apps (using code and using NetBeans tools) and web apps. Another thing that I’d like to point out is that I've used many libraries and frameworks in java such that JDBC, JDBI, JPA, Hibernate, SpringMVC.`,
    `One element inside my skill set is designing SQL databases. The common way that I follow to achieve this task is I start modeling using CASE tools and then I implement them in MySQL , MariaDB or SQLServer. I know how to manage the databases and add security. I face all the above not only using tools as PhpMyAdmin and MySql Workbench but using SQL script too.  Within the No SQL databases I’ve learned to create Mongo databases.`,
    `The linux systems are the reason cause I'm in love with computer science, I use linux for 10 years ago, I know how to install and manage the systems, 
    I've used Debian systems, Red hat systems and Arch linux systems, In Servers Linux case I've used Ubuntu Server, Debian, CentOS and Fedora Server. In linux I know how to 
    install manage the Apache web server, Nginx, Tomcat server, DNS servers, DHCP servers, Webmin, databases (More in databases section), LAMP server. I know how to install and use network security tools
    as Nagios and nmap. My actual linux system is Arch linux but I've used Ubuntu (Kubuntu, Xubuntu, Ubuntu mate), Debian, Fedora, Manjaro, Linux Mint as personal system.
     I know how to write shell script code`,
    `With docker I can just upload a few lines of code instead of I make an oversize configuration on the server, also when I work in team
     I prefer use docker because the team can assure that the project works on any team member computer no matter his or her Operative System. I master using docker on console and using script like dockerfiles and/or docker-compose scripts.
     I ran docker components like Apache Server, Ngnix server, LAMP srevers (Linux Apache Mysql PHP), laravel projects, node projects and java projects`,
    `I'm able to makes software engineering since requirements analysis using interviews, surveys, documentation analysis. Then the software design using entity–relationship models, Relational models,
    database normalization, flowcharts, use case diagrams, mockup designs. In develop phase I've worked with SCRUM and KANBAN, Finally I've deployed projects on AWS and digital ocean using docker.`,
    `My native language is spanish and I've studied english since grade school to these days, I've been in diferents english courses but I try to practice my english everyday with some firends.
    I consider that my english is good, because I've been able to talk english with american people. And I've tried to read more english books to improve my english.`,
    `I love the computer science, software develop, programming and makes solutions so I study this topics whenever I need it or I want to learn new informatic stuff on web sites, blogs, forums, software documentations, tutorials, web courses or books.
    I consider me a self-taught person. If I don't know how to do it, I'll learn and then do it. Finally I love share my knowleges with the people.`
]