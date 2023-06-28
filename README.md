
# Angular Strapi Web Business Card

This application is an example of an online business card built with Angular framework and Strapi CMS platform. It allows for creating, editing, and displaying online business cards.

## System Requirements

Before running the project, make sure you have the following tools installed:

-   Docker
-   Docker Compose

## Running Instructions

1.  Clone the repository to your local machine:

    `git clone https://github.com/adamcharusta/angular-strapi-web-business-card.git`

2.  Navigate to the project directory:

    `cd angular-strapi-web-business-card`

3.  Copy the `.env.example` file to `.env` and customize the environment variable values for the Strapi project:

    `cp strapi/.env.example strapi/.env`

    You can also customize the environment variable values for the Angular project if needed.

4.  Run the project using Docker Compose for the development environment with live reloading:

    `docker-compose -f docker-compose.dev.yml up -d`

    The project will be launched in Docker containers in development mode with live reloading for the Angular project.

    The Angular application will be accessible at `http://localhost:4200`, and the Strapi CMS at `http://localhost:1337`.

5.  (Optional) If you want to run the project in production mode, use the following command:

    `docker-compose up -d`

    The project will be launched in Docker containers in production mode.

    The Angular application will be accessible at `http://localhost:8080`, and the Strapi CMS at `http://localhost:1337`.


----------

Please make sure you have Docker and Docker Compose installed before running the project.
