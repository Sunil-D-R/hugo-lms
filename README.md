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
