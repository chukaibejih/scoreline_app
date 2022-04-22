# Scoreline

## About

* Scoreline is a blog application that is developed with Python, Django framework, HTML, CSS, Bootstrap and deployed with Heroku. The features of the app include:
  - Admin Page
  - User Registration Form
  - Login/ Logout Authentication
  - Profile creation and Image Upload
  - Update User Profile
  - Create, Update and Delete Posts
  - Pagintion
  - Password Reset
  - Comments
  - AWS-S3 Upload
* Project status: working


## Table of contents

> * [Title / weatherApp](#title--repository-name)
>   * [About](#about--synopsis)
>   * [Table of contents](#table-of-contents)
>   * [Installation](#installation)
>   * [Usage](#usage)
>   * [Requirements](#requirements)
>   * [Limitations](#limitations)
>   * [Deployment](#deploy-how-to-install-build-product)
>   * [Contributing / Reporting issues](#contributing--reporting-issues)
>   * [License](#license)


## Installation

1. Create a new virtual environment.

  ```bash
  python -m venv (virtual environment name)
  ```
  
2. Activate the virtual environment

  ```bash
  source (virtual environment name)/scripts/activate
  ```
  
3. Install dependencies by running the following command in your terminal:

  ```bash
  pip install -r requirements.txt
  ```


### Usage
New users will create and account which automatically create a profile for the user. THis user will upload a profile picture and cretae a username. There is a timeline that shows posts from other users and the date it was posted. There are permissions that restricts users from deleting or updating posts that are not theirs. There is a post detial page that comes up when you click on a post on the timeline, that is where the comment sectio is located. 


### Requirements

* Install dependencies by running the following command in your terminal:

  ```bash
  pip install -r requirements.txt
  ```

### Limitations

* This application lacks a proper user interface
* The like button is not functioning
* After uploading a profile image, upon reload the images don't appear. 


### Deploy (how to install build product)

* Install Heroku
* After the installation, open a terminal and log into your Heroku account using the credentials you signed up with.
* Add a Procfile in the project root directory to define process types and explicitly declare what command should be executed to start your app.
  ```bash
  $ touch Procfile
  ```
* Open the Procfile and add the line below.
  ```bash
  web: gunicorn (your project name).wsgi --log-file -
  ```
* Install these
  ```bash
  $ pip install gunicorn dj-database-url whitenoise psycopg2
  ```
* Add a requirements.txt file
  ```bash
  $ pip freeze > requirements.txt
  ```
* Open up settings.py file and make the following changes, preferably at the bottom of the file.
  ```bash
  # Static files (CSS, JavaScript, Images)
  # https://docs.djangoproject.com/en/1.11/howto/static-files/
  PROJECT_ROOT   =   os.path.join(os.path.abspath(__file__))
  STATIC_ROOT  =   os.path.join(PROJECT_ROOT, 'staticfiles')
  STATIC_URL = '/static/'

  # Extra lookup directories for collectstatic to find static files
  STATICFILES_DIRS = (
      os.path.join(PROJECT_ROOT, 'static'),
  )

  #  Add configuration for static files storage using whitenoise
  STATICFILES_STORAGE = 'whitenoise.django.GzipManifestStaticFilesStorage'
  ```
* Add whitenoise middleware at the top of the middleware list in settings.py
  ```bash
    MIDDLEWARE = [
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
  ]
  ```
* Create App in Heroku from terminal
  ```bash
  $ heroku create (heroku app name)
  ```
* Add your app domain name to ALLOWED_HOSTS in settings.py.
 ```bash
 ALLOWED_HOSTS = ['(project name).(heroku app name).com']
 ```
 ```bash
 $ git init
 ```
 ```bash
 $ heroku git:remote -a (heroku app name)
 ```
 ```bash
 $ git add .
 
 $ git commit -m "Initial commit"
 ```
 ```bash
 $ git push heroku master
 ```
* If you get an error message with collectstatic, simply disable it by instructing Heroku to ignore running the manage.py collecstatic command during the deployment process.
```bash
$ heroku config:set DISABLE_COLLECTSTATIC=1
```
* Migrate the database

## Contributing / Reporting issues

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
