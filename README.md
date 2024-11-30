# Hugo LMS Theme

A modern, responsive Learning Management System theme for Hugo. Features include course management, category organization, search functionality, and a mobile-friendly design.

## Features

- 📱 Responsive design with mobile-first approach
- 🔍 Real-time search functionality
- 📚 Course catalog with categories and tags
- 🎯 Clean and intuitive navigation
- 🌙 Modern UI with Tailwind CSS
- ⚡ Fast and lightweight

## Installation

### Option 1: Add as a Git Submodule (Recommended)

1. Create a new Hugo site:
   ```bash
   hugo new site your-site-name
   cd your-site-name
   ```

2. Add the theme as a git submodule:
   ```bash
   git init
   git submodule add https://github.com/yourusername/hugo-lms.git themes/lms
   ```

3. Update your site's configuration. Create or modify `config.toml`:
   ```toml
   baseURL = "/"
   languageCode = "en-us"
   title = "Your Site Title"
   theme = "lms"

   [params]
     # Optional logo path relative to static folder
     logo = "images/your-logo.png"

   [menu]
     [[menu.main]]
       name = "Home"
       url = "/"
       weight = 1
     [[menu.main]]
       name = "Courses"
       url = "/courses/"
       weight = 2
   ```

### Option 2: Manual Installation

1. Download the theme from GitHub
2. Extract it to your site's `themes` directory
3. Follow the configuration steps above

## Content Structure

### Course Pages

Create course content in `content/courses/` with the following structure:

```markdown
---
title: "Course Title"
date: 2024-01-01
description: "Course description"
categories: ["Category1", "Category2"]
tags: ["tag1", "tag2"]
draft: false
---

Course content goes here...
```

### Creating New Courses

1. Use Hugo's archetype to create a new course:
   ```bash
   hugo new courses/my-new-course.md
   ```

2. Edit the front matter and content in the generated file.

## Theme Customization

### Styling

The theme uses Tailwind CSS for styling. You can customize the design by:

1. Creating a `assets/css/custom.css` file in your site
2. Adding your custom styles
3. Importing it in `config.toml`:
   ```toml
   [params]
     customCSS = ["css/custom.css"]
   ```

### Layout

To override any theme layout:

1. Copy the original file from `themes/lms/layouts/` to your site's `layouts/` directory
2. Modify the copied file as needed

## Required Dependencies

- Hugo Extended Version (for Tailwind CSS processing)
- Node.js and npm (for development)

## Development

To work on the theme locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hugo-lms.git
   ```

2. Start Hugo server:
   ```bash
   hugo server --disableFastRender
   ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - Feel free to use this theme for your own projects.

## Support

For support, please:
1. Check the documentation
2. Search existing issues
3. Create a new issue if needed

## Credits

- Built with [Hugo](https://gohugo.io/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Interactive elements powered by [Alpine.js](https://alpinejs.dev/)
