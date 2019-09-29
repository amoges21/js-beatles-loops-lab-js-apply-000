// add solution here
var index;
var indextwo;


const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
<<<<<<< HEAD

=======
const facts = ["He was the last Beatle to learn to drive","He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"
];
>>>>>>> ed21a96c424cb53d870d0127eb6b896f93f65055



function theBeatlesPlay() 
{
  var emptyarray = [];
  
 for (index = 0 ; index < musicians.length ; ++index )
 {
     var arrayelement = musicians[index] + ' plays ' + instruments[index];
     emptyarray.push(arrayelement);
     
     if (emptyarray.length === 4)
     {
            return emptyarray
     }
  }
}



<<<<<<< HEAD
function johnLennonFacts(Array) 
=======
function johnLennonFacts() 
>>>>>>> ed21a96c424cb53d870d0127eb6b896f93f65055
{
  var emptyarrayfacts = [];
  var i = 0;

  
<<<<<<< HEAD
  while (i < Array.length)
  {
     var elment = Array[i] + '!!!' ;
     emptyarrayfacts.push(elment);
          i = i + 1;

     if (emptyarrayfacts.length === Array.length)
=======
  while (i < facts.length)
  {
     var elment = facts[i] + '!!!' ;
     emptyarrayfacts.push(elment);
          i = i + 1;

     if (emptyarrayfacts.length === 4)
>>>>>>> ed21a96c424cb53d870d0127eb6b896f93f65055
     {
            return emptyarrayfacts
     }
  }

}


<<<<<<< HEAD

function iLoveTheBeatles(n) 
{
  var emptyarray = [];

  if (n < 15)
  {
    n = n +1;
    while (emptyarray.length < n )
    {
      emptyarray.push("I love the Beatles!");
      if (emptyarray.length === n)
      {
                return emptyarray
      }
    }
     
  }
  
  else
  {
         emptyarray.push("I love the Beatles!");
          return emptyarray;
  }

}


=======
>>>>>>> ed21a96c424cb53d870d0127eb6b896f93f65055
