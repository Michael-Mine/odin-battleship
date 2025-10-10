export function Ship(name, length) {
  function hit() {
    this.timesHit += 1;
  }

  function isSunk() {
    if (this.timesHit === this.length) this.sunk = true;
  }

  return { name, length, timesHit: 0, sunk: false, hit, isSunk };
}
