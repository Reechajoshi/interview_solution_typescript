# interview_solution_typescript
This is a repository to store solution for a given problem statement provided by a specific company
more details can be found on this Miro board [https://miro.com/app/board/uXjVM1zDiNQ=/](https://miro.com/app/board/uXjVM1zDiNQ=/)

NPM packages used: 
- Jest for testing
- prettier/ tslint for linting

RUN the application: 
- example input is provided in test file. you can run the application by running `npm run test`

PACKAGE testing:
- uses jest for writing tests
- tests can be found in __test__ folder

USE this package:
- you can also include this package in your project
- `npm install mobiquity`
- `import {pack} from 'mobiquity'`
- `await pack(<fileinputpath>)`

PUBLISH package:
- before publishing the package you need to 
- `npm run prepare` this will build the package - first step in publishing
- `npm run prepublishOnly` this will lint and run test !!will be executed before publishing but after prepare
- `npm run preversion` will run lint before versioning the package
- `npm run version` will fix linting problems, add changed files to git
- `npm run postversion` will commit the changes and push the changes to github repository

NEXT Steps:
- !IMP this solution is currently not working for decimal weights. Need to fix this first
- Using class for knapsack seems unnecesary in the code. need to convert it to function 
- add better packaging library like babel for publishing
- add precommit hooks for standard github messages

REFERENCES: 
- https://www.youtube.com/watch?v=nLmhmB6NzcM
- https://www.youtube.com/watch?v=cJ21moQpofY 
