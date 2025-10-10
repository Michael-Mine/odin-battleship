export function Ship(length) {
  return {
    length,
    timesHit: 0,
    sunk: false,
    hit: function () {
      this.timesHit += 1;
      this.isSunk();
    },
    isSunk: function () {
      if (this.timesHit === this.length) this.sunk = true;
    },
  };
}
