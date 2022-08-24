const advices = [
    {
        saying: "Do not be afraid to give up the good to go for the great.",
        who: "John D. Rockefeller",
    },
    {
        saying: "Action is the foundational key to all success.",
        who: "Pablo Picasso",
    },
    {
        saying: "It is your determination and persistence that will make you a successful person.",
        who: "Kenneth J Hutchins",
    },
    {
        saying: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        who: "Nelson Mandela",
    },
    {
        saying: "Anyone who has never made a mistake has never tried anything new.",
        who: "Albert Einstein",
    },
    {
        saying: "Let me assert my firm belief that the only thing we have to fear is fear itself.",
        who: "F.D. Roosevelt",
    },
    {
        saying: "Science is organized knowledge. Wisdom is organized life.",
        who: "Immanuel Kant",
    },
    {
        saying: "life is not fair get used to it.",
        who: "Bill Gates",
    },
    {
        saying: "Sometimes even to live is an act of courage.",
        who: "Seneca",
    },
    {
        saying: "The way get started is to quit talking and begin doing.",
        who: "Walt Disney" 
    }
    ];
    
    const saying = document.querySelector("#motive span:first-child");
    const who = document.querySelector("#motive span:last-child");
    const motive = advices[Math.floor(Math.random() * advices.length)]; 
    
    saying.innerText = motive.saying; 
    who.innerText = motive.who;