# PrintForms

## Dev Setting

After cloning the repository run following command in terminal for starting server and adding dependency<br>
`cd print-forms`<br><br>
`brew install http-server` (Install http-server for checking coverage)<br><br>
`npm install -g @angular/cli`<br><br>
`npm install`<br><br>
`ng serve --open`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Check coverage in your browser

Run `ng test` for running the test.<br><br>
Run `http-server -c-1 -o -p 9875 ./coverage` to check coverage in your browser.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deployment
Will be updated........
### Required privileges to access print-forms app
* Make sure the logged-in user has the privileges **Get Concepts** and **app:print-forms**.
* Optional:
It is recommended to create a role **Print-Forms-App** and inherit the role **Bahmni-App-User-Login** and assign above two privileges
