const messageField = document.getElementById('messageField');
const btn_genMessage = document.getElementById('message');

let messageText = "";

const truths = [
    'Humility is an enforced value.',
    'Commitment to virtue is the Morality of the strong.',
    'Commitment to humility and compassion is the morality of the weak.',
    'Rights and peace are maintained through strength.',
    'Corruption is a biproduct of weak leadership',
    'Merit leads to power, power coalesces, leading to central authority, aristocracy',
    'Appeals to mercy are chains by which the weak bind the strong.',
    'The strong should answer demands of mercy with cruelty, and reward servitute with mercy.'
];

btn_genMessage.onclick = genMessage;

function randomNum() {
    let num;
    num = Math.floor(Math.random() * truths.length);
    return num;
};

function genMessage() {
    let newMessage = "";
    newMessage = truths[randomNum()];
    let newLi = document.createElement('li');
    newLi.innerHTML = newMessage;
    messageField.appendChild(newLi);
};