import { APIRequestContext, expect } from "@playwright/test";
import { MemberDto } from "./dto";
import { Member } from "../model";
import { MapperHelper } from "../utils";

export class Members {
  context: APIRequestContext;

  constructor(context: APIRequestContext) {
    this.context = context;
  }

  async addMember(member: MemberDto, token: string): Promise<Member> {
    const response = await this.context.post("/api/Members", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        "correlation-id": '1'
      },
      data: member
    });

    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    return MapperHelper.mapMemberJsonToModel(body.value.memberDetail);
  }
}
