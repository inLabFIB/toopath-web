# TooPath Web

This project was developed as a front-end of the **[TooPath API](https://github.com/AlbertWayne/TooPath)**.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

We provide a **Dockerfile** to build and image and setup a TooPath web instance, you should run:

```
docker build -t toopath/web .
docker run --name web -p 4200:4200 toopath/web
```

### Prerequisites

* Install **[Node.js 8.9.4](https://nodejs.org/en/download/)**.
* Install **Angular CLI 1.7.4** via ```npm install -g @angular/cli@1.7.4```.

### Dependencies

To install the web dependencies just run ```npm install```.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Built With

* **[Angular 5](https://github.com/angular/angular)** - Framework used.
* **[Angular CLI](https://github.com/angular/angular-cli)** - Command Line Interpreter.
* **[Bootstrap 4](https://github.com/twbs/bootstrap)** - CSS Library.

## Authors

* Albert Díaz Benitez - *First stable version* - **[AlbertWayne](https://github.com/AlbertWayne)**

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/AlbertWayne/TooPath-Web/tags). 
