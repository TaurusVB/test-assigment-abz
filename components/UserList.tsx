import UserItem from "./UserItem";

const users = [
  {
    id: 18839,
    name: "qwerty",
    email: "qwerty@gm.gm",
    phone: "+380675563478",
    position: "Content manager",
    position_id: 2,
    registration_timestamp: 1702561893,
    photo:
      "https://frontend-test-assignment-api.abz.agency/images/users/657b08652b73118839.jpg",
  },
  {
    id: 18838,
    name: "arrrrrr",
    email: "erg@erg.rg",
    phone: "+380985674683",
    position: "Content manager",
    position_id: 2,
    registration_timestamp: 1702561545,
    photo:
      "https://frontend-test-assignment-api.abz.agency/images/users/657b07094f41418838.jpg",
  },
  {
    id: 18837,
    name: "erf",
    email: "erf@erg.reg",
    phone: "+380875766578",
    position: "Designer",
    position_id: 4,
    registration_timestamp: 1702561378,
    photo:
      "https://frontend-test-assignment-api.abz.agency/images/users/657b06625784518837.jpg",
  },
  {
    id: 18836,
    name: "Nikita",
    email: "nick.babichev@gmail.com",
    phone: "+380931502375",
    position: "Lawyer",
    position_id: 1,
    registration_timestamp: 1702561243,
    photo:
      "https://frontend-test-assignment-api.abz.agency/images/users/657b05db85c4b18836.jpeg",
  },
  {
    id: 18835,
    name: "erf",
    email: "ref@ergf.reg",
    phone: "+380767675675",
    position: "Security",
    position_id: 3,
    registration_timestamp: 1702561226,
    photo:
      "https://frontend-test-assignment-api.abz.agency/images/users/657b05cad05a318835.jpg",
  },
];

const UserList = () => {
  return (
    <ul className="grid gap-5 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 mb-[50px]">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
