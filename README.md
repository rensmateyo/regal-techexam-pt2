# regal-techexam-pt2
##Install
1. Checkout into edwin/MAIN-DEV branch
2. On terminal either run npm install or npm install typescript ts-node express @types/express morgan @types/morgan axios @types/axios nodemon

##How to use
1. After installing the nodes, run npm run dev
2. To use run this url on postman, replace the values set on the parameter to your desired value (Ex: {color_value} to red)
 - #Get all animal data
  - GET http://localhost:6060/all/animal
 - #Get a random animal data
  - GET http://localhost:6060/random/animal
 - #Insert a new animal data
  - POST http://localhost:6060/insert/animal?color={color_value}&animal={animal_value}
 - #Update an existing animal data(Both value on find_data should be true)
  - PUT http://localhost:6060/update/animal?find_data={"color": "{find_old_color_value}", "animal": "{find_old_animal_value}"}&animal={new_animal_value}&color={new_color_value}
 - #Delete an existing animal data (Both value should be true)
  - DELETE http://localhost:6060/delete/animal?color={color_value}&animal={animal_value}

##How long it took
- It took 8 hours to understand the flow of the app and remodel it unto MVC style. Also includes bug fixing

##What you had to research
- I studied and run the project found here https://www.section.io/engineering-education/how-to-create-a-simple-rest-api-using-typescript-and-nodejs/ then made it MVC style.
- Also studied what each imports do, bugs and how to improve logic

##If you did use a database for this project, what kind would you use and why?
- If I would use database for this one, I think I would use Redis as the data is relatively simple and not large.
- It would enable me to write fewer lines of code to store, access, and use data
- 
##Can you give me an example of how you would delete a color from the database?
- As there is no ID on the object, I think I would stil get all the data and iterate it to find the specific color to delete

#UPDATE ON README 10/8/22 (AFTER 3 DAYS DEADLINE) Just for logging purposes, you can ignore this
##Things I would change for better code
- Refactor repeating code like the one finding the array key for matching values
- Put values of insert and update in the body instead of url parameter
- Add try catch on the async functions and await some of the code so as to be sure to get the value
