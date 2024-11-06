export type RegisterForm = {
    Name: string;
    Email: string;
    PasswordDto: string;
    Address: string;
    Phone: string;
    Experience?: string;
    AreaOfExpertise?: string;
} & { userType: string | null }