import AuthService from './AuthService';
import AuthRepository from '../repo/AuthRepo';
const signUpData = {
  middlename: 'Tayo',
  password: 'timi',
  email: 'timi@gmail.com',
  firstName: 'Timi',
  lastName: 'Busari',
  address: '4,terra stu ,lagos',
  photoUrl: 'string',
  phoneNumber: '+2348121160856',
  occupation: 'Software Developer',
  userType: 'INDIVIDUAL',
};
const loginData = {
  email: 'timi@gmail.com',
  password: 'timi',
};
describe('Test Authentication', () =>{
  it('it should signup a user with the provide Info ', async () => {
    const response = await AuthService.register(signUpData);
    expect(response.message).toBe('User created Sucessfully');
  });
  it('It should allowed a registered user into the system ', async ()=>{
    const response = await AuthService.login(loginData);
    expect(response.message).toBe('Login Successful');
  });
  it('create a refresh token for existing user', async () => {
    const getUserEmailInstance = await AuthRepository.
        checkEmail('timi@gmail.com');
    const userRefreshToken = getUserEmailInstance.refreshToken;
    const response = await AuthService.extendLoginToken(userRefreshToken);
    expect(response.message).toBe('Token refreshed');
  });
});
