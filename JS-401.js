function provjeri(lista, pojam)
{
    for(let i = 0; i < 10; i++)
    {
      if(pojam == lista[i].ime || pojam == lista[i].prezime)  
      return true;
  
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
      ime: "Nina ",
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
  if(provjeri(lista, pojam)){
    console.log('Student se nalazi na popisu');
  }
  else{
    console.log('Student se NE nalazi na popisu');
  }