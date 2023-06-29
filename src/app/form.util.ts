import {FormArray, FormControl, FormGroup} from "@angular/forms";

/**
 * Removes the 'originalIndex' control from a FormGroup and its nested controls recursively.
 * @param control The FormGroup or FormArray to remove the 'originalIndex' control from.
 * @returns The modified FormGroup or FormArray.
 */
export function removeOriginalIndex(control: FormGroup | FormArray): FormGroup | FormArray {
    if (!isFormGroupOrFormArray(control)) {
        return control;
    }

    removeOriginalIndexControl(control);

    Object.values(control.controls)
        .filter(isNotFormControl)
        .forEach(childControl => {
            removeOriginalIndex(childControl);
        });

    return control;
}

/**
 * Checks if the provided control is a FormGroup or FormArray.
 * @param control The control to check.
 * @returns True if the control is a FormGroup or FormArray, false otherwise.
 */
function isFormGroupOrFormArray(control: any): control is FormGroup | FormArray {
    return control instanceof FormGroup || control instanceof FormArray;
}

/**
 * Removes the 'originalIndex' control from a FormGroup, if it exists.
 * @param control The FormGroup to remove the 'originalIndex' control from.
 */
function removeOriginalIndexControl(control: FormGroup | FormArray): void {
    if (control instanceof FormGroup && control.get('originalIndex')) {
        control.removeControl('originalIndex');
    }
}

/**
 * Checks if the provided control is not a FormControl.
 * @param control The control to check.
 * @returns True if the control is not a FormControl, false otherwise.
 */
function isNotFormControl(control: any): control is FormGroup | FormArray {
    return !(control instanceof FormControl);
}
