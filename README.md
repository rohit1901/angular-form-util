# angular-form-util
This Repo contains a Boilerplate Angular application with Jasmine Tests for a utility function
# removeOriginalIndex

The `removeOriginalIndex` function is a utility function for removing the 'originalIndex' control from a FormGroup and its nested controls recursively. It is commonly used in Angular applications with reactive forms.

## Installation

The `removeOriginalIndex` function can be installed via npm or yarn:

```shell
npm install your-module-name
```

or

```shell
yarn add your-module-name
```

## Usage

Import the `removeOriginalIndex` function from the module where it is defined:

```typescript
import { removeOriginalIndex } from 'your-module-name';
```

### Example

```typescript
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { removeOriginalIndex } from 'your-module-name';

// Create a sample FormGroup with nested controls
const formGroup = new FormGroup({
  originalIndex: new FormControl('value'),
  nestedArray: new FormArray([
    new FormGroup({
      originalIndex: new FormControl('value'),
      nestedControl: new FormControl('value')
    }),
    new FormGroup({
      nestedControl: new FormControl('value')
    })
  ])
});

// Call the removeOriginalIndex function
const modifiedFormGroup = removeOriginalIndex(formGroup);

console.log(modifiedFormGroup);
```

## API

### `removeOriginalIndex(control: FormGroup | FormArray): FormGroup | FormArray`

The `removeOriginalIndex` function takes a `FormGroup` or `FormArray` as an input and recursively removes the 'originalIndex' control from it and its nested controls. It returns the modified `FormGroup` or `FormArray`.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).
```

Feel free to modify and customize the README to fit your specific project requirements, including providing installation instructions, usage examples, and any other relevant information.