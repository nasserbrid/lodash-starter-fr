// let _ = {};
// console.log("test");

//1ère méthode
// const _ = {
//     clamp(){},
//     chunk()
// }
//
const _ = {};

_.clamp = function (a, b, c) {
  const lower = Math.min(b, c);
  const upper = Math.max(b, c);

  if (a < lower) {
    return lower;
  }

  if (a > upper) {
    return upper;
  }

  return a;
};

_.inRange = function (a, b, c) {
  if (typeof c === "undefined") {
    c = b;
    b = 0;
  }
  if (b > c) {
    let temp = b;
    b = c;
    c = temp;
  }

  if (a >= b && a < c) {
    return true;
  }

  // if (a > c) {
  //   return false;
  // }

  // if (a === c) {
  //   return false;
  // }

  // if (a > c) {
  //   return false;
  // }

  // if (a < b) {
  //   return false;
  // }

  // if (a < b && a < c) {
  //   return false;
  // }
  // if (a > b && a > c) {
  //   return false;
  // }
  //On remplace la partie au dessus par:
  return false;
};

_.words = function (str, tab2) {
  let words = str.split(" ");

  return words;
};

_.words_pattern = function (str, tab2) {
  let words = str.split(tab2);

  words = words.map((word) => word.trim());

  return words;
};

_.pad = function (str, a) {
  if (str.length >= a) {
    return str;
  }

  const espace = a - str.length;

  const espaceAGauche = Math.floor(espace / 2);

  const espaceADroite = Math.floor(espace / 2);

  const padStr = " ".repeat(espaceAGauche) + str + " ".repeat(espaceADroite);

  return padStr;
};

_.pad_with_pattern = function (str, a, motif) {
  if (str.length >= a) {
    return str;
  }

  const espace = a - str.length;

  const espaceAGauche = Math.floor(espace / 2);

  const espaceADroite = Math.ceil(espace / 2);

  const padStr =
    motif.repeat(espaceAGauche) + str + motif.repeat(espaceADroite);

  return padStr;
};

_.has = function (object, key) {
  //var object = { 'a': { 'b': 2 } };
  //_.has(object, 'a');
  // => true
  //_.has(object, 'a.b');
  // => true
  return object.hasOwnProperty(key);
};

_.invert = function (object) {
  //var object = { 'a': 1, 'b': 2, 'c': 1 };
  //_.invert(object);
  // => { '1': 'c', '2': 'b' }
  //On va d'abord échanger la clé et la valeur
  let invertObject = {};

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      invertObject[object[key]] = key;
    }
    return invertObject;
  }
};

_.findKey = function (object, predicate) {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      const valeur = object[key];

      if (predicate(valeur)) {
        return key;
      }
    }
  }

  return undefined;
};

_.drop = function (arr, n) {
  if (n) {
    return arr.slice(n);
  } else {
    return arr.slice(1);
  }
};

_.dropWhile = function (tab, predicate) {
  let dropIndex = 0;

  for (let i in tab) {
    if (!predicate(tab[i], i, tab)) {
      break;
    }
    dropIndex++;
  }

  return tab.slice(dropIndex);
};

_.chunk = function (array, size) {
  //divise le tableau fourni en tableau de la taille spécifié
  let tab2 = [];
  let result = array.slice(0, size);
  tab2.push(result);
  for (let i = size; i < array.length; i += size) {
    result = array.slice(i, i + size);
    tab2.push(result);
  }

  return tab2;
};

_.compact = function (array) {
  //_.compact([0, 1, false, 2, '', 3]); 0, false et "" (falsy)
  //on va éliminer les valeurs falsy: [1,2,3]
  let tab2 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0 && array[i] !== "" && array[i] !== false) {
      tab2.push(array[i]);
    }
  }
  return tab2;
};
// Do not write or modify code below this line.
module.exports = _;
