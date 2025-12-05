document.addEventListener('DOMContentLoaded', () => {
    const moreOptions = document.getElementById('more-options');
    if (moreOptions) {
        moreOptions.addEventListener('change', (event) => {
            const selectedOption = event.target.options[event.target.selectedIndex];
            const href = selectedOption.dataset.href;
            if (href) {
                window.location.href = href;
            }
        });
    }

    const viewProfile = document.getElementById('view-profile');
    if (viewProfile) {
        viewProfile.onclick = () => window.location.href = "public-profile.html";
    }

    const goHome = document.getElementById('go-home');
    if (goHome) {
        goHome.onclick = () => window.location.href = "index.html";
    }

    const signInBtn = document.getElementById('sign-in-btn');
    if (signInBtn) {
        signInBtn.onclick = () => {
            const emailInput = document.getElementById('email-input');
            const value = emailInput.value;
            if (value) {
                if (value === "clark24kent@gmail.com") {
                    window.location.href = "specialist-profile.html";
                }
                else if (value === "leonkennedy@gmail.com") {
                    window.location.href = "user-profile.html";
                }
                else {
                    alert("Invalid credentials");
                }
            }
            else {
                alert("No credentials provided");
            }
        };
    }

    const viewSiteBtn = document.getElementById('view-site');
    if (viewSiteBtn) {
        viewSiteBtn.onclick = () => {
            window.location.href = "https://www.wayne-ent.com/index.html";
        };
    }

    const referMeBtn = document.getElementById('refer-me');
    if (referMeBtn) {
        referMeBtn.onclick = () => {
            alert("Referral request sent on your behalf! Expect a follow-up email in the next few days.");
            window.location.href = "user-profile.html";
        };
    }

    const hireSpecialistBtn = document.getElementById('hire-specialist');
    if (hireSpecialistBtn) {
        hireSpecialistBtn.onclick = () => {
            alert("A job request has been sent to this specialist! Expect a reply from them soon.");
            window.location.href = "user-profile.html";
        };
    }
});