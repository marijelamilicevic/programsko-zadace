function provjeri(lista, pojam, status){
    for(let i=0; i<10; i++)
    {
      if(lista[i].ime.search(pojam) >= 0 || lista[i].prezime.search(pojam) >= 0){
        if(lista[i].upisan == status){
          return true
        }
        else{
          console.log('Student se nalazi na popisu, ali status se ne podudara');
        }
      }
    }
    return false;
  }
  
  
  let lista = [
    {
      ime: "Marijela",
      prezime: "Miličević",
      upisan: true,
    },
    {
      ime: "Nina",
      prezime: "Macuka",
      upisan: true,
    },
    {
      ime: "Melita",
      prezime: "Brdar",
      upisan: true,
    },
    {
      ime: "Tomislav",
      prezime: "Percan",
      upisan: true,
    },
    {
      ime: "Sonja",
      prezime: "Sabol",
      upisan: true,
    },
    {
      ime: "Maja",
      prezime: "Dautović",
      upisan: true,
    },
    {
      ime: "Antonela",
      prezime: "Stanković",
      upisan: true,
    },
    {
      ime: "Petra-Katarina",
      prezime: "Valentić",
      upisan: true,
    },
    {
      ime: "Martina",
      prezime: "Bulić",
      upisan: true,
    },
    {
      ime: "Roberto",
      prezime: "Milić",
      upisan: true,
    }
  ];
  
  let pojam = "Nina";
  let status = true;
  
  if(provjeri(lista, pojam,status)){
    console.log('Student se nalazi na popisu');
  }
  else{
    console.log('Student se NE nalazi na popisu');
  }