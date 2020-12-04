function istiznakovi(str)
{
    let max = 0;

    for(let i = 0; i < str.length; i++)
    {
        let temp_max = 0;
        let current = str[i];

        for(let j = 0; j < str.length; j++) 
        {
            if(current == str[j]){
              temp_max++;
            }
        }

        if(max < temp_max){
          max = temp_max;
        }
    }
    return max;
}

console.log(istiznakovi("baaaccd"));
console.log(istiznakovi("ba2dll"));