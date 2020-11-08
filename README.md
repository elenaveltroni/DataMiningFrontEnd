# Sentiment analysis for company acquisitions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Installation
### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build
Run `ng build` to build the project. 

### Running tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io); or run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Project overview
The project born with the collaboration with the Faculty of Economy.
The main goal of the project was to implement an application in which the
user can perform clustering and classification analysis on company acquisition
articles.
In particular, we pre-processed the data provided by the colleagues in the Faculty of Economics, performing a data cleanup in order to prepare data to send
to the classifiers and to the clustering algorithm.
The result we obtain can be useful in trading and others analysis performed by
Faculty of Economy.
The users can perform the analysis with a simple web app.

The main actor of the application is a generic user who will use the functionalities offered by the web app.
The main actions allowed by the application are the following:
* Predict the sentiment of a text's sentences, choosing the classifier.
* Visualize the clustering dendogram, the text and the relative cluster number, choosing the affinity measure and linkage metric.
* Visualize the analytics, in order to see the acquisitions, documents and
related sentences previously analysed and stored in the DB.
* Add new acquisitions and documents.
* Manage the keyword in order to improve the accuracy of filtering on the
sentences to be predicted.
* Add new data to the training set to improve the accuracy of the classifier.

## Use case
![use case image](https://github.com/elenaveltroni/DataMiningFrontEnd/blob/master/UseCase.jpg?raw=true)
