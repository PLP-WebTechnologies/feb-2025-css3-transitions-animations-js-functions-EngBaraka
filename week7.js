// Function to store and retrieve user preferences using localStorage
function storePreferences() {
    const isAnimationEnabled = document.getElementById('animationToggle').checked;
    // Store the preference in localStorage
    localStorage.setItem('animationEnabled', isAnimationEnabled);
}

function loadPreferences() {
    // Retrieve the preference from localStorage
    const isAnimationEnabled = localStorage.getItem('animationEnabled') === 'true';
    document.getElementById('animationToggle').checked = isAnimationEnabled;
    return isAnimationEnabled;
}

// Function to trigger animation dynamically
function triggerAnimation() {
    const button = document.getElementById('animateButton');
    const isAnimationEnabled = loadPreferences();

    if (isAnimationEnabled) {
        // Apply the animation class to trigger the bounce animation
        button.classList.add('animated');

        // Remove the animation class after the animation ends to allow re-triggering
        button.addEventListener('animationend', () => {
            button.classList.remove('animated');
        });
    }
}

// Event listener for the animation toggle checkbox
document.getElementById('animationToggle').addEventListener('change', function() {
    storePreferences();
});

// Event listener for button click to trigger animation
document.getElementById('animateButton').addEventListener('click', function() {
    triggerAnimation();
});

// Load preferences when the page loads
window.onload = function() {
    loadPreferences();
};
