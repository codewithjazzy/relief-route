<p float="center">
  <img src="https://res.cloudinary.com/dwy2rcep0/image/upload/v1707521230/2_akkntq.svg" />
</p>

# Relief Route

Relief Route is a user-centric web application designed to alleviate the stress of finding accessible restrooms in unfamiliar territories. Leveraging intuitive geolocation capabilities, it connects users to a comprehensive directory of over 25,000 restroom facilities worldwide. With Relief Route, users gain the convenience and confidence of locating restrooms on-the-go, ensuring a smoother and worry-free travel experience.



## Table of contents

- [Overview](#overview)
  - [Key Features](#key-features)    
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#lessons-learned)
  - [Roadmap](#roadmap)
  - [Useful resources](#useful-resources)
- [Author](#author)
## Overview


### Key Features

- Extensive Database
- Advanced Search Functionality
- User Reviews and Ratings
- User Profiles
- Light/dark mode toggle
### Screenshots

![App Screenshot](https://res.cloudinary.com/dwy2rcep0/image/upload/v1707540115/main_large_dark_Small_ztkhdx.png)
![App Screenshot2](https://res.cloudinary.com/dwy2rcep0/image/upload/v1707540116/main_medium_light_Phone_stqq2b.png)
![App Screenshot3](https://res.cloudinary.com/dwy2rcep0/image/upload/v1707540115/search_dark_Phone_nviau0.png)
![App Screenshot4](https://res.cloudinary.com/dwy2rcep0/image/upload/v1707540115/search_light_Phone_plwm58.png)
![App Screenshot5](https://res.cloudinary.com/dwy2rcep0/image/upload/v1707540115/restroom_dark_Phone_obmf40.png)
![App Screenshot6](https://res.cloudinary.com/dwy2rcep0/image/upload/v1707540115/restroom_light_Phone_m7xxwu.png)
![App Screenshot7](https://res.cloudinary.com/dwy2rcep0/image/upload/v1707540115/signup_Phone_cgvpuv.png)
![App Screenshot8](https://res.cloudinary.com/dwy2rcep0/image/upload/v1707540115/login_Phone_rluaqi.png)


### Links

- Live Site URL: [Here]()
- Repository URL: [Here]()

## My process

### Built with

<p float="left">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
  <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /> 
  <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/daisyUI-1ad1a5?style=for-the-badge&logo=daisyui&logoColor=white" />
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white" />
</p>

### Lessons Learned

I learned quite a lot working on this project, a lot of breaking and figuring things out

- **MongoDB Database Tools**, command line utilities for database deployment: importing/ exporting/ restoring data from a large CSV file.

- **TailwindCSS** and plugins: first time using this framework. I installed it via npm,used custom breakpoints, and I also installed the **DaisyUI** plug-in for additional colors and components.

- **Mongoose** vs native **MongoDB** driver methods: My database had varying input types for two of my fields. In several attempts to maintain consistency across the application I struggled to create a model / schema for the already exisiting locations. I had to forego creating the schema and instead use the native driver to manipulate the data for locations. I was able to add new fields this way, and left the model file as a reference.

-  **Deprecated modules**: struggled a bit with a couple deprecated modules that `npm audit fix` would not fix. A clean install, update @latest, and audit fix--force worked for certain modules.
### Roadmap

- User submitted locations 
- Third-party auth logins
- Live map pin-pointing functionality
- User profile avatars
- Location flagging for permanently closed locations


### Useful resources

 - [TailwindCSS Docs](https://tailwindcss.com/docs/installation)
 - [MongoDB Database Tools](https://www.mongodb.com/docs/database-tools/)


## Author

- [@codeWithJazzy](https://www.linkedin.com/in/codewithjazzy/)


## License

[MIT](https://choosealicense.com/licenses/mit/)

