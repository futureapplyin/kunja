---
layout: default
title: "Your Gateway to Higher Education"
description: "Discover colleges and apply to institutions in India and abroad with FutureApply"
---

<!-- Hero Section -->
<div class="hero-section">
  <div class="container">
    <div class="hero-content">
      <h1 class="display-4 fw-bold mb-4">The joy of studying begins with us</h1>
      <p class="lead mb-4">Discover colleges, explore courses, and apply to institutions in India and abroad - all in one place.</p>
      <div class="d-flex justify-content-center gap-3">
        <a href="{{ '/colleges/' | relative_url }}" class="btn btn-primary btn-lg">Explore Colleges</a>
        <a href="{{ '/application/' | relative_url }}" class="btn btn-outline-light btn-lg">Apply Now</a>
      </div>
    </div>
  </div>
</div>

<!-- Our Services Section -->
<section class="services-section py-5 bg-light">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="fw-bold">Our Services</h2>
      <p class="lead text-muted">Empowering your educational journey with expert guidance</p>
    </div>
    
    <div class="row g-4">
      <!-- College Search Card -->
      <div class="col-lg-4 col-md-6">
        <div class="card service-card h-100 border-0 shadow-sm hover-shadow transition-all">
          <div class="card-body p-4 text-center">
            <div class="icon-wrapper bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style="width: 80px; height: 80px;">
              <i class="bi bi-building-check text-primary" style="font-size: 2.2rem;"></i>
            </div>
            <h4 class="card-title fw-bold mb-3">Find the Right College</h4>
            <p class="card-text text-muted mb-4">Whether you're aiming for engineering, medicine, business, or the arts, our expert guidance helps you discover the perfect college match in India.</p>
            <a href="#" class="btn btn-primary rounded-pill px-4">Start Exploring</a>
            <div class="features-list mt-4 text-start">
              <div class="d-flex align-items-start mb-3">
                <i class="bi bi-search me-2 mt-1" style="color: #00ABAA;"></i>
                <span>Explore colleges across India by course, city, fees, and ranking</span>
              </div>
              <div class="d-flex align-items-start mb-3">
                <i class="bi bi-person-badge me-2 mt-1" style="color: #00ABAA;"></i>
                <span>Get personalized recommendations based on your profile</span>
              </div>
              <div class="d-flex align-items-start">
                <i class="bi bi-list-check me-2 mt-1" style="color: #00ABAA;"></i>
                <span>Compare and shortlist with our comprehensive tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Application Support Card -->
      <div class="col-lg-4 col-md-6">
        <div class="card service-card h-100 border-0 shadow-sm hover-shadow transition-all">
          <div class="card-body p-4 text-center">
            <div class="icon-wrapper bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style="width: 80px; height: 80px;">
              <i class="bi bi-person-lines-fill text-primary" style="font-size: 2.2rem;"></i>
            </div>
            <h4 class="card-title fw-bold mb-3">Personalized Application Support</h4>
            <p class="card-text text-muted mb-4">Get one-on-one support throughout your college journey - from choosing programs to submitting applications. Our counselors guide you every step.</p>
            <a href="#" class="btn btn-primary rounded-pill px-4">Get Expert Help</a>
            <div class="features-list mt-4 text-start">
              <div class="d-flex align-items-start mb-3">
                <i class="bi bi-people me-2 mt-1" style="color: #00ABAA;"></i>
                <span>Dedicated counseling with experienced education experts</span>
              </div>
              <div class="d-flex align-items-start mb-3">
                <i class="bi bi-file-earmark-text me-2 mt-1" style="color: #00ABAA;"></i>
                <span>Comprehensive application assistance and document review</span>
              </div>
              <div class="d-flex align-items-start">
                <i class="bi bi-bell me-2 mt-1" style="color: #00ABAA;"></i>
                <span>Timely reminders for important deadlines and updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Admission Guidance Card -->
      <div class="col-lg-4 col-md-6 mx-auto">
        <div class="card service-card h-100 border-0 shadow-sm hover-shadow transition-all">
          <div class="card-body p-4 text-center">
            <div class="icon-wrapper bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style="width: 80px; height: 80px;">
              <i class="bi bi-award-fill text-primary" style="font-size: 2.2rem;"></i>
            </div>
            <h4 class="card-title fw-bold mb-3">Admission & Enrollment</h4>
            <p class="card-text text-muted mb-4">Navigate the complex admission process with our expert guidance. From application strategy to final enrollment, we've got you covered.</p>
            <a href="#" class="btn btn-primary rounded-pill px-4">Begin Your Journey</a>
            <div class="features-list mt-4 text-start">
              <div class="d-flex align-items-start mb-3">
                <i class="bi bi-diagram-3 me-2 mt-1" style="color: #00ABAA;"></i>
                <span>Strategic application planning for better acceptance chances</span>
              </div>
              <div class="d-flex align-items-start mb-3">
                <i class="bi bi-signpost-split me-2 mt-1" style="color: #00ABAA;"></i>
                <span>Step-by-step guidance through the admission process</span>
              </div>
              <div class="d-flex align-items-start">
                <i class="bi bi-ticket-detailed me-2 mt-1" style="color: #00ABAA;"></i>
                <span>Expert help with category and quota seat applications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <style>
  .services-section {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  }

  .service-card {
    border-radius: 16px !important;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
    border: 1px solid rgba(0,0,0,0.05);
  }

  .service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
  }

  .hover-shadow {
    transition: box-shadow 0.3s ease;
  }

  .hover-shadow:hover {
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15) !important;
  }

  .transition-all {
    transition: all 0.3s ease;
  }

  .icon-wrapper {
    margin: 0 auto;
    transition: all 0.3s ease;
  }

  .icon-wrapper {
    background-color: #E5F7F7 !important; /* Light teal background from theme */
    transition: none !important; /* Remove any transitions */
  }

  .icon-wrapper i {
    color: #00ABAA !important; /* Primary teal color from theme */
  }

  .service-card:hover .icon-wrapper {
    transform: none; /* Remove scale effect */
    background-color: #E5F7F7 !important; /* Keep same background on hover */
  }

  .features-list {
    background: rgba(248, 249, 250, 0.7);
    padding: 1.25rem;
    border-radius: 12px;
    margin-top: 1.5rem;
  }

  .features-list span {
    color: #495057;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .card-title {
    color: #212529;
    font-weight: 600;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  .card-text {
    color: #6c757d;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .btn {
    font-weight: 500;
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(13, 110, 253, 0.25);
  }
  </style>
</section>

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

<!-- Testimonials Section -->
<section id="testimonials" class="py-5 bg-light">
  <div class="container">
    <div class="text-center">
      <h2 class="section-title fw-bold">Student Success Stories</h2>
      <p class="section-subtitle">Hear from students who found their dream college through FutureApply</p>
    </div>
    
    <div class="row">
      <div class="col-md-4">
        <div class="card testimonial">
          <img src="https://i.pravatar.cc/300?img=1" class="testimonial-img" alt="Student 1">
          <div class="card-body">
            <h5 class="card-title">Rahul Sharma</h5>
            <p class="card-subtitle mb-2 text-muted">Delhi University</p>
            <p class="card-text">FutureApply made it easy for me to find the perfect college that matched my interests and budget. The application process was straightforward and I got accepted to my dream university!</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="card testimonial">
          <img src="https://i.pravatar.cc/150?img=31" class="testimonial-img" alt="Student 2">
          <div class="card-body">
            <h5 class="card-title">Priya Patel</h5>
            <p class="card-subtitle mb-2 text-muted">University of Toronto</p>
            <p class="card-text">I was overwhelmed with the idea of studying abroad until I found FutureApply. They guided me through every step of the application process and helped me secure a scholarship.</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="card testimonial">
          <img src="https://i.pravatar.cc/150?img=32" class="testimonial-img" alt="Student 3">
          <div class="card-body">
            <h5 class="card-title">Amit Singh</h5>
            <p class="card-subtitle mb-2 text-muted">MIT</p>
            <p class="card-text">Thanks to FutureApply, I was able to compare different engineering programs across multiple countries and find the one that best suited my career aspirations.</p>
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
    <a href="{{ '/application/' | relative_url }}" class="btn btn-outline-light btn-lg">Apply Now</a>
  </div>
</section>
