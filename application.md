---
layout: default
title: "Apply Now"
description: "Apply to colleges in India and abroad through our simple application process"
---

<div class="container py-5">
  <div class="row">
    <div class="col-lg-10 mx-auto">
      <h1 class="fw-bold mb-4">Apply to Colleges</h1>
      <p class="lead mb-5">Complete the form below to apply to multiple colleges with a single application.</p>
      
      <div class="application-form" id="formContainer">
        <form id="applicationForm">
          <!-- Personal Information -->
          <div class="form-section card mb-4">
            <div class="card-body">
              <h3 class="form-section-title">Personal Information</h3>
              
              <div class="row">
                <div class="col-md-4 mb-3">
                  <label for="firstName" class="form-label">First Name*</label>
                  <input type="text" class="form-control" id="firstName" required>
                </div>
                
                <div class="col-md-4 mb-3">
                  <label for="middleName" class="form-label">Middle Name</label>
                  <input type="text" class="form-control" id="middleName">
                </div>
                
                <div class="col-md-4 mb-3">
                  <label for="lastName" class="form-label">Last Name*</label>
                  <input type="text" class="form-control" id="lastName" required>
                </div>
              </div>
              
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="email" class="form-label">Email Address*</label>
                  <input type="email" class="form-control" id="email" required>
                </div>
                
                <div class="col-md-6 mb-3">
                  <label for="phone" class="form-label">Phone Number*</label>
                  <input type="tel" class="form-control" id="phone" required>
                </div>
              </div>
              
              <div class="row">
                <div class="col-md-4 mb-3">
                  <label for="dob" class="form-label">Date of Birth*</label>
                  <input type="date" class="form-control" id="dob" required>
                </div>
                
                <div class="col-md-4 mb-3">
                  <label for="gender" class="form-label">Gender*</label>
                  <select class="form-select" id="gender" required>
                    <option value="" selected disabled>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
                
                <div class="col-md-4 mb-3">
                  <label for="nationality" class="form-label">Nationality*</label>
                  <input type="text" class="form-control" id="nationality" required>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Address Information -->
          <div class="form-section card mb-4">
            <div class="card-body">
              <h3 class="form-section-title">Address Information</h3>
              
              <div class="mb-3">
                <label for="address1" class="form-label">Address Line 1*</label>
                <input type="text" class="form-control" id="address1" required>
              </div>
              
              <div class="mb-3">
                <label for="address2" class="form-label">Address Line 2</label>
                <input type="text" class="form-control" id="address2">
              </div>
              
              <div class="row">
                <div class="col-md-4 mb-3">
                  <label for="city" class="form-label">City*</label>
                  <input type="text" class="form-control" id="city" required>
                </div>
                
                <div class="col-md-4 mb-3">
                  <label for="state" class="form-label">State/Province*</label>
                  <input type="text" class="form-control" id="state" required>
                </div>
                
                <div class="col-md-4 mb-3">
                  <label for="zipCode" class="form-label">Postal/Zip Code*</label>
                  <input type="text" class="form-control" id="zipCode" required>
                </div>
              </div>
              
              <div class="mb-3">
                <label for="country" class="form-label">Country*</label>
                <select class="form-select" id="country" required>
                  <option value="" selected disabled>Select Country</option>
                  <option value="india">India</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <!-- More countries would be added here -->
                </select>
              </div>
            </div>
          </div>
          
          <!-- Educational Background -->
          <div class="form-section card mb-4">
            <div class="card-body">
              <h3 class="form-section-title">Educational Background</h3>
              
              <h5 class="mb-3">High School Information</h5>
              
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="highSchoolName" class="form-label">School Name*</label>
                  <input type="text" class="form-control" id="highSchoolName" required>
                </div>
                
                <div class="col-md-6 mb-3">
                  <label for="highSchoolBoard" class="form-label">Board*</label>
                  <input type="text" class="form-control" id="highSchoolBoard" required>
                </div>
              </div>
              
              <div class="row">
                <div class="col-md-4 mb-3">
                  <label for="highSchoolPassingYear" class="form-label">Year of Passing*</label>
                  <input type="number" class="form-control" id="highSchoolPassingYear" min="1990" max="2030" required>
                </div>
                
                <div class="col-md-4 mb-3">
                  <label for="highSchoolPercentage" class="form-label">Percentage/CGPA*</label>
                  <input type="number" class="form-control" id="highSchoolPercentage" step="0.01" min="0" max="100" required>
                </div>
                
                <div class="col-md-4 mb-3">
                  <label for="highSchoolMaxMarks" class="form-label">Out of</label>
                  <input type="number" class="form-control" id="highSchoolMaxMarks" value="100">
                </div>
              </div>
              
              <hr class="my-4">
              
              <h5 class="mb-3">Undergraduate Information (if applicable)</h5>
              
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="ugCollegeName" class="form-label">College/University Name</label>
                  <input type="text" class="form-control" id="ugCollegeName">
                </div>
                
                <div class="col-md-6 mb-3">
                  <label for="ugDegree" class="form-label">Degree</label>
                  <input type="text" class="form-control" id="ugDegree">
                </div>
              </div>
              
              <div class="row">
                <div class="col-md-4 mb-3">
                  <label for="ugPassingYear" class="form-label">Year of Passing</label>
                  <input type="number" class="form-control" id="ugPassingYear" min="1990" max="2030">
                </div>
                
                <div class="col-md-4 mb-3">
                  <label for="ugPercentage" class="form-label">Percentage/CGPA</label>
                  <input type="number" class="form-control" id="ugPercentage" step="0.01" min="0" max="100">
                </div>
                
                <div class="col-md-4 mb-3">
                  <label for="ugMaxMarks" class="form-label">Out of</label>
                  <input type="number" class="form-control" id="ugMaxMarks" value="100">
                </div>
              </div>
            </div>
          </div>
          
          <!-- Test Scores -->
          <div class="form-section card mb-4">
            <div class="card-body">
              <h3 class="form-section-title">Test Scores</h3>
              
              <div class="row">
                <div class="col-md-4 mb-3">
                  <label for="testType" class="form-label">Test Type</label>
                  <select class="form-select" id="testType">
                    <option value="" selected disabled>Select Test</option>
                    <option value="sat">SAT</option>
                    <option value="act">ACT</option>
                    <option value="gre">GRE</option>
                    <option value="gmat">GMAT</option>
                    <option value="toefl">TOEFL</option>
                    <option value="ielts">IELTS</option>
                    <option value="jee">JEE</option>
                    <option value="neet">NEET</option>
                    <option value="cat">CAT</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div class="col-md-4 mb-3">
                  <label for="testScore" class="form-label">Score</label>
                  <input type="text" class="form-control" id="testScore">
                </div>
                
                <div class="col-md-4 mb-3">
                  <label for="testYear" class="form-label">Year</label>
                  <input type="number" class="form-control" id="testYear" min="1990" max="2030">
                </div>
              </div>
              
              <button type="button" class="btn btn-outline-primary mt-2">+ Add Another Test Score</button>
            </div>
          </div>
          
          <!-- College Preferences -->
          <div class="form-section card mb-4">
            <div class="card-body">
              <h3 class="form-section-title">College Preferences</h3>
              
              <div class="mb-3">
                <label for="preferredCourse" class="form-label">Preferred Course/Program*</label>
                <select class="form-select" id="preferredCourse" required>
                  <option value="" selected disabled>Select Course</option>
                  <option value="engineering">Engineering</option>
                  <option value="medicine">Medicine</option>
                  <option value="business">Business Administration</option>
                  <option value="arts">Arts & Humanities</option>
                  <option value="science">Science</option>
                  <option value="law">Law</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div class="mb-3">
                <label class="form-label">Preferred Countries*</label>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="countryIndia">
                      <label class="form-check-label" for="countryIndia">India</label>
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="countryUSA">
                      <label class="form-check-label" for="countryUSA">USA</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="countryUK">
                      <label class="form-check-label" for="countryUK">UK</label>
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="countryCanada">
                      <label class="form-check-label" for="countryCanada">Canada</label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="countryAustralia">
                      <label class="form-check-label" for="countryAustralia">Australia</label>
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="countryOther">
                      <label class="form-check-label" for="countryOther">Other</label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="mb-3">
                <label for="budgetRange" class="form-label">Budget Range (Annual in USD)*</label>
                <select class="form-select" id="budgetRange" required>
                  <option value="" selected disabled>Select Budget Range</option>
                  <option value="under5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-20k">$10,000 - $20,000</option>
                  <option value="20k-30k">$20,000 - $30,000</option>
                  <option value="30k-50k">$30,000 - $50,000</option>
                  <option value="above50k">Above $50,000</option>
                </select>
              </div>
              
              <div class="mb-3">
                <label for="intakePreference" class="form-label">Preferred Intake*</label>
                <select class="form-select" id="intakePreference" required>
                  <option value="" selected disabled>Select Intake</option>
                  <option value="fall-2025">Fall 2025</option>
                  <option value="spring-2026">Spring 2026</option>
                  <option value="fall-2026">Fall 2026</option>
                  <option value="spring-2027">Spring 2027</option>
                </select>
              </div>
            </div>
          </div>
          
          <!-- Additional Information -->
          <div class="form-section card mb-4">
            <div class="card-body">
              <h3 class="form-section-title">Additional Information</h3>
              
              <div class="mb-3">
                <label for="extraCurricular" class="form-label">Extracurricular Activities</label>
                <textarea class="form-control" id="extraCurricular" rows="3" placeholder="List any clubs, sports, volunteer work, etc."></textarea>
              </div>
              
              <div class="mb-3">
                <label for="achievements" class="form-label">Achievements & Awards</label>
                <textarea class="form-control" id="achievements" rows="3" placeholder="List any academic or non-academic achievements"></textarea>
              </div>
              
              <div class="mb-3">
                <label for="statement" class="form-label">Personal Statement</label>
                <textarea class="form-control" id="statement" rows="5" placeholder="Write a brief statement about your academic goals and why you're interested in these colleges"></textarea>
              </div>
              
              <div class="mb-3">
                <label for="additionalInfo" class="form-label">Any Other Information</label>
                <textarea class="form-control" id="additionalInfo" rows="3"></textarea>
              </div>
            </div>
          </div>
          
          <div class="form-check mb-4">
            <input class="form-check-input" type="checkbox" id="termsCheck" required>
            <label class="form-check-label" for="termsCheck">
              I agree to the <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal">terms and conditions</a> and consent to the processing of my personal data for application purposes.
            </label>
          </div>
          
          <div class="text-center">
            <button type="submit" class="btn btn-primary btn-lg">Submit Application</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<!-- Terms and Conditions Modal -->
<div class="modal fade" id="termsModal" tabindex="-1" aria-labelledby="termsModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="termsModalLabel">Terms and Conditions</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h6>1. Data Processing</h6>
        <p>By submitting this application, you consent to FutureApply collecting, processing, and sharing your personal information with educational institutions for the purpose of facilitating your college application.</p>
        
        <h6>2. Communication</h6>
        <p>You agree to receive communications from FutureApply and partner institutions regarding your application, admission status, and related educational opportunities.</p>
        
        <h6>3. Accuracy of Information</h6>
        <p>You certify that all information provided in this application is accurate, complete, and truthful. Any misrepresentation may result in the rejection of your application.</p>
        
        <h6>4. Application Fee</h6>
        <p>You understand that some colleges may require an application fee, which is non-refundable regardless of the outcome of your application.</p>
        
        <h6>5. Privacy Policy</h6>
        <p>Your information will be handled in accordance with our Privacy Policy, which you can view on our website.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
