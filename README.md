# Tray.io code exercise

### Setup

Clone the repository

```
git clone git@github.com:juditgreskovits/tray-io-form.git

cd tray-io-form
```

Install dependencies with npm (or use yarn)

```
npm install
```

Run the application in development mode

```
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Tests

Run unit tests

```
npm run test
```

## Documentation

### Open source libraries used

- React and Redux
- Styled Components for styling and theming
- Yup for validation
- Jest and Enzyme for testing

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

### Application outline

The application is driven by data structure that describes the form's pages and the content of each page. This approach was chosen to ensure the application is easily extensible.

#### Redux store structure, reducers and actions

[**form reducer**](src/reducers/form.ts)

- assigns the form descriptor data to the Redux store

[**progress reducer**](src/reducers/progress.ts)

- creates and updates the index of the current form page on the store
- the [`nextPage` action](src/actions/progress.ts) triggers the index update

[**values reducer**](src/reducers/values.ts)

- updates the inputted values on the state as each page is submitted as key / value pairs
- the [`setValues` action](src/actions/values.ts) triggers the update of values

#### Containers and components

[**ProgressContainer**](src/containers/ProgressContainer.tsx)

- connected component that renders the header containing the form page titles
- evaluates which page is active based on the Redux store's form's length and progress value and informs the titles

[**FormContainer**](src/containers/FormContainer.tsx)

- connected component of which a separate instance is used for rendering each form page
- by evaluating the Redux store's form descriptor, it renders the components making up the form
- relies on the [Form component](src/components/form/Form.tsx) for managing and validating each page
- console.logs the submitted values

### Components

Read the [Components overview](src/components/README.md) or go directly to:

- [Form Components Documentation](src/components/form/README.md)
- [Progress Components Documentation](src/components/progress/README.md)
- [Theming Component Documentation](src/components/theme/README.md)

### Notes

#### Notes on approach

While _it's been fun_, for a production project using a form library such as Formik and building on an existing component library would be strongly considered and evaluated. However, I felt a more custom solution was more suited for this exercise.

#### Notes on documentation

The documentation present could be extended. For components, Storybook with its stories would be used and having a diagram for the application structure would be great!

#### Notes on tests

The implemented **unit tests** focussed on areas greater complexity and coverage should be increased for a production appllication.

Further tests could be added, _visual regression tests_ / _snapshot tests_ for components, _integration tests_ and _end to end tests_ for the whole application.
