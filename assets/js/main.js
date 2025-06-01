// FutureApply Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // College search functionality
  const searchForm = document.getElementById('searchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // In a real app, this would filter results or redirect to search results
      const searchQuery = document.getElementById('searchQuery').value;
      console.log('Search query:', searchQuery);
      
      // Simple feedback to user
      const resultElement = document.getElementById('searchResults');
      if (resultElement) {
        resultElement.innerHTML = `<div class="alert alert-info mt-3">Searching for: ${searchQuery}</div>`;
      }
    });
  }

  // Application form validation
  const applicationForm = document.getElementById('applicationForm');
  if (applicationForm) {
    applicationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Form validation would go here
      console.log('Application submitted');
      
      // Show success message
      const formContainer = document.getElementById('formContainer');
      if (formContainer) {
        formContainer.innerHTML = `
          <div class="alert alert-success">
            <h4 class="alert-heading">Application Submitted!</h4>
            <p>Thank you for submitting your application. We will review your details and get back to you shortly.</p>
          </div>
        `;
      }
    });
  }
  
  // Animate on scroll for testimonials and features
  const animateItems = document.querySelectorAll('.animate-on-scroll');
  if (animateItems.length > 0) {
    const checkScroll = function() {
      animateItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < window.innerHeight - 100) {
          item.classList.add('animate-visible');
        }
      });
    };
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
  }
});
