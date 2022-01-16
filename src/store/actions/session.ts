export const getLocalLang = () => {
    const lang = localStorage.getItem('appLanguage') || ''
    return lang;
}

export const changeLocalLang = (language: string) => {
    console.log('applang changed', language)
    localStorage.setItem('appLanguage', language)
}