import { AbstractControl } from '@angular/forms';


export function passwordValidator(control: AbstractControl) {
    let cpassword = control.value;
    const password = control.get('password').value;
    if (cpassword !== password || cpassword === "") {
        return {
            isError: true
        };
    }
    return null;
}