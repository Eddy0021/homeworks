// moviesData.ts
export interface Movies {
    id: number;
    title: string;
    genre: string;
    releaseDate: number;
    rating: number,
    description: string,
    imagePath: string;
  }
  
  export const moviesList: Movies[] = [
    {
        id: 1,
        title: "Pulp Fiction",
        genre: "Action & Adventure",
        releaseDate: 2004,
        rating: 4.5,
        description: "'Pulp Fiction' is a cult classic directed by Quentin Tarantino. The film weaves interconnected stories of crime, redemption, and dark humor in Los Angeles. It's known for its nonlinear narrative and memorable characters.",
        imagePath: "src/assets/pulp-fiction-2004.png"
    },
    {
        id: 2,
        title: "Bohemian Rhapsody",
        genre: "Drama, Biography, Music",
        releaseDate: 2003,
        rating: 4.2,
        description: "'Bohemian Rhapsody' is a biographical film about the legendary rock band Queen and its iconic lead singer Freddie Mercury. The movie explores the band's rise to fame, Mercury\'s personal struggles, and the creation of timeless music.",
        imagePath: "src/assets/Bohemian_Rhapsody_2003.png"
    },
    {
        id: 3,
        title: "Kill Bill: Vol 2",
        genre: "Action & Adventure",
        releaseDate: 1994,
        rating: 4.7,
        description: "The second installment in Quentin Tarantino's 'Kill Bill' series, this film continues the tale of the Bride seeking revenge. Filled with intense action and unique storytelling, it concludes the Bride's quest for vengeance.",
        imagePath: "src/assets/Kill_Bill_Volume_2-1994.png"
    },
    {
        id: 4,
        title: "Avengers: War of Infinity",
        genre: "Action & Adventure",
        releaseDate: 2004,
        rating: 4.8,
        description: "'Avengers: Infinity War' is a superhero epic that brings together the Marvel Cinematic Universe\'s iconic characters to face the powerful Thanos. The film is known for its thrilling action sequences and emotional",
        imagePath: "src/assets/Avengers-War-of-Infinity-2004.png"
    },
    {
        id: 5,
        title: "Inception",
        genre: "Action & Adventure",
        releaseDate: 2003,
        rating: 5,
        description: "Directed by Christopher Nolan, 'Inception' is a mind-bending sci-fi thriller. The film explores the concept of shared dreaming and features a complex narrative that keeps viewers on the edge of their seats.",
        imagePath: "src/assets/Inception-2003.png"
    },
    {
        id: 6,
        title: "Reservoir dogs",
        genre: "Oscar winning Movie",
        releaseDate: 1994,
        rating: 4.3,
        description: "Quentin Tarantino's debut film, 'Reservoir Dogs,' is a heist thriller known for its non-linear storytelling and memorable dialogue. The film follows a group of criminals dealing with the aftermath of a failed jewelry heist.",
        imagePath: "src/assets/Reservoir-dogs-1994.png"
    },
    {
        id: 7,
        title: "Four rooms",
        genre: "Action & Adventure",
        releaseDate: 2004,
        rating: 3.8,
        description: "'Four Rooms' is an anthology comedy film that features four different stories, each directed by a different filmmaker. The stories unfold in a hotel on New Year's Eve and involve bizarre and humorous situations.",
        imagePath: "src/assets/Four-rooms-2004.png"
    },
    {
        id: 8,
        title: "Jackie Brown",
        genre: "Action & Adventure",
        releaseDate: 2003,
        rating: 4.1,
        description: " Another Tarantino gem, 'Jackie Brown,' is a crime thriller based on Elmore Leonard's novel 'Rum Punch.' The film follows the titular character, a flight attendant, who becomes entangled in a complex plot involving money smuggling.",
        imagePath: "src/assets/Jackie-Brown-2003.png"
    },
]