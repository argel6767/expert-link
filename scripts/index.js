
const specialists = {
    'Jewelry': {
        name: 'Barry Allen',
        specialty: 'Jewelry',
        experience: 8,
        rating: 4.9,
        profilePicture: "../public/barry.png"
    },
    'Carpentry': {
        name: 'Diana Prince',
        specialty: 'Carpentry',
        experience: 10,
        rating: 4.8,
        profilePicture: "../public/diana.png"
    },
    'IT': {
        name: 'Clark Kent',
        specialty: 'IT',
        experience: 7,
        rating: 4.7,
        profilePicture: "../public/clark.png"
    },
    'Art': {
        name: 'Selina Kyle',
        specialty: 'Art',
        experience: 9,
        rating: 4.9,
        profilePicture: "../public/selina.png"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.expert-gallery');
    if (gallery) {
        const buttons = gallery.querySelectorAll('button');
        const image = gallery.querySelector('.gallery-container img');
        const specialistName = gallery.querySelector('.gallery-container h3');
        const specialistSpecialty = gallery.querySelector('.gallery-container h4');
        const specialistExperience = gallery.querySelector('.gallery-container .gallery-expert-info p:nth-child(1)');
        const specialistRating = gallery.querySelector('.gallery-container .gallery-expert-info p:nth-child(2)');

        const specialistProfile = gallery.querySelector('#view-profile');

        // Function to update specialist display
        const updateSpecialistDisplay = (specialist) => {
            if (specialist) {
                image.src = specialist.profilePicture;
                specialistName.textContent = specialist.name;
                specialistSpecialty.textContent = `Specialty: ${specialist.specialty}`;
                specialistExperience.textContent = `Years of experience: ${specialist.experience}`;
                specialistRating.textContent = `Rating: ${specialist.rating}`;
                
                if (specialist.name === 'Clark Kent') {
                    specialistProfile.disabled = false;
                    specialistProfile.style.cursor = 'pointer';
                } else {
                    specialistProfile.disabled = true;
                    specialistProfile.style.cursor = 'not-allowed';
                }
            }
        };

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const expertType = button.textContent;
                const selectedSpecialist = specialists[expertType];
                updateSpecialistDisplay(selectedSpecialist);
            });
        });

        // Initialize display with the first specialist (e.g., Jewelry)
        updateSpecialistDisplay(specialists['Jewelry']);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const newRequestBtn = document.getElementById('new-request-btn');
    if (newRequestBtn) {
        newRequestBtn.addEventListener('click', () => {
            window.location.href = 'sign-in.html';
        });
    }
});
