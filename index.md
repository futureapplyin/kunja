---
layout: default
title: "Your Gateway to Higher Education"
description: "Discover colleges and apply to institutions in India and abroad with FutureApply"
---

<!-- Hero Section -->
<div class="hero-section">
  <div class="container">
    <div class="hero-content">
      <h1 class="display-4 fw-bold mb-4">Your Gateway to Higher Education</h1>
      <p class="lead mb-4">Discover colleges, explore courses, and apply to institutions in India and abroad - all in one place.</p>
      <div class="d-flex justify-content-center gap-3">
        <a href="{{ '/colleges/' | relative_url }}" class="btn btn-primary btn-lg">Explore Colleges</a>
        <a href="{{ '/application/' | relative_url }}" class="btn btn-outline-light btn-lg">Apply Now</a>
      </div>
      
      <!-- Search Form -->
      <div class="search-form">
        <form id="searchForm">
          <div class="row">
            <div class="col-md-4 mb-3 mb-md-0">
              <select class="form-select" id="countrySelect">
                <option selected>Select Country</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
              </select>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <select class="form-select" id="courseSelect">
                <option selected>Select Course</option>
                <option value="engineering">Engineering</option>
                <option value="medicine">Medicine</option>
                <option value="business">Business</option>
                <option value="arts">Arts & Humanities</option>
                <option value="science">Science</option>
              </select>
            </div>
            <div class="col-md-4">
              <button type="submit" class="btn btn-primary w-100">Search</button>
            </div>
          </div>
        </form>
        <div id="searchResults"></div>
      </div>
    </div>
  </div>
</div>

<!-- Features Section -->
<section class="py-5">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="fw-bold">Why Choose FutureApply?</h2>
      <p class="lead text-muted">We simplify your journey to higher education</p>
    </div>
    
    <div class="row">
      <div class="col-md-4">
        <div class="card feature-card h-100">
          <div class="card-body text-center">
            <i class="fas fa-search fa-3x text-primary mb-3"></i>
            <h4 class="card-title">College Discovery</h4>
            <p class="card-text">Explore thousands of colleges in India and abroad with detailed information on courses, fees, and admission requirements.</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="card feature-card h-100">
          <div class="card-body text-center">
            <i class="fas fa-graduation-cap fa-3x text-primary mb-3"></i>
            <h4 class="card-title">Course Comparison</h4>
            <p class="card-text">Compare courses across different colleges to find the perfect match for your academic and career goals.</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="card feature-card h-100">
          <div class="card-body text-center">
            <i class="fas fa-file-alt fa-3x text-primary mb-3"></i>
            <h4 class="card-title">Easy Application</h4>
            <p class="card-text">Apply to multiple institutions with a single application form, saving time and reducing the stress of the application process.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Featured Colleges Section -->
<section class="py-5 bg-light">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="fw-bold">Featured Colleges</h2>
      <p class="lead text-muted">Top institutions in India and abroad</p>
    </div>
    
    <div class="row">
      <div class="col-md-4">
        <div class="card college-card">
          <img src="https://via.placeholder.com/350x200?text=College+Image" class="card-img-top" alt="College 1">
          <div class="card-body">
            <h5 class="card-title">Delhi University</h5>
            <p class="card-text">A premier university in India offering diverse undergraduate and postgraduate programs.</p>
            <a href="#" class="btn btn-outline-primary">View Details</a>
          </div>
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="card college-card">
          <img src="https://via.placeholder.com/350x200?text=College+Image" class="card-img-top" alt="College 2">
          <div class="card-body">
            <h5 class="card-title">Harvard University</h5>
            <p class="card-text">One of the world's most prestigious universities known for excellence in education and research.</p>
            <a href="#" class="btn btn-outline-primary">View Details</a>
          </div>
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="card college-card">
          <img src="https://via.placeholder.com/350x200?text=College+Image" class="card-img-top" alt="College 3">
          <div class="card-body">
            <h5 class="card-title">University of Toronto</h5>
            <p class="card-text">Canada's leading institution for learning, discovery, and knowledge creation.</p>
            <a href="#" class="btn btn-outline-primary">View Details</a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="text-center mt-4">
      <a href="{{ '/colleges/' | relative_url }}" class="btn btn-primary">View All Colleges</a>
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section class="py-5">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="fw-bold">Student Success Stories</h2>
      <p class="lead text-muted">Hear from students who found their dream college through FutureApply</p>
    </div>
    
    <div class="row">
      <div class="col-md-4">
        <div class="card testimonial">
          <img src="https://via.placeholder.com/80x80?text=Student" class="testimonial-img" alt="Student 1">
          <div class="card-body">
            <h5 class="card-title">Rahul Sharma</h5>
            <p class="card-subtitle mb-2 text-muted">Delhi University</p>
            <p class="card-text">"FutureApply made it easy for me to find the perfect college that matched my interests and budget. The application process was straightforward and I got accepted to my dream university!"</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="card testimonial">
          <img src="https://via.placeholder.com/80x80?text=Student" class="testimonial-img" alt="Student 2">
          <div class="card-body">
            <h5 class="card-title">Priya Patel</h5>
            <p class="card-subtitle mb-2 text-muted">University of Toronto</p>
            <p class="card-text">"I was overwhelmed with the idea of studying abroad until I found FutureApply. They guided me through every step of the application process and helped me secure a scholarship."</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="card testimonial">
          <img src="https://via.placeholder.com/80x80?text=Student" class="testimonial-img" alt="Student 3">
          <div class="card-body">
            <h5 class="card-title">Amit Singh</h5>
            <p class="card-subtitle mb-2 text-muted">MIT</p>
            <p class="card-text">"Thanks to FutureApply, I was able to compare different engineering programs across multiple countries and find the one that best suited my career aspirations."</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="py-5 bg-primary text-white">
  <div class="container text-center">
    <h2 class="fw-bold mb-3">Ready to Start Your Academic Journey?</h2>
    <p class="lead mb-4">Join thousands of students who found their perfect college match with FutureApply</p>
    <a href="{{ '/application/' | relative_url }}" class="btn btn-light btn-lg">Apply Now</a>
  </div>
</section>
