<div align="center">
  <img src="static/assets/images/readme/uR-Responsive.png">
  <img src="static/assets/images/readme/logo.png">
<hr>

**A video game review site with independent 100% user generated content**

This app was built using [GitHub](https://pages.github.com/) and deployed to [Heroku](https://www.heroku.com/).

[Visit uReview](https://ureview2021.herokuapp.com/)

</div>

---

## <u>Table of contents</u>

**<details><summary> User Experience (UX)</summary>**
  - [Scope](#scope)
  - [Design](#design)
  - [User stories](#user-stories)
  - [Wireframes](#wireframes)
</details>

**<details><summary> Features</summary>**
  - [Features used](#features-used)
  - [Version and future](#version-and-future)
  - [Status](#status)
</details>

**<details><summary> Technologies</summary>**
  - [Languages](#languages)
  - [Frameworks, Libraries & Programs](#frameworks-libraries-programs)
</details>

**<details><summary> Deployment</summary>**
  - [Deploy to Heroku](#deploy-to-heroku)
  - [Accessing code](#accessing-code)
</details>

**<details><summary> Testing</summary>**
  - [Testing Documentation](https://github.com/NikolasKotsikos/uReview/blob/master/testing.md)
</details>

**<details><summary> Credits</summary>**
  - [Content](#content)
  - [Media](#media)
  - [Acknowledgements](#acknowledgements)
</details>

**<details><summary> Contact</summary>**
  - [Contact details](#contact-details) 
</details>

# &rarr; **User Experience (UX)**

### **<u>Scope</u>**

The scope of this app is to create a platform where gamers from all platforms, backgrounds and ages can share their honest opinions on their favourite video games or read the opinions posted by their peers.

Moreover the app caters to the administrator by providing an array of tools in order to oversee content posted by the users and to be able to update the app with more categories (genres and gaming platforms).

By completing this project I felt my gained experience in HTML, CSS, and Javascript coming together, and by working with them furthered my control and mastery of Python+Flask and MongoDB. 

The project provides all tiers of users <u>CRUD</u> functionality on their and the apps data, giving them the tools to create, search, sort, view, edit and delete reviews and categories (admin users only).

### **<u>Wireframes</u>**

As part of the design process, before starting my project I made initial wireframes using [Lucidchart](https://lucidchart.com). Creating these mock-ups helped me plan the basic structure and arrangement of the features for my site.

The final design has been influenced by mentor and user feedback so the wireframes map the journey from idea to functioning app.

- [Homepage](static/assets/images/readme/pdfs/home.pdf)
- [Create account page](static/assets/images/readme/pdfs/create-account.pdf)
- [Log in page](static/assets/images/readme/pdfs/log-in.pdf)
- [Reviews page](static/assets/images/readme/pdfs/reviews-visitor.pdf)
- [Add/Edit review page](static/assets/images/readme/pdfs/add-edit-review.pdf)
- [Read review page visitor view](static/assets/images/readme/pdfs/read-review-visitor.pdf)
- [Read review page user view](static/assets/images/readme/pdfs/read-review-user.pdf)
- [Mobile view](static/assets/images/readme/pdfs/mobile.pdf)
- [Tablet view](static/assets/images/readme/pdfs/tablet.pdf)


### **<u>Design</u>**

<img src="static/assets/images/readme/site-map.png">

**Structure**

- A simple design structure with a fixed navbar, a dropdown side navigation menu accessible from every page and a fixed footer. A brand logo is displayed in the top left of the screen to allow easy navigation back to the homepage.

- As a mobile first site I contained the logo, login button and nav menu icon centered by two spaces creating a core towards the center of the page. This helps keep the design consistent as it moves from smaller to larger viewports.

- As well as including a title tag on my base.html, I have also added the meta description tag to help optimize my click-through rate from search engine result pages.

**Colour palette**

- The #e0e0e0 shade of grey has been used for the main background throughout the site with all the forms using a #fafafa shade of white creating a slight contrast.

- The #616161 shade of grey has been used as a background for the navbar as well as the colour of various UI buttons throughout the site. 

- The #fb8c00 shade of orange has been used as the colour for title text throughout the website, as well as the color of more prominent callouts and buttons.

- I decided on this high contrast colour scheme as the colours work well with the subject matter of the website. 

<img src="static/assets/images/readme/palette.png">

**Typography**

- The main font used throughout the site is 'Roboto' which belongs to the sans-serif typeface family. The font is clean and elegant, making it a good choice for web design.

- I have used the 'Orbitron' font to create the 'uReview' logo as it pairs well with my overall branding. Moreover it has been used as the font for titles and fonts all over the site.

- The greater than (>) and lower than (<) symbols have been used creatively to form icons for various action buttons throughout the site. That helps mix-up the use of [Font Awesome](https://fontawesome.com/) icons and re-inforces the site's branding.

- Sans Serif is set as the fallback font if for any reason the main fonts aren't being imported into the site correctly.


**Logo Design**

- I created my own logo design with inspiration from old school operating systems. Using the greater than symbol  to create a simple but effective logo.

- Following website conventions, my website logo is a link to the homepage. Over time many people have learned that clicking on a site’s logo leads them back to the homepage so adopting this standard reduces confusion by matching the UI to users’ expectations. The logo is also left-aligned which is the most familiar placement, and is where users look to find it.


### <u>**User stories**</u>

**Visitor UX:**

* As a visitor I want to easily navigate the site and find reviews from the home page.

* As a visitor I want to sort and search posted reviews based on a categories or keywords. 

* As a visitor I want to find where I can create an account easily. 


**Registered User UX**

* As a registered user I want to easily find how I can log-in in order to post a review. 

* As a registered user I want to be able to add my review easily. 

* As a registered user I want to see a collection of my posted reviews in one page.

* As a registered user I want to have a profile page that bundles functionality.

* As a registered user I want to be able to edit and delete my reviews. 

* As a registered user I want to see new content first on consequtive site visits. 

 
**Administrator User UX**

* As an administrator I want to easily moderate user posted contents.

* As an administrator I want to be able to manage genres and platforms by adding new ones or deleting underused ones.


 > **Note**: The user stories are tested in [testing.md](https://github.com/NikolasKotsikos/uReview/blob/master/testing.md).

## &rarr; **Database Architecture**

<img src="static/assets/images/readme/db-schema.png">

- **Collections**

    The uReview database on MongoDB features 4 collections:
    > **Note**: All collection contain the "_id" key whose valuew is the ObjectId item that contains a string.
        
     * The genres collection, which contains the key "genre_name" whose value is a string.

     * The platforms collection, which contains the keys "platform_name" and "img_url" whose values are strings.

     * The reviews collection, which contains the keys "review_name", "genre_name", "platform", "dev_name", "release_year", "img_url", "review_text" and "created_by". All of these keys have a string as their value.

     * The users collection, which contains the "username" key which has a string as a value and the "password" key that has a string that has been hashed and salted by Werkzeug.

## &rarr; **Features**

- **Responsive on all device sizes**
  - Mobile-first design, responsive on all devices through using the Materialize grid system and CSS media queries.

- **A user-friendly interface with easy navigation throughout the site**
  - Attractive, minimalistic design with visuals and information presented clearly and concisely.

  - Easily readable fonts and simple navigation throughout the site.
    - Fixed navigation bar visible on every page including a menu dropdown and brand logo to link back to the homepage.

  - Aesthetically pleasing 404 & 500 error pages if the user is directed to a non-existent page or encounters an internal server error.

- **Buttons**
    - Clear interactive buttons used for a effortless user journey.

- **Forms**
  - Forms used for login and register pages, and adding/editing reviews and genres & platforms.

  - Materialize form elements used include input fields, text area fields, select dropdowns and submit buttons.

- **Tabs**
  - Interactive tab used to allow the user to switch between review ingredients and method.

- **Card Previews**
  - Used to display reviews & genre and platform categories.

  - Images included contributing to the visual look.

- **Modals**
  - Used for delete confirmation and admin edit genres and platforms tools.

- **Carousel**
  - Used for sorting reviews by genre and platform displayed on the homepage.

- **Search bar**
  - Allows the user to search reviews by keywords using text index searching. Review names, genre and platform names, developer names and release years can be used as keywords for the query.

- **Flash Messages**
  - Used for login and register form error responses.

### **Version and Future**

#### Status

> App Version: <u>1.0</u>

I will continue to update my website as I grow my platform of users. Most things I wanted to add are there but the ones I didn't are listed bellow.

**Future Development plans**
- Add bookmarks button on reviews.

- Allow for user created review collections.

- Add text formating tools to add/edit review forms.

---

## &rarr; **Technologies**

#### Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://www.javascript.com/)
- [Python](https://www.python.org/)

#### Frameworks, Libraries & Programs

- [**MongoDB**](https://www.mongodb.com/)
  - The document database used for this project.

- [**Flask**](https://flask.palletsprojects.com/en/1.1.x/)
  - A web framework used to provide tools, libraries, and technologies for the application.

- [**Werkzeug**](https://werkzeug.palletsprojects.com/en/1.0.x/)
  - Used with Flask to make user authentication more secure using password hashing.

- [**Materialize CSS**](https://materializecss.com/)

  - Materialize was used to assist with the responsiveness and styling of the website using design templates.

- [**Randomkeygen**](https://randomkeygen.com/)

  - Fort Knox Passwords for password security.

- [**Google fonts**](https://fonts.google.com/)

  - Google fonts were used to import the fonts into the CSS file which is used on all pages throughout the project.

- [**Font Awesome 4.7.0**](https://fontawesome.com/)

  - Font Awesome was used to add icons for aesthetic and UX purposes.

- [**jQuery:**](https://jquery.com/)

  - jQuery came with Materialize to make the components used responsive.
  - Included at end of body tag within HTML file to ensure a smooth running of HMTL and CSS.

- [**Git**](https://git-scm.com/)

  - Git was used for version control by utilizing the Gitpod terminal to commit to Git and push to GitHub.

- [**GitHub**](https://github.com/)

  - GitHub is used to store the project code after being pushed from Git.

- [**Heroku**](https://github.com/)

  - Heroku is the app platform the project was deployed to.

- [**Lucidchart**](https://lucidchart.com/)

  - Lucidchart was used to create the wireframes, schema, site map, favicon and logo during the design process.

- [**Photoshop CC 2019**](https://adobe.com/)

  - Photoshop was used to edit the hero image and create the orange square image for the genres carousel.

- [**Grammarly**](https://www.grammarly.com/)

  - Grammarly was used to ensure any grammar errors are eliminated.

- [**Tables Generator**](https://www.tablesgenerator.com/markdown_tables)

  - Used to create tables in my readme file.

- [**Favicon**](https://favicon.io/)
    - Used to create a favicon, displaying my logo on a web browser next to the web address bar, the browser tab, and the bookmarks bar.
    
---

## &rarr; **Deployment**

#### Deploy to Heroku

The project was connected to Heroku using automatic deployment from my GitPod repository, using the following steps...

> **Note:** Before following the below steps ensure you have already created your new repo in Github and set up an env.py file to store your sensitive data. (Further details on adding an env.py file below)

1. In the terminal create requirements.txt and Procfile files using the commands below:
   - $ pip3 freeze --local > requirements.txt

   - $ echo web: python app.py > Procfile

   > **Note:** 
The **P**rocfile must be assigned a capital P.

2. Log in (or Register) to [Heroku](https://www.heroku.com/) and from your dashboard click 'new' > 'create new app'.

3. Enter your 'App name' and choose the appropriate region, then click 'Create app'.
   > **Note:** 
 The app name must be unique, all lowercase, and '-' to be used instead of spaces.
The region chosen should be the one closest to you.

4. From the Heroku deploy tab, select the Deployment method 'GitHub'.

5. On the 'Connect to GitHub' section make sure your GitHub profile is displayed then add your repository name and click 'Search'.

   > **Note:** 
This is the name of your repo in GitHub. It is good practice to use an identical name for your Heroku app.

6. Your repo should now be displayed below, click 'Connect' to connect to this app.

7. Go to the Settings tab on Heroku, scroll to the 'Config Vars' section, and click 'Reveal Config Vars'. 

   Enter variables (key and value) contained in the env.py file. The keys are listed below and values are inputted by the user.
    - IP
    - PORT
    - SECRET_KEY
    - MONGO_URI
    - MONGO_DBNAME

8. Push requirements.txt and Procfile to the repository.

9. Go to the Deploy tab on Heroku and under the Automatic deployment section, click 'Enable Automatic Deploys'. Then under Manual deploy click 'Deploy Branch'.

   - Heroku will now receive the code from GitHub and start building the app using the required packages.
   - Once built you will receive the message 'Your app was successfully deployed' and you can click 'View' to launch your new app.

        > **Note:** 
        In Manual deploy dropdown 'master' is selected'

#### Accessing code

Follow the steps below if you are wanting to propose changes to the project or to use the project as a starting point for your own idea.

- **Forking the GitHub Repository**

  Forking allows you to create a copy of the original repository and propose changes to the repository owner via a pull request.

  1. Log in to GitHub and locate the GitHub Repository.

  2. At the top of the Repository (not top of page) just above the "Settings" button on the menu, locate the "Fork" button.

  3. You should now have a copy of the original repository in your GitHub account.

- **Making a Local Clone**

When you clone a repository, the repository is copied on to your local machine.

1. Log in to GitHub and locate the GitHub Repository.
   - uReview repository can be found [here](https://github.com/NikolasKotsikos/uReview)

2. Under the repository name, click the "download code" option.   

3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.   

4. Open Git Bash

5. Change the current working directory to the location where you want the cloned directory to be made.

6. Type git clone, and then paste the URL you copied in Step 3.

    ```
    $ git clone https://github.com/YOUR-USERNAME/ureview.git
    ```

7. Press Enter. Your local clone will be created.

      Now, you have a local copy of your fork of the uReview repository.

    > **Note:** The repository name and output numbers that you see on your computer, representing the total file size, etc, may differ from the example I have provided above.

8. Add an env.py file to your workspace to include your environment variables (more details below).

   > **Note:** Contact the site owner if you want more information on the environment variables that have been included.

**Creating env.py file** 

1. Add a env.py file to store environment variables:
   - Import os 
   - os.environ.setdefault("IP", "To be added by user") 
   - os.environ.setdefault("PORT", "To be added by user") 
   - os.environ.setdefault("SECRET_KEY", "To be added by user") 
   - os.environ.setdefault("MONGO_URI", "To be added by user") 
   - os.environ.setdefault("MONGO_DBNAME", "To be added by user")

    > **Note:** I used [RandomKeygen.com](https://randomkeygen.com/) to get my secure SECRET_KEY password. A SECRET_KEY is required when using the flash and session functions of Flask.

 2. Create a file named .gitignore and include env.py to ensure this file is never pushed to GitHub.
    > **Note:** The env.py mustn't be tracked as any GitHub user can access your confidential data.

---

## &rarr; **Credits**

#### Content

- [Materialize 1.0.0](https://materializecss.com/): Materialize Library used throughout the project, components used include the grid System, forms, buttons, modals, navbar, dropdown, side nav, tabs, carousel, cards, toasts, and tooltips.

- Reviews added by myself from various accounts (admin, evilBeard, psGamer, ManuelC, mChief) and various friends and family members. The are taken from [EuroGamer](https://www.organix.com/), [GameSpot](https://www.gamespot.com/) and [Tweakers](https://tweakers.net/). All other reviews have been added from user testing.

#### Media

> **Please note:** The images on this site are only being used for non-profit educational purposes.

- The callout image on the homepage is from ['Wallpaper Access'](https://www.wallpaperaccess.com).

- Platform images found on the homepage are from [Wikipedia](https://en.wikipedia.org/).

- The images used for the review cards are images accompanying the individual original reviews.

- The mockup image showing all devices on my README.md was created using [Photoshop CC 2019](http://www.adobe.com/).

#### Acknowledgments

- My Mentor, [Aaron Sinnott](https://www.linkedin.com/in/aaronsinnott/) for his help and support throughout the project.

- The help and support received from the tutors at [Code Institute](https://codeinstitute.net/).

- The [Code Institute](https://codeinstitute.net/) Slack Community.

- My wife [Lida](https://www.linkedin.com/in/lidadimitriou/) for her love and support.

- Friends and family members for their feedback and support.

## &rarr; **Contact**

#### Contact details

Created by @NikolasKotsikos

If you have any problems, questions or, suggestions for my project please contact me on the email below:

```
kotsikn@gmail.com
```

Thanks for visiting.

&copy;
Nikolas Kotsikos
 

 


 