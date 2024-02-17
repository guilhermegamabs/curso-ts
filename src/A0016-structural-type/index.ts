type VerifyUserFN = (user: User, sentValue: User) => boolean;
type User = {
  username: string;
  password: string;
};

const verifyUser: VerifyUserFN = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = {
  username: 'Guilherme',
  password: '123',
};

const sentUser = {
  username: 'Guilherme',
  password: '1234',
};

const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
