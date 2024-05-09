# MyNationalParks (Backend)
Author: Robert Pendergrast

## Project Description
This repository makes up half of the MyNationalParks webapp. The backend code is written in Javascript under the Node.js and Express.js framework. It interfaces with a mongodb to store data. 

## Programing
The programming uses HTTP requests (GET, POST, DELETE, PATCH) to take user-inputted data from the frontend and send it to the database. The application also sends data from the database to the frontend.

Here is a snippet of the request logic:

<img width="376" alt="Screenshot 2024-05-08 at 10 50 16 PM" src="https://github.com/RobertPendergrast/WebDevBackend/assets/121700465/e6abfc81-d0f4-4d8d-b302-a2642f9a96b4">


## MongoDB Schema
The database schema is defined to encapsulate the 4 user-inputs for each journal entry. 
Each journal entry has:
- National Park Name
- Trip Start Date
- Trip End Date
- Trip Description
The name and descriptions are strings, and the dates are dates.

<img width="499" alt="Screenshot 2024-05-08 at 10 48 29 PM" src="https://github.com/RobertPendergrast/WebDevBackend/assets/121700465/53bba583-04c9-452e-b668-b4c9313b7ca7">


## Future Plans
I have several planned features that I will be working on to advance the capabilities of this engine, including but not limited to:
  1. An entity class that generates autonomously controlled creatures and ememies. Entities will be customizable.
