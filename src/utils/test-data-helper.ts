import members from "../../testdata/members.json"
import { MemberDto } from "../api";

export interface TestData {
    readonly name: string;
    readonly data: any;
}

export class TestDataHelper {

    public static getMemberDataByName(name: string): MemberDto {
        const membersData: TestData[] = members;
        return membersData.find(data => data.name == name)?.data;
    }

}