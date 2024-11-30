---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
description: "A comprehensive course about {{ replace .Name "-" " " | title }}"
thumbnail: "/images/courses/{{ .Name }}.jpg"
video_id: ""  # YouTube video ID
duration: "0 minutes"
categories: ["Uncategorized"]  # Example: ["Web Development", "Programming"]
tags: []  # Example: ["javascript", "react", "frontend"]
timestamps:
  - time: "00:00"
    title: "Introduction"
    description: "Course overview and objectives"
  - time: "05:00"
    title: "Getting Started"
    description: "Setup and prerequisites"
draft: true
---
