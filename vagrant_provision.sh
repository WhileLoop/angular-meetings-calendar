#!/bin/bash

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
wget -q -O- https://deb.nodesource.com/gpgkey/nodesource.gpg.key | sudo apt-key add -

echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
echo "deb https://deb.nodesource.com/node_0.12 trusty main" | sudo tee /etc/apt/sources.list.d/nodesource.list

wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
echo "deb http://dl.google.com/linux/chrome/deb/ stable main" | sudo tee /etc/apt/sources.list.d/google.list

sudo apt-get update
sudo apt-get install -y nodejs mongodb-org git xvfb openjdk-7-jre-headless google-chrome-stable xfonts-100dpi xfonts-75dpi xfonts-scalable xfonts-cyrillic build-essential
sudo apt-get purge -y chef puppet

sudo npm install -g bower@1.7.7 protractor@2.5.1 grunt-cli@0.1.13 forever@0.15.1
sudo webdriver-manager update

cd /vagrant
npm install
bower install
forever start bin/www
