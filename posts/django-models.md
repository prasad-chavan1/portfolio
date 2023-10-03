---
title: 'Models in Django'
date: 'Oct 3, 2023'
excerpt: 'This post will cover what are Models & how to set up Models in Django.'
cover_image: '/images/posts/blogDjangomodels.jpg'
---

# Models

A model is the single, definitive source of information about your data. It contains the essential fields and behaviors of the data you’re storing. Generally, each model maps to a single database table.

## The Basics

- Each model is a python class or Subclass.
- The attributes of models represents a Data Field.
- For e.g following model defines a Student which has f_name & rollNo :
- <code>from django.db import models<br>
    class Person(models.Model):<br>
        &ensp;f_name = models.CharField(max_length=30)<br>
        &ensp;rollNo = models.IntField(default=0)
  </code>

## Defining a Model

- To start working on models first of all you have to create a Django project for it.
- Read our blog to <a href='https://prasadchavan.vercel.app/blog/django-startup'>start Django App</a>.
- After creating app navigate to directory containing Models.py file.
- In this file you can define the structure of your data using Python classes.
- Refer above example for creating student model.

## Creating Migrations

- After creating your model you must have to migrate it.
- Django provides a migration system that allows you to create database tables based on your models. To create migrations for your app, run:<br> <code>python manage.py makemigrations appname</code>
- After creating migrations, apply them to the database:<br><code>python manage.py migrate</code>

## Registering Models with the Admin Panel

Django's admin panel is a powerful tool for managing your application's data. To make your model accessible via the admin panel, open <b>appname/admin.py</b> and register your model like this:<br><code>from django.contrib import admin</code>
<br><code>from .models import Post</code><br><code>admin.site.register(Post)</code>

## Running the Development Server

- To see your project in action, start the development server by running:<br>
<code>python manage.py runserver</code>
- Create Super User using this command:<br><code>python manage.py createsuperuser</code>
- Navigate your project on Localhost: <br><code>http://localhost:3000/</code>
- Navigate your admin dashboard on Localhost: <br><code>http://localhost:3000/admin</code>
- Enter your details and good to go.

