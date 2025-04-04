export const getAvatarLetters = (firstName: string, lastName: string): string => {
    return [firstName.slice(0,1), lastName.slice(0,1)].join('').toUpperCase();
}