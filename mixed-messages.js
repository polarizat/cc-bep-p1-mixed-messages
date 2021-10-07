/*For this project, you will build a message generator program. Every time 
a user runs a program, they should get a new, randomized output. You’re 
welcome to take the project in a couple of different forms, like an astrology 
generator, inspirational message, or nonsensical jokes. To make your program 
truly random, the message that it outputs should be made up of at least three 
different pieces of data. Take what you know of JavaScript syntax so far to 
build the program and customize it to your liking. */


const sports = {
    olympicSummerGames: ['3x3 Basketball', 'Archery', 'Artistic Gymnastics', 'Artistic Swimming', 'Athletics', 'Badminton', 'Baseball Softball', 'Basketball', 'Beach Volleyball', 'BMX Freestyle', 'BMX Racing', 'Boxing', 'Canoe/Kayak Slalom', 'Diving', 'Equestrian', 'Fencing', 'Fotball', 'Golf', 'Handball', 'Hockey', 'Judo', 'Karate', 'Marathon Swimming', 'Modern Penthatlon', 'Mountain Bike', 'Rhytmic Gymnastics', 'Road Cycling', 'Rowing', 'Rugby', 'Shooting', 'Skateboarding', 'Sport Climbing', 'Surfing', 'Swimming', 'Table Tennis', 'Taekwondo', 'Tennis', 'Track Cycling', 'Trampoline', 'Triathlon', 'Volleyball', 'Water Polo', 'Weightlifting', 'Wrestling'], //46
    
    olympicWinterGames: ['Alpine Skiing', 'Biathlon', 'Bobsleigh', 'Cross-country', 'Curling', 'Figure Skating', 'Freestyle Skiing', 'Ice Hockey', 'Luge', 'Nordic Combined', 'Short Track Speed Skating', 'Skeleton', 'Ski Jumping', 'Snowboard', 'Speed Skating'], //15

    eSports: ['Dota 2', 'Counter-Strike: Global Offensive', 'Fortnite', 'League of Legends', 'StarCraft II', "PlayerUnknown's Battlegrounds (PUBG)", 'Overwatch', 'Hearthstone'], //8

    rdmOlympicSummerGame(randomNb) {
        return this.olympicSummerGames[randomNb(this.olympicSummerGames.length)-1]
    },

    rdmOlympicWinterGame(randomNb) {
        return this.olympicWinterGames[randomNb(this.olympicWinterGames.length)-1]
    },
    
    rdmESport(randomNb) {
        return this.eSports[randomNb(this.eSports.length)-1]
    },
}

const initialMsg = {
    olympicGames: 'This summer was the XXXII edition of the Summer Olympic Games.\n',
    olympicWinterGames: 'From 4 to 20 February 2022, in Beijing will be the XXIV edition of the Olympic Winter Games\n',
    eSports: "During the 2010s, eSports competitions grew tremendously.\n"
}

questions = ['Have you ever played ', 'Do you like ', 'Would you like to try playing '];

const randomNb = max => randomIndex = Math.floor(Math.random() * max);
const rdmQuestion = questions => questions[randomNb(questions.length)];

const generateMessage = (type, initialMsg, sports, questions) => {
    switch (type) {
        case 'Olympic Games': 
            return initialMsg.olympicGames + rdmQuestion(questions) + sports.rdmOlympicSummerGame(randomNb) + '?';
        case 'Winter Olympic Games':  
            return initialMsg.olympicWinterGames + rdmQuestion(questions) + sports.rdmOlympicWinterGame(randomNb) + '?';
        case 'eSports':  
            return initialMsg.eSports + rdmQuestion(questions) + sports.rdmESport(randomNb) + '?';
        default:
            console.log('Invalid type');
            break;
    }
}; 

//Show random Summer Olympic Games message
console.log(generateMessage('Olympic Games', initialMsg, sports, questions) + '\n');

//Show random Winter Olympic Games message
console.log(generateMessage('Winter Olympic Games', initialMsg, sports, questions) + '\n');

//Show random eSportsnode message
console.log(generateMessage('eSports', initialMsg, sports, questions) + '\n');