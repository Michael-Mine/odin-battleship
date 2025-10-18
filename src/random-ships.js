export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getRandomShips() {
  const ships = [];
  const ship1 = getShipLength4Row();
  ships.push(...ship1);

  let ship2;
  let ship3;
  let ship4;
  let ship5;
  let ship6;
  let ship7;
  let ship8;
  let ship9;
  let ship10;

  do {
    ship2 = getShipLength3Row();
  } while (ships.some((v) => ship2.includes(v)));
  ships.push(...ship2);

  do {
    ship3 = getShipLength2Row();
  } while (ships.some((v) => ship3.includes(v)));
  ships.push(...ship3);

  do {
    ship4 = getShipLength3Column();
  } while (ships.some((v) => ship4.includes(v)));
  ships.push(...ship4);

  do {
    ship5 = getShipLength2Column();
  } while (ships.some((v) => ship5.includes(v)));
  ships.push(...ship5);

  do {
    ship6 = getShipLength2Column();
  } while (ships.some((v) => ship6.includes(v)));
  ships.push(...ship6);

  do {
    ship7 = getShipLength1();
  } while (ships.some((v) => ship7.includes(v)));
  ships.push(...ship7);

  do {
    ship8 = getShipLength1();
  } while (ships.some((v) => ship8.includes(v)));
  ships.push(...ship8);

  do {
    ship9 = getShipLength1();
  } while (ships.some((v) => ship9.includes(v)));
  ships.push(...ship9);

  do {
    ship10 = getShipLength1();
  } while (ships.some((v) => ship10.includes(v)));
  ships.push(...ship10);

  return ships;
}

function getShipLength4Row() {
  let shipStart = [getRandomInt(10), getRandomInt(10)];
  let shipMiddle1;
  let shipMiddle2;
  let shipEnd;

  if (shipStart[1] > 5) {
    shipMiddle1 = [shipStart[0], shipStart[1] - 1];
    shipMiddle2 = [shipStart[0], shipStart[1] - 2];
    shipEnd = [shipStart[0], shipStart[1] - 3];
  } else {
    shipMiddle1 = [shipStart[0], shipStart[1] + 1];
    shipMiddle2 = [shipStart[0], shipStart[1] + 2];
    shipEnd = [shipStart[0], shipStart[1] + 3];
  }
  return [
    shipStart.toString(),
    shipMiddle1.toString(),
    shipMiddle2.toString(),
    shipEnd.toString(),
  ];
}

function getShipLength3Row() {
  let shipStart = [getRandomInt(10), getRandomInt(10)];
  let shipMiddle;
  let shipEnd;

  if (shipStart[1] > 4) {
    shipMiddle = [shipStart[0], shipStart[1] - 1];
    shipEnd = [shipStart[0], shipStart[1] - 2];
  } else {
    shipMiddle = [shipStart[0], shipStart[1] + 1];
    shipEnd = [shipStart[0], shipStart[1] + 2];
  }
  return [shipStart.toString(), shipMiddle.toString(), shipEnd.toString()];
}

function getShipLength2Row() {
  let shipStart = [getRandomInt(10), getRandomInt(10)];
  let shipEnd;

  if (shipStart[1] > 3) {
    shipEnd = [shipStart[0], shipStart[1] - 1];
  } else {
    shipEnd = [shipStart[0], shipStart[1] + 1];
  }
  return [shipStart.toString(), shipEnd.toString()];
}

function getShipLength3Column() {
  let shipStart = [getRandomInt(10), getRandomInt(10)];
  let shipMiddle;
  let shipEnd;

  if (shipStart[0] > 4) {
    shipMiddle = [shipStart[0] - 1, shipStart[1]];
    shipEnd = [shipStart[0] - 2, shipStart[1]];
  } else {
    shipMiddle = [shipStart[0] + 1, shipStart[1]];
    shipEnd = [shipStart[0] + 2, shipStart[1]];
  }
  return [shipStart.toString(), shipMiddle.toString(), shipEnd.toString()];
}

function getShipLength2Column() {
  let shipStart = [getRandomInt(10), getRandomInt(10)];
  let shipEnd;

  if (shipStart[0] > 4) {
    shipEnd = [shipStart[0] - 1, shipStart[1]];
  } else {
    shipEnd = [shipStart[0] + 1, shipStart[1]];
  }
  return [shipStart.toString(), shipEnd.toString()];
}

function getShipLength1() {
  let ship = [getRandomInt(10), getRandomInt(10)];

  return [ship.toString(), ship.toString()];
}
