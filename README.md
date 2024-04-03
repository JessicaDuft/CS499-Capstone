**Enhancements**

Artifact used: 
The artifact used for all three enhancements is the Travlr GetAways web application, which was developed in February of 2024. The web application was developed in a previous project and while the web application met all of the requirements for the project, it was still far away from meeting the client requirements. Once the web page is fully completed, admins should be able to use CRUD methods to add, edit, and delete trips, rooms, meals, and more from the admin facing page and those changes should be reflected on the customer facing page. Additionally, login, registration, and checkout features should be implemented on the customer facing web page as well.  Prior to any enhancements the web application has an admin page and a customer facing web page with the only edit-able item being trips. Admins can login and add, edit, or delete a trip and those changes are reflected in the database and on the customer facing web application. For more information on functionality and code prior to enhancements please review the code review or software design document included in this repository. 


**Enhancement One**: 
<br />
**Software Enhancement**

For the software enhancement portion of this artifact 'rooms' will be added to the admin page so that once the database is implemented (this will be done in a future enhancement) admins are able to add, edit or delete rooms in addition to trips. We will be adding a rooms link to the navigation bar which when clicked will list all of the rooms currently in the database and we will be adding add, edit, and delete pages for the admin. While the enhancements are purely visual for this portion of upgrades, they are necessary for the final product and will be fully functional at the end of all three enhancements. Building the web pages for displaying rooms, edit rooms, add rooms, and adding the link for rooms to the nav-bar showcases the ability to work across multiple languages using MEAN stack development practices to build an intuitive, easy to use SPA (singular page application) with client requirements prioritized. 

See the images below for visual documentation of the changes implemented in this enhancement: 



**NAVIGATION BAR BEFORE EHNANCEMENT:** 


<img width="468" alt="Picture1" src="https://github.com/JessicaDuft/CS499-Capstone/assets/130928718/524b1175-64d3-43f1-a883-96b31ed9bf4a">



**NAVIGATION BAR AFTER ENHANCEMENT:** 

<img width="468" alt="Picture2" src="https://github.com/JessicaDuft/CS499-Capstone/assets/130928718/9cf63949-8275-47f2-94d4-c9889817fcc5">



<br />
<br />

**After logging in and clicking the Rooms link on the navigation bar, the following page renders:** 

<img width="468" alt="Picture3" src="https://github.com/JessicaDuft/CS499-Capstone/assets/130928718/683ef659-1f99-4605-b533-7f41ab5d28f6">

<br />
<br />

**If user presses edit the following page renders:**

<img width="468" alt="Picture4" src="https://github.com/JessicaDuft/CS499-Capstone/assets/130928718/3457a1ee-be4b-406d-b0bd-a523a1cc9124">

<br />
<br />


**If a user clicks “Add Room” the following page renders:**

 <img width="468" alt="Picture5" src="https://github.com/JessicaDuft/CS499-Capstone/assets/130928718/61f76016-483b-4c0a-97fe-98c0279b4478">

 <br />
 <br />

 Previously admins were only able to add, edit, and delete trips. Following this software enhancement the foundation to maintain the rooms in the database is now available as the pages to make those changes are now rendering for the admin. As soon as the database is integrated in following enhancements, the admin will be able to easily add, update or delete rooms the same way they could manipulate trips prior to any enhancements. 
 <br />
 **Code example from this enhancement (add-room component)** 
 <br /> 
 
The following components (A folder with an HTML, CSS, and a .ts file) and file were all added to complete this enhancement: 
<br />
**\travlr-admin\src\app\add-room (component)**
<br />
**\travlr\travlr-admin\src\app\delete-room (component)**
<br />
**\travlr-admin\src\app\edit-room (component)**
<br />
**\travlr-admin\src\app\room-card (component)**
<br />
**\travlr\travlr-admin\src\app\room-listing (component)**
<br />
**\travlr\travlr-admin\src\app\services\room-data.service.ts (file)**
<br />

The following files were edited for this portion of the enhancement: 
<br />

**\travlr\travlr-admin\src\app\app-router.module.ts  (Lines 4,7,11,18 and 24 were added)**
<br />
**\travlr\travlr-admin\src\app\app.module.ts (Lines 12,13,14,15,16,17,26,28,30,32 and 46 were added)** 





