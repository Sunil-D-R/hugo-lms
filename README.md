# Hugo LMS Theme

A modern Learning Management System theme for Hugo static site generator.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📚 Course catalog with filtering
- 📺 Video player integration
- 📱 Mobile-friendly navigation
  - Responsive header with stacked layout on mobile
  - Categories and tags dropdown menu
  - Mobile menu with slide-in animation
- 📊 Progress tracking
- 🔍 Course search functionality
- 🏷️ Course categorization and tagging
- 📧 Newsletter subscription
- 🎯 Clean, focused UI/UX

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
  about_description = "A modern learning platform providing high-quality courses in web development, programming, and data science."
  
  # Quick Links
  quick_links_title = "Quick Links"
  quick_links = [
    { name = "Home", url = "/" },
    { name = "Courses", url = "/" },
    { name = "About", url = "/about" }
  ]
  
  # Newsletter Section
  newsletter_title = "Stay Updated"
  newsletter_description = "Subscribe to get notified about new courses and learning resources."
  
  # Copyright Notice
  copyright = "2024 Your Company. All rights reserved."

## Course Management

### Adding a New Course

1. Create a new course file in the `content/courses` directory:

```bash
hugo new courses/my-course.md
```

2. Add categories and tags to your course front matter:

```yaml
---
title: "My Course Title"
date: 2024-01-01
categories: ["Web Development", "JavaScript"]
tags: ["frontend", "react"]
difficulty: "intermediate"
description: "Learn the fundamentals of web development"
---
```

## Development

This theme uses Tailwind CSS for styling. The Tailwind configuration file is located at `themes/lms/tailwind.config.js`.

### Features in Detail

#### Newsletter Subscription
The theme includes a newsletter subscription form in the footer that you can integrate with your preferred email service provider. The form is styled with Tailwind CSS and includes:
- Email input field
- Subscribe button
- Custom success/error messages

#### Course Navigation
- Clean and intuitive course navigation
- Responsive design that works on all devices
- Quick access to course materials

#### About Page
The theme includes a styled about page template that supports:
- Team member profiles with images
- Mission statement
- Platform features
- Contact information

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This theme is released under the MIT license. See [LICENSE](./LICENSE) for more information.
