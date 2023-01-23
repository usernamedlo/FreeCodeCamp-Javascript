function telephoneCheck(str) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
  }
/*
1) ^ indique le début de la chaîne, cela s'assure que la correspondance doit être trouvée à partir du début de la chaîne.
2) (1\s?)? vérifie s'il y a un "1" optionnel suivi d'un espace ou non, cela permet de vérifier si le numéro de téléphone a un indicatif de pays de 1.
3) (\(\d{3}\)|\d{3}) vérifie s'il y a un code régional valide, cela peut être soit en format (123) ou 123, donc cela capture les parenthèses éventuelles et les trois chiffres à l'intérieur.
4) [\s\-]? vérifie s'il y a un espace ou un tiret optionnel entre le code régional et le premier groupe de 3 chiffres.
5) \d{3}[\s\-]?\d{4} vérifie les derniers 7 chiffres du numéro de téléphone, avec un espace ou un tiret optionnel entre eux.
6) $ indique la fin de la chaîne, cela s'assure que la correspondance doit être trouvée jusqu'à la fin de la chaîne. 
*/