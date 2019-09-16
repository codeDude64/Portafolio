document.addEventListener("DOMContentLoaded", function() {
    const facebook = document.querySelector('.facebook-circle');
    const twitter = document.querySelector('.twitter-circle');
    const instagram = document.querySelector('.instagram-circle');
    const github = document.querySelector('.github-circle');
    let socialNetworks = [facebook,twitter,instagram,github];
    let URLs = ['https://www.facebook.com/ChavaTI','https://twitter.com/ChavaTI_','https://www.instagram.com/chavatloz/','https://github.com/ChavaTI'];


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
            window.open(url,'_blank');
        });    
    }
 });