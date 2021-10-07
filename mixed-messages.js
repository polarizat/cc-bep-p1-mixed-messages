/*For this project, you will build a message generator program. Every time 
a user runs a program, they should get a new, randomized output. You’re 
welcome to take the project in a couple of different forms, like an astrology 
generator, inspirational message, or nonsensical jokes. To make your program 
truly random, the message that it outputs should be made up of at least three 
different pieces of data. Take what you know of JavaScript syntax so far to 
build the program and customize it to your liking. */


const sports = {
    olympicGames = ['3x3 Basketball', 'Archery', 'Artistic Gymnastics', 'Artistic Swimming', 'Athletics', 'Badminton', 'Baseball Softball', 'Basketball', 'Beach Volleyball', 'BMX Freestyle', 'BMX Racing', 'Boxing', 'Canoe/Kayak Slalom', 'Diving', 'Equestrian', 'Fencing', 'Fotball', 'Golf', 'Handball', 'Hockey', 'Judo', 'Karate', 'Marathon Swimming', 'Modern Penthatlon', 'Mountain Bike', 'Rhytmic Gymnastics', 'Road Cycling', 'Rowing', 'Rugby', 'Shooting', 'Skateboarding', 'Sport Climbing', 'Surfing', 'Swimming', 'Table Tennis', 'Taekwondo', 'Tennis', 'Track Cycling', 'Trampoline', 'Triathlon', 'Volleyball', 'Water Polo', 'Weightlifting', 'Wrestling'], //46
    
    olympicWinterGames = ['Alpine Skiing', 'Biathlon', 'Bobsleigh', 'Cross-country', 'Curling', 'Figure Skating', 'Freestyle Skiing', 'Ice Hockey', 'Luge', 'Nordic Combined', 'Short Track Speed Skating', 'Skeleton', 'Ski Jumping', 'Snowboard', 'Speed Skating'], //15

    eSports = ['Dota 2', 'Counter-Strike: Global Offensive', 'Fortnite', 'League of Legends', 'StarCraft II', "PlayerUnknown's Battlegrounds (PUBG)", 'Overwatch', 'Hearthstone'], //8
}

questions = ['Do you watched ', 'Have you ever played ', 'Do you like ', 'Would you like to try playing '];
initialComponent = 'This summer was the XXXII edition of the Summer Olympic Games. ';

const randomNb = max => randomIndex = Math.floor(Math.random() * max);

const randomComp = (type, sports, questions) => {
    switch (type) {
        case 'Olympic Games': return sports.olympicGames[randomNb(sports.olympicGames.length)-1]
        case 'Winter Olympic Games':  return sports.olympicWinterGames[randomNb(sports.olympicWinterGames.length)-1];
        case 'eSports':  return sports.eSports[randomNb(sports.eSports.length)-1];
        case 'question':  return questions[randomNb(sports.olympicGames.length)-1];
        default:
            console.log('Invalid type');
            break;
    }
}; 

console.log(olympicGames);