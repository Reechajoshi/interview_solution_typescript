# interview_solution_typescript
This is a repository to store solution for a given problem statement provided by a specific company

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