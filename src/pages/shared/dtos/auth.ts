export type RegisterFormDto = {
  Name: string;
  Email: string;
  Password: string;
  Address: string;
  Phone: string;
  Experience?: string;
  AreaOfExpertise?: string;
} & { userType: string | null };

export type LoginFormDto = {
  Email: string;
  Password: string;
};

export type ForgotPasswordDto = {
  email: string;
};

export type ResetPasswordDto = {
  newPassword: string;
};
