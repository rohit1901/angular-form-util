import { removeOriginalIndex } from './form.util';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

describe('removeOriginalIndex', () => {
    it('should remove the "originalIndex" control from a FormGroup', () => {
        // Create a sample FormGroup with the 'originalIndex' control
        const formGroup = new FormGroup({
            originalIndex: new FormControl('value'),
            otherControl: new FormControl('value')
        });

        // Call the function being tested
        const result = removeOriginalIndex(formGroup);

        // Assertions
        expect(result).toBe(formGroup); // Should return the same formGroup instance
        expect(result.get('originalIndex')).toBeNull(); // Should remove the 'originalIndex' control
        expect(result.get('otherControl')).toBeDefined(); // Should not remove other controls
    });

    it('should not modify a FormGroup without the "originalIndex" control', () => {
        // Create a sample FormGroup without the 'originalIndex' control
        const formGroup = new FormGroup({
            otherControl: new FormControl('value')
        });

        // Call the function being tested
        const result = removeOriginalIndex(formGroup);

        // Assertions
        expect(result).toBe(formGroup); // Should return the same formGroup instance
        expect(result.get('originalIndex')).toBeNull(); // Should not modify the formGroup
        expect(result.get('otherControl')).toBeDefined(); // Should not modify the formGroup
    });

    it('should handle nested FormGroups and FormArrays', () => {
        // Create a sample FormGroup with nested controls
        const nestedFormGroup = new FormGroup({
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

        // Call the function being tested
        const result = removeOriginalIndex(nestedFormGroup);

        // Assertions
        expect(result).toBe(nestedFormGroup); // Should return the same formGroup instance
        expect(result.get('originalIndex')).toBeNull(); // Should remove the 'originalIndex' control in nested formGroup
        expect(result.get('nestedArray')).toBeDefined(); // Should not modify the nested formArray

        const nestedArrayControls = result.get('nestedArray') as FormArray;
        expect(nestedArrayControls.at(0)?.get('originalIndex')).toBeNull(); // Should remove the 'originalIndex' control in nested formGroup within the formArray
        expect(nestedArrayControls.at(1)?.get('originalIndex')).toBeNull(); // Should not modify the nested formGroup without 'originalIndex'
        expect(nestedArrayControls.at(0)?.get('nestedControl')).toBeDefined(); // Should not modify other nested controls
    });
});
