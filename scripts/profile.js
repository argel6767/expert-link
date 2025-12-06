document.addEventListener('DOMContentLoaded', () => {
    const moreInfo = document.getElementById('more-info');

    if (moreInfo) {
        moreInfo.addEventListener('click', () => {
            window.location.href = 'specialist-request-info.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const moreInfo = document.getElementById('spec-req-info');

    if (moreInfo) {
        moreInfo.addEventListener('click', () => {
            window.location.href = 'user-request-info-clark.html';
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const moreInfo = document.getElementById('manu-req-info');

    if (moreInfo) {
        moreInfo.addEventListener('click', () => {
            window.location.href = 'user-request-info-wayne.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.getElementById('review-dialog');
    const form = document.getElementById('review-form');
    const cancelBtn = document.getElementById('cancel-btn');
    
    // Find and setup "Write a Review" button
    const reviewBtn = document.getElementById('write-review-btn');
    if (reviewBtn) {
        reviewBtn.addEventListener('click', () => {
            dialog.showModal();
        });
    }
    
    // Cancel button
    cancelBtn.addEventListener('click', () => {
        dialog.close();
        form.reset();
    });
    
    // Submit form
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const rating = document.getElementById('rating').value;
        const text = document.getElementById('review-text').value;
        
        // Add review to page
        const reviewContainer = document.querySelector('.review-container');
        const newReview = document.createElement('div');
        newReview.className = 'review';
            newReview.innerHTML = `
            <p><strong>${'&#9733;'.repeat(rating)}${'&#9734;'.repeat(5 - rating)}</strong></p>
            <p class="review-text">${text}</p>
            <p class="reviewer-name">Leon Kennedy</p>`;
        reviewContainer.appendChild(newReview);
        
        dialog.close();
        form.reset();
    });
});