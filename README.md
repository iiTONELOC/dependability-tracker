# Dependability Tracker

[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white&style=plastic)](https://nextjs.org/docs)
[![React.js](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=plastic)](https://reactjs.org/docs/getting-started.html)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white&style=plastic)](https://tailwindcss.com/docs)
[![Nodemailer](https://img.shields.io/badge/Nodemailer-000000?logo=npm&logoColor=white&style=plastic)](https://nodemailer.com/about/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=plastic)](https://www.typescriptlang.org/docs/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white&style=plastic)](https://dev.mysql.com/doc/)
[![MariaDB](https://img.shields.io/badge/MariaDB-003545?logo=mariadb&logoColor=white&style=plastic)](https://mariadb.com/kb/en/documentation/)
[![JawsDB](https://img.shields.io/badge/JawsDB-3F72AF?logo=mysql&logoColor=white&style=plastic)](https://www.jawsdb.com/)
[![Heroku](https://img.shields.io/badge/Heroku-430098?logo=heroku&logoColor=white&style=plastic)](https://devcenter.heroku.com/)

## Description

`Dependability Tracker` is a Node.js application built with `Next.js`, `React.js`, `TailwindCSS`, `Nodemailer`, and `TypeScript`. It is designed to track and manage employee call-outs from work.

Initially developed as an internal tool for the parking facilities at a major international airport, it was created in response to a classmate's need for a system to monitor and manage employee call-outs effectively.

## Table of Contents

- [Project Requirements](#project-requirements)
- [Screenshot](#screenshot)
- [Technology Stack](#technology-stack)
- [Solution & Deployment](#solution--deployment)
  - [Solution](#solution)
  - [Live Deployment](#live-deployment)
- [Local Installation](#local-installation)

## Project Requirements

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

I also will need to have elevated privileges to create, edit, and delete employees. It would be nice to be able to select other
supervisors to have these permissions as well.

When A Call-Out record is created, any admins (supervisors with elevated permissions), should also receive an email summary of the
call-out details.

`The department consists of three divisions`:

- Public Parking
- Employee Parking
- Ground Transportation

Most employees will belong to only one division, but supervisors will belong to all three.

The program must run on Linux with SELinux enabled, use MariaDB, start automatically, and restart if it crashes.

## Screenshot

![dependability-tracker-screenshot](/public/images/dependability-screenshot.png)

## Technology Stack

| Technology                                                                                                                   | Description                                                                                                  | Links ↘️                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| ![React.js](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=plastic)                              | A JavaScript library for building user interfaces with a component-based architecture.                       | [React Documentation](https://react.dev/)                                              |
| ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white&style=plastic)                           | A React framework for building server-side rendered and static web applications.                             | [Next.js Documentation](https://nextjs.org/docs)                                       |
| ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white&style=plastic)               | A utility-first CSS framework for creating custom designs without leaving your HTML.                         | [TailwindCSS Documentation](https://tailwindcss.com/docs)                              |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=plastic)                  | A superset of JavaScript that adds static types and advanced features for improved development.              | [TypeScript Documentation](https://www.typescriptlang.org/docs/)                       |
| ![Nodemailer](https://img.shields.io/badge/Nodemailer-000000?logo=npm&logoColor=white&style=plastic)                         | A module for sending emails from Node.js applications with support for various transport methods.            | [Nodemailer Documentation](https://nodemailer.com/about/)                              |
| ![JWT](https://img.shields.io/badge/JSON_Web_Tokens-000000?logo=json&logoColor=white&style=plastic)                          | A compact, URL-safe means of representing claims to be transferred between two parties.                      | [JWT Documentation](https://jwt.io/introduction/)                                      |
| ![Helmet](https://img.shields.io/badge/Helmet-000000?logo=helmet&logoColor=white&style=plastic)                              | A middleware for securing Express applications by setting various HTTP headers.                              | [Helmet Documentation](https://helmetjs.github.io/)                                    |
| ![Express-Rate-Limiter](https://img.shields.io/badge/Express_Rate_Limiter-000000?logo=express&logoColor=white&style=plastic) | A rate-limiting middleware for Express.js applications to prevent abuse and ensure fair usage.               | [Express-Rate-Limiter Documentation](https://www.npmjs.com/package/express-rate-limit) |
| ![Brevo](https://img.shields.io/badge/Brevo-000000?logo=sendinblue&logoColor=white&style=plastic)                            | An SMTP relay service for sending transactional and marketing emails with robust features.                   | [Brevo Documentation](https://developers.brevo.com/docs/getting-started)               |
| ![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white&style=plastic)                                 | An open-source relational database management system known for its reliability and performance.              | [MySQL Documentation](https://dev.mysql.com/doc/)                                      |
| ![MariaDB](https://img.shields.io/badge/MariaDB-003545?logo=mariadb&logoColor=white&style=plastic)                           | An open-source relational database forked from MySQL with additional features and enhancements.              | [MariaDB Documentation](https://mariadb.com/kb/en/documentation/)                      |
| ![JawsDB](https://img.shields.io/badge/JawsDB-3F72AF?logo=mysql&logoColor=white&style=plastic)                               | A cloud-hosted MySQL database service designed for ease of use and scalability.                              | [JawsDB Documentation](https://www.jawsdb.com/)                                        |
| ![Heroku](https://img.shields.io/badge/Heroku-430098?logo=heroku&logoColor=white&style=plastic)                              | A cloud platform as a service (PaaS) that enables developers to deploy and manage applications effortlessly. | [Heroku Documentation](https://devcenter.heroku.com/)                                  |

## Solution & Deployment

### Solution

More information coming soon ...

### Live Deployment

You can visit a live site that serves as a demo. It has been populated with fake data.

`Access Live Site`:
[https://dependability-tracker.atropeano.com](https://dependability-tracker.atropeano.com)

`Login Credentials`:

- Admin:

  - email: `anthony@atropeano.com`
  - password: `d3MOmePlease!`

- Supervisor:

  - email: `support@atropeano.com`
  - password: `d3MOmePlease!`

## Local Installation

[View Instructions](./docs/install-locally.md)
