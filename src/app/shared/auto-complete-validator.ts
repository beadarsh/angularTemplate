import { AbstractControl } from '@angular/forms';

export class AutocompleteValidator {
    static correctId(idField: string) {
        return (control: AbstractControl) => {
            if (!control.value) {
                return null;
            }
            const id = control.value[idField];
            if (isNaN(id) || id < 1) {
                return {
                    correctId: { valid: false }
                };
            }

            return null;
        };
    }
}
