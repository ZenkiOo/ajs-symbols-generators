export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (!this.members.has(char)) {
      this.members.add(char);
    } else {
      throw new Error('Pers allready exist');
    }
  }

  addAll(...chars) {
    chars.forEach((char) => {
      this.members.add(char);
    });
  }

  toArray() {
    return [...this.members];
  }

  * [Symbol.iterator]() {
    const members = this.toArray();
    for (let i = 0; i < members.length; i++) yield members[i];
  }
}
