
//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

//Implement a function likes(), which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

//likes([]); // must return "no one likes this"
//likes(['Peter']); // must return "Peter likes this"
//likes(['Jacob', 'Alex']); // must return "Jacob and Alex like this"
//likes(['Max', 'John', 'Mark']); // must return "Max, John and Mark like this"
//likes(['Alex', 'Jacob', 'Mark', 'Max']); // must return "Alex, Jacob and 2 others like this"

//For more than 4 names, the number in and 2 others simply increases.



//This is my solution:

function likes(names) {
  // TODO
  if (names.length==0){
  return "no one likes this"
  }else if(names.length==1){
  return names[0] + " likes this"
  }else if(names.length==2){
  return names[0] + " and " + names[1] + " like this"
    }else if(names.length==3){
  return names[0] + ", " + names[1] + " and " + names[2] + " like this"
    }else if(names.length>=4){
    return names[0] + ", " + names[1] + " and " + names.slice(2).length + " others like this"
    }
  
  };