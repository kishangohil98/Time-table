# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## App Description

App which take some input from user and generate a dynamic Time-table


Fields that will be enter by the user


1. No of days: Accepts only +ve number between 1 to 8 (eg:5)
2. No of working hours per day: Accepts only +ve number less than 10 (eg:4)
3. Total Subjects: Accepts only +ve number (eg:4)
4. No of subjects per day: Accepts only +ve number (eg:2)


From above input the system will generate total hours of week


eqation: Total hours for week = No of Working days *  No of working hours per day


English             6
-----------------   -------------
Science             6
-----------------   -------------
Maths               4
-----------------   -------------


The total hours of subject must be equal to 'Total hours for week'.


after entering all subject's hours system enables "Generate" button. On click Generate button it will create a time-table from above entered information


Total Columns = No of Working days
Total Rows = No of subjects per day


place the above subjects dynamically in the table as per the entered hours of each subject.

	Day1  Day2  Day3  Day4  Day5

S1	M2    G2    E2    S2	E2

S2	E2    M2    G2    S2    S2


