import { APIRequestContext, expect } from "@playwright/test";

export class Auth {
  context: APIRequestContext;

  constructor(context: APIRequestContext) {
    this.context = context;
  }

  async getBearerToken(): Promise<string> {
    let bearerToken = "";
    const formData = new URLSearchParams();
    formData.append("grant_type", "password");
    formData.append("username", process.env.USEREMAIL!);
    formData.append("password", process.env.PASSWORD!);
    formData.append("scope", "admintool");
    const response = await this.context.post("/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: formData.toString(),
    });

    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    bearerToken = body.access_token;
    
    return bearerToken;
  }

}
