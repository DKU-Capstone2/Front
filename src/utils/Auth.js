const users = [
  {
    id: 4,
    email: "chaeeun@naver.com",
    password: "111",
    name: "이채은",
    phone_number: "010-0000-0000",
    job: "독자",
    commisionWaiting: [],
    commisionIing: [],
    commisionEnd: [],
  },
];

// 인증모듈

export function signIn({ email, password }) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user === undefined) throw new Error();
  return user;
}
