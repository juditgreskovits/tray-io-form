## Form components documentation

### TextInput component

Component for text and password input within a form. Renders:

- label for the input
- text / password input element
- error message if there's any

#### Usage and props

```
import { TextInput } from 'src/components/form';

<TextInput
  id="id"                               // id for this element
  type="text | password"                // text or password input
                                          (optional, will default to "text")
  label="Label"                         // text for the label for this input
  required={ true | false }             // whether input is required
  value="Inputted text"                 // text to be displayed by the component
  error="Error message | null"          // error message to be displayed (or not)
  onChange={() => {}}                   // function to call when the input is edited
/>
```

---

### CheckboxInput component

Component for toggle input within a form. Renders:

- label for the input
- checkbox input element
- error message if there's any

#### Usage and props

```
import { CheckboxInput } from 'src/components/form';

<CheckboxInput
  id="id"                               // id for this element
  type="checkbox"                       // checkbox (optional)
  label="Label"                         // text for the label for this input
  required={ true | false }             // whether input is required
  value={ true | false }                // toggled on or off
  error="Error message | null"          // error message to be displayed (or not)
  onChange={() => {}}                   // function to call when the input toggled
/>
```

---

### Label component

Component for displaying a label for a form input.

- rendered by the TextInput and CheckboxInput components
- can also be used independently

#### Usage and props

```
import { Label } from 'src/components/form';

<Label
  label="Label"                         // text to display
  htmlFor="input-id"                    // id of input label is for (optional)
  required={ true | false }             // whether to add a "*" after the label
/>
```

---

### Error component

Component for displaying an error for a form input.

- rendered by the TextInput and CheckboxInput components
- can also be used independently

#### Usage and props

```
import { Error } from 'src/components/form';

<Error
  message="Please correct the input"    // text to display
/>
```

---

### Submit component

Component for submitting the form.

- rendered by the TextInput and CheckboxInput components
- can also be used independently

#### Usage and props

```
import { Submit } from 'src/components/form';

<Submit
  label="Submit"                        // label for the submit input
/>
```

---

### Form component

Component for managing the form.

- maintains the state for input elements
- manages submission by blocking invalid form sumissions
- validates all fields on the first submit attempt
- validates each field as its value changes thereafter
- passes values on from inputs once the form is valid

#### Usage and props

```
import { Submit } from 'src/components/form';

<Form
  fields={[{                            // array of objects describing the fields
    id: "id"
    type: "text | password | checkbox";
    label: "Label";
    required: {true | false};
    validation: {
      (value) => "Error message" | null
    }
    defaultValue: "",
  }]}
  renderForm={({                        // render prop for rendering the contents of the form
    onChange,                           // to assign to input elements
    onSubmit,                           // to assign to form submit
    fieldsState,                        // object for updating the inputs, of the following shape
                                        // { id: { value: "Inputted value", error: "Error message" | null }}
  })}
  onSubmit={(values) => {})}            // function to call for validated form submission
                                        // with values object of the shape
                                        // { id: "Inputted value" }
/>
```

---

### Layout component

Component for laying out form elements.

#### Usage and props

```
import { Layout } from 'src/components/form';

<Layout>
  {children}
</Layout>
```

---

### Message component

Component for displaying a paragraph of text within the form.

#### Usage and props

```
import { Message } from 'src/components/form';

<Message
  message="Thank you for submitting"      // text to display
/>
```

---
