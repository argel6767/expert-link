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
});   