---
layout: default
title: "Contact Us"
description: "Get in touch with the FutureApply team for any questions or assistance with college applications"
---

<div class="container py-5">
  <div class="row">
    <div class="col-lg-8 mx-auto">
      <h1 class="fw-bold mb-4">Contact Us</h1>
      <p class="lead mb-5">Have questions about colleges, courses, or the application process? We're here to help!</p>
      
      <div class="row">
        <div class="col-md-6 mb-4 mb-md-0">
          <h3>Get in Touch</h3>
          <p>Fill out the form and our team will get back to you within 24 hours.</p>
          
          <div class="contact-form">
            <form id="contactForm">
              <div class="mb-3">
                <label for="name" class="form-label">Your Name</label>
                <input type="text" class="form-control" id="name" required>
              </div>
              
              <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="email" required>
              </div>
              
              <div class="mb-3">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="tel" class="form-control" id="phone">
              </div>
              
              <div class="mb-3">
                <label for="subject" class="form-label">Subject</label>
                <select class="form-select" id="subject" required>
                  <option value="" selected disabled>Select a subject</option>
                  <option value="college-inquiry">College Information</option>
                  <option value="course-inquiry">Course Information</option>
                  <option value="application-help">Application Assistance</option>
                  <option value="fee-inquiry">Fee Structure</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div class="mb-3">
                <label for="message" class="form-label">Your Message</label>
                <textarea class="form-control" id="message" rows="5" required></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
        
        <div class="col-md-6">
          <h3>Contact Information</h3>
          <p>You can also reach out to us using the information below.</p>
          
          <ul class="list-unstyled mt-4">
            <li class="mb-3">
              <div class="d-flex">
                <div class="me-3">
                  <i class="fas fa-envelope text-primary"></i>
                </div>
                <div>
                  <h5 class="mb-1">Email</h5>
                  <p>{{ site.email }}</p>
                </div>
              </div>
            </li>
            
            <li class="mb-3">
              <div class="d-flex">
                <div class="me-3">
                  <i class="fas fa-phone text-primary"></i>
                </div>
                <div>
                  <h5 class="mb-1">Phone</h5>
                  <p>+91 9876543210</p>
                </div>
              </div>
            </li>
            
            <li class="mb-3">
              <div class="d-flex">
                <div class="me-3">
                  <i class="fas fa-map-marker-alt text-primary"></i>
                </div>
                <div>
                  <h5 class="mb-1">Office</h5>
                  <p>123 Education Street<br>New Delhi, 110001<br>India</p>
                </div>
              </div>
            </li>
          </ul>
          
          <h3 class="mt-5">Follow Us</h3>
          <div class="d-flex mt-3">
            <a href="#" class="me-3 text-primary fs-4"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="me-3 text-primary fs-4"><i class="fab fa-twitter"></i></a>
            <a href="#" class="me-3 text-primary fs-4"><i class="fab fa-instagram"></i></a>
            <a href="#" class="me-3 text-primary fs-4"><i class="fab fa-linkedin-in"></i></a>
          </div>
          
          <h3 class="mt-5">Office Hours</h3>
          <p>Monday - Friday: 9:00 AM - 6:00 PM<br>
          Saturday: 10:00 AM - 2:00 PM<br>
          Sunday: Closed</p>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real app, this would send the form data to a server
        alert('Thank you for your message! Our team will contact you soon.');
        contactForm.reset();
      });
    }
  });
</script>
