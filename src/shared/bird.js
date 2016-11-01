// @flow

class Bird {
  name: string;

  constructor(name: string) {
    this.name = name
  }

  talk(): string {
    return `${this.name}, you there?`
  }

  talkInConsole() {
    /* eslint-disable no-console */
    console.log(this.talk())
    /* eslint-enable no-console */
  }
}

export default Bird
