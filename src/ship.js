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

export function ship(length) {
  let timesHit = 0;

  return {
    getTimesHit: function () {
      return timesHit;
    },
    hit: function () {
      timesHit += 1;
    },
    isSunk: function () {
      return timesHit === length ? true : false;
    },
  };
}
