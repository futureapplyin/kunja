---
layout: default
title: "Courses"
description: "Explore various courses and programs offered by colleges in India and abroad"
---

<div class="container py-5">
  <h1 class="fw-bold mb-4">Explore Courses</h1>
  
  <!-- Search and Filter Section -->
  <div class="card mb-5">
    <div class="card-body">
      <h3 class="mb-3">Find Your Perfect Course</h3>
      <form id="courseSearchForm">
        <div class="row">
          <div class="col-md-3 mb-3">
            <label for="categoryFilter" class="form-label">Category</label>
            <select class="form-select" id="categoryFilter">
              <option value="">All Categories</option>
              <option value="engineering">Engineering</option>
              <option value="medicine">Medicine</option>
              <option value="business">Business</option>
              <option value="arts">Arts & Humanities</option>
              <option value="science">Science</option>
              <option value="law">Law</option>
              <option value="computer-science">Computer Science</option>
            </select>
          </div>
          
          <div class="col-md-3 mb-3">
            <label for="durationFilter" class="form-label">Duration</label>
            <select class="form-select" id="durationFilter">
              <option value="">Any Duration</option>
              <option value="1-year">1 Year</option>
              <option value="2-years">2 Years</option>
              <option value="3-years">3 Years</option>
              <option value="4-years">4 Years</option>
              <option value="5-years">5+ Years</option>
            </select>
          </div>
          
          <div class="col-md-3 mb-3">
            <label for="levelFilter" class="form-label">Level</label>
            <select class="form-select" id="levelFilter">
              <option value="">All Levels</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="postgraduate">Postgraduate</option>
              <option value="doctorate">Doctorate</option>
              <option value="diploma">Diploma</option>
              <option value="certificate">Certificate</option>
            </select>
          </div>
          
          <div class="col-md-3 mb-3">
            <label for="searchQuery" class="form-label">Search</label>
            <div class="input-group">
              <input type="text" class="form-control" id="searchQuery" placeholder="Course name...">
              <button class="btn btn-primary" type="submit">Search</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  
  <!-- Popular Course Categories -->
  <section class="mb-5">
    <h2 class="mb-4">Popular Course Categories</h2>
    <div class="row">
      <!-- Category 1 -->
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body text-center">
            <i class="fas fa-laptop-code fa-3x text-primary mb-3"></i>
            <h4 class="card-title">Engineering & Technology</h4>
            <p class="card-text">Explore courses in computer science, electrical engineering, mechanical engineering, and more.</p>
            <a href="#engineering" class="btn btn-outline-primary">Browse Courses</a>
          </div>
        </div>
      </div>
      
      <!-- Category 2 -->
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body text-center">
            <i class="fas fa-heartbeat fa-3x text-primary mb-3"></i>
            <h4 class="card-title">Medical & Health Sciences</h4>
            <p class="card-text">Discover programs in medicine, nursing, pharmacy, dentistry, and allied health sciences.</p>
            <a href="#medical" class="btn btn-outline-primary">Browse Courses</a>
          </div>
        </div>
      </div>
      
      <!-- Category 3 -->
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-body text-center">
            <i class="fas fa-chart-line fa-3x text-primary mb-3"></i>
            <h4 class="card-title">Business & Management</h4>
            <p class="card-text">Explore programs in business administration, finance, marketing, and entrepreneurship.</p>
            <a href="#business" class="btn btn-outline-primary">Browse Courses</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Engineering Courses -->
  <section class="mb-5" id="engineering">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>Engineering & Technology Courses</h2>
      <a href="#" class="btn btn-link">View All</a>
    </div>
    
    <div class="row">
      <!-- Course 1 -->
      <div class="col-md-4 mb-4">
        <div class="card course-card h-100">
          <img src="https://via.placeholder.com/350x200?text=Course+Image" class="card-img-top" alt="Computer Science">
          <div class="card-body">
            <h5 class="card-title">B.Tech Computer Science & Engineering</h5>
            <div class="mb-2">
              <span class="badge bg-primary me-1">Engineering</span>
              <span class="badge bg-secondary">Undergraduate</span>
            </div>
            <p class="card-text">A comprehensive program covering programming, algorithms, data structures, software engineering, and more.</p>
            <hr>
            <div class="d-flex justify-content-between">
              <span><i class="fas fa-clock text-muted me-2"></i>4 Years</span>
              <span><i class="fas fa-university text-muted me-2"></i>50+ Colleges</span>
            </div>
          </div>
          <div class="card-footer bg-white">
            <a href="#" class="btn btn-outline-primary w-100">View Details</a>
          </div>
        </div>
      </div>
      
      <!-- Course 2 -->
      <div class="col-md-4 mb-4">
        <div class="card course-card h-100">
          <img src="https://via.placeholder.com/350x200?text=Course+Image" class="card-img-top" alt="Electrical Engineering">
          <div class="card-body">
            <h5 class="card-title">B.Tech Electrical Engineering</h5>
            <div class="mb-2">
              <span class="badge bg-primary me-1">Engineering</span>
              <span class="badge bg-secondary">Undergraduate</span>
            </div>
            <p class="card-text">Study power systems, electronics, control systems, signal processing, and electrical machines.</p>
            <hr>
            <div class="d-flex justify-content-between">
              <span><i class="fas fa-clock text-muted me-2"></i>4 Years</span>
              <span><i class="fas fa-university text-muted me-2"></i>45+ Colleges</span>
            </div>
          </div>
          <div class="card-footer bg-white">
            <a href="#" class="btn btn-outline-primary w-100">View Details</a>
          </div>
        </div>
      </div>
      
      <!-- Course 3 -->
      <div class="col-md-4 mb-4">
        <div class="card course-card h-100">
          <img src="https://via.placeholder.com/350x200?text=Course+Image" class="card-img-top" alt="Mechanical Engineering">
          <div class="card-body">
            <h5 class="card-title">B.Tech Mechanical Engineering</h5>
            <div class="mb-2">
              <span class="badge bg-primary me-1">Engineering</span>
              <span class="badge bg-secondary">Undergraduate</span>
            </div>
            <p class="card-text">Learn about thermodynamics, mechanics, manufacturing processes, and machine design.</p>
            <hr>
            <div class="d-flex justify-content-between">
              <span><i class="fas fa-clock text-muted me-2"></i>4 Years</span>
              <span><i class="fas fa-university text-muted me-2"></i>40+ Colleges</span>
            </div>
          </div>
          <div class="card-footer bg-white">
            <a href="#" class="btn btn-outline-primary w-100">View Details</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Medical Courses -->
  <section class="mb-5" id="medical">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>Medical & Health Sciences Courses</h2>
      <a href="#" class="btn btn-link">View All</a>
    </div>
    
    <div class="row">
      <!-- Course 1 -->
      <div class="col-md-4 mb-4">
        <div class="card course-card h-100">
          <img src="https://via.placeholder.com/350x200?text=Course+Image" class="card-img-top" alt="MBBS">
          <div class="card-body">
            <h5 class="card-title">MBBS (Bachelor of Medicine and Surgery)</h5>
            <div class="mb-2">
              <span class="badge bg-danger me-1">Medical</span>
              <span class="badge bg-secondary">Undergraduate</span>
            </div>
            <p class="card-text">A comprehensive medical program covering anatomy, physiology, pathology, and clinical medicine.</p>
            <hr>
            <div class="d-flex justify-content-between">
              <span><i class="fas fa-clock text-muted me-2"></i>5.5 Years</span>
              <span><i class="fas fa-university text-muted me-2"></i>30+ Colleges</span>
            </div>
          </div>
          <div class="card-footer bg-white">
            <a href="#" class="btn btn-outline-primary w-100">View Details</a>
          </div>
        </div>
      </div>
      
      <!-- Course 2 -->
      <div class="col-md-4 mb-4">
        <div class="card course-card h-100">
          <img src="https://via.placeholder.com/350x200?text=Course+Image" class="card-img-top" alt="Pharmacy">
          <div class="card-body">
            <h5 class="card-title">B.Pharm (Bachelor of Pharmacy)</h5>
            <div class="mb-2">
              <span class="badge bg-danger me-1">Medical</span>
              <span class="badge bg-secondary">Undergraduate</span>
            </div>
            <p class="card-text">Study pharmaceutical sciences, drug development, pharmacology, and pharmaceutical chemistry.</p>
            <hr>
            <div class="d-flex justify-content-between">
              <span><i class="fas fa-clock text-muted me-2"></i>4 Years</span>
              <span><i class="fas fa-university text-muted me-2"></i>25+ Colleges</span>
            </div>
          </div>
          <div class="card-footer bg-white">
            <a href="#" class="btn btn-outline-primary w-100">View Details</a>
          </div>
        </div>
      </div>
      
      <!-- Course 3 -->
      <div class="col-md-4 mb-4">
        <div class="card course-card h-100">
          <img src="https://via.placeholder.com/350x200?text=Course+Image" class="card-img-top" alt="Nursing">
          <div class="card-body">
            <h5 class="card-title">B.Sc Nursing</h5>
            <div class="mb-2">
              <span class="badge bg-danger me-1">Medical</span>
              <span class="badge bg-secondary">Undergraduate</span>
            </div>
            <p class="card-text">Learn about patient care, medical procedures, anatomy, physiology, and healthcare management.</p>
            <hr>
            <div class="d-flex justify-content-between">
              <span><i class="fas fa-clock text-muted me-2"></i>4 Years</span>
              <span><i class="fas fa-university text-muted me-2"></i>35+ Colleges</span>
            </div>
          </div>
          <div class="card-footer bg-white">
            <a href="#" class="btn btn-outline-primary w-100">View Details</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Business Courses -->
  <section class="mb-5" id="business">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>Business & Management Courses</h2>
      <a href="#" class="btn btn-link">View All</a>
    </div>
    
    <div class="row">
      <!-- Course 1 -->
      <div class="col-md-4 mb-4">
        <div class="card course-card h-100">
          <img src="https://via.placeholder.com/350x200?text=Course+Image" class="card-img-top" alt="MBA">
          <div class="card-body">
            <h5 class="card-title">MBA (Master of Business Administration)</h5>
            <div class="mb-2">
              <span class="badge bg-success me-1">Business</span>
              <span class="badge bg-secondary">Postgraduate</span>
            </div>
            <p class="card-text">A comprehensive program covering management principles, finance, marketing, operations, and leadership.</p>
            <hr>
            <div class="d-flex justify-content-between">
              <span><i class="fas fa-clock text-muted me-2"></i>2 Years</span>
              <span><i class="fas fa-university text-muted me-2"></i>60+ Colleges</span>
            </div>
          </div>
          <div class="card-footer bg-white">
            <a href="#" class="btn btn-outline-primary w-100">View Details</a>
          </div>
        </div>
      </div>
      
      <!-- Course 2 -->
      <div class="col-md-4 mb-4">
        <div class="card course-card h-100">
          <img src="https://via.placeholder.com/350x200?text=Course+Image" class="card-img-top" alt="BBA">
          <div class="card-body">
            <h5 class="card-title">BBA (Bachelor of Business Administration)</h5>
            <div class="mb-2">
              <span class="badge bg-success me-1">Business</span>
              <span class="badge bg-secondary">Undergraduate</span>
            </div>
            <p class="card-text">Study fundamentals of business management, accounting, marketing, and entrepreneurship.</p>
            <hr>
            <div class="d-flex justify-content-between">
              <span><i class="fas fa-clock text-muted me-2"></i>3 Years</span>
              <span><i class="fas fa-university text-muted me-2"></i>50+ Colleges</span>
            </div>
          </div>
          <div class="card-footer bg-white">
            <a href="#" class="btn btn-outline-primary w-100">View Details</a>
          </div>
        </div>
      </div>
      
      <!-- Course 3 -->
      <div class="col-md-4 mb-4">
        <div class="card course-card h-100">
          <img src="https://via.placeholder.com/350x200?text=Course+Image" class="card-img-top" alt="Finance">
          <div class="card-body">
            <h5 class="card-title">M.Sc Finance</h5>
            <div class="mb-2">
              <span class="badge bg-success me-1">Business</span>
              <span class="badge bg-secondary">Postgraduate</span>
            </div>
            <p class="card-text">Advanced study of financial management, investment analysis, banking, and international finance.</p>
            <hr>
            <div class="d-flex justify-content-between">
              <span><i class="fas fa-clock text-muted me-2"></i>2 Years</span>
              <span><i class="fas fa-university text-muted me-2"></i>30+ Colleges</span>
            </div>
          </div>
          <div class="card-footer bg-white">
            <a href="#" class="btn btn-outline-primary w-100">View Details</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Course Comparison Tool CTA -->
  <section class="bg-light p-4 rounded mb-5">
    <div class="row align-items-center">
      <div class="col-md-8">
        <h3>Compare Courses Side by Side</h3>
        <p class="lead mb-0">Our course comparison tool helps you evaluate different programs based on duration, fees, curriculum, and career prospects.</p>
      </div>
      <div class="col-md-4 text-md-end mt-3 mt-md-0">
        <a href="#" class="btn btn-primary">Compare Courses</a>
      </div>
    </div>
  </section>
  
  <!-- Career Guidance -->
  <section class="mb-5">
    <h2 class="mb-4">Not Sure Which Course Is Right For You?</h2>
    <div class="card">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col-md-2 text-center mb-3 mb-md-0">
            <i class="fas fa-compass fa-4x text-primary"></i>
          </div>
          <div class="col-md-7 mb-3 mb-md-0">
            <h4>Take Our Career Assessment Test</h4>
            <p class="mb-0">Our scientific assessment will analyze your interests, skills, and personality to recommend the best courses and career paths for you.</p>
          </div>
          <div class="col-md-3 text-md-end">
            <a href="#" class="btn btn-outline-primary">Start Assessment</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const courseSearchForm = document.getElementById('courseSearchForm');
    if (courseSearchForm) {
      courseSearchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // In a real app, this would filter course results based on form inputs
        alert('Search functionality would filter courses based on selected criteria.');
      });
    }
  });
</script>
