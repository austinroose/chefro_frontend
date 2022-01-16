import axios from '../axios/index'

export async function signup(signupData: {email: string, password: string}) {
    const result = await axios.post('/auth/signup', {
        email: signupData.email,
        password: signupData.password
    })
    if (result.status !== 200) {
        
        return false;
    }
    return true;
}