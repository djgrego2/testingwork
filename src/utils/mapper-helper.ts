import { Coverage, Member, PersonalRepresentative } from "../model";
import jsonpath from "jsonpath";

export class MapperHelper {
  public static mapMemberJsonToModel(memberJson: any): Member {
    const member: Member = new Member();
    member.id = memberJson.id;
    member.firstName = memberJson.firstName;
    member.lastName = memberJson.lastName;
    member.dateOfBirth = memberJson.dateOfBirth;
    member.gender = memberJson.gender;
    member.coverages = this.mapCoveragesJsonToModel(memberJson.coverages);
    member.personalRepresentatives = this.mapPersonalRepresentativesJsonToModel(memberJson.personalRepresentatives);

    return member;
  }

  private static mapCoveragesJsonToModel(coveragesJson: any): Coverage[] {
    const coverages = Object.keys(coveragesJson).map((key) => {
      return { id: key, ...coveragesJson[key] };
    });

    const coveragesList: Coverage[] = [];
    coverages.forEach((coverageJson) => {
      let coverage: Coverage = new Coverage();
      coverage.id = coverageJson.id;
      coverage.organizationNumber = coverageJson.organizationNumber;
      coverage.carrierNumber = coverageJson.carrierNumber;
      coverage.accountNumber = coverageJson.accountNumber;
      coverage.groupNumber = coverageJson.groupNumber;
      coverage.cardHolderId = coverageJson.cardHolderId;
      coverage.personCode = jsonpath.query(
        coverageJson,
        "$.effectiveCoverages.*.personCode"
      )[0];
      coverage.relationshipCode = jsonpath.query(
        coverageJson,
        "$.effectiveCoverages.*.relationshipCode"
      )[0];
      coverage.effectiveDate = jsonpath.query(
        coverageJson,
        "$.effectiveCoverages.*.startDate"
      )[0];
      coverage.endDate = jsonpath.query(
        coverageJson,
        "$.effectiveCoverages.*.endDate"
      )[0];
      coveragesList.push(coverage);
    });
    return coveragesList;
  }

  private static mapPersonalRepresentativesJsonToModel(personalRepresentativesJson:any): PersonalRepresentative[] {
    const personalRepresentatives = Object.keys(personalRepresentativesJson).map((key) => {
      return {
        id: key,
        ...personalRepresentativesJson[key],
      };
    });

    const personalRepresentativesList: PersonalRepresentative[] = [];
    personalRepresentatives.forEach((personalRepresentativeJson) => {
      let personalRepresentative: PersonalRepresentative = new PersonalRepresentative();
      personalRepresentative.id = personalRepresentativeJson.id;
      personalRepresentative.firstName = personalRepresentativeJson.firstName;
      personalRepresentative.lastName = personalRepresentativeJson.lastName;
      personalRepresentatives.push(personalRepresentative);
    });
    return personalRepresentativesList;
  }
}
