# Hugo LMS Theme

A modern Learning Management System theme for Hugo, featuring course management, video integration, and responsive design.

## Features

- Course catalog with filtering
- Video player with timestamp navigation
- Responsive design using Tailwind CSS
- Modern UI with Alpine.js
- Course categories and tags
- Newsletter integration (optional)

## Installation

1. Create a new Hugo site:
   ```bash
   hugo new site my-lms
   cd my-lms
   ```

2. Add the theme as a submodule:
   ```bash
   git submodule add https://github.com/yourusername/hugo-lms-theme.git themes/hugo-lms-theme
   ```

3. Update your config.toml:
   ```toml
   baseURL = "/"
   languageCode = "en-us"
   title = "My LMS Platform"
   theme = "hugo-lms-theme"

   [params]
     description = "A modern learning management system"
     
     [params.newsletter]
       enabled = true
   
   [taxonomies]
     category = "categories"
     tag = "tags"
   ```

## Creating Content

### Create a new course:
```bash
hugo new content courses/my-course.md
```

This will create a new course with the following front matter:
```yaml
---
title: "My Course"
date: 2024-01-10
description: "Course description"
thumbnail: "/images/courses/my-course.jpg"
video_id: ""  # YouTube video ID
duration: "0 minutes"
categories: []
tags: []
timestamps:
  - time: "00:00"
    title: "Introduction"
    description: "Course overview"
draft: true
---
```

## Development

1. Install dependencies:
   ```bash
   cd themes/hugo-lms-theme
   npm install
   ```

2. Start development server:
   ```bash
   hugo server -D
   ```

3. Build CSS (in theme directory):
   ```bash
   npm run build
   ```

## Customization

### Colors
You can customize the theme colors by modifying `tailwind.config.js`.

### Layout
The theme uses the following templates:
- `layouts/_default/baseof.html`: Base template
- `layouts/_default/course.html`: Course page template
- `layouts/index.html`: Homepage template
- `layouts/partials/`: Header, footer, and other components

## License

MIT License
