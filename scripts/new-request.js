document.addEventListener('DOMContentLoaded', () => {
    const requestSubmission = document.getElementById('request-submission');
    if (requestSubmission) {
        requestSubmission.onclick = () => {
            alert("Your request has been submitted successfully!");
            const customPartRadioYes = document.getElementById('custom-part-yes');
            const customPartRadioNo = document.getElementById('custom-part-no');
            if (customPartRadioYes && customPartRadioNo) {
                if (customPartRadioYes.checked) {
                    window.location.href = "manufacturers-found.html";
                }
                else if (customPartRadioNo.checked) {
                    window.location.href = "specialists-found.html";
                }
                else {
                    window.location.href = "specialists-found.html";
                }
            }
        }
    }
});

