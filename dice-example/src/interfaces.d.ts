interface Owner {
  lastname: string;
  name: string;
  phoneNumber: string;
}

interface Dog {
  age: number;
  bread: string;
  chipNumber: string;
  img: string;
  name: string;
  owner: Owner;
  present: boolean;
  sex: string;
}

export { Dog };
