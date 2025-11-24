
const specialists = {
    'Jewelry': {
        name: 'Barry Allen',
        specialty: 'Jewelry',
        experience: 8,
        rating: 4.9,
        profilePicture: "https://avatar.iran.liara.run/public/boy?username=barry"
    },
    'Carpentry': {
        name: 'Diana Prince',
        specialty: 'Carpentry',
        experience: 10,
        rating: 4.8,
        profilePicture: "https://avatar.iran.liara.run/public/girl?username=diana"
    },
    'Woodworking': {
        name: 'Clark Kent',
        specialty: 'Woodworking',
        experience: 7,
        rating: 4.7,
        profilePicture: "https://avatar.iran.liara.run/public/boy?username=clark"
    },
    'Art': {
        name: 'Selina Kyle',
        specialty: 'Art',
        experience: 9,
        rating: 4.9,
        profilePicture: "https://avatar.iran.liara.run/public/girl?username=selina"
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

        // Function to update specialist display
        const updateSpecialistDisplay = (specialist) => {
            if (specialist) {
                image.src = specialist.profilePicture;
                specialistName.textContent = specialist.name;
                specialistSpecialty.textContent = `Specialty: ${specialist.specialty}`;
                specialistExperience.textContent = `Years of experience: ${specialist.experience}`;
                specialistRating.textContent = `Rating: ${specialist.rating}`;
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
            window.location.href = 'new-request.html';
        });
    }
});
