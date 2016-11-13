//define JSON ipsums
var buseyisms = {"list": ["You gotta go through it to see there ain't nothing to it.",
                          "The best way to communicate is compatible. Compatible communication is listening with open ears and an open mind, and not being fearful or judgemental about what you're hearing.",
                          "You ever roasted doughnuts?",
                          "When you get lost in your imaginatory vagueness, your foresight will become a nimble vagrant.",
                          "I would like to give you a backstage pass to my imagination.",
                          "Listen to the silence. And when the silence is deafening, you're in the center of your own universe.",
                          "Sometimes horses cough and fart at the same time, so stay out of the range of its butt muscle because a horses butt muscle is thick.",
                          "Did you feel that? Look at me - I'm not out of breath anymore!",
                          "I wrestled a bear once. A 750lbs black bear.",
                          "The magic Indian is a mysterious spiritual force, and we're going to Cathedral Rock, and that's the vortex of the heart.",
                          "It's OK to get Rib-grease on your face, because you're allowing people to see that you're proud of these ribs.",
                          "Go with the feeling of the nature. Take it easy. Know why you're here. And remember to balance your internal energy with the environment.",
                          "It's good to yell at people and tell people that you're from Tennesee, so that way you'll be safe.",
                          "These kind of things only happen for the first time once.",
                          "Have you urinated? Have you drained your bladder? Are you free? Because if you haven't it will only come out later. I'm giving you some information that your bodily fluids may penetrate your clothing fibre's without warning.",
                         ]};
//get JSON list of Buseyisms

 function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function buseyism() {
  var setNum = document.getElementById("bi-num").value;
  var setPar = document.getElementById("bi-par").checked;
  var setSen = document.getElementById("bi-sen").checked;
  console.log("setNum:" + setNum);
  console.log("setPar: " + setPar + "   setSen: " + setSen);
  var buseyOut = ""
  for (var i = 1; i <= setNum; i++) {
    //how many?
    console.log("i" + i);
    if(setPar){
      //if paragraphs
      //shuffle array
      var buseyArray = shuffleArray(buseyisms.list);
      console.log(buseyArray)
      var buseyPar = "";
      var int = 0;
      var p = 0;
      while (p < 250){
        buseyPar = buseyPar + buseyArray[int];
        p = buseyPar.length;
        int++;
      }
      buseyOut = buseyOut + buseyPar + " <br><br> ";
    }else if(setSen){
        var buseyArray = shuffleArray(buseyisms.list);
        buseyOut = buseyOut + " " + buseyArray[1];
      }

     document.getElementById('bi-out').innerHTML = "Busey ipsum dolor sit amet. " + buseyOut;
  }

}



//get number of paragraphs desired

//write final ipsum copy

// document.write(buseyisms.list[randNum()]);
//document.write(buseyisms.list + "\n\n\n");

//document.write(shuffleArray(buseyisms.list).join(" "))
//document.write(random);
// this will append the document

