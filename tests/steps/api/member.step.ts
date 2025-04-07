import { Given, When, Then } from '../../../src/fixtures/custom.fixture';
import { Auth, Members } from '../../../src/api';
import { TestDataHelper } from '../../../src/utils';
import { faker } from '@faker-js/faker';

Given('a member with {string} is created', async ({ monolithApiContext, eligibilityApiContext, dataContext }, name) => {
    const authApi = new Auth(monolithApiContext);
    const membersApi = new Members(eligibilityApiContext);
    const token = await authApi.getBearerToken();

    let memberDto = TestDataHelper.getMemberDataByName(name);
    memberDto.FirstName = faker.person.firstName();
    memberDto.LastName = faker.person.lastName();
    memberDto.Gender = faker.number.int({min:0, max:4});
    memberDto.Email = faker.internet.email();
    memberDto.PhoneNumber = faker.string.numeric(10);
    memberDto.Coverages[0].CardHolderId = faker.string.numeric(9);

    const member = await membersApi.addMember(memberDto, token);
    dataContext.member = member;
});