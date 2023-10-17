const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const review = button.closest('.game-review');
        const reviewContent = review.querySelector('.review-content');
        const expandedText = review.querySelector('.expanded-text');
        
        // Toggle the display of expanded text
        if (expandedText.style.display === 'none' || expandedText.style.display === '') {
            expandedText.style.display = 'block';
            button.textContent = 'Read Less';
        } else {
            expandedText.style.display = 'none';
            button.textContent = 'Read More';
        }
    });
});
