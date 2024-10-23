function searchBusinesses() {
    let input = document.getElementById('searchBox').value.toLowerCase();
    let businessItems = document.querySelectorAll('.slider');

    businessItems.forEach(item => {
        let businessName = item.querySelector('h3').textContent.toLowerCase();
        if (businessName.includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}



// Expand Event Details
document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', () => {
        const eventCard = button.closest('.class-card');
        eventCard.classList.toggle('expanded');
        const eventDetails = eventCard.querySelector('.class-details');
        if (eventCard.classList.contains('expanded')) {
            eventDetails.style.display = 'block';
            button.textContent = 'See Less Info';
        } else {
            eventDetails.style.display = 'none';
            button.textContent = 'See More Info';
        }
    });
});

// Expand Event Details
document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', () => {
        const classCard = button.closest('.class-card');
        classCard.classList.toggle('expanded');
        const classDetails = classCard.querySelector('.class-details');
        if (classCard.classList.contains('expanded')) {
            classDetails.style.display = 'block';
            button.textContent = 'See Less Info';
        } else {
            eventDetails.style.display = 'none';
            button.textContent = 'See More Info';
        }
    });
});



//nav bar

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

//blur

window.addEventListener('scroll', function() {
  var header = document.getElementById('sticky-header');
  if (window.scrollY > 50) { // Trigger blur after scrolling 50px
    header.classList.add('blurred');
  } else {
    header.classList.remove('blurred');
  }
});

