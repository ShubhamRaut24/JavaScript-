function emotions(myString, myFunc) 
{
    console.log("I am " + myString + ", " + myFunc(2));
}
emotions("happy", function luagh(num)
{
    var s = ""; 
    for(let i = 0; i < num; i++)
    {
        s += "ha";
    }
    return s+"!";});