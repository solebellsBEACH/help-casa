export type RegisterFormDto = {
    Name: string;
    Email: string;
    PasswordDto: string;
    Address: string;
    Phone: string;
    Experience?: string;
    AreaOfExpertise?: string;
} & { userType: string | null }

export type LoginFormDto = {
    Email: string;
    PasswordDto: string;
}