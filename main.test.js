/*  @jest-environment jsdom */
import { sort, search, newsList } from "./main.js";


// Search
test("Should return 2 results if search key is 'what'", () => {
  // arrange
  const textToSearch = 'what';

  // act
  const result = search(textToSearch);

  // assert
  expect(result).toHaveLength(2);
  expect(result).not.toHaveLength(3);
  expect(result).not.toHaveLength(1);
});

test("Should return the same array if no text is passed", () => {
  // arrange
  const textToSearch = "";

  // act
  const result = search(textToSearch);

  // assert
  expect(result).toEqual(newsList);
});


// Sort
test("Should sort array by accending order", () => {
    // arrange
    const type = "ascending";

    // act
    const result = sort(type);

    // assert
    expect(result).toEqual([
        "'Nightmare' TV show 'Euphoria — health threat or high art?",
        "Buried underpants and tea bags help scientists evaluate soil",
        "Decoder: Armenia in a bind as Ukraine war resets global order",
        "Decoder: Mining asteroids for minerals can help spare Earth",
        "Marie Colvin shined a light on war-torn corners of the world",
        "Media glare can enrich tennis pros yet imperil mental health",
        "What books should an aspiring journalist read?",
        "What films should an aspiring journalist watch?",
    ]);
});

test("Should sort array by descending order", () => {
    // arrange
    const type = "descending";

    // act
    const result = sort(type);

    // assert
    expect(result).toEqual([
        "What films should an aspiring journalist watch?",
        "What books should an aspiring journalist read?",
        "Media glare can enrich tennis pros yet imperil mental health",
        "Marie Colvin shined a light on war-torn corners of the world",
        "Decoder: Mining asteroids for minerals can help spare Earth",
        "Decoder: Armenia in a bind as Ukraine war resets global order",
        "Buried underpants and tea bags help scientists evaluate soil",
        "'Nightmare' TV show 'Euphoria — health threat or high art?",
    ]);
});