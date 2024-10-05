# GP2040-CE Site Documentation

This is the documentation repository for the GP2040-CE Gamepad Firmware. It is powered by [Docusaurus](https://docusaurus.io/) and can found [here](https://gp2040-ce.info).

## Building the site

The site is built automatically with every push and merge, using the [Github Action](https://github.com/OpenStickCommunity/Site/blob/main/.github/workflows/deploy.yml).

NOTE: You need to have Node.js (>= 16.14) installed on your system to build this site. Node.js can be found [here](https://nodejs.org/en/download/package-manager)

1. Clone the repository

`git clone https://github.com/OpenStickCommunity/Site.git`

2. Move to the folder where the repository is cloned

`cd Site`

3. Install the dependencies

`npm install`

4. Start the website

`npm start`

The website will be running at <http://localhost:port> (i.e. <http://127.0.0.1:3000/> )

You can now edit the files in the docs folder and the site will reflect the changes immediately thanks to live reloading.

## Contributing

We appreciate all contributions to this repository. Please make a Pull Request, no matter how small, all contributions are valuable!
