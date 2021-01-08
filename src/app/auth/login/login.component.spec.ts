import { FormBuilder } from '@angular/forms';

import { LoginComponent } from './login.component';

describe("LoginComponent", () => {

  let component: LoginComponent;

  beforeEach(() => {
      component = new LoginComponent(new FormBuilder(), null);
  });

  it("Should init form with two formControls", () => {
      expect(component.loginForm.contains("username")).toBeTruthy();
      expect(component.loginForm.contains("password")).toBeTruthy();
  });

  it("formControls should be required", () => {
      const usernameControl = component.loginForm.get("username");
      const passwordControl = component.loginForm.get("password");

      usernameControl.setValue("");
      passwordControl.setValue("");

      expect(usernameControl.valid).toBeFalsy();
      expect(passwordControl.valid).toBeFalsy();
  });

});
