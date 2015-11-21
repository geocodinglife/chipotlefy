
function convertMillionsAndBillions(args) {

}

function processMatch(match) {
  number = convertMillionsAndBillions(match)
}

function findAndReplace(el) {
  var re = /\$([\d,]+)(\.\d+)? ?(hundred|thousand|million|billlion|trillion)?|\$?([\d,\.]+) (\w+)? ?dollars/g; 

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