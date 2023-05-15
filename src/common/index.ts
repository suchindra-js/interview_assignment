export enum Filter {
  ALL = "All",
  BABY = "20 and below",
  ADULT = "21 to 39",
  OLD = "40 and above",
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  age: number;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: string;
}
