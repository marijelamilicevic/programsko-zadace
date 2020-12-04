function provjeri_par(par)
{
    let parovi = [
      ['(', ')'],
      ['[', ']'],
      ['{', '}']
    ]
  
    for(let i = 0; i < parovi.length; i++){
      if(parovi[i][0] == par[0]){
        if(parovi[i][1] == par[1]) 
        return true;
      }
    }
    return false;
  }
  
  let zagrade = function(s) {
    let otvorene_zagrade = ['(', '[', '{'];
    let zatvorene_zagrade = [')', ']', '}'];
    let par = [];
    let stog = [];
  
    for(let i = 0; i < s.length; i++)
    {
      if(otvorene_zagrade.includes(s[i])){
        stog.push(s[i]);
        par[0] = s[i];
      }
      
      else if(zatvorene_zagrade.includes(s[i])){
        if(par[0] == null) par[0] = stog[stog.length-1]
        par[1] = s[i];
        if(provjeri_par(par)){
          stog.pop();
          par = [];
        }
        else stog.push(s[i]);
      }
    }
  
    if(stog.length == 0) return true;
    else return false;
  };
  
  
  console.log(zagrade("[()]()()")); 
  console.log(zagrade("{[((()))]}")); 
  console.log(zagrade("({)}")); 