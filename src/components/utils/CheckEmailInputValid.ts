export function checkEmailInputValid(email: string): boolean {
    const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(email);
}