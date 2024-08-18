# Local Installation

`Node.JS` and a SQL DB, `MySQL` - `MariaDB` - `Postgres`, are prerequisites but their installation is beyond the scope of the installation methods, you can refer to their documentation if installation is required.

Access to a STMP relay is also a vital prerequisite. I used [Brevo](https://brevo.com) for their 300 daily email limit for free usage, which was one of the highest I had seen while looking at other options such as SendGrid, MailTrap, etc.

## Download Project from GitHub

### Via SSH - Linked Key is Required

Open a terminal and navigate to a folder on your system where you would like to save the project folder.

Then run:

```bash
git clone git@github.com:iiTONELOC/dependability-tracker.git
```

### Via HTTPS - Linked Key is Required

Open a terminal and navigate to a folder on your system where you would like to save the project folder.

```bash
git clone https://github.com/iiTONELOC/dependability-tracker.git
```

### Via Zip File Download

A zipped project folder can be downloaded from GitHub as well.

[Dependability Tracker.zip](https://github.com/iiTONELOC/dependability-tracker/archive/refs/heads/main.zip)

## Create Database

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

## Remove Next.JS Telemetry Reporting

Run the following command to disable telemetry collection:

```bash
npm run removeTel
```

## Create the .env File

A script has been provided to generate a .env file and populate it with default values. For convenience, a script has been provided that will generate the file with the necessary keys. However, there are variables unique to your environment which can be added manually _AFTER_ the file has been created, _**OR**_ they can be passed as arguments when invoking the script, this is the recommended method. This will generate the file and all the keys with a single command-line command.

### Generate .env File with Arguments

The following environment variables are unique to your environment and will need to be added. They must be provided, in the same order they are listed here:

Args:

- `CREATE_TEST_ENV` - true/false : true to generate the env.test file, false to generate a .env file.
- `EMAIL_PORT` - number : port for the SMTP relay, typically 465 or 587.
- `EMAIL_SECURE` - string : boolean. Use true for port 465 and false for ports 587 (At least with Brevo)
- `DB_USER` - string : username for MySQL database access, typically root.
- `DB_PASSWORD` - string : password for MySQL database access
- `EMAIL_USER` - string : email username for SMTP relay access - This is the noreply address
- `EMAIL_HOST` - string : host address for SMTP relay, this can be an IP address or FQDN
- `EMAIL_SENDER` - string : email address to 'send' the emails from, this will also be the no reply address
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

### Generate .env File with Placeholder values

To generate a .env file with placeholder values run:

```bash
npm run createEnv
```

Then open the file and replace any values within `<>` with your unique environment values. Be sure to save the file and exit.

## If Using Linux Distributions With Systemd

### (Arch, CentOS, CoreOs, Debian, Fedora, Mageia, Manjaro, Mint, OpenSUSE, RHEL, Rocky, Solus, Ubuntu)

### Install Dependability Tracker as a Service

Installs any dependencies if necessary, builds the project, generates TLS certificates if needed, and installs dependability tracker as a systemd service, with the necessary SELinux policies to run if SELinux is enabled.

```bash
npm run install-service
```

### Verify Service Output

```bash
# to view the last few lines
tail log

#to view the last few lines with updates
tail -f log
```

[Go to Next Step](#seed-the-database-with-default-data)

---

## If Using Any Other Operating System

### Install project dependencies

```bash
npm i
```

### Generate a Production Build

```bash
node scripts/build.mjs
```

### Start the Server

```bash
npm start
```

## Seed the Database with Default Data

To seed the database run the following command:

> `WARNING` Seeding the Database `WILL DESTROY ANY EXISTING DATA`

```bash
npm run seed
```

## Send the Create Credential Email Invite to the Default Admin

To send the email invite so the Admin can generate their login credentials, open a new terminal and navigate to the project root. (Make sure the server is running) Then type the following command, be sure to replace `<emailAddress>` with the administrator's email address. Currently only `@portseattle.org` addresses are supported.

```bash
npm run sendInvite -- <emailAddress>
```

## Updating

To check for updates and rebuild upon any changes:

```bash
npm run update
```

## Uninstall Service

To remove the Dependability Service and all created files:

```bash
npm run uninstall
```

## Seeding CallOut Data for Test Purposes

### When specifying an Arbitrary Number

```bash
npm run seed-callout numberOfCallOutsToGenerate
```

### Generate 365 CallOuts

```bash
npm run seed-callouts-365
```

## Managing Services With Systemd

Here is a link to a short guide for using systemd for [managing system services](https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units).

For more information refer to the man page documentation for the systemd command.

```bash
man systemd
```

[Go Back](../README.md#table-of-contents)
