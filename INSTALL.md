Installation
=====

## Linux (Ubuntu 12.04 LTS distribution-specific steps)

### Set your system's timezone to UTC

     sudo echo "UTC" | sudo tee /etc/timezone
     sudo dpkg-reconfigure --frontend noninteractive tzdata

### Get prerequisite packages

     sudo apt-get install -y python-software-properties python g++ make git

### Install Postgres 9.2+ and remove any Ubuntu installed earlier version

     sudo add-apt-repository -y ppa:pitti/postgresql
     sudo apt-get update
     sudo apt-get remove postgresql
     sudo apt-get remove postgresql-9.1
     sudo apt-get remove postgresql-client-9.1
     sudo apt-get remove postgresql-doc-9.1
     sudo rm -rf /etc/postgresql/9.1
     sudo apt-get install -y --force-yes postgresql-9.2
     sudo apt-get install -y --force-yes postgresql-server-dev-9.2

After installing postgres, you may want to modify the configuration settings so that local applications can make connections to the database server.

Modify `pg_hba.conf` in `/etc/postgresql/*/main` (`-` is for lines to be removed and `+` is for lines to be added, like a diff):

     # "local" is for Unix domain socket connections only
     -local   all             all                                     peer
     +local   all             all                                     md5

For connections outside `localhost`, modify `postgresql.conf`:

     -#listen_addresses = 'localhost'
     +listen_addresses = '*'

AND modify `pg_hba.conf`:

     # IPv4 local connections:
     -host    all             all             127.0.0.1/32            md5
     +host    all             all             0.0.0.0/0               md5

### Install node.js

     sudo add-apt-repository -y ppa:chris-lea/node.js
     sudo apt-get update
     sudo apt-get install nodejs

### Install GraphicsMagick

     sudo apt-get install graphicsmagick

### Optional: install nginx

     sudo add-apt-repository -y ppa:nginx/stable
     sudo apt-get update
     sudo apt-get install nginx

## Linux (Red Hat Enterprise Linux 6.5 distribution-specific steps)

### System timezone set to UTC

Check the system time zone setting.

     cat /etc/sysconfig/clock

If not already set to UTC, run

     sudo echo "UTC" | sudo tee /etc/sysconfig/clock
     sudo tzdata-update
     
### Update all currently installed packages

     sudo yum update -y

### Get prerequisite packages

     sudo yum install -y python-devel gcc gcc-c++ make git

### Remove any currently installed version of postgresql

Find out if a current version of postgresql is installed.

     sudo yum provides postgresql
     
If a version earlier than 9.2 is found, remove it with

     sudo yum remove <package>
     
replacing `<package>` with whatever package name was found.

### Install Postgres 9.2+

     sudo rpm -Uvh http://yum.postgresql.org/9.2/redhat/rhel-6-x86_64/pgdg-redhat92-9.2-7.noarch.rpm
     sudo yum groupinstall -y "PostgreSQL Database Server 9.2 PGDG"
     sudo service postgresql-9.2 initdb
     sudo service postgresql-9.2 start

After installing postgres, you may want to modify the configuration settings so that local applications can make connections to the database server.

Modify `pg_hba.conf` in `/var/lib/pgsql/9.2/data` (`-` is for lines to be removed and `+` is for lines to be added, like a diff):

     # "local" is for Unix domain socket connections only
     -local   all             all                                     peer
     +local   all             all                                     md5

For connections outside `localhost`, modify `postgresql.conf`:

     -#listen_addresses = 'localhost'
     +listen_addresses = '*'

AND modify `pg_hba.conf`:

     # IPv4 local connections:
     -host    all             all             127.0.0.1/32            md5
     +host    all             all             0.0.0.0/0               md5
     
Restart the postgresql service after making any changes to the configuration.

     sudo service postgresql-9.2 restart

### Install node.js

     sudo rpm -ivh http://download-i2.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
     sudo yum install -y npm --enablerepo=epel

### Optional: install nginx

     sudo yum install -y nginx
     
## Linux (distribution-independent steps)

### Create the database

Create the midas database, replacing `<midas_dbuser>` with whatever user name you want to use and replacing `<midas_dbpasswd>` with whatever password you want to assign to that database account.

     sudo -u postgres createdb midas
     sudo -u postgres psql -c "CREATE USER <midas_dbuser> WITH PASSWORD '<midas_dbpasswd>';"
     sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE midas to <midas_dbuser>;"
     sudo -u postgres psql -c "ALTER SCHEMA public OWNER TO <midas_dbuser>;" midas
     
### Globally install npm tools

     sudo npm install -g grunt-cli
     sudo npm install -g forever
     sudo npm install -g sails
     
### Optional: Create a restricted account for running midas

Everything else for the midas app from this point can be installed in the home directory of a non-privileged account (not authorized to run the sudo command or otherwise elevate privileges), rather than installing globally on the server. If the desire is to use a non-privileged account for running the app, create the account with the command below, replacing `<midas_app_account>` with whatever name you want to use for the account.

    sudo useradd <midas_app_account>
    
Then either log in to that account for the rest of the installation steps or switch to an interactive shell for that account with the command below.

     sudo -u <midas_app_account> -i

### Clone Forked Libraries

This project uses forked repositories and libaries, which you will need to link in to the midas node_modules path in order for everything to function properly.

[sails-postgresql](https://github.com/Innovation-Toolkit/sails-postgresql). Forked to provide soft deletes and support binary objects.

Clone the repo from the fork customized for midas and switch to the branch containing the soft delete and binary object features. Then install the node modules for the sails-postgresql module.

     git clone https://github.com/Innovation-Toolkit/sails-postgresql.git
     cd sails-postgresql
     git checkout bytea
     npm install

The next step depends on whether the midas app is run from a privileged account. In a privileged account, use the `npm link` command to pseudo-globally install the customized sails-postgresql module. If using a non-privileged account, simply skip this step.

     sudo npm link

### Clone the git repository.

Change back to the parent directory for sails-postgresql and clone the midas repo.

     cd ..
     git clone https://github.com/HHSIDEALab/midas.git
     
While in the common parent directory, clone any repo from which you'll import customized configuration files, such as the following.

     git clone https://github.com/HHSIDEALab/HHSFairTrade-Configs.git

Then change to the midas directory for the remaining setup of the midas app.

     cd midas

### Install midas node packages

If using the option of a non-privileged account for running the midas app, the `npm link` command won't work. Simulate the effect of the `npm link` by manually creating a symbolic link to the customized sails-postgresql directory within the node_modules directory for midas.

     mkdir node_modules
     ln -s ../../sails-postgresql node_modules/sails-postgresql

Otherwise, link in the pseudo-globally installed customized sails-postgresql

     npm link sails-postgresql

Then run the normal npm package installer

     npm install

### Configure

If you want to use customized configurations from a different repo or directory, use the following command to import the configuration files, replacing `<import_path>` with the path to the top-level directory in which the customizations are stored. Note the customizations must follow the same relative directory structure as the midas repo.

     make import DIR=<import_path>

Otherwise, copy the main settings files and edit them

     cd config
     cp local.ex.js local.js
     vi local.js

Copy and edit the backend module configuration files

     cd config/settings
     cp auth.ex.js auth.js
     cp sources.ex.js sources.js
     cp tags.ex.js tags.js
     vi auth.js
     vi sources.js
     vi tags.js

Edit the front-end configuration files

Tag configuration:

     cd assets/js/backbone/config
     vi tag.js
     vi login.js

`tag.js` specifies the tags that the frontend understands and stores in the backend.

`login.js` specifies the login options available on the frontend, and must have a corresponding backend component or configuration enabled (see `config/settings/auth.ex.js`).

### Compile production JS and CSS

From the top-level directory for midas, run the following command.

     make build

Alternatively, you can run:

     grunt build

### Initialize the database

The database needs to be populated with the tag defaults for your application's configuration.

Edit the configuration file at `midas/test/init/init/config.js` to match your tags in `midas/assets/js/backbone/components/tag.js` and the database account name and password assigned as the owner of the midas database.

Then initialize the database with:

     make init

If you'd like to include a sample project, also run:

     make demo

### Start the forever server (from the midas git folder)

This will run the application server on port 1337

     forever start app.js --prod

You can now access the server at `http://localhost:1337`

### Optional: Configure nginx

Configure nginx with the files in the midas/tools folder.  Use the SSL config file if you want to enable SSL, but be sure to set your SSL key. The default configuration in the midas/tools/nginx directory sets nginx to proxy output for midas from the default port of 1337. Edit the nginx configuration file as needed for your environment. 

*NOTE* The commands below need to be run from an account allowed to use the sudo command, so if you used the option of installing the midas app in a non-privileged account, you need to switch back to a privileged account for the nginx configuration steps.

On Ubuntu, use

     sudo cp tools/nginx/sites-enabled.default /etc/nginx/sites-enabled/default
     
On Red Hat Enterprise Linux use

     sudo cp tools/nginx/sites-enabled.default /etc/nginx/conf.d/default.conf
     
Then restart nginx to use the new configuration.

     sudo service nginx restart

With the application server running and nginx running, you should now be able to access the application at `http://localhost`

### If hosting on an offline server

Installation steps specific to Unbuntu or Red Hat may be possible to perform as listed above, if the offline environment mirrors the package repositories for `apt-get` and `yum` to use. The add-on repositores for PostgreSQL and node may not be mirrored in the offline environment, however. In such cases, download the package files on an online computer, copy the package files to the offline server and use the `apt-get` or `yum` commands to install from local files rather than online repositories.

Similarly, installing the node modules, both globally and local to the midas app, requires a two-step process. Follow the installation steps above up to and including the `npm install` commands, then copy the entire directory structure of the globally-installed node_modules and the midas app.

To package the globally-installed node modules for tranmission to the offline server, use:

     tar -czf node_modules.tgz /usr/lib/node_modules
   
To package the midas node modules for transmission, change to the parent directory of the midas app and use:

     tar -czf midas.tgz midas sails-postgresql
  
Transmit the tar archives to the offline server. Install the globally-installed node modules.

     cd / 
     sudo tar -xzf node_modules.tgz
     sudo npm install -g grunt-cli
     sudo npm install -g forever
     sudo npm install -g sails
   
Then install the midas node modules in the directory to use for running the midas app. If using the option of running midas from a restricted account, log in to that account to run the command below.

     tar -xzf midas.tgz

## Windows (Windows 2008 Server)

### Install Visual C++ 2008 x64 or x86 Redistributable Package

[Runtime 64](http://www.microsoft.com/en-us/download/details.aspx?id=15336)
     or
[Runtime 32](http://www.microsoft.com/en-us/download/details.aspx?id=29)

Reboot server once finished

### Install/Configure Postgres 9.2+ via windows msi installer

[PostgreSQL](http://www.postgresql.org/download/windows/`)

Establish admin user account during the wizard and verify that PostgreSQL is running as a service

Open pgAdmin
     
     Create database 'midas', user account 'midas' with password 'midas', and assign user 'midas' full rights to administer DB 'midas'
     
### Install Node.js via Windows MSI, select all available add-ons

[Node.js](http://nodejs.org/download/`)
     
### Install GraphicsMagick

[GraphicsMagick](ftp://ftp.graphicsmagick.org/pub/GraphicsMagick/windows/`)
     
Select Q8 version along with latest corresponding to 32 bit vs. 64 bit OS
     
### Set System Path Variables

Go to Control Panel -> System -> Advanced System Settings -> Environment Variables
Find "Path" Variable in System Variables table and double click to edit it. Make sure it contains all of the following parts (in 	addition to anything else) separated by a semi-colon.
	
	DRIVE:\program files\graphicsmagick-1.3.18-q8;
	(or similar, depending on your graphicsmagick version)
	DRIVE:\Program Files\nodejs\;
     	
Save.

### Host and Configure Application

#### If hosting on an on-line server

Follow instructions as above in Linux Install Guide to retrieve necessary files from GitHub.

Install NPM Modules as directed above.

#### If hosting on an off-line server

Retrieve Midas from GitHub as above on an online pc. Install NPM modules as directed. Copy to offline server your local npm_modules directory (in project home) as well as the contents of the directory found in Users/YOUR_USER_NAME/AppData/Roaming/npm to corresponding locations on offline-server. 

#### Starting Midas

Navigate to Midas directory via windows cmd.exe prompt

Enter the following commands

	npm install sails -g
	npm install
	npm link sails-postgresql
	grunt requirejs
     
Raise sails with

     sails lift
     
You can now access the server at `http://localhost:1337`

