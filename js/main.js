// Social network code
import { socialNetworks, URLs, menuItems, targets, skillsName, iconSkill, themes, aboutSkillText } from './items';

document.addEventListener("DOMContentLoaded", function () {
    //

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
    let startPosition = window.pageYOffset;
    let distance = target.getBoundingClientRect().top; // Es la distancia de la esquina superior de la ventana al target
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

// to Sections

const toSections = () => {
    //
    for (let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];
        const target = targets[i];

        menuItem.addEventListener('click', () => {
            smoothScroll(target, 2000);
        });
    }
}

toSections();

//TODO: About-Skills

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

//

// check and uncheck radio button hide in the skills icons
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


const showAboutSkills = () => {
    const aboutSkill = document.querySelector('#about-skill');
    const title = aboutSkill.firstElementChild.firstElementChild;
    const icon = title.nextElementSibling;
    const text = icon.nextElementSibling;

    for (let i = 0; i < skills.length; i++) {
        const skill = skills[i];

        skill.addEventListener('click', () => {

            if (skill.checked) {
                aboutSkill.style.display = 'block';
                smoothScroll('#about-skill', 2000);
                aboutSkill.style.backgroundColor = themes[i];
                title.innerHTML = skillsName[i];
                icon.innerHTML = `<i class = "${iconSkill[i][0]}"></i>`;
                icon.className = iconSkill[i][1] + " card-about-icon";
                text.innerHTML = `<p>${aboutSkillText[i]}</p>`
            } else {
                aboutSkill.style.display = 'none';
            }
        });

    }
}

showAboutSkills();