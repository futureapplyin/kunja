---
layout: default
title: "College Fees & Financial Aid"
description: "Explore information about college fees, scholarships, and financial aid options for institutions in India and abroad"
---

<div class="container py-5">
  <h1 class="fw-bold mb-4">College Fees & Financial Aid</h1>
  <p class="lead mb-5">Get comprehensive information about tuition fees, living expenses, scholarships, and financial aid options for studying in India and abroad.</p>
  
  <!-- Fee Comparison Tool -->
  <section class="mb-5">
    <div class="card">
      <div class="card-body">
        <h3 class="mb-3">College Fee Comparison Tool</h3>
        <p>Compare tuition fees across different colleges and countries to make an informed decision.</p>
        
        <form id="feeComparisonForm">
          <div class="row">
            <div class="col-md-3 mb-3">
              <label for="countrySelect" class="form-label">Country</label>
              <select class="form-select" id="countrySelect">
                <option value="">Select Country</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
              </select>
            </div>
            
            <div class="col-md-3 mb-3">
              <label for="courseSelect" class="form-label">Course</label>
              <select class="form-select" id="courseSelect">
                <option value="">Select Course</option>
                <option value="engineering">Engineering</option>
                <option value="medicine">Medicine</option>
                <option value="business">Business</option>
                <option value="arts">Arts & Humanities</option>
                <option value="science">Science</option>
                <option value="law">Law</option>
              </select>
            </div>
            
            <div class="col-md-3 mb-3">
              <label for="degreeSelect" class="form-label">Degree Level</label>
              <select class="form-select" id="degreeSelect">
                <option value="">Select Degree Level</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="doctorate">Doctorate</option>
              </select>
            </div>
            
            <div class="col-md-3 mb-3 d-flex align-items-end">
              <button type="submit" class="btn btn-primary w-100">Compare Fees</button>
            </div>
          </div>
        </form>
        
        <div id="comparisonResults" class="mt-4">
          <!-- Results will be displayed here -->
        </div>
      </div>
    </div>
  </section>
  
  <!-- Fee Structure by Country -->
  <section class="mb-5">
    <h2 class="mb-4">Fee Structure by Country</h2>
    
    <!-- Tabs for countries -->
    <ul class="nav nav-tabs mb-4" id="countryTabs" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="india-tab" data-bs-toggle="tab" data-bs-target="#india" type="button" role="tab" aria-controls="india" aria-selected="true">India</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="usa-tab" data-bs-toggle="tab" data-bs-target="#usa" type="button" role="tab" aria-controls="usa" aria-selected="false">USA</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="uk-tab" data-bs-toggle="tab" data-bs-target="#uk" type="button" role="tab" aria-controls="uk" aria-selected="false">UK</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="canada-tab" data-bs-toggle="tab" data-bs-target="#canada" type="button" role="tab" aria-controls="canada" aria-selected="false">Canada</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="australia-tab" data-bs-toggle="tab" data-bs-target="#australia" type="button" role="tab" aria-controls="australia" aria-selected="false">Australia</button>
      </li>
    </ul>
    
    <div class="tab-content" id="countryTabsContent">
      <!-- India Tab -->
      <div class="tab-pane fade show active" id="india" role="tabpanel" aria-labelledby="india-tab">
        <div class="row">
          <div class="col-lg-7">
            <h3>Studying in India</h3>
            <p>India offers a wide range of educational opportunities with varying fee structures depending on the type of institution and course.</p>
            
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead class="table-light">
                  <tr>
                    <th>Course</th>
                    <th>Government Institutions</th>
                    <th>Private Institutions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Engineering (B.Tech)</td>
                    <td>₹40,000 - ₹1,50,000 per year</td>
                    <td>₹1,00,000 - ₹5,00,000 per year</td>
                  </tr>
                  <tr>
                    <td>Medicine (MBBS)</td>
                    <td>₹50,000 - ₹2,00,000 per year</td>
                    <td>₹5,00,000 - ₹25,00,000 per year</td>
                  </tr>
                  <tr>
                    <td>Business (MBA)</td>
                    <td>₹40,000 - ₹2,50,000 per year</td>
                    <td>₹3,00,000 - ₹20,00,000 per year</td>
                  </tr>
                  <tr>
                    <td>Arts & Science (BA/BSc)</td>
                    <td>₹5,000 - ₹50,000 per year</td>
                    <td>₹30,000 - ₹2,00,000 per year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 class="mt-4">Additional Expenses</h4>
            <ul>
              <li><strong>Accommodation:</strong> ₹50,000 - ₹2,00,000 per year</li>
              <li><strong>Food:</strong> ₹40,000 - ₹1,00,000 per year</li>
              <li><strong>Books & Supplies:</strong> ₹5,000 - ₹20,000 per year</li>
              <li><strong>Transportation:</strong> ₹5,000 - ₹30,000 per year</li>
            </ul>
          </div>
          
          <div class="col-lg-5">
            <div class="card">
              <div class="card-body">
                <h4>Scholarships in India</h4>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <h5>Central Government Scholarships</h5>
                    <p>Various scholarships offered by the Indian government including Post-Matric Scholarships, Central Sector Scheme, etc.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                  </li>
                  <li class="list-group-item">
                    <h5>State Government Scholarships</h5>
                    <p>Scholarships offered by different state governments for resident students.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                  </li>
                  <li class="list-group-item">
                    <h5>Institution-Specific Scholarships</h5>
                    <p>Merit-based and need-based scholarships offered by individual colleges and universities.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                  </li>
                  <li class="list-group-item">
                    <h5>Private Scholarships</h5>
                    <p>Scholarships offered by private companies, foundations, and organizations.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- USA Tab -->
      <div class="tab-pane fade" id="usa" role="tabpanel" aria-labelledby="usa-tab">
        <div class="row">
          <div class="col-lg-7">
            <h3>Studying in the USA</h3>
            <p>The United States offers world-class education with a range of institutions from public state universities to private colleges.</p>
            
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead class="table-light">
                  <tr>
                    <th>Course</th>
                    <th>Public Universities</th>
                    <th>Private Universities</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Undergraduate (Bachelor's)</td>
                    <td>$10,000 - $30,000 per year</td>
                    <td>$25,000 - $60,000 per year</td>
                  </tr>
                  <tr>
                    <td>Graduate (Master's)</td>
                    <td>$15,000 - $40,000 per year</td>
                    <td>$30,000 - $70,000 per year</td>
                  </tr>
                  <tr>
                    <td>MBA</td>
                    <td>$25,000 - $50,000 per year</td>
                    <td>$50,000 - $120,000 per year</td>
                  </tr>
                  <tr>
                    <td>Medicine (MD)</td>
                    <td>$30,000 - $60,000 per year</td>
                    <td>$50,000 - $100,000 per year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 class="mt-4">Additional Expenses</h4>
            <ul>
              <li><strong>Accommodation:</strong> $8,000 - $20,000 per year</li>
              <li><strong>Food:</strong> $3,000 - $6,000 per year</li>
              <li><strong>Books & Supplies:</strong> $1,000 - $2,000 per year</li>
              <li><strong>Health Insurance:</strong> $1,500 - $4,000 per year</li>
              <li><strong>Transportation:</strong> $1,000 - $3,000 per year</li>
            </ul>
          </div>
          
          <div class="col-lg-5">
            <div class="card">
              <div class="card-body">
                <h4>Financial Aid in the USA</h4>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <h5>Federal Aid</h5>
                    <p>Including Pell Grants, Federal Work-Study, and Direct Loans (for US citizens and eligible non-citizens).</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                  </li>
                  <li class="list-group-item">
                    <h5>University Scholarships</h5>
                    <p>Merit-based and need-based scholarships offered directly by colleges and universities.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                  </li>
                  <li class="list-group-item">
                    <h5>External Scholarships</h5>
                    <p>Scholarships from private organizations, foundations, and corporations.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                  </li>
                  <li class="list-group-item">
                    <h5>International Student Aid</h5>
                    <p>Specific scholarships and financial aid options for international students.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- UK Tab -->
      <div class="tab-pane fade" id="uk" role="tabpanel" aria-labelledby="uk-tab">
        <div class="row">
          <div class="col-lg-7">
            <h3>Studying in the UK</h3>
            <p>The United Kingdom offers prestigious educational institutions with varying fee structures for domestic and international students.</p>
            
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead class="table-light">
                  <tr>
                    <th>Course</th>
                    <th>EU/UK Students</th>
                    <th>International Students</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Undergraduate (Bachelor's)</td>
                    <td>£9,250 per year</td>
                    <td>£10,000 - £38,000 per year</td>
                  </tr>
                  <tr>
                    <td>Postgraduate (Master's)</td>
                    <td>£8,000 - £15,000 per year</td>
                    <td>£15,000 - £35,000 per year</td>
                  </tr>
                  <tr>
                    <td>MBA</td>
                    <td>£15,000 - £45,000 per year</td>
                    <td>£20,000 - £60,000 per year</td>
                  </tr>
                  <tr>
                    <td>Medicine</td>
                    <td>£9,250 per year</td>
                    <td>£25,000 - £55,000 per year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 class="mt-4">Additional Expenses</h4>
            <ul>
              <li><strong>Accommodation:</strong> £5,000 - £15,000 per year</li>
              <li><strong>Food:</strong> £2,000 - £4,000 per year</li>
              <li><strong>Books & Supplies:</strong> £500 - £1,000 per year</li>
              <li><strong>Health Insurance:</strong> £150 - £500 per year</li>
              <li><strong>Transportation:</strong> £500 - £1,500 per year</li>
            </ul>
          </div>
          
          <div class="col-lg-5">
            <div class="card">
              <div class="card-body">
                <h4>Scholarships in the UK</h4>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <h5>Chevening Scholarships</h5>
                    <p>UK government's global scholarship program for outstanding scholars with leadership potential.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                  </li>
                  <li class="list-group-item">
                    <h5>Commonwealth Scholarships</h5>
                    <p>For students from Commonwealth countries to pursue Master's and PhD studies.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                  </li>
                  <li class="list-group-item">
                    <h5>University Scholarships</h5>
                    <p>Merit-based and need-based scholarships offered by individual universities.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                  </li>
                  <li class="list-group-item">
                    <h5>GREAT Scholarships</h5>
                    <p>Scholarships for students from specific countries to study in the UK.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Canada Tab -->
      <div class="tab-pane fade" id="canada" role="tabpanel" aria-labelledby="canada-tab">
        <!-- Canada content similar to other tabs -->
        <div class="row">
          <div class="col-lg-7">
            <h3>Studying in Canada</h3>
            <p>Canada offers high-quality education with generally more affordable tuition compared to the US and UK.</p>
            
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead class="table-light">
                  <tr>
                    <th>Course</th>
                    <th>Domestic Students</th>
                    <th>International Students</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Undergraduate (Bachelor's)</td>
                    <td>CAD 5,000 - CAD 10,000 per year</td>
                    <td>CAD 15,000 - CAD 35,000 per year</td>
                  </tr>
                  <tr>
                    <td>Postgraduate (Master's)</td>
                    <td>CAD 5,000 - CAD 12,000 per year</td>
                    <td>CAD 15,000 - CAD 40,000 per year</td>
                  </tr>
                  <tr>
                    <td>MBA</td>
                    <td>CAD 15,000 - CAD 35,000 per year</td>
                    <td>CAD 20,000 - CAD 50,000 per year</td>
                  </tr>
                  <tr>
                    <td>Medicine</td>
                    <td>CAD 15,000 - CAD 25,000 per year</td>
                    <td>CAD 30,000 - CAD 70,000 per year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 class="mt-4">Additional Expenses</h4>
            <ul>
              <li><strong>Accommodation:</strong> CAD 5,000 - CAD 12,000 per year</li>
              <li><strong>Food:</strong> CAD 3,000 - CAD 6,000 per year</li>
              <li><strong>Books & Supplies:</strong> CAD 800 - CAD 2,000 per year</li>
              <li><strong>Health Insurance:</strong> CAD 600 - CAD 1,200 per year</li>
              <li><strong>Transportation:</strong> CAD 800 - CAD 2,000 per year</li>
            </ul>
          </div>
          
          <div class="col-lg-5">
            <div class="card">
              <div class="card-body">
                <h4>Scholarships in Canada</h4>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <h5>Vanier Canada Graduate Scholarships</h5>
                    <p>For doctoral students demonstrating leadership skills and academic excellence.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                  </li>
                  <li class="list-group-item">
                    <h5>Trudeau Foundation Scholarships</h5>
                    <p>For doctoral candidates pursuing research in social sciences and humanities.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                  </li>
                  <li class="list-group-item">
                    <h5>University Scholarships</h5>
                    <p>Merit-based and need-based scholarships offered by individual universities.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                  </li>
                  <li class="list-group-item">
                    <h5>Provincial Scholarships</h5>
                    <p>Scholarships offered by different provinces in Canada.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Australia Tab -->
      <div class="tab-pane fade" id="australia" role="tabpanel" aria-labelledby="australia-tab">
        <!-- Australia content similar to other tabs -->
        <div class="row">
          <div class="col-lg-7">
            <h3>Studying in Australia</h3>
            <p>Australia offers world-class education with a strong focus on research and practical learning.</p>
            
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead class="table-light">
                  <tr>
                    <th>Course</th>
                    <th>Domestic Students</th>
                    <th>International Students</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Undergraduate (Bachelor's)</td>
                    <td>AUD 15,000 - AUD 33,000 per year</td>
                    <td>AUD 20,000 - AUD 45,000 per year</td>
                  </tr>
                  <tr>
                    <td>Postgraduate (Master's)</td>
                    <td>AUD 20,000 - AUD 37,000 per year</td>
                    <td>AUD 22,000 - AUD 50,000 per year</td>
                  </tr>
                  <tr>
                    <td>MBA</td>
                    <td>AUD 30,000 - AUD 60,000 per year</td>
                    <td>AUD 35,000 - AUD 75,000 per year</td>
                  </tr>
                  <tr>
                    <td>Medicine</td>
                    <td>AUD 25,000 - AUD 40,000 per year</td>
                    <td>AUD 45,000 - AUD 80,000 per year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 class="mt-4">Additional Expenses</h4>
            <ul>
              <li><strong>Accommodation:</strong> AUD 8,000 - AUD 20,000 per year</li>
              <li><strong>Food:</strong> AUD 4,000 - AUD 8,000 per year</li>
              <li><strong>Books & Supplies:</strong> AUD 800 - AUD 1,500 per year</li>
              <li><strong>Health Insurance:</strong> AUD 500 - AUD 1,000 per year</li>
              <li><strong>Transportation:</strong> AUD 1,000 - AUD 3,000 per year</li>
            </ul>
          </div>
          
          <div class="col-lg-5">
            <div class="card">
              <div class="card-body">
                <h4>Scholarships in Australia</h4>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <h5>Australia Awards</h5>
                    <p>International scholarships funded by the Australian Government for development cooperation.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                  </li>
                  <li class="list-group-item">
                    <h5>Endeavour Leadership Program</h5>
                    <p>For high-achieving students, researchers, and professionals.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                  </li>
                  <li class="list-group-item">
                    <h5>University Scholarships</h5>
                    <p>Merit-based and need-based scholarships offered by individual universities.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                  </li>
                  <li class="list-group-item">
                    <h5>Research Scholarships</h5>
                    <p>For research students pursuing higher degrees by research.</p>
                    <a href="#" class="btn btn-sm btn-outline-primary">Learn More</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Financial Aid Resources -->
  <section class="mb-5">
    <h2 class="mb-4">Financial Aid Resources</h2>
    
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h4><i class="fas fa-calculator text-primary me-2"></i> Loan Calculator</h4>
            <p>Calculate your education loan EMI based on loan amount, interest rate, and tenure.</p>
            <a href="#" class="btn btn-outline-primary">Use Calculator</a>
          </div>
        </div>
      </div>
      
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h4><i class="fas fa-search-dollar text-primary me-2"></i> Scholarship Finder</h4>
            <p>Find scholarships matching your profile, academic achievements, and financial needs.</p>
            <a href="#" class="btn btn-outline-primary">Find Scholarships</a>
          </div>
        </div>
      </div>
      
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h4><i class="fas fa-landmark text-primary me-2"></i> Education Loan Guide</h4>
            <p>Comprehensive guide to education loans, eligibility criteria, and application process.</p>
            <a href="#" class="btn btn-outline-primary">Read Guide</a>
          </div>
        </div>
      </div>
      
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h4><i class="fas fa-file-alt text-primary me-2"></i> Financial Aid Application Tips</h4>
            <p>Expert tips for preparing successful financial aid and scholarship applications.</p>
            <a href="#" class="btn btn-outline-primary">Read Tips</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Frequently Asked Questions -->
  <section class="mb-5">
    <h2 class="mb-4">Frequently Asked Questions</h2>
    
    <div class="accordion" id="faqAccordion">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            How do I find scholarships for studying abroad?
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            <p>You can find scholarships for studying abroad through various channels:</p>
            <ul>
              <li>University websites - Many institutions offer scholarships specifically for international students</li>
              <li>Government scholarship programs of both your home country and destination country</li>
              <li>International organizations like Fulbright, Chevening, Commonwealth, etc.</li>
              <li>Private foundations and corporate scholarships</li>
              <li>Our scholarship finder tool which aggregates opportunities from multiple sources</li>
            </ul>
            <p>Start your search at least 12-18 months before your planned enrollment to meet application deadlines.</p>
          </div>
        </div>
      </div>
      
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            What are the eligibility criteria for education loans?
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            <p>Eligibility criteria for education loans typically include:</p>
            <ul>
              <li>Admission to a recognized institution</li>
              <li>Academic performance (minimum grade requirements)</li>
              <li>Age requirements (usually 18-35 years)</li>
              <li>Citizenship or residency status</li>
              <li>Credit history (for loans without collateral)</li>
              <li>Collateral requirements for larger loan amounts</li>
              <li>Co-applicant or guarantor (usually a parent or guardian)</li>
            </ul>
            <p>Different banks and financial institutions may have varying criteria, so it's advisable to compare multiple options.</p>
          </div>
        </div>
      </div>
      
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Are there any hidden costs I should be aware of when studying abroad?
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            <p>Yes, there are several costs beyond tuition that students should budget for:</p>
            <ul>
              <li>Visa application and renewal fees</li>
              <li>Health insurance (often mandatory)</li>
              <li>Travel costs (initial travel and trips home)</li>
              <li>Accommodation security deposits</li>
              <li>Utility set-up fees</li>
              <li>Orientation or enrollment fees</li>
              <li>Student services or campus fees</li>
              <li>Lab or material fees for specific courses</li>
              <li>Exchange rate fluctuations</li>
              <li>Local transportation</li>
              <li>Mobile phone and internet plans</li>
            </ul>
            <p>It's recommended to budget an extra 10-15% for unexpected expenses.</p>
          </div>
        </div>
      </div>
      
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Can I work part-time while studying abroad to cover my expenses?
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            <p>Work regulations for international students vary by country:</p>
            <ul>
              <li><strong>USA:</strong> F-1 visa students can work on-campus up to 20 hours/week during semesters and full-time during breaks</li>
              <li><strong>UK:</strong> Tier 4 visa holders can typically work up to 20 hours/week during term time</li>
              <li><strong>Canada:</strong> Study permit holders can usually work up to 20 hours/week off-campus during sessions</li>
              <li><strong>Australia:</strong> Student visa holders can work up to 40 hours per fortnight during term</li>
              <li><strong>New Zealand:</strong> Student visa holders can work up to 20 hours/week during term time</li>
            </ul>
            <p>While part-time work can help with living expenses, it's not advisable to rely entirely on it for covering tuition fees. Also, be aware that campus jobs are competitive and not guaranteed.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Financial Counseling CTA -->
  <section class="bg-light p-4 rounded">
    <div class="row align-items-center">
      <div class="col-md-8">
        <h3>Need Personalized Financial Guidance?</h3>
        <p class="lead mb-md-0">Our financial counselors can help you navigate scholarship applications, loan options, and create a budget for your studies.</p>
      </div>
      <div class="col-md-4 text-md-end">
        <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary">Schedule Free Consultation</a>
      </div>
    </div>
  </section>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const feeComparisonForm = document.getElementById('feeComparisonForm');
    if (feeComparisonForm) {
      feeComparisonForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const country = document.getElementById('countrySelect').value;
        const course = document.getElementById('courseSelect').value;
        const degree = document.getElementById('degreeSelect').value;
        
        // Display sample comparison results (in a real app, this would fetch actual data)
        const resultsDiv = document.getElementById('comparisonResults');
        
        if (!country || !course || !degree) {
          resultsDiv.innerHTML = '<div class="alert alert-warning">Please select all options to compare fees.</div>';
          return;
        }
        
        // Sample data for demonstration
        resultsDiv.innerHTML = `
          <h4 class="mb-3">Fee Comparison Results</h4>
          <div class="table-responsive">
            <table class="table table-bordered table-striped">
              <thead class="table-primary">
                <tr>
                  <th>College</th>
                  <th>Location</th>
                  <th>Tuition Fee (Annual)</th>
                  <th>Living Expenses (Annual)</th>
                  <th>Total Cost (Annual)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sample University 1</td>
                  <td>Major City</td>
                  <td>$25,000</td>
                  <td>$15,000</td>
                  <td>$40,000</td>
                </tr>
                <tr>
                  <td>Sample University 2</td>
                  <td>Suburban Area</td>
                  <td>$22,000</td>
                  <td>$12,000</td>
                  <td>$34,000</td>
                </tr>
                <tr>
                  <td>Sample University 3</td>
                  <td>Rural Area</td>
                  <td>$18,000</td>
                  <td>$10,000</td>
                  <td>$28,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="mt-3"><small>Note: These are approximate figures and may vary. Contact individual institutions for the most up-to-date information.</small></p>
        `;
      });
    }
  });
</script>
