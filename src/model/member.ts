import { DataUtils } from "../utils";

export class Member {
  id?: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  gender?: number;
  coverages?: Coverage[];
  personalRepresentatives?: PersonalRepresentative[];

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  getDateOfBirth(): string {
    return DataUtils.dateTimeToLocalDate(this.dateOfBirth!);
  }
  
}

export class Coverage {
  id?: string;
  cardHolderId?: string;
  relationshipCode?: string;
  personCode?: string;
  groupNumber?: string;
  organizationNumber?: string;
  carrierNumber?: string;
  accountNumber?: string;
  effectiveDate?: string;
  endDate?: string;

  getPersonCode(): string {
    return this.personCode!.toString().padStart(3, '0')!;
  }

  getEffectiveDate(): string {
    return DataUtils.dateTimeToLocalDate(this.effectiveDate!);
  }

  getEndDate(): string {
    return DataUtils.dateTimeToLocalDate(this.endDate!);
  }

  getEffectiveDateRange(): string {
    return this.getEffectiveDate() + ' - ' + this.getEndDate();
  }
}

export class PersonalRepresentative {
  id?: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}