const displayAboutMeText = () => {
    const aboutmeText = document.getElementById('aboutme-text-container');
    const aboutmeImage = document.getElementById('aboutme-img-container');
    if(aboutmeText.style.display = 'none') {
        aboutmeText.style.display = 'block';
        aboutmeImage.style.display ='none';
    }  else {
        aboutmeText.style.display = 'hidden';
    }
}

const displayAboutMePhoto = () => {
    const aboutmeText = document.getElementById('aboutme-text-container');
    const aboutmeImage = document.getElementById('aboutme-img-container');
    if(aboutmeText.style.display = 'none') {
        aboutmeImage.style.display = 'grid';
        aboutmeText.style.display ='none';
    }  else {
        aboutmeImage.style.display = 'hidden';
    }
}