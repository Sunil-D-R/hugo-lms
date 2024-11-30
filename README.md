# Hugo LMS Theme

A modern Learning Management System theme for Hugo static site generator.

## Features

- 🎨 Modern, responsive design
- 📚 Course catalog with filtering
- 📺 Video player integration
- 📱 Mobile-friendly navigation
- 📊 Progress tracking
- 🔍 Course search functionality
- 🏷️ Course categorization and tagging

## Installation

1. Create a new Hugo site:
```bash
hugo new site my-lms-site
cd my-lms-site
```

2. Add the theme as a git submodule:
```bash
git submodule add https://github.com/yourusername/hugo-lms.git themes/lms
```

3. Configure your `config.toml`:
```toml
baseURL = "http://example.org/"
languageCode = "en-us"
title = "My LMS Platform"
theme = "lms"

[params]
  description = "A modern learning management system"
  logo = "/images/logo.png"

[taxonomies]
  category = "categories"
  tag = "tags"
  difficulty = "difficulties"

[params.footer]
  # About Section
  about_title = "About Us"
  about_description = "Your platform description here"
  
  # Quick Links
  quick_links_title = "Quick Links"
  quick_links = [
    { name = "Home", url = "/" },
    { name = "Courses", url = "/courses" },
    { name = "About", url = "/about" }
  ]
  
  # Contact Information
  contact_title = "Contact"
  contact_email = "contact@example.com"
  contact_phone = "+1 234 567 890"
  
  # Social Media Links
  social_links = [
    { platform = "twitter", url = "https://twitter.com/youraccount" },
    { platform = "github", url = "https://github.com/youraccount" }
  ]
  
  # Copyright Notice
  copyright = " 2024 Your Company. All rights reserved."

## Footer Configuration

The theme includes a customizable footer with three main sections: About Us, Quick Links, and Contact Information. You can configure the footer content in your `config.toml`:

### Basic Configuration
```toml
[params.footer]
  # About Section
  about_title = "About Us"
  about_description = "Your platform description here"
  
  # Quick Links
  quick_links_title = "Quick Links"
  quick_links = [
    { name = "Home", url = "/" },
    { name = "Courses", url = "/courses" },
    { name = "About", url = "/about" }
  ]
  
  # Contact Information
  contact_title = "Contact"
  contact_email = "contact@example.com"
  contact_phone = "+1 234 567 890"
  
  # Social Media Links
  social_links = [
    { platform = "twitter", url = "https://twitter.com/youraccount" },
    { platform = "github", url = "https://github.com/youraccount" }
  ]
  
  # Copyright Notice
  copyright = " 2024 Your Company. All rights reserved."
```

### Customizing the Footer
The footer is built using Tailwind CSS and can be customized in several ways:

1. **Content Modification**
   - Update the section titles and content through `config.toml`
   - Add or remove quick links as needed
   - Customize social media links and platforms

2. **Visual Customization**
   - Edit `themes/lms/layouts/partials/footer.html` to modify the layout
   - Adjust colors, spacing, and typography using Tailwind classes
   - Modify the responsive behavior for different screen sizes

3. **Social Icons**
   - The theme includes built-in support for common social media icons
   - Supported platforms: Twitter, GitHub, LinkedIn, YouTube
   - Icons are automatically displayed based on the platform name in config

### Example Footer Structure
```
├── About Us
│   └── Platform description
├── Quick Links
│   ├── Home
│   ├── Courses
│   └── About
└── Contact
    ├── Email
    ├── Phone
    └── Social Links
```

## Creating Content

Create a new course:
```bash
hugo new courses/my-course.md
```

Example course front matter:
```yaml
---
title: "Course Title"
description: "Course Description"
thumbnail: "/images/courses/thumbnail.jpg"
duration: "6 hours"
lessons: 24
difficulty: "Beginner"
categories: ["Web Development"]
tags: ["HTML", "CSS", "JavaScript"]
sections:
  - title: "Section 1"
    duration: "1hr 30min"
    lessons:
      - title: "Lesson 1.1"
        video_id: "youtube_video_id"
        duration: "15min"
---
```

## Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hugo-lms.git
```

2. Start the Hugo server:
```bash
hugo server -D
```

## License

MIT License - See LICENSE file for details
