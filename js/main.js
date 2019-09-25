// Social network code

document.addEventListener("DOMContentLoaded", function () {
    const facebook = document.querySelector('.facebook-circle');
    const twitter = document.querySelector('.twitter-circle');
    const instagram = document.querySelector('.instagram-circle');
    const github = document.querySelector('.github-circle');
    const linkedin = document.querySelector('.linkedin-circle');
    let socialNetworks = [facebook, twitter, instagram, github, linkedin];
    let URLs = ['https://www.facebook.com/ChavaTI', 'https://twitter.com/ChavaTI_', 'https://www.instagram.com/chavatloz/', 'https://github.com/ChavaTI', 'https://www.linkedin.com/in/salvador-hernández-lópez-a2ab7315a/'];


    for (let i = 0; i < socialNetworks.length; i++) {
        const element = socialNetworks[i];
        const url = URLs[i];
        element.addEventListener('click', () => {
            window.open(url, '_blank');
        });
    }
});

// smoothScroll code

const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}

const smoothScroll = (targetId, duration) => {
    let target = document.querySelector(targetId);
    let targetPosition = target.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    const animation = currentTime => {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;


        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
}

const menuItems = [document.querySelector('#toAbout'),
    document.querySelector('#toSkills'),
    document.querySelector('#toPortafolio'),
    document.querySelector('#toExperience'),
    document.querySelector('#toContact')
];
const targets = ['#about', '#skills', '#portafolio', '#experience', '#contact'];

for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    const target = targets[i];

    menuItem.addEventListener('click', () => {
        smoothScroll(target, 2000);
    });
}


//TODO: About-Skills


document.querySelector('#react-card').addEventListener('click', () => {

});

const skills = [
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

const skillsName = [
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

const iconSkill = [
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

const themes = [
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


const checkUncheckRadio = () => {
    let booRadio;
    for (let i = 0; i < skills.length; i++) {
        const element = skills[i];

        element.addEventListener('click', () => {

            if (booRadio == element) {
                element.checked = false;
                booRadio = null;
            } else {
                booRadio = element;
            }


        });
    }
}

checkUncheckRadio();


const aboutSkill = document.querySelector('#about-skill');


for (let i = 0; i < skills.length; i++) {
    const skill = skills[i];

    skill.addEventListener('click', () => {

        if (skill.checked) {
            aboutSkill.style.display = 'block';
            aboutSkill.style.backgroundColor = themes[i];
            aboutSkill.firstElementChild.firstElementChild.innerHTML = skillsName[i];
            aboutSkill.firstElementChild.firstElementChild.nextElementSibling.className = iconSkill[i][1] + " card-about-icon";
            aboutSkill.firstElementChild.firstElementChild.nextElementSibling.innerHTML = `<i class = "${iconSkill[i][0]}"></i>`;
        } else {
            aboutSkill.style.display = 'none';
        }
    });

}