# Dependability Tracker

[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white&style=plastic)](https://nextjs.org/docs)
[![React.js](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=plastic)](https://reactjs.org/docs/getting-started.html)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white&style=plastic)](https://tailwindcss.com/docs)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=plastic)](https://www.typescriptlang.org/docs/)
[![Nodemailer](https://img.shields.io/badge/Nodemailer-000000?logo=npm&logoColor=white&style=plastic)](https://nodemailer.com/about/)
[![Brevo](https://img.shields.io/badge/Brevo-008000?logo=sendinblue&logoColor=white&style=plastic)](https://developers.brevo.com/docs/getting-started)
[![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white&style=plastic)](https://expressjs.com/)
[![JWT](https://img.shields.io/badge/JSON_Web_Tokens-000000?logo=json&logoColor=white&style=plastic)](https://jwt.io/introduction/)
[![Helmet](https://img.shields.io/badge/Helmet-000000?logo=helmet&logoColor=white&style=plastic)](https://helmetjs.github.io/)
[![Express-Rate-Limit](https://img.shields.io/badge/Express_Rate_Limit-000000?logo=express&logoColor=white&style=plastic)](https://www.npmjs.com/package/express-rate-limit)
[![Sequelize](https://img.shields.io/badge/Sequelize-3F72AF?logo=sequelize&logoColor=white&style=plastic)](https://sequelize.org/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white&style=plastic)](https://dev.mysql.com/doc/)
[![MariaDB](https://img.shields.io/badge/MariaDB-003545?logo=mariadb&logoColor=white&style=plastic)](https://mariadb.com/kb/en/documentation/)
[![JawsDB](https://img.shields.io/badge/JawsDB-3F72AF?logo=mysql&logoColor=white&style=plastic)](https://www.jawsdb.com/)
[![Heroku](https://img.shields.io/badge/Heroku-430098?logo=heroku&logoColor=white&style=plastic)](https://devcenter.heroku.com/)

## `Description`

[`Dependability Tracker`](https://github.com/iiTONELOC/dependability-tracker) is a Node.js application built with [`Next.js`](https://nextjs.org), [`React`](https://react.dev/) , [`TailwindCSS`](https://tailwindcss.com/docs), [`Nodemailer`](https://nodemailer.com/about/), [`Sequelize`](https://sequelize.org/) and [`TypeScript`](https://www.typescriptlang.org/docs/). It is designed to track and manage employee call-outs from work.

Initially developed as an internal tool for the parking facilities at a major international airport, it was created in response to a classmate's need for a system to monitor and manage employee call-outs effectively.

## `Table of Contents`

- [`Project Requirements`](#project-requirements)
- [`Technology Stack`](#technology-stack)
- [`Solution & Usage`](#solution--usage)
- [`Screenshot`](#screenshot)
- [`Live Deployment`](#live-deployment)
- [`Local Installation`](#local-installation)
- [`Contact`](#contact)
- [`License`](#license)

## `Project Requirements`

As Lead-Supervisor of the parking facilities at a major airport, I need an efficient way to manage the information when an employee calls out from their shift.

`Reqired Information for Each Call-Out Event`:

- Employee Name
- Call Date
- Call Time
- Shift Date
- Shift Time
- Leave Type (Reason)
- Arrived Late (In mins if appliciable)
- Left Early (In mins if appliciable)
- Recorded By (Supervisor)
- Comments

`Required Leave Type Reasons` (in order):

- Sick
- FCA
- FMLA
- No Call-No Show
- Bereavement
- Tardiness
- Left Early
- LWOP
- PTO
- Personal Holiday
- Holiday
- Holiday Opt.
- PHEL
- Jury Duty
- Maternity
- Paternity
- Military
- Others

`The department consists of three divisions`:

- Public Parking
- Employee Parking
- Ground Transportation

Most employees will belong to only one division, but supervisors will belong to all three.

Supervisors need a landing page that displays information such as the total number of call-outs, top call out reasons, employees that call out the most frequently, recent call-outs, and a chart that displays call-outs over time.

From their landing page, they should also be able to navigate to a relevant Division.

From the Divison page, supervisors should be able use a form to record call-outs. Below the form, a two-week history should be visible.

When A Call-Out record is created, all supervisors should receive an email summary of the event details.

The supervisors should also have the ability to generate reports for a division and should be able to search by Employee, Leave Type, and date range. Each field should be optional (date range defaults to two weeks), and when provided act as a boolean `AND` statement.

Generated reports should be downloadable via PDF and any view should print nicely.

Admins will need a separate portal where they can create, edit, and delete employee and callout records.

Admins should also have the ability to assign supervisor/admin status to existing employees and generate detailed call-out reports with the ability to query by any callout attribute, i.e. Employee Name AND Leave Type AND Division, ETC.

The program must run on Linux with SELinux enabled, use MariaDB, start automatically, update gracefully and restart if it crashes.

## `Technology Stack`

| Technology                                                                                                               | Description                                                                                                  | Links ↘️                                                                             |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white&style=plastic)                       | A React framework for building server-side rendered and static web applications.                             | [Next.js Documentation](https://nextjs.org/docs)                                     |
| ![React.js](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=plastic)                          | A JavaScript library for building user interfaces with a component-based architecture.                       | [React Documentation](https://react.dev/)                                            |
| ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white&style=plastic)           | A utility-first CSS framework for creating custom designs without leaving your HTML.                         | [TailwindCSS Documentation](https://tailwindcss.com/docs)                            |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=plastic)              | A superset of JavaScript that adds static types and advanced features for improved development.              | [TypeScript Documentation](https://www.typescriptlang.org/docs/)                     |
| ![Nodemailer](https://img.shields.io/badge/Nodemailer-000000?logo=npm&logoColor=white&style=plastic)                     | A module for sending emails from Node.js applications with support for various transport methods.            | [Nodemailer Documentation](https://nodemailer.com/about/)                            |
| ![Brevo](https://img.shields.io/badge/Brevo-008000?logo=sendinblue&logoColor=white&style=plastic)                        | An SMTP relay service for sending transactional and marketing emails with robust features.                   | [Brevo Documentation](https://developers.brevo.com/docs/getting-started)             |
| ![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white&style=plastic)                 | A minimal and flexible Node.js web application framework providing a robust set of features.                 | [Express.js Documentation](https://expressjs.com/)                                   |
| ![JWT](https://img.shields.io/badge/JSON_Web_Tokens-000000?logo=json&logoColor=white&style=plastic)                      | A compact, URL-safe means of representing claims to be transferred between two parties.                      | [JWT Documentation](https://www.npmjs.com/package/jsonwebtoken)                      |
| ![Helmet](https://img.shields.io/badge/Helmet-000000?logo=helmet&logoColor=white&style=plastic)                          | A middleware for securing Express applications by setting various HTTP headers.                              | [Helmet Documentation](https://helmetjs.github.io/)                                  |
| ![Express-Rate-Limit](https://img.shields.io/badge/Express_Rate_Limit-000000?logo=express&logoColor=white&style=plastic) | A rate-limiting middleware for Express.js applications to prevent abuse and ensure fair usage.               | [Express-Rate-Limit Documentation](https://www.npmjs.com/package/express-rate-limit) |
| ![Sequelize](https://img.shields.io/badge/Sequelize-3F72AF?logo=sequelize&logoColor=white&style=plastic)                 | A promise-based Node.js ORM for relational databases like MySQL, MariaDB, PostgreSQL, and SQLite.            | [Sequelize Documentation](https://sequelize.org/)                                    |
| ![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white&style=plastic)                             | An open-source relational database management system known for its reliability and performance.              | [MySQL Documentation](https://dev.mysql.com/doc/)                                    |
| ![MariaDB](https://img.shields.io/badge/MariaDB-003545?logo=mariadb&logoColor=white&style=plastic)                       | An open-source relational database forked from MySQL with additional features and enhancements.              | [MariaDB Documentation](https://mariadb.com/kb/en/documentation/)                    |
| ![JawsDB](https://img.shields.io/badge/JawsDB-3F72AF?logo=mysql&logoColor=white&style=plastic)                           | A cloud-hosted MySQL database service designed for ease of use and scalability.                              | [JawsDB Documentation](https://www.jawsdb.com/)                                      |
| ![Heroku](https://img.shields.io/badge/Heroku-430098?logo=heroku&logoColor=white&style=plastic)                          | A cloud platform as a service (PaaS) that enables developers to deploy and manage applications effortlessly. | [Heroku Documentation](https://devcenter.heroku.com/)                                |
|                                                                                                                          |

## `Solution & Usage`

The solution implements an employee and call-out database management system with an interactive and responsive user interface.

### **_`Database`_** - SQL: MySQL, MariaDB, Postgres

---

The requirements called for MariaDB, but modules are installed for MySQL and Postgres and should work with all three provided the appropriate environment variable has been set: **[`Local Install - Configuring Environment Variables`](#create-the-env-file)**.

The database was implemented using an object relational mapper, or [`ORM`](https://www.freecodecamp.org/news/what-is-an-orm-the-meaning-of-object-relational-mapping-database-tools/), called [`Sequelize`](https://sequelize.org/). And the project was organized around the [`Model-View-Controller`](https://www.codecademy.com/article/mvc) paradigm.

**`Database Models`** were implemented using the following ERD:

![DB-ERD](/docs/images/erd.png)

> _**Note**_ : The ERD is verbose, meaning that within the implemented tables, the column names, or model attributes, are simplified. For example, _employee_name_ in the **Employee Model** is simply _employee_.

### **_`Web Server`_** - Node/Express.js

---

[`Node.js`](https://nodejs.org/en) provides a runtime environment for JavaScript outside of the browser.

#### **_Framework_** - Express w/ Next.js w/ Page Router

[`Express.js`](https://expressjs.com/) provides a fast and light weight web framework for node.js. Hardened using [`Helmet`](https://helmetjs.github.io/) and rate-limited using [`Express Rate Limit`](https://www.npmjs.com/package/express-rate-limit).

[`Next.js`](https://nextjs.org) was selected as the framework for Sever Side Rendering, `SSR` of [`React`](https://react.dev/) UI Components.

Next.js was bootstrapped to an express server for the ability to programatically implement HTTPS using a self-signed certificate in local deployments. Having an express server rather than a Next.js serverless build also makes it easier for non-Vercel deployments. Which is what Next.js is wired to use by default.

In a local deployment, Dependability Tacker's server only exposes the HTTP connections to localhost but not the network. The HTTPS server binds to the host's IP address rather than the local loopback address, exposing the HTTPS server to the network. Ensuring plaintext data is not sent over-the-wire.

In a cloud deployment, an HTTP server is exposed instead as the server should now sit behind a proxy that terminates the TLS (HTTPS) connection.

> However, with the `IS_DEPLOYED` env variable, this could be set to false (or omitted), enabling custom HTTPS in a cloud deployment. It is reccomened to use a Certificate Authority rather than a self-signed certificate when sending traffic over the Internet.

#### **_Session Management_** - JSON Web Tokens

User sessions are authenticated with a [`JSON Web Token`](https://jwt.io) or `JWT` that expires in the `JWT_EXPIRES_IN` environment variable's amount of time, or ten hours if not provided. The environment variable accepts any valid value listed in the [documentation](https://www.npmjs.com/package/jsonwebtoken#token-expiration-exp-claim) for the [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken) npm package. JWT tokens are set in HTTP only cookies.

#### **_Access Control_** - JSON Web Tokens, Dedicated Routes, Invites

The `JWT` tokens are given to `Authenticated` users. This Token contains an `isAdmin` value that determines if the user has extra privileges. The extra privileges are then granted through dedicated `view` and api routes.

Since the token was set in an HTTP only cookie, it will automatically be included by the client with every request made. Next.js middleware enforces this separation on every request for a front-end view. The same jwt enforcement logic is called on every API route ensuring that only authenticated supervisors or admins can access the appropriate content.

To protect against unauthorized account creation, only email addresses that have been invited by a `Create Credential Invite` record can
actually create an account. These invites can only be created by an administrator who then sets the employee's email address. This address is enforced at credential creation time.

### **_`User Interface`_** - React.js/Next.js & Tailwind CSS

[`React`](https://react.dev/) provides a declarative, component-driven way for creating user interfaces with JavaScript/TypeScript.

[`Next.js`](https://nextjs.org) provides a full-stack React framework to handle routing, data fetching, server side rendering of components and request caching.

[`Tailwind CSS`](https://tailwindcss.com/docs) a CSS framework with a utility-first approach. Allows for inline class declarations of CSS styles, drastically improving delovepment speed.

#### UI Examples

`"Supervisors need a landing page that displays information such as the total number of call-outs, top call out reasons, employees that call out the most frequently, recent call-outs, and a chart that displays call-outs over time."`

![Landing](/docs/images/dependability-screenshot.png)

`"From the Divison page, supervisors should be able use a form to record call-outs. Below the form, a two-week history should be visible."`

![Callout Form](/docs/images/callout-form-w-history.png)

`"When A Call-Out record is created, all supervisors should receive an email summary of the event details."`

![Email Notification](/docs//images/email-notification.png)

`"The supervisors should also have the ability to generate reports for a division and should be able to search by Employee, Leave Type, and date range. Each field should be optional (date range defaults to two weeks), and when provided act as a boolean AND statement.`

`Generated reports should be downloadable via PDF and any view should print nicely."`

![Generated reports](/docs/images/gen-report.png)

`"Admins will need a separate portal where they can create, edit, and delete employee and callout records."`

**Selecting an Employee That Needs a Credential Invite**
![Select-Employee-For-Credential-Invite](/docs/images/sel-sup-cred.png)

> Note. An employee with missing credentials has a bright red tag titled `Needs Credential Invite`. An invite can be created by clicking on the `Create and Send Invite` button, which opens the following modal:

**Create Credential Invite**  
![Create-Cred-Invite](/docs/images/create-cred-inv.png)

When an administrator creates a new invite, an email is sent to the provided address.

**Create Credential Invite Email**
![Create-Cred-Invite-Email](/docs/images/cred-email.png)

> Note. The email has a `Create Credentials` button that contains a unique sign-up URL. After clicking the button, an employee only has to enter their desired password and confirm it as shown below:

**Create Credentials**
![Create-Credentials](/docs/images/create-credentials-signup.png)

## `Screenshot`

![dependability-tracker-screenshot](/docs/images/dependability-screenshot.png)

## `Live Deployment`

You can visit a live site that serves as a demo. It has been populated with fake data.

`Login Credentials`:

- Admin:

  - email: `anthony@atropeano.com`
  - password: `d3MOmePlease!`

- Supervisor:

  - email: `support@atropeano.com`
  - password: `d3MOmePlease!`

`Access Live Site`:

[https://dependability-tracker.atropeano.com](https://dependability-tracker.atropeano.com)

## `Local Installation`

`Node.JS` and a SQL DB like `MySQL`,`MariaDB`, or `Postgres` are prerequisites but their installation is beyond the scope of this README, you can refer to their documentation if installation is required.

Access to a SMTP relay is also a vital prerequisite. I used [Brevo](https://brevo.com) for their 300 daily email limit for free usage, which was one of the highest I had seen while looking at other options such as SendGrid, MailTrap, etc.

### Download Project from GitHub

#### Via SSH - Linked Key is Required

Open a terminal and navigate to a folder on your system where you would like to save the project folder.

Then run:

```bash
git clone git@github.com:iiTONELOC/dependability-tracker.git
```

#### Via HTTPS - Linked Key is Required

Open a terminal and navigate to a folder on your system where you would like to save the project folder.

```bash
git clone https://github.com/iiTONELOC/dependability-tracker.git
```

#### Via Zip File Download

A zipped project folder can be downloaded from GitHub as well.

[Dependability Tracker.zip](https://github.com/iiTONELOC/dependability-tracker/archive/refs/heads/main.zip)

### Create Database

Open a terminal and create the `dependability_tracker` database using the MySQL/MariaDB shell.

The shell can be accessed via:

```bash
mysql -u <user> -p
```

Replace `<user>` with the user needed to access your database, this is typically `root` in development environments but should be something different in production.

Enter your password.

Create the database and test database

```bash
CREATE DATABASE dependability_tracker;
```

```bash
CREATE DATABASE dependability_tracker_test;
```

Then exit the shell:

```bash
quit;
```

### Remove Next.JS Telemetry Reporting

Run the following command to disable telemetry collection:

```bash
npm run removeTel
```

### Create the .env File

A script has been provided to generate a .env file and populate it with default values. For convenience, a script has been provided that will generate the file with the necessary keys. However, there are variables unique to your environment which can be added manually _AFTER_ the file has been created, _**OR**_ they can be passed as arguments when invoking the script, this is the recommended method. This will generate the file and all the keys with a single command-line command.

#### Generate .env File with Arguments

The following environment variables are unique to your environment and will need to be added. They must be provided, in the same order they are listed here:

Args:

- `CREATE_TEST_ENV` - true/false : true to generate the env.test file, false to generate a .env file.
- `EMAIL_PORT` - number : port for the SMTP relay, typically 465 or 587.
- `EMAIL_SECURE` - string : boolean. Use true for port 465 and false for ports 587 (At least with Brevo)
- `DB_USER` - string : username for MySQL database access, typically root.
- `DB_PASSWORD` - string : password for MySQL database access
- `EMAIL_USER` - string : email username for SMTP relay access
- `EMAIL_HOST` - string : host address for SMTP relay, this can be an IP address or FQDN
- `EMAIL_SENDER` - string : email address to 'send' the emails from
- `TEST_EMAIL_USER` - string : email send to address used when running any tests
- `DB_DIALECT` - string : `mysql` or `mariadb` or `postgres`
- _`Optional`_
  - `EMAIL_PASS` - string : password for the email address to access the SMTP relay, this is the password for the EMAIL_USER - IF your SMTP does not require authentication, you can omit this variable.

The syntax for the command is `npm run createEnv -- ARGS IN ORDER, SEPARATED BY A SINGLE SPACE`

Example: `DO NOT COPY AND PASTE THIS COMMAND`

```bash
npm run createEnv -- false 587 false root dbPassword test@test.com smtp.google.com noreply@test.com noreply@test.com testUser@gmail.com mysql emailPassword
```

If you make an error, delete the file with `rm .env` and try again. The env file will not overwrite itself once it has been created.

#### Generate .env File with Placeholder values

To generate a .env file with placeholder values run:

```bash
npm run createEnv
```

Then open the file and replace any values within `<>` with your unique environment values. Be sure to save the file and exit.

### If Using Linux Distributions With Systemd

#### (Arch, CentOS, CoreOs, Debian, Fedora, Mageia, Manjaro, Mint, OpenSUSE, RHEL, Rocky, Solus, Ubuntu)

#### Install Dependability Tracker as a Service

Installs any dependencies if necessary, builds the project, generates TLS certificates if needed, and installs dependability tracker as a systemd service, with the necessary SELinux policies to run if SELinux is enabled.

```bash
npm run install-service
```

#### Verify Service Output

```bash
# to view the last few lines
tail log

#to view the last few lines with updates
tail -f log
```

[Go to Next Step](#seed-the-database-with-default-data)

---

### If Using Any Other Operating System

#### Install project dependencies

```bash
npm i
```

#### Generate a Production Build

```bash
node scripts/build.mjs
```

#### Start the Server

```bash
npm start
```

### Seed the Database with Default Data

To seed the database run the following command:

> `WARNING` Seeding the Database `WILL DESTROY ANY EXISTING DATA`

```bash
npm run seed
```

### Send the Create Credential Email Invite to the Default Admin

To send the email invite so the Admin can generate their login credentials, open a new terminal and navigate to the project root. (Make sure the server is running) Then type the following command, be sure to replace `<emailAddress>` with the administrator's email address. Currently only `@portseattle.org` addresses are supported.

```bash
npm run sendInvite -- <emailAddress>
```

### Updating

To check for updates and rebuild upon any changes:

```bash
npm run update
```

### Uninstall Service

To remove the Dependability Service and all created files:

```bash
npm run uninstall
```

### Seeding CallOut Data for Test Purposes

#### When specifying an Arbitrary Number

```bash
npm run seed-callout numberOfCallOutsToGenerate
```

#### Generate 365 CallOuts

```bash
npm run seed-callouts-365
```

### Managing Services With Systemd

Here is a link to a short guide for using systemd for [managing system services](https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units).

For more information refer to the man page documentation for the systemd command.

```bash
man systemd
```

## `Contact`

If you wish to connect, feel free to send me an email at [anthony@atropeano.com](mailto:anthony@atropeano.com).

To learn more or see my latest work, head over to my portfolio, [https://atropeano.com](https://atropeano.com).

## `License`

[Software License Agreement](./LICENSE)
