import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "@core/services/authentication.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {AuthDto} from "@core/interfaces/authentication.interface";
import {AuthenticationForm} from "@features/authentication/component/login/form/authentication.form";

@Component({
    selector: "authentication-component",
    templateUrl: "./authentication.component.html",
    styleUrls: ["./authentication.component.scss"]
})
export class AuthenticationComponent implements OnInit {
  authenticationLoginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.authenticationLoginForm = this.formBuilder.group(AuthenticationForm);
  }

  authenticate(): void {
    if (this.authenticationLoginForm.valid) {
      console.log(this.authenticationLoginForm.value);
      this.authenticationService.authenticate(this.authenticationLoginForm.value).subscribe({
        next: (response: HttpResponse<AuthDto>) => console.log("success"),
        error: (response: HttpErrorResponse) => console.log("error")
      })
    }
  }
}
