export const imageObject = {
    "Babysitter":
        "https://raw.githubusercontent.com/Lucas-Morais-Gomes/HelpCasa-Imgs/refs/heads/main/images/Babysitter.jpg",

    "Cozinheiro":
        "https://github.com/Lucas-Morais-Gomes/HelpCasa-Imgs/blob/main/images/Cozinheiro.jpg?raw=true",

    "Limpeza de casas":
        "https://github.com/Lucas-Morais-Gomes/HelpCasa-Imgs/blob/main/images/Limpeza-de-casas.jpg?raw=true",

    "Limpeza de escritórios":
        "https://github.com/Lucas-Morais-Gomes/HelpCasa-Imgs/blob/main/images/Limpeza-de-escritorios.png?raw=true",

    "Limpeza de vidros":
        "https://github.com/Lucas-Morais-Gomes/HelpCasa-Imgs/blob/main/images/Limpeza-de-vidros.jpg?raw=true",

    "Limpeza e organização":
        "https://github.com/Lucas-Morais-Gomes/HelpCasa-Imgs/blob/main/images/Limpeza-e-organiza%C3%A7%C3%A3o.jpg?raw=true",

}

export type ImageKey = keyof typeof imageObject;

export const getCategoryImage = (key: ImageKey): string | undefined => {
    return imageObject[key];
};
