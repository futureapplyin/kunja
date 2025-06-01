---
layout: default
title: "Colleges"
description: "Explore colleges in India and abroad with detailed information on courses, fees, and admission requirements"
---

<div class="container py-5">
  <h1 class="fw-bold mb-4">Explore Colleges</h1>
  
  <!-- Search and Filter Section -->
  <div class="card mb-5">
    <div class="card-body">
      <h3 class="mb-3">Find Your Perfect College Match</h3>
      <form id="collegeSearchForm">
        <div class="row">
          <div class="col-md-3 mb-3">
            <label for="countryFilter" class="form-label">Country</label>
            <select class="form-select" id="countryFilter">
              <option value="">All Countries</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
            </select>
          </div>
          
          <div class="col-md-3 mb-3">
            <label for="courseFilter" class="form-label">Course</label>
            <select class="form-select" id="courseFilter">
              <option value="">All Courses</option>
              <option value="engineering">Engineering</option>
              <option value="medicine">Medicine</option>
              <option value="business">Business</option>
              <option value="arts">Arts & Humanities</option>
              <option value="science">Science</option>
              <option value="law">Law</option>
            </select>
          </div>
          
          <div class="col-md-3 mb-3">
            <label for="feeFilter" class="form-label">Fee Range</label>
            <select class="form-select" id="feeFilter">
              <option value="">Any</option>
              <option value="under5k">Under $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-20k">$10,000 - $20,000</option>
              <option value="20k-30k">$20,000 - $30,000</option>
              <option value="above30k">Above $30,000</option>
            </select>
          </div>
          
          <div class="col-md-3 mb-3">
            <label for="searchQuery" class="form-label">Search</label>
            <div class="input-group">
              <input type="text" class="form-control" id="searchQuery" placeholder="College name...">
              <button class="btn btn-primary" type="submit">Search</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  
  <!-- Featured Colleges Section -->
  <section class="mb-5">
    <h2 class="mb-4">Featured Colleges</h2>
    <div class="row">
      <!-- College 1 -->
      <div class="col-md-4 mb-4">
        <div class="card college-card h-100">
          <div class="badge bg-primary position-absolute" style="top: 10px; right: 10px;">Top Rated</div>
          <img src="https://via.placeholder.com/350x200?text=College+Image" class="card-img-top" alt="Delhi University">
          <div class="card-body">
            <h5 class="card-title">Delhi University</h5>
            <p class="card-text">
              <i class="fas fa-map-marker-alt text-muted me-2"></i>New Delhi, India
            </p>
            <p class="card-text">A premier university in India offering diverse undergraduate and postgraduate programs.</p>
            <hr>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span><i class="fas fa-graduation-cap text-muted me-2"></i>100+ Courses</span>
              <span><i class="fas fa-star text-warning me-1"></i>4.5/5</span>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <span><i class="fas fa-dollar-sign text-muted me-2"></i>From $2,000/year</span>
            </div>
          </div>
          <div class="card-footer bg-white text-center">
            <a href="#" class="btn btn-outline-primary w-100">View Details</a>
          </div>
        </div>
      </div>
      
      <!-- College 2 -->
      <div class="col-md-4 mb-4">
        <div class="card college-card h-100">
          <div class="badge bg-success position-absolute" style="top: 10px; right: 10px;">Scholarships</div>
          <img src="https://via.placeholder.com/350x200?text=College+Image" class="card-img-top" alt="Harvard University">
          <div class="card-body">
            <h5 class="card-title">Harvard University</h5>
            <p class="card-text">
              <i class="fas fa-map-marker-alt text-muted me-2"></i>Cambridge, USA
            </p>
            <p class="card-text">One of the world's most prestigious universities known for excellence in education and research.</p>
            <hr>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span><i class="fas fa-graduation-cap text-muted me-2"></i>200+ Courses</span>
              <span><i class="fas fa-star text-warning me-1"></i>4.9/5</span>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <span><i class="fas fa-dollar-sign text-muted me-2"></i>From $45,000/year</span>
            </div>
          </div>
          <div class="card-footer bg-white text-center">
            <a href="#" class="btn btn-outline-primary w-100">View Details</a>
          </div>
        </div>
      </div>
      
      <!-- College 3 -->
      <div class="col-md-4 mb-4">
        <div class="card college-card h-100">
          <div class="badge bg-info position-absolute" style="top: 10px; right: 10px;">Popular</div>
          <img src="https://via.placeholder.com/350x200?text=College+Image" class="card-img-top" alt="University of Toronto">
          <div class="card-body">
            <h5 class="card-title">University of Toronto</h5>
            <p class="card-text">
              <i class="fas fa-map-marker-alt text-muted me-2"></i>Toronto, Canada
            </p>
            <p class="card-text">Canada's leading institution for learning, discovery, and knowledge creation.</p>
            <hr>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span><i class="fas fa-graduation-cap text-muted me-2"></i>150+ Courses</span>
              <span><i class="fas fa-star text-warning me-1"></i>4.7/5</span>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <span><i class="fas fa-dollar-sign text-muted me-2"></i>From $30,000/year</span>
            </div>
          </div>
          <div class="card-footer bg-white text-center">
            <a href="#" class="btn btn-outline-primary w-100">View Details</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Colleges by Country Section -->
  <section class="mb-5">
    <h2 class="mb-4">Colleges by Country</h2>
    
    <!-- India -->
    <div class="mb-4">
      <h3><img src="https://via.placeholder.com/30x20?text=IN" alt="India Flag" class="me-2"> India</h3>
      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="card college-card">
            <img src="https://via.placeholder.com/350x200?text=College+Image" class="card-img-top" alt="IIT Delhi">
            <div class="card-body">
              <h5 class="card-title">IIT Delhi</h5>
              <p class="card-text">Premier engineering institute offering world-class technical education.</p>
              <a href="#" class="btn btn-sm btn-outline-primary">View Details</a>
            </div>
          </div>
        </div>
        
        <div class="col-md-4 mb-3">
          <div class="card college-card">
            <img src="https://via.placeholder.com/350x200?text=College+Image" class="card-img-top" alt="AIIMS">
            <div class="card-body">
              <h5 class="card-title">AIIMS</h5>
              <p class="card-text">Top medical institute known for quality healthcare education.</p>
              <a href="#" class="btn btn-sm btn-outline-primary">View Details</a>
            </div>
          </div>
        </div>
        
        <div class="col-md-4 mb-3">
          <div class="card college-card">
            <img src="https://via.placeholder.com/350x200?text=College+Image" class="card-img-top" alt="IIM Ahmedabad">
            <div class="card-body">
              <h5 class="card-title">IIM Ahmedabad</h5>
              <p class="card-text">Leading business school with world-renowned management programs.</p>
              <a href="#" class="btn btn-sm btn-outline-primary">View Details</a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-2">
        <a href="#" class="btn btn-link">View All Indian Colleges</a>
      </div>
    </div>
    
    <!-- USA -->
    <div class="mb-4">
      <h3><img src="https://via.placeholder.com/30x20?text=US" alt="USA Flag" class="me-2"> USA</h3>
      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="card college-card">
            <img src="https://via.placeholder.com/350x200?text=College+Image" class="card-img-top" alt="MIT">
            <div class="card-body">
              <h5 class="card-title">MIT</h5>
              <p class="card-text">World-leading university for science, engineering, and technology.</p>
              <a href="#" class="btn btn-sm btn-outline-primary">View Details</a>
            </div>
          </div>
        </div>
        
        <div class="col-md-4 mb-3">
          <div class="card college-card">
            <img src="https://via.placeholder.com/350x200?text=College+Image" class="card-img-top" alt="Stanford University">
            <div class="card-body">
              <h5 class="card-title">Stanford University</h5>
              <p class="card-text">Renowned for entrepreneurship, innovation, and academic excellence.</p>
              <a href="#" class="btn btn-sm btn-outline-primary">View Details</a>
            </div>
          </div>
        </div>
        
        <div class="col-md-4 mb-3">
          <div class="card college-card">
            <img src="https://via.placeholder.com/350x200?text=College+Image" class="card-img-top" alt="Columbia University">
            <div class="card-body">
              <h5 class="card-title">Columbia University</h5>
              <p class="card-text">Ivy League research university with strong arts and sciences programs.</p>
              <a href="#" class="btn btn-sm btn-outline-primary">View Details</a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-2">
        <a href="#" class="btn btn-link">View All US Colleges</a>
      </div>
    </div>
  </section>
  
  <!-- College Application Guide -->
  <section class="bg-light p-4 rounded">
    <div class="row">
      <div class="col-md-8">
        <h3>Need Help Choosing the Right College?</h3>
        <p class="lead mb-4">Our college counselors can guide you through the entire process - from selection to application.</p>
        <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Get Free Consultation</a>
      </div>
      <div class="col-md-4 text-center d-none d-md-block">
        <i class="fas fa-graduation-cap fa-5x text-primary"></i>
      </div>
    </div>
  </section>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const collegeSearchForm = document.getElementById('collegeSearchForm');
    if (collegeSearchForm) {
      collegeSearchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // In a real app, this would filter college results based on form inputs
        alert('Search functionality would filter colleges based on selected criteria.');
      });
    }
  });
</script>
