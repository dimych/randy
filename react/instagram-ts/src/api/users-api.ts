
type UserType = {
    id: number;
    name: string;
    likes: number;
    dateOfBirth: number;
    addedToFavorite: boolean;
    photoName: string;
  };
  
  function getUsers() {
    const user1 = {
      id: 1,
      name: "Randy",
      likes: 198,
      dateOfBirth: 2004,
      addedToFavorite: true,
      photoName: "fotos-da-torre-de-paris.jpg",
    };
  
    const user2 = {
      id: 2,
      name: "Dima",
      likes: 201,
      dateOfBirth: 2001,
      addedToFavorite: true,
      photoName: "polaris-dream.jpg",
    };
  
    const user3 = {
      id: 3,
      name: "Levy",
      likes: 98,
      dateOfBirth: 1999,
      addedToFavorite: false,
      photoName: "istockphoto612x612.jpg",
    };
  
    const user4 = {
      id: 4,
      name: "Max",
      likes: 532,
      dateOfBirth: 1998,
      addedToFavorite: true,
      photoName: "pexels-anjana.jpg",
    };
  
    const userbase: UserType[] = [user1, user2, user3, user4];
    return userbase;
  }