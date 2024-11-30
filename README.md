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

  # Newsletter Configuration
  [params.newsletter]
    enabled = true
    # Custom newsletter HTML/JS code (optional)
    # Leave empty to use default form
    customCode = """
    <!-- Your custom newsletter form HTML/JS here -->
    <!-- Example: Mailchimp, ConvertKit, etc. -->
    """

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

### Newsletter Integration

The theme supports custom newsletter integration through the `params.newsletter.customCode` parameter. You can paste any HTML/JS code from your newsletter service provider (like Mailchimp, ConvertKit, etc.) to replace the default form.

To use a custom newsletter form:

1. Get the embed code from your newsletter service (e.g., Mailchimp, ConvertKit)
2. Open your site's `config.toml` file
3. Add your custom form code under the newsletter section:
   ```toml
   [params.newsletter]
     enabled = true
     customCode = '''
     <!-- Replace this with your form code -->
     <form action="https://your-form-endpoint.com" method="post" class="space-y-3">
       <input type="email" name="email" placeholder="Your email" class="w-full px-4 py-2 rounded">
       <button type="submit" class="w-full px-4 py-2 bg-blue-600 text-white rounded">Subscribe</button>
     </form>
     '''
   ```

Example with Mailchimp:
```toml
[params.newsletter]
  enabled = true
  customCode = '''
  <!-- Replace with your Mailchimp form code -->
  <div id="mc_embed_signup">
    <form action="https://your-account.us1.list-manage.com/subscribe/post?u=XXXXX&amp;id=XXXXX" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
      <div id="mc_embed_signup_scroll">
        <div class="mc-field-group">
          <input type="email" name="EMAIL" class="required email w-full px-4 py-2 border rounded" id="mce-EMAIL" placeholder="Enter your email">
        </div>
        <div class="clear">
          <button type="submit" class="w-full mt-3 px-4 py-2 bg-primary-600 text-white rounded">Subscribe</button>
        </div>
      </div>
    </form>
  </div>
  '''
```

Note: The custom form code will completely replace the default form. You can use Tailwind CSS classes to style your custom form to match the theme's design.

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
