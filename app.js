//-------------------------------------------- Jungle Rumble Text Based Game ------------------------------------------------------
//****************************************************** START GAME ***************************************************************

//------------------------------------------------------ RICHARD CODE--------------------------------------------------------------

//--------------------------------------------Sky / clouds as background ----------------------------------------------------------

//----------------------------------------------- function1 function --------------------------------------------------------------

// //function1
const function1 = () => {

    //alert
    alert("You wake up. It takes you a few seconds to make sense of your surroundings.");
    alert("The wind rushing past your face snaps you to your senses. You're mid air, you're falling! Somewhere above, you see a plane flying away, leaving you behind. You start to panic. You have no idea how you got here or what to do!");
    alert("You feel like something is strapped to you. You realise you're wearing a parachute! You search for the ripcord and find a handle.");

    //prompt
    let ripcord = prompt(`Do you pull the ripcord?`, `Yes/No`);

    //if statement
    if (ripcord=="Yes"){
        alert("Welcome to Jungle Rumble!");
    }else if(ripcord=="No"){
        alert(" *SPLAT* If at first you don't succeed... sky diving is not for you. Maybe you should try again?");

        //calling function1
        function1();
    }else{
        alert("Please enter 'Yes' or 'No'");

        //calling function1
        function1();
    }

    
//----------------------------------------------- function2 function --------------------------------------------------------------

    //prompt
    let name = prompt("What is your name, brave traveller?");

    //alert
    alert(`Well ${name}, we hope you enjoy your time in the jungle, but beware of the hidden dangers awaiting you.`);
    alert(`Good luck ${name}! Continue your adventure...`);
 
//----------------------------------------------- change to background picture of jungle ------------------------------------------
    //alert
    alert("The parachute opens! Below you there is a jungle that spreads out for miles. In the distance you see a village, maybe they can help?");
    alert("Luckily, you land in a clearing in the middle of the jungle. You look around and see a tall tree poking out of the canopy. This would be a good place to climb up to decide where to go.")
    alert("There appears to be three paths out of the clearing...");
function2();
}

const function2 = () => {

    //array list
    let path = [
        "Overgrown",
        "Rocky",
        "Clear"
    ];

    //prompt
    let pathChoice = prompt(`Which path do you choose?`,`${path}`);

    //if statement
    if (pathChoice== path[0]){
        alert("You choose the overgrown path. You pull vines out of the way and climb over branches.")
        alert("You realise you have a knife in your pocket and use it to cut away the vines. This makes the path a lot easier to navigate.")
    }else if(pathChoice== path[1]){
        alert("You choose the rocky path. There are small boulders and large jagged rocks all about. You slowly but surely climb over them and find the path opens out.")
    }else if (pathChoice== path[2]){
        alert("You venture down the clear path with a spring in your step, thinking how easy this will be.")
    }else{
        alert(`Please enter either ${path}`);

        //calling function2
        function2();
    }
}

//----------------------------------------------- function3 function --------------------------------------------------------------

//function3
const function3 = () => {

    //alert
    alert("The path seems eerily quiet. You travel further down and hear a rustling sound coming from the vines around you. The vines seem a lot closer than you thought they were. Are they moving? You see the head of the plant. It's a giant carnivorous plant!")

    //prompt
    let fightPlant = prompt(`Do you fight it?`, `Yes/No`)

    //if statement
    if (fightPlant=="Yes"){
        alert("You use your knife to slash the plants' vines  before they can grab you. You struggle but manage to cut the head off! It looks like it's still moving.")
        
        //calling function4
        function4();
    
    }else if(fightPlant=="No"){
        alert("You try to run away but the path is now blocked by the vines and they trap you in.")
        alert("You use your knife to slash the plants' vines  before they can grab you. You struggle but manage to cut the head off! It looks like it's still moving.")
        
        //calling function4
        function4();
    }else{
        alert("Please enter 'Yes' or 'No'");

        //calling function3
        function3();
    }
}

//----------------------------------------------- function4 function --------------------------------------------------------------
    
//function4
const function4 = () => {

    //prompt
    let lookAtPlant = prompt(`Do you go over to look at it?`, `Yes/No`);

    //if statement
    if (lookAtPlant=="Yes"){
        alert("You go over to investigate the head of the plant. Even though it has been cut off it still isn't dead. In it's dying moments it spits out deadly acid all over your body. You start to painfully dissolve! That wasn't the wisest idea, maybe you should try fighting the plant again!")
        
        //calling function3
        function3();

    }else if(lookAtPlant=="No"){
        alert("Once you cut the head off you notice all the other man-eating plants and decide it's best to run away before they get their vines on you.")

        //function5
        function5();

    }else{
        alert("Please enter 'Yes' or 'No'");
        
        //calling function4
        function4();
    }
}

//----------------------------------------------- function5 function --------------------------------------------------------------

//function5
const function5 = () => {

    //alert
    alert("You see a big rock that gives you a better view of the canopy so you can spot the large tree again. To go towards the tall tree there is a high path and a low path.")
    
    //prompt
    let highLowPath = prompt(`Do you take the high path?`, `Yes/No`);

    //if statement
    if(highLowPath=="Yes"){
        alert("You stumble along the path until you finally get to the tall tree. It's very high, but at least you can start climbing from further up as you can jump from the high path.")
    }else if(highLowPath=="No"){
        alert("You stumble along the path until you finally get to the tall tree. It looks very high from the bottom and now you have to climb it, maybe you should have taken the high path!")
    }else{
        alert("Please enter 'Yes' or 'No'");

        //starting function5
        function5();
    }

//--------------------------------------------- change to background picture of tall tree -----------------------------------------

    alert("You climb the tree. It seems to go on forever and takes a lot of your energy. You get to near the top and have an amazing view of the jungle spread out all around you.")
    alert("You see a small lake not too far away. You decide it would be a good place to go to. You carefully climb down the tree and head in the direction of the lake.")
    starting();
}

//*********************************************************************************************************************************
//------------------------------------------------------ JOE CODE -----------------------------------------------------------------

//---------------------------------------------------- catchRope function ---------------------------------------------------------
//****************** PART 1
const catchRope = () =>{
    let question6 = prompt("You dodge the spider web, but you trip and find your self falling through the air. Suddenly, You see a rope dangling, do you grab on ?")
    if (question6 =="yes" || question6=="Yes"){alert("You grab hold. Happy to be alive you climb up, wondering where its dangling from...")
    catchWeb();}
else if (question6 == "no" || question6 =="No") {alert("You continue to fall down into aravine to your death. YOU DIED! Try again")
starting();}
else {alert("Try again !! 'answer properly'")
catchRope();}
}
const knife = () =>{
    let question5 = prompt("Suddenly You remember you have a knife in your bag, do you use it ? ")
if (question5 == "yes" || question5=="Yes") {alert("You pull the knife out of the bag, swipe at the snakes face and it moves back.")
alert("By now your both on the other side of the bridge and a brutal fight breaks out. You swipe again at the snake and miss")
alert("it butts it's head forward, knocks you to the ground, raises it's fangs and lunges down to bite your neck")
alert("but you swing the knife hard and cut the snakes throat. YOU WON")
ending();}
else if (question5 =="No" | "no"){alert("You try to keep running but the snake bites your ankles and you fall to the ground.")
alert("You try to grapple with the snake and get away, but it's useless. The snake swallows you whole !")
alert("YOU DIED!! try again")
gaslamp();}
else {alert("Try again !! 'answer properly'")
knife();}
}
const ending= () =>{
    alert("Relieved, you take a look at your new surroundings, it's safe.")
    alert("And as you look into the undergrowth, you see a clear path heading towards the lake. But first, it's lunch time !")
    startingLake();
}
const gasLamp2 = () => {
let question3 = prompt("You  take the  lantern out of your bag, light it and throw it. The ropes catch fire and start to burn. Do you carry on walking ? or Hold onto the rope ?")
if (question3 == "1" || question3== "One" || question3== "one" || question3== "Carry on walking" || question3== "carry on walking" || question3== "Carry on" || question3== "carry on" || question3== "Walk" || question3== "walk") {alert("You carry on crossing the bridge as fast you can but the ropes burn quickly, the bridge splits into two, and you fall to your doom.  YOU DIED, Try again")
gasLamp();}
else if (question3 =="2" || question3== "Two" || question3== "two" || question3== "Hold on" || question3== "hold on" || question3== "Hold on to the rope" || question3== "hold on to the rope" || question3== "Hold"|| question3== "hold")
{
    alert("You hold hard onto the rope,  the bridge burns behind you and splits into two ")
alert("but you're ready. The bridge swings down, you hold on tighter and kick your legs out fast to protect you from the cliff.")
alert(" On the other side of the bridge the snake falls far below to it's death.")
alert("You watch from the rope and then climb up safely to the other side. YOU WON ")
ending();}
else if (question3=="no" || question3=="No"){alert("Try again !! 'answer properly'")
gasLamp2();}
else if (question3=="yes"|| question3=="Yes") {alert("Try again !! 'answer properly'")
gasLamp2();}
else {alert("Try again !! 'answer properly'")
gasLamp2();}
}
const gasLamp = () =>{
let question2 = prompt("You see a huge snake slithering onto the bridge. You could use your gas lamp to set the bridge on fire and stop the snake. Do you use it ? ")
if (question2 =="yes"|| question2=="Yes") {
    gasLamp2();}
else if (question2 =="no" || question2=="No"){alert("You decide not to use the gas lamp, instead you run. You make it to the end of the bridge but the snake is at your heels.")
    knife();}
    else{alert("Try again !! 'answer properly'")
    gasLamp();}
}
const dieOne = () => {
alert("Your standing on a rotten plank ! the wood crumbles beneath you and fall down into the ravine to your death. YOU DIED - Try again")
catchWeb();
}
const catchWeb =()=> {
    let question1 = prompt("You find It’s a very old rope bridge. You take a first step onto the bridge and it holds but the ropes sound strained. Do you keep going ?")
    if (question1=="yes" || question1=="Yes") {
        gasLamp();}
    else if (question1== "no" || question1=="No") {
        dieOne();}
    else {alert("Try again ! 'Answer properly' ")
    catchWeb();}
}
const starting=() => {
let spidersWeb= prompt("You struggle over a branch and look up to notice a large spider web catch the light in front of you. Do you dodge the web ?")
if (spidersWeb == "no" || spidersWeb =="No") {alert("The web gets wrapped around your face. Your foot slips and you tumble to the ground.")
alert("You get up you find your at the edge of a steep ravine.  You scan the ravine for a way around, but it spans as far as the eye can see in both directions.")
alert("You look again, and not too far away you can see an old rope bridge. You have no other option but to cross. When you arrive....")
catchWeb();}
else if (spidersWeb == "yes" || spidersWeb =="Yes") {
    catchRope();
}
else {alert("Try again !! 'answer properly'")
starting();}
}

//****************** PART 2
const startingLake=() => {
    let items = [
        "Dry wood ",
        "Rope ",
        "Mango ",
        "Torch ",
        "Knife ",
        "River fish ",
        "Book"
       ];
    //prompt
    let chooseItems = prompt(`You look into your back pack, choose what you will eat for lunch ${items}`, `type river fish in small letters`)
    //if, else if statement
    if (chooseItems =="River fish," || chooseItems== "river fish," || chooseItems== "river fish" || chooseItems== "River Fish" || chooseItems== "River Fish," || chooseItems== "River Fish")
        {alert(`Well done ! You chose, ${chooseItems}. This is correct, Enjoy your lunch !`)}
        else if (chooseItems == "Mango" || chooseItems=="Mango," || chooseItems=="mango" || chooseItems=="mango,")
        {alert("Mango is more of a snack.... Try again!")
        startingLake();}
    else {alert(`You have not selected the correct items, try again !     "Make sure you typed correctly"`)
    startingLake();}
    {alert("Now your ready to start your next adventure, you set of along the dark and windy jungle path towards the lake.")
    }
    {alert ("The journey was long, and you heard many strange noises in the jungle but you arrived a beautiufl lake ")
    journey();}
    }
    const journey=()=>{
        let question1 = prompt(" You glance around and see a boat nearby on the sandy shore, do you take the boat or walk around?")
        if (question1 == "take the boat" ||question1 =="Take the boat" ||question1 =="Boat" ||question1 =="boat")
        {alert("Good choice, you take a short stroll round the sandy bank of the tree lined shore until you reach the boat")
    boat();}
    else if (question1=="walk around" ||question1=="Walk around" ||question1=="Walk" ||question1=="walk")
    {alert("You start to travel around the sandy bank of the tree lined shore, you hear more strange noises from within the trees")
    alert(" so you stay as close to the water as you can....")
    alert ("Big mistake ! you see long rows of sharp teeth emerge from the water and swallow you whole. YOU DIED ! Try again..")
    journey();}
    else {alert("Thats not an answer ! Try again!")
    journey();}
    }
    const boat=()=> {
        alert ("When your arrive, you find that the boat has a sale and the wind is blowing towards the opposite shore.")
        alert ("You lift the sales and lie down to rest as it glides to the other side")
    shamansLair();}

//********************************************************************************************************************************
//--------------------------------------------------- KRISTINA CODE --------------------------------------------------------------

//------------------------------------------------- shamansLair function ---------------------------------------------------------

//shamansLair function
const shamansLair = () => {

    //prompt
    let tellName = prompt(`You just landed in mysterious dark place.
    A man in a Shaman's outfit is sitting in the middle of the lair.
    He is holding a candle and says: Come closer and tell me your name: `)

    //alert
    alert(`You ${tellName}, now are a spirit of Gods, blessed to be here!`)

    //array
    let god = [
        "Tengri",
        "Ulgen",
        "Umai",
        "Erlik"
    ];

    //prompt
    let chooseGod = prompt(`Please choose a God: ${god}`)

    //if statement
    if(chooseGod == god[0]){
        alert(`God ${chooseGod} created the whole Universe and he lives on the East!`)
        let creationName = prompt(`What would you like to create?`, `Type anything you like` )
        alert(`Magic, you can have ${creationName}, that you created!`)
        alert(`Good luck, ${tellName}, with your further journey`)

    }else if(chooseGod == god[1]){
        alert(`God ${chooseGod} of the Future lives on the South!`)
        let knowFuture = prompt(`Would you like to know your future?`, `Yes/No`)

        //nested if statement 1
        if(knowFuture == "Yes"){
            alert(`You, ${tellName}, will have a fight with a lion soon!`)
        }else{
            alert(`You, ${tellName}, will not know your future! You are going back of entering Shaman's Lair again!`)
            
            //calling shamansLair function
            shamansLair();
        }

    //if statement continues
    }else if(chooseGod == god[2]){
        alert(`God ${chooseGod} of the Present, gives humans everything necessary for living and stays on the West!`)
        let knowPresent = prompt(`Would you like to know what happens in a present outside this Lair?`, `Yes/No`)

        //nested if statement 2
        if(knowPresent == "Yes"){
            alert(`${tellName}, Lion is outside and he is waiting for you in the cage!`)
        }else{
            alert(`You, ${tellName}, will not know your present! You are going back of entering Shaman's Lair again!`)

            //calling shamansLair function
            shamansLair();
        }

    //if statement continues
    }else if(chooseGod == god[3]){
        alert(`God ${chooseGod} of the Past is on the North!`)
        let knowPast = prompt(`Shall I tell your past?`, `Yes/No`)

        //nested if statement 3
        if(knowPast == "Yes"){
            alert(`${tellName}, you born 5 miles away from this Lair, your parents died, when you was 5 years old,
            you grew up in farmers family! You came here because you are curious to get to the nearest village!`)
            alert(`You are right, clever Shaman!`)
        }else{
            alert(`${tellName}, I will not tell your about your past! You are going back of entering Shaman's Lair again!`)

            //calling shamansLair function
            shamansLair();
        }

    //if statement continues
    }else{
        alert(`Invalind answer, you are going back of entering Shaman's Lair again!`)

        //calling shamansLair function
        shamansLair();
    }
    shamansLairOutfit();
}
//-------------------------------------------------- shamansLairOutfit function --------------------------------------------------

//shamansLairOutfit function
const shamansLairOutfit = () => {

    //prompt
    let yourOutfit = prompt("Just before you leave my Lair, choose your outfit for your luck", "Type 1, 2, 3, 4 or 5")

    //switch statement
    switch (yourOutfit){
        case "1":
            alert("You selected Shaman's Headdress")
            alert("Your spirit wolf bone is Skull")
            alert("Your spirit wolf blood is 400")
            alert("Now you are ready to continue with your journey to meet Lion in a Cage")
            break;
        case "2":
            alert("You selected Shaman's Poncho")
            alert("Your spirit wolf bone is Pelt")
            alert("Your spirit wolf blood is 200")
            alert("Now you are ready to continue with your journey to meet Lion in a Cage")
            break;
        case "3":
            alert("You selected Shaman's Leggings")
            alert("Your spirit wolf bone is Femur")
            alert("Your spirit wolf blood is 200")
            alert("Now you are ready to continue with your journey to meet Lion in a Cage")
            break;
        case "4":
            alert("You selected Shaman's Hand Wraps")
            alert("Your spirit wolf bone is Claws")
            alert("Your spirit wolf blood is 100")
            alert("Now you are ready to continue with your journey to meet Lion in a Cage")
            break;
        case "5":
            alert("You selected Shaman's Moccasins")
            alert("Your spirit wolf bone is Paws")
            alert("Your spirit wolf blood is 100")
            alert("Now you are ready to continue with your journey to meet Lion in a Cage")
            break;
        default:
            alert(`Invalind answer, you are going back of choosing your outfit!`)

            //calling shamansLairOutfit function
            shamansLairOutfit();
    }
    lionCage();
}

//------------------------------------------------------- lionCage function ---------------------------------------------------------

//lionCage function
const lionCage = () => {

    //declaring variables
    let correctCageGuess = "5"
    let guessToOpenCage = ""

    //while loop
    while (guessToOpenCage != correctCageGuess){

        //prompt
        guessToOpenCage = prompt(`You just have been rewarded as a Treassure Hunter!
        You have to guess the code to unlock Lion's cage, so what is correct code?`,
        `(Code < 10) && (Code%5 == 0)`)

    } //end while loop
    alert(`Congratulations, you just unlocked the cage, come in!`)

    lionGates();
}

//------------------------------------------------------- lionGates function ---------------------------------------------------------

//lionGates function
const lionGates = () => {
    
    //declaring variables
    let correctGateGuess = "6"
    let guessToOpenGates = ""

        //while loop   
        while (guessToOpenGates != correctGateGuess){

            //prompt
            guessToOpenGates = prompt(`You just entered Lion's Cage, but Lion is locked behind another gates!
            You have to guess the code to unlock the gates, so what is correct code?`,
            `(Code > 5) && (Code < 7) && (Code%3 == 0)`)

        }//end while loop
        alert(`Congratulations, you just unlocked the gates, come in and meet the Lion!`)

        lionName();
}

//------------------------------------------------------- lionName function ---------------------------------------------------------

//lionGates function
const lionName = () => {

    //declaring variables
    let LionNameGuess = "Raor"
    let guessLionName = ""

        //while loop
        while (guessLionName != LionNameGuess){

            //prompt
            guessLionName = prompt(`You want to meet and Beat Lion, you need to call his name first, so what is his name,
            1st and last letter is same, 2nd letter starts with apple and 3rd with orange?`,
            `R_ _ r, 2nd -> apple, 3rd -> orange`)

        } //end while loop
        alert(`Congratulations, Lion is out, you can tell ${LionNameGuess}, why you here?`)

        alert(`${LionNameGuess}, I need to go to Hidden Cave, where bats living, do you how can I find them?`)
        alert(`Yes, I know, I lived in this cage for 1000 years, only you my Treassure Hunter gave me freedom,
        go 5000 steps North and 3000 steps South and you will find a Hidden Cave, Good Luck!`)
        alert(`Thank you ${LionNameGuess}, it was a pleassure to meet you, I am continuing with my journey,
        heading towards Hidden Cave`)
        hiddenCave();
}

//********************************************************************************************************************************
//------------------------------------------------------- GORDON CODE ------------------------------------------------------------

//----------------------------------------------------- hiddenCave function ------------------------------------------------------

//hiddenCave function
const hiddenCave = () => {
    let choice = prompt(`You are at the entrance to the cave do you wish to enter the cave?`,`Yes/No` )
    if (choice == "Yes"){
        alert(`You enter the dark cave`)      
    }else if(choice == "No"){
        alert(`You stay at the entrance to the dark cave`)
        alert(`Curiousity gets the better of you and you enter anyway!`)
    }else{
        alert(`Please choose a Valid choice Yes/No`)
        hiddenCave(); 
    }
    inCaveMain();
}
//------------------------------------------------------- inCaveMain function --------------------------------------------------------

//inCaveMain function
const inCaveMain = () => {
    let choice1 = prompt(`Bats are now flying all around you do you run away to the entrance? `, `Yes/No`)
    if (choice1 == "Yes"){
        alert(`You ran deeper in to the cave and notice light at the back`)
    }else if(choice1 == "No"){
        alert(`You are back at the entrance of the cave`)
    }else{
        alert(`Please choose a valid choice Yes/No`);
        inCaveMain(); 
    }
    inCave1();
}

//------------------------------------------------------- inCave1 function -------------------------------------------------------

//inCave1 function
const inCave1 = () => {
    let choice2 = prompt(`Do you want to investigate the light? `, `Yes/No`)
    if(choice2 == "Yes"){
        alert(`You see that a stream light is flowing in to this area of the cave from a hole in the back of the cave`)
    }else if(choice2 == "No"){
        alert(`You decided to stay where you are`)
    }else{
        alert(`Please choose a valid choice Yes/No`)
        inCave1(); 
    }
    inCave2();
}

//------------------------------------------------------- inCave2 function -------------------------------------------------------

//inCave2 function
const inCave2 = () => {
    let choice3 = prompt(`You see a hole in the back of the cave to escape from. Do you want to escape`, `Yes/No`);
    if (choice3 == "Yes"){
        alert(`Nice one you escaped the cave and as you climbed out you see a hill in the distance`)
    }else if(choice3 == "No"){
        alert(`You decided to stay in the cave near the light wondering if maybe you should of investigated it`)
    }else{
        alert(`Please choose a choice valid Yes/No`)
        inCave2(); 
    }
    inCave3();
}

//------------------------------------------------------- inCave3 function -------------------------------------------------------

//inCave3 function
const inCave3 = () => {
    let choice4 = prompt(`Do you want go to the top of the hill that you saw on your escape `, `Yes/No`)
    if(choice4 == "Yes"){
        alert(`You go to the top of the hill that you saw on your escape`)
    }else if(choice4 == "No"){
        alert(`You stay out side the whole in the cave wondering if maybe you should of gone to the hill`)
    }else{
        alert(`Please choose a valid choice Yes/No`)
        inCave3(); 
    }
    onHill();
}

//------------------------------------------------------- onHill function -------------------------------------------------------

//onHill function
const onHill = () => {
    let choice5 = prompt(`As you start to descend a large group of killer monkies attack you do you run to the village `, `Yes/No`)
    if(choice5 == "Yes"){
        alert(`You run away do the hill to the village`)
    }else if(choice5 == "No"){
        alert(`The monkies killed you because you decided to fight them alone so you die obviosly`)
        inCave2(); //This takes you back to inCave part 2 section of game
    }else {
        alert(`Please choose a choice valid Yes/No`)
        onHill(); 
    }
    inVillage();
}

//------------------------------------------------------- inVillage function ----------------------------------------------------

//inVillage function
const inVillage = () => {
    let choice6 = prompt(`Do you ask the villagers for their help to kill the monkies `, `Yes/No`)
    if(choice6 == "Yes"){
        alert(`The villagers decide to help you and fight off and kill all the killer monkies (couldnt of that on my own now could I)`)
    }else if(choice6 == "No"){
        alert(`You die because you decided to fight the killer monkies alone which was a very stupid idea as if that would of ever worked`)
        inCave2(); //This takes you back to inCave part 2 section of game
    }else{
        alert(`Please choose a valid choice Yes/No`)
        hiddenCave(); 
    }
    alert(`After the villagers help you kill the monkies they explain what they saw happen from their village.
    Then they help you to get home. You survived all the trials and misfortunes with in our rumbling jungle. Nice one.`)
    function1();
}

//********************************************************* END GAME *************************************************************

