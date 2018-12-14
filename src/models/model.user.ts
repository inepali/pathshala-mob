export class User {
  ID: number;
  username:string;
  password:string;
  isFacebookLogin: boolean = false;
  isGoogleLogin: boolean = false;
  email: string;
  isActive: boolean = false;
  isVerified: boolean = false;
}
