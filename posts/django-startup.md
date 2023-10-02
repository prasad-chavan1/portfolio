---
title: 'Getting Started with Django Project'
date: 'Oct 2, 2023'
excerpt: 'This post will cover how to start Django project and run your project'
cover_image: '/images/posts/djangoblog.png'
---


# Getting Started with Django Project

Welcome to your journey into Django, a powerful Python web framework. This guide will walk you through the steps to start your first Django project. By the end of this guide, you'll have a basic Django project up and running.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Python](https://www.python.org/downloads/)
- [pip](https://pip.pypa.io/en/stable/installing/)

## Setup

1. **Create a Virtual Environment (Optional, but Recommended)**

   It's a good practice to create a virtual environment to isolate your project's dependencies. Run the following commands in your project directory:

   <code>python -m venv myenv</code>

   <code>source myenv/bin/activate</code>  
   
   On Windows, use <code>myenv\Scripts\activate</code>

2. **Installing Django**

    Use following commands to install Django and starting your first project.

    <code>pip install django</code>

    <code>django-admin startproject myproject</code>
    
    <code>cd myproject</code>

    <code>python manage.py startapp myapp</code>

    <code>python manage.py createsuperuser</code>
    
    <code>python manage.py runserver</code>

Now you're ready to start building your Django web application! Refer to the <a href='https://docs.djangoproject.com'>Django</a> Documentation for more detailed guidance on developing with Django.
