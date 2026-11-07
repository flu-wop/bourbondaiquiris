/**
 * Menu data. ONE FILE for easy swap.
 *
 * REAL: the board (flavors, combos, specialty, premium) comes from the shop's own menu board (IMG_6811).
 * MOCK: every price below, the cup sizes and the food items are placeholders. Search "MOCK" to find them.
 */

export type Flavor = { id: string; name: string; color: string; group: 0 | 1 | 2 };

// REAL (board). Colors are illustrative swatches for the cup builder.
export const FLAVORS: Flavor[] = [
  { id: "hurricane", name: "Hurricane", color: "#d1202f", group: 0 },
  { id: "peach", name: "Peach Bellini", color: "#ffb36b", group: 0 },
  { id: "pina", name: "Pina Colada", color: "#f6eed2", group: 0 },
  { id: "octane", name: "Bourbon Octane", color: "#ff7a18", group: 0 },
  { id: "strawberry", name: "Strawberry", color: "#ff5c8a", group: 0 },
  { id: "mardirita", name: "Mardi Rita", color: "#d63ccf", group: 0 },
  { id: "bayou", name: "Bayou Blues", color: "#21a8f0", group: 0 },
  { id: "choc", name: "Chocolate NOLA", color: "#7a4328", group: 0 },
  { id: "watermelon", name: "Watermelon", color: "#ff8fa3", group: 1 },
  { id: "mango", name: "Mango", color: "#ffc21a", group: 1 },
  { id: "margarita", name: "Margarita", color: "#c9f27a", group: 1 },
  { id: "passion", name: "Passion Fruit", color: "#ff9a3c", group: 1 },
  { id: "whodat", name: "Who Dat", color: "#e7c36a", group: 2 },
  { id: "grenade", name: "Grenade", color: "#4fc23a", group: 2 },
];

export const FLAVOR_GROUPS = ["Originals", "Also on the board", "Premium"] as const;

export type Combo = { name: string; kind: "combo" | "specialty"; parts: string[] };

// REAL (board). `parts` are flavor ids.
export const COMBOS: Combo[] = [
  { name: "Uptown Downtown", kind: "combo", parts: ["whodat", "grenade"] },
  { name: "Jolly Rancher", kind: "combo", parts: ["grenade", "peach"] },
  { name: "Monster Juice", kind: "combo", parts: ["grenade", "margarita"] },
  { name: "Peaches & Cream", kind: "combo", parts: ["peach", "pina"] },
  { name: "Baby Maker", kind: "combo", parts: ["peach", "bayou"] },
  { name: "Blue Dream", kind: "combo", parts: ["bayou", "peach", "pina"] },
  { name: "Swamp Juice", kind: "combo", parts: ["bayou", "grenade"] },
  { name: "Krazy Cajun", kind: "combo", parts: ["peach", "whodat", "bayou", "strawberry"] },
  { name: "Nola Fizz", kind: "combo", parts: ["octane", "grenade"] },
  { name: "Zydeco Chill", kind: "combo", parts: ["octane", "mardirita", "bayou"] },
  { name: "400 Degrees", kind: "combo", parts: ["hurricane", "octane"] },
  { name: "Pink Whisper", kind: "combo", parts: ["peach", "pina", "strawberry"] },
  { name: "Nola Baby", kind: "combo", parts: ["whodat", "mardirita"] },
  { name: "Beautiful Nightmare", kind: "combo", parts: ["grenade", "peach", "bayou"] },
  { name: "Creole Swirl", kind: "combo", parts: ["mango", "strawberry"] },
  { name: "Bayou Sunset", kind: "combo", parts: ["peach", "pina", "passion"] },
  { name: "Algiers Breeze", kind: "combo", parts: ["mango", "pina"] },
  // Specialty DAQ
  { name: "Wassam Baby", kind: "specialty", parts: ["hurricane", "watermelon", "strawberry"] },
  { name: "ElChapo (Dreamsicle)", kind: "specialty", parts: ["octane", "pina"] },
  { name: "Candy Land", kind: "specialty", parts: ["watermelon", "peach", "hurricane"] },
  { name: "Type Sh*t", kind: "specialty", parts: ["peach", "watermelon"] },
  { name: "Val’s Circo Loco", kind: "specialty", parts: ["hurricane", "margarita"] },
];

export const MAX_FLAVORS = 4; // Krazy Cajun is the biggest combo on the board.

// REAL (board): display lists for the printed board section.
export const BOARD = {
  originals: [
    { name: "Hurricane" },
    { name: "Peach Bellini" },
    { name: "Pina Colada" },
    { name: "Bourbon Octane" },
    { name: "Strawberry" },
    { name: "Bayou Blues" },
    { name: "Chocolate NOLA" },
    { name: "Mardi Rita", note: "Strawberry, mango, watermelon, blueberry, passion fruit, peach" },
    {
      name: "Bourbon Sh*t Face (house)",
      note: "Hurricane, Mardi Rita, Bourbon Octane, watermelon, Peach Bellini, plus one well shot",
    },
  ],
  specialty: [
    { name: "Wassam Baby", note: "Hurricane, watermelon & strawberry" },
    { name: "ElChapo (Dreamsicle)", note: "Octane & Pina Colada" },
    { name: "Candy Land", note: "Watermelon, Peach Bellini & Hurricane" },
    { name: "Type Sh*t", note: "Peach & watermelon" },
    { name: "Val’s Circo Loco", note: "Hurricane & margarita" },
  ],
  premium: [
    { name: "Who Dat", note: "Hennessy lemonade" },
    { name: "Grenade", note: "Crown Apple" },
  ],
  combos: [
    { name: "Uptown Downtown", note: "Who Dat & Grenade" },
    { name: "Jolly Rancher", note: "Grenade & Peach Bellini" },
    { name: "Monster Juice", note: "Grenade & margarita" },
    { name: "Peaches & Cream", note: "Peach & Pina Colada" },
    { name: "Baby Maker", note: "Peach & Bayou Blues" },
    { name: "Blue Dream", note: "Bayou Blues, peach, Pina Colada" },
    { name: "Swamp Juice", note: "Bayou Blues & Grenade" },
    { name: "Krazy Cajun", note: "Peach, Who Dat, Bayou Blues & strawberry puree" },
    { name: "Nola Fizz", note: "Octane & Grenade" },
    { name: "Zydeco Chill", note: "Octane, Mardi Rita, Bayou Blues" },
    { name: "400 Degrees", note: "Hurricane & Bourbon Octane" },
    { name: "Pink Whisper", note: "Peach, Pina Colada, strawberry puree" },
    { name: "Nola Baby", note: "Who Dat & Mardi Rita" },
    { name: "Beautiful Nightmare", note: "Grenade, peach & Bayou Blues" },
    { name: "Creole Swirl", note: "Mango & strawberry" },
    { name: "Bayou Sunset", note: "Peach, Pina Colada & passion fruit puree" },
    { name: "Algiers Breeze", note: "Mango & Pina Colada" },
  ],
};

// MOCK: cup sizes and prices are placeholders.
export const CUP_SIZES = [
  { id: "d16", label: "16 oz", price: 7 }, // MOCK
  { id: "d20", label: "20 oz", price: 9 }, // MOCK
] as const;

// MOCK: premium flavor upcharge (Who Dat, Grenade). Placeholder.
export const PREMIUM_UPCHARGE = 2; // MOCK

export type FoodItem = {
  id: string;
  name: string;
  detail: string;
  price: number;
  glyph: "wings" | "mozz" | "fries" | "tots" | "tenders";
  accent: "lime" | "gold" | "pink" | "cyan";
};

// MOCK: every food item and price below is a placeholder. Typographic tiles only, no food photos.
export const FOOD: FoodItem[] = [
  { id: "wings", name: "Signature Wings", detail: "6 pc, house sauce", price: 9.99, glyph: "wings", accent: "lime" }, // MOCK
  { id: "mozz", name: "Mozzarella Sticks", detail: "6 pc, marinara", price: 7.99, glyph: "mozz", accent: "gold" }, // MOCK
  { id: "fries", name: "Fries", detail: "Seasoned crinkle-cut", price: 4.99, glyph: "fries", accent: "pink" }, // MOCK
  { id: "tots", name: "Tater Tots", detail: "House seasoning", price: 5.99, glyph: "tots", accent: "cyan" }, // MOCK
  { id: "tenders", name: "Chicken Tenders", detail: "4 pc, dipping sauce", price: 8.99, glyph: "tenders", accent: "gold" }, // MOCK
];
