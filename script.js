const questions = [
    {
      text: "Kam naudingos morkos?",
      choices: ["Niekam", "Hitleriui", "Kepenims", "Odai"],
      answer: "Odai"
    },
    {
      text: "Kam naudingi obuoliai?",
      choices: ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
      answer: "Virškinimui"
    },
    {
      text: "Kokias ligas padeda gydyti agrastai?",
      choices: ["Cukrini diabetą", "Kepenų cirozę", "Nemigą", "Vėžį"],
      answer: "Cukrini diabetą"
    },
    {
      text: "Kokio vitamino gausu apelsinuose?",
      choices: ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
      answer: "Vitamino C"
    },
    {
      text: "Kokiais dalykais yra turtingi arbūzai?",
      choices: ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
      answer: "Visi teisingi"
    }
  ];




// INFO UŽKĖLIMAS

const startButton = document.getElementById('startButton');
let currentQuestionIndex = 0;

startButton.addEventListener('click', () => {
    const elementsToToggle = document.querySelectorAll('h1, p, button, th, h6');
    elementsToToggle.forEach(element => {
        element.style.display = 'block';
    });
    startButton.style.display = 'none';
});

document.addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'button') {
        const text = event.target.textContent;
        if (['Niekam', 'Hitleriui', 'Kepenims', 'Odai'].includes(text)) {
        
            console.log("Current question:", text);
        }
    }
});
