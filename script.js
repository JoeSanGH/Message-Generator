const quotes = [
    "When you arise in the morning, think of what a precious privilege it is to be alive, to breathe, to think, to enjoy, to love. Then make that day count by setting your mind on doing good.",
    "It is no measure of health to be well-adjusted to a profoundly sick society. A profound individual and collective transformation is required, but that cannot come about if we are merely adjusting ourselves to the existing norms.",
    "The secret of change is to focus all of your energy not on fighting the old, but on building the new." 
];

const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
};

console.log(randomQuote());
