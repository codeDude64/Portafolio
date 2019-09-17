document.addEventListener("DOMContentLoaded", function () {
    const facebook = document.querySelector('.facebook-circle');
    const twitter = document.querySelector('.twitter-circle');
    const instagram = document.querySelector('.instagram-circle');
    const github = document.querySelector('.github-circle');
    let socialNetworks = [facebook, twitter, instagram, github];
    let URLs = ['https://www.facebook.com/ChavaTI', 'https://twitter.com/ChavaTI_', 'https://www.instagram.com/chavatloz/', 'https://github.com/ChavaTI'];


    for (let i = 0; i < socialNetworks.length; i++) {
        const element = socialNetworks[i];
        const url = URLs[i];
        element.addEventListener('mouseover', () => {
            document.body.style.cursor = "pointer";
        });

        element.addEventListener('mouseout', () => {
            document.body.style.cursor = "default";
        });

        element.addEventListener('click', () => {
            window.open(url, '_blank');
        });
    }
});


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

document.querySelector('#toAbout').addEventListener('click', () => {
    smoothScroll('#about',2000);
});

document.querySelector('#toSkills').addEventListener('click', () => {
    smoothScroll('#skills',2000);
});

document.querySelector('#toPortafolio').addEventListener('click', () => {
    smoothScroll('#portafolio',2000);
});

document.querySelector('#toExperience').addEventListener('click', () => {
    smoothScroll('#experience',2000);
});

document.querySelector('#toContact').addEventListener('click', () => {
    smoothScroll('#contact',2000);
});
