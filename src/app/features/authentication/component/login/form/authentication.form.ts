import {AbstractControl, ValidationErrors, Validators} from "@angular/forms";
import {EMAIL_VALIDATOR_REGEX} from "@core/constants/emai.regex";

export interface AuthenticationFormValidators {
  email: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[];
  password: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[];
  rememberPassword: (boolean | ((control: AbstractControl<any, any>) => ValidationErrors | null)[])[];
}

export const AuthenticationForm: AuthenticationFormValidators = {
  email: ['', [Validators.required, Validators.email, Validators.pattern(EMAIL_VALIDATOR_REGEX)]],
  password: ['', [Validators.required, Validators.minLength(6)]],
  rememberPassword: [false, [Validators.required]]
}
