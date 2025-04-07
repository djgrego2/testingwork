export interface MemberDto {
    FirstName: string
    LastName: string
    DateOfBirth: string
    Gender: number
    Suffix: string
    MiddleInitial: string
    Email: string
    PhoneNumber: string
    PersonalId: string
    AlternateIds: any[]
    FamilyId: string
    UniqueIdByClient: string
    BusinessEntity: string
    Coverages: CoverageDto[]
    Addresses: any[]
    CustomFields: any[]
    PersonalRepresentatives: any[]
  }
  
  export interface CoverageDto {
    OrganizationNumber: string
    CarrierNumber: string
    AccountNumber: string
    GroupNumber: string
    Bin: string
    Iin: string
    Pcn: string
    CardHolderId: string
    EffectiveCoverages: EffectiveCoverageDto[]
    IsEmployee: boolean
    OtherPayerInfo: OtherPayerInfoDto
  }
  
  export interface EffectiveCoverageDto {
    RelationshipCode: string
    PersonCode: string
    StartDate: string
    EndDate: string
  }
  
  export interface OtherPayerInfoDto {
    OtherPayerBin: string
    OtherPayerIin: string
    OtherPayerPcn: string
    OtherPayerGroupNumber: string
    OtherPayerCardHolderId: string
    OtherPayerEffectiveStartDate: string
    OtherPayerEffectiveEndDate: string
    OtherPayerOrder: number
  }
  