// The Daily Grid — puzzle bank. One entry per grid, in the order they go live.
// level 1 = 🟨 easiest … level 4 = 🟪 hardest. "trap" is the author's note on why the answer is forced.
window.PUZZLES = [
  { "id": 1,
    "groups": [
      { "level": 1, "label": "Months", "words": ["JUNE","AUGUST","MARCH","APRIL"] },
      { "level": 2, "label": "Chocolate bars", "words": ["MARS","GALAXY","TWIX","BOUNTY"] },
      { "level": 3, "label": "Planets", "words": ["VENUS","SATURN","NEPTUNE","URANUS"] },
      { "level": 4, "label": "Members of Queen", "words": ["MERCURY","MAY","TAYLOR","DEACON"] }
    ],
    "trap": "MARS and MERCURY both look like planets (six candidates), and MAY looks like a month (five). But chocolate only has four without MARS, and Queen only works with MERCURY and MAY." },
  { "id": 2,
    "groups": [
      { "level": 1, "label": "Card games", "words": ["SNAP","BRIDGE","RUMMY","WHIST"] },
      { "level": 2, "label": "London bridges", "words": ["TOWER","WESTMINSTER","MILLENNIUM","SOUTHWARK"] },
      { "level": 3, "label": "ABBA songs", "words": ["WATERLOO","FERNANDO","SOS","CHIQUITITA"] },
      { "level": 4, "label": "___ FACE", "words": ["POKER","BABY","ABOUT","TYPE"] }
    ],
    "trap": "WATERLOO is a London bridge and an ABBA song, but ABBA is one short without it. POKER is a card game, but ___ FACE needs it. BRIDGE sits in plain sight among the London bridges." },
  { "id": 3,
    "groups": [
      { "level": 1, "label": "Full English", "words": ["BEANS","TOAST","SAUSAGE","MUSHROOM"] },
      { "level": 2, "label": "___ CUP", "words": ["TEA","WORLD","BUTTER","EGG"] },
      { "level": 3, "label": "Famous Kevins", "words": ["KEEGAN","COSTNER","HART","PIETERSEN"] },
      { "level": 4, "label": "Philosophers", "words": ["HUME","LOCKE","MILL","BACON"] }
    ],
    "trap": "BACON and EGG scream fry-up, which gives six candidates. ___ CUP only works with EGG, and Francis BACON completes the philosophers. Kevin Bacon is a deliberate red herring, since the Kevins group is already full." },
  { "id": 4,
    "groups": [
      { "level": 1, "label": "Snooker balls", "words": ["RED","YELLOW","GREEN","BROWN"] },
      { "level": 2, "label": "___ BERRY", "words": ["BLACK","BLUE","STRAW","RASP"] },
      { "level": 3, "label": "Animals that are also verbs", "words": ["BEAR","DUCK","FLY","BADGER"] },
      { "level": 4, "label": "One-name singers", "words": ["PINK","ADELE","DIDO","SEAL"] }
    ],
    "trap": "PINK, BLACK and BLUE are also snooker balls (seven candidates). SEAL is an animal and a verb. But the berries need BLACK and BLUE, and the singers need PINK and SEAL." },
  { "id": 5,
    "groups": [
      { "level": 1, "label": "Golf scores", "words": ["EAGLE","BIRDIE","PAR","BOGEY"] },
      { "level": 2, "label": "___ BOARD", "words": ["SKATE","SURF","KEY","DART"] },
      { "level": 3, "label": "Cricket fielding positions", "words": ["SLIP","GULLY","POINT","COVER"] },
      { "level": 4, "label": "Ways to say nothing", "words": ["NIL","LOVE","DUCK","ZILCH"] }
    ],
    "trap": "DUCK is cricket, which pulls players towards the fielding group. LOVE is tennis. Both actually mean zero." },
  { "id": 6,
    "groups": [
      { "level": 1, "label": "Coffees", "words": ["LATTE","MOCHA","CORTADO","AMERICANO"] },
      { "level": 2, "label": "English rivers", "words": ["THAMES","SEVERN","TRENT","AVON"] },
      { "level": 3, "label": "Shakespeare plays", "words": ["HAMLET","MACBETH","OTHELLO","CYMBELINE"] },
      { "level": 4, "label": "Make-up brands", "words": ["RIMMEL","NARS","CLINIQUE","MAYBELLINE"] }
    ],
    "trap": "AVON is a make-up brand (five candidates) and Shakespeare's river. The rivers are one short without it." },
  { "id": 7,
    "groups": [
      { "level": 1, "label": "Summer Olympic hosts", "words": ["LONDON","TOKYO","ATHENS","SYDNEY"] },
      { "level": 2, "label": "Spice Girls", "words": ["SCARY","SPORTY","BABY","POSH"] },
      { "level": 3, "label": "___ BREAD", "words": ["GINGER","SHORT","SODA","CORN"] },
      { "level": 4, "label": "Trojan War figures", "words": ["PARIS","HECTOR","ACHILLES","HELEN"] }
    ],
    "trap": "PARIS hosted the Olympics (five candidates) and GINGER was a Spice Girl (five). The bread group and the Trojans each need the one that's left over." }
];
