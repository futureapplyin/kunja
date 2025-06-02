# FutureApply

FutureApply is a modern, responsive Jekyll-based platform that helps students discover colleges, compare courses, and apply to institutions in India and abroad. The platform features a clean, user-friendly interface with modern design elements and smooth interactions.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features

- 🎨 Modern, responsive design with smooth animations
- 📱 Mobile-first approach for all devices
- 🏫 College discovery with advanced search functionality
- 📚 Course comparison tools with detailed information
- 💰 Transparent fee structures and scholarship information
- ✨ Interactive UI elements with hover effects
- 📝 Streamlined online application system
- 📧 Contact form with validation
- 🎯 Student success stories with testimonial cards
- 🎨 Custom theming with CSS variables

## Technologies Used

- [Jekyll](https://jekyllrb.com/) - Static site generator
- [Bootstrap 5](https://getbootstrap.com/) - Frontend framework
- [Font Awesome 6](https://fontawesome.com/) - Icon library
- [SCSS](https://sass-lang.com/) - CSS preprocessor with modern features
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Enhanced interactivity
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - For dynamic theming
- [CSS Grid & Flexbox](https://css-tricks.com/snippets/css/complete-guide-grid/) - Modern layout techniques
- [CSS Transitions & Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) - Smooth UI interactions

## Project Structure

```
futureapply/
├── _config.yml          # Jekyll configuration
├── _data/               # Data files for the site
├── _includes/           # Reusable components
├── _layouts/            # Layout templates
│   └── default.html     # Main layout template
├── _posts/              # Blog posts
├── _sass/               # Sass partials
├── assets/              # Static assets
│   ├── css/
│   │   └── main.scss    # Main stylesheet
│   ├── js/
│   │   └── main.js      # JavaScript functionality
│   └── images/          # Image files
├── index.md             # Homepage
├── about.md             # About page
├── application.md       # Application form page
├── contact.md           # Contact page
└── README.md            # Project documentation
```

## Installation

### Prerequisites

- Ruby version 2.5.0 or higher
- RubyGems
- GCC and Make

### Setup

1. Install Jekyll and Bundler:

```bash
gem install jekyll bundler
```

2. Clone the repository:

```bash
git clone https://github.com/yourusername/futureapply.git
cd futureapply
```

3. Install dependencies:

```bash
bundle install
```

## Development

To start the development server:

```bash
bundle exec jekyll serve
```

This will start a local server at `http://localhost:4000`. The site will automatically refresh when you make changes to the source files.

### Live Reload

For live reloading during development:

```bash
bundle exec jekyll serve --livereload
```

## Deployment

### Building for Production

To build the site for production:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

This will generate the static site in the `_site` directory.

### Deployment Options

#### GitHub Pages

1. Push your repository to GitHub
2. In your repository settings, enable GitHub Pages and select the branch you want to deploy from

#### Netlify

1. Create a new site on Netlify
2. Connect your GitHub repository
3. Set the build command to `jekyll build`
4. Set the publish directory to `_site`

#### Manual Deployment

Upload the contents of the `_site` directory to your web server.

## Customization

### Site Configuration

Edit `_config.yml` to change site-wide settings:

```yaml
title: "FutureApply"
description: "Helping students discover colleges and apply to institutions in India and abroad"
author: "FutureApply Team"
email: "info@futureapply.com"
```

### Adding New Colleges

Create a new file in the `_colleges` directory:

```markdown
---
layout: college
title: "College Name"
location: "City, Country"
courses: ["Course 1", "Course 2"]
featured: true
image: "/assets/images/colleges/college-name.jpg"
---

College description and details...
```

### Adding New Courses

Create a new file in the `_courses` directory:

```markdown
---
layout: course
title: "Course Name"
duration: "4 years"
colleges: ["College 1", "College 2"]
featured: true
image: "/assets/images/courses/course-name.jpg"
---

Course description and details...
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
