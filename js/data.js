const PETS = [
  {
    "id": 1,
    "nome": "Luna",
    "especie": "Gato",
    "idade": "Filhote",
    "porte": "Pequeno",
    "sexo": "Fêmea",
    "descricao": "Brincalhona e carinhosa.",
    "foto": "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/12/17/866513462-gato.jpg"
  },
  {
    "id": 2,
    "nome": "Thor",
    "especie": "Cachorro",
    "idade": "Adulto",
    "porte": "Médio",
    "sexo": "Macho",
    "descricao": "Companheiro, adora passeios.",
    "foto": "https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1200&auto=format&fit=crop"
  },
  {
    "id": 3,
    "nome": "Mimi",
    "especie": "Gato",
    "idade": "Adulto",
    "porte": "Pequeno",
    "sexo": "Fêmea",
    "descricao": "Calma e adora colo.",
    "foto": "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1200&auto=format&fit=crop"
  },
  {
    "id": 4,
    "nome": "Bento",
    "especie": "Cachorro",
    "idade": "Filhote",
    "porte": "Pequeno",
    "sexo": "Macho",
    "descricao": "Esperto e obediente.",
    "foto": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop"
  },
  {
    "id": 5,
    "nome": "Nina",
    "especie": "Cachorro",
    "idade": "Filhote",
    "porte": "Médio",
    "sexo": "Fêmea",
    "descricao": "Tranquila, ideal para apartamento.",
     "foto": "https://images.unsplash.com/photo-1510337550647-e84f83e341ca?q=80&w=1200&auto=format&fit=crop"
  },
  {
    "id": 6,
    "nome": "Zeus",
    "especie": "Cachorro",
    "idade": "Adulto",
    "porte": "Grande",
    "sexo": "Macho",
    "descricao": "Protetor e dócil.",
    "foto": "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/01-domesticated-dog.webp?w=760&h=507"
  },
  {
    "id": 7,
    "nome": "Amora",
    "especie": "Gato",
    "idade": "Filhote",
    "porte": "Pequeno",
    "sexo": "Fêmea",
    "descricao": "Curiosa e brincalhona.",
    "foto": "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop"
  },
  {
    "id": 8,
    "nome": "Bob",
    "especie": "Cachorro",
    "idade": "Adulto",
    "porte": "Médio",
    "sexo": "Macho",
    "descricao": "Dócil com crianças.",
    "foto": "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    "id": 9,
    "nome": "Mel",
    "especie": "Gato",
    "idade": "Adulto",
    "porte": "Pequeno",
    "sexo": "Fêmea",
    "descricao": "Acolhedora e elegante.",
    "foto": "https://inovaveterinaria.com.br/wp-content/uploads/2016/01/Gato-siames-INOVA-scaled.jpg"
  },
  {
    "id": 10,
    "nome": "Rex",
    "especie": "Cachorro",
    "idade": "Adulto",
    "porte": "Grande",
    "sexo": "Macho",
    "descricao": "Energia alta, ama correr.",
    "foto": "https://blog-static.petlove.com.br/wp-content/uploads/2020/10/puppy-1-petlove.jpg"
  },
  {
    "id": 11,
    "nome": "Bela",
    "especie": "Cachorro",
    "idade": "Filhote",
    "porte": "Pequeno",
    "sexo": "Fêmea",
    "descricao": "Latidinho fofo.",
    "foto": "https://conteudo.imguol.com.br/c/entretenimento/eb/2022/03/23/cachorro-da-raca-lulu-da-pomeramia-1648065976007_v2_3x4.jpg"
  },
  {
    "id": 12,
    "nome": "Fred",
    "especie": "Cachorro",
    "idade": "Adulto",
    "porte": "Médio",
    "sexo": "Macho",
    "descricao": "Gosta de brincar de bola.",
    "foto": "https://jpimg.com.br/uploads/2024/11/8-racas-de-cachorros-mais-carinhosas-do-mundo.jpg"
  },
  {
    "id": 13,
    "nome": "Jade",
    "especie": "Gato",
    "idade": "Adulto",
    "porte": "Pequeno",
    "sexo": "Fêmea",
    "descricao": "Boazinha e silenciosa.",
    "foto": "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/05/gato-laranja-e1748043537291.jpg?w=1200&h=1200&crop=1"
  },
  {
    "id": 14,
    "nome": "Tico",
    "especie": "Cachorro",
    "idade": "Filhote",
    "porte": "Pequeno",
    "sexo": "Macho",
    "descricao": "Companheiro e esperto.",
    "foto": "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    "id": 15,
    "nome": "Lola",
    "especie": "Cachorro",
    "idade": "Filhote",
    "porte": "Médio",
    "sexo": "Fêmea",
    "descricao": "Calma e educada.",
    "foto": "https://adimax.com.br/wp-content/uploads/2022/06/como-adestrar-cachorro-filhote.jpg"
  },
  {
    "id": 16,
    "nome": "Simba",
    "especie": "Gato",
    "idade": "Adulto",
    "porte": "Pequeno",
    "sexo": "Macho",
    "descricao": "Rei da casa, manso.",
    "foto": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1200&auto=format&fit=crop"
  },
  {
    "id": 17,
    "nome": "Pipoca",
    "especie": "Cachorro",
    "idade": "Filhote",
    "porte": "Pequeno",
    "sexo": "Macho",
    "descricao": "Soneca profissional.",
    "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxsj7m51-AMp2Fpex9QaRg4TJVOBo88WB_A&s"
  },
  {
    "id": 18,
    "nome": "Nino",
    "especie": "Gato",
    "idade": "Adulto",
    "porte": "Pequeno",
    "sexo": "Macho",
    "descricao": "Arteiro adorável.",
    "foto": "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop"
  },
  {
    "id": 19,
    "nome": "Fiona",
    "especie": "Cachorro",
    "idade": "Adulto",
    "porte": "Grande",
    "sexo": "Fêmea",
    "descricao": "Protetora e doce.",
    "foto": "https://img.freepik.com/fotos-gratis/retrato-de-solo-adoravel-cachorro-beagle_53876-64817.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    "id": 20,
    "nome": "Zara",
    "especie": "Gato",
    "idade": "Filhote",
    "porte": "Pequeno",
    "sexo": "Fêmea",
    "descricao": "Sábia e calma.",
    "foto": "https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/31ffe75e-5ce0-4e37-92f6-9feecafba26d/gato-brincando-linha.jpg?w=3840&q=75&auto=format"
  }
];
