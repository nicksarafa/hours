class Bird {

  constructor(name) {
    this.name = name
  }

  talk() {
    return `${this.name}, you there?`
  }

  talkInConsole() {
    /* eslint-disable no-console */
    console.log(this.talk())
    /* eslint-enable no-console */
  }
}

export default Bird
