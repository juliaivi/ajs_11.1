export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже есть!!!');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator]() {
    let current = 0;
    const teams = this.toArray();

    return {
      next() {
        if (current > teams.length - 1) {
          return {
            value: undefined,
            done: true,
          };
        }
        const teamValue = teams[current];
        current++;
        return {
          value: teamValue,
          done: false,
        };
      },
    };
  }
}
