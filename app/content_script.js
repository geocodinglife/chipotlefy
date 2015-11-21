var myOrder = {
  'guac': true,
  'extraMeat': false,
  'protien': 'chicken',
};

function convertDollarsToBurritos(dollars, order) {
  price = priceOfChipotleOrder(order);
  burritoCount = dollars / price;
  return burritoCount;
}

function getDollarsFromMatch(match) {
  dollars = parseInt(match);
  strings = ['hundred', 'thousand', 'million', 'billion', 'trillion'];
  numbers = [100, 1000, 1000000, 100000000, 1000000000000];
  for (var i = 0; i < strings.length; i++) {
    if (match.indexOf(strings[i]) > 0) {
      dollars = dollars * numbers[i];
    }
  }
  return dollars;
}

function priceOfChipotleOrder(order) {
  var myPrice = 0
  var guacPrice = 1.95;
  var protienPrices = {
    'chicken': 6.5,
    'steak': 7.5,
    'carnitas': 6.95,
    'barbacoa': 7.5,
    'sofritas': 6.5,
    'vegitarian': 6.5
  };

  myPrice += protienPrices[order['protien']];
  if (order['guacamole'] && order['meat'] !== 'vegitarian') {
    myPrice += 1.9;
  }
  return myPrice
}

function processMatch(match) {
  dollars = getDollarsFromMatch(match);
  burritos = convertDollarsToBurritos(dollars, order);
  return "<span class='chipotlefied' data-original=" + match + ">OMGOMG" + burritos + "OMGOMG</span>";
}

function findAndReplace(el) {
  var re = /\$([\d,]+)(\.\d+)? ?(hundred|thousand|million|billion|trillion)?|\$?([\d,\.]+) (\w+)? ?dollars/g; 

  var nodes = el.childNodes;
  for (var n = 0; n < nodes.length; n++) {
    if (nodes[n].nodeType == Node.TEXT_NODE) {
      nodes[n].textContent = nodes[n].textContent.replace(re, processMatch);
    } else {
        findAndReplace(nodes[n]);
    }
  }
}

findAndReplace(document)