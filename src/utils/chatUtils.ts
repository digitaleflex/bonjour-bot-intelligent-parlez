
interface Response {
  pattern: RegExp;
  responses: string[];
}

const responses: Response[] = [
  {
    pattern: /bonjour|salut|bonsoir|coucou/i,
    responses: [
      "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
      "Salut ! Que puis-je faire pour vous ?",
      "Bonjour ! Je suis là pour vous assister.",
    ]
  },
  {
    pattern: /comment.+(vas|allez|va)/i,
    responses: [
      "Je vais très bien, merci ! Et vous ?",
      "Excellente journée de mon côté, j'espère que vous aussi !",
      "Tout va bien, je suis là pour vous aider.",
    ]
  },
  {
    pattern: /merci|thanks|remercie/i,
    responses: [
      "Je vous en prie, c'est un plaisir !",
      "N'hésitez pas si vous avez besoin d'autre chose !",
      "De rien, je suis content d'avoir pu vous aider !",
    ]
  },
  {
    pattern: /au revoir|bye|adieu|à bientôt/i,
    responses: [
      "Au revoir ! Passez une excellente journée !",
      "À bientôt ! N'hésitez pas à revenir si vous avez besoin d'aide.",
      "Au revoir, ce fut un plaisir de vous aider !",
    ]
  }
];

export const generateResponse = (message: string): string => {
  // Recherche d'une correspondance dans les patterns
  const matchedResponse = responses.find(r => r.pattern.test(message));
  
  if (matchedResponse) {
    // Sélection aléatoire parmi les réponses possibles
    const randomIndex = Math.floor(Math.random() * matchedResponse.responses.length);
    return matchedResponse.responses[randomIndex];
  }

  // Analyse du contexte si aucune correspondance directe
  if (message.includes('?')) {
    return "C'est une excellente question. Laissez-moi réfléchir à la meilleure façon de vous répondre...";
  }
  
  // Réponses génériques si aucun pattern ne correspond
  const genericResponses = [
    "Je comprends. Pouvez-vous m'en dire plus ?",
    "Intéressant. Comment puis-je vous aider avec cela ?",
    "Je vois. Que souhaitez-vous que je fasse exactement ?",
  ];
  
  return genericResponses[Math.floor(Math.random() * genericResponses.length)];
};

