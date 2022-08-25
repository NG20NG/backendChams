//
//
export interface User {
  _id?: String;
  nom: String;
  prenom: String;
  email: {
    type: String;
    required: true;
  };
  password: {
    type: String;
    required: true;
  };
  createdAt: String;
}
