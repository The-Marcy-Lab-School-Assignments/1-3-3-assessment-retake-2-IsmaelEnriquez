const fixVariables = (temp) => {
  if (temp < 30) {
    msg = 'Pretty chilly.';
  } else if (temp < 70) {
    msg = 'Not bad.';
  } else if (temp < 100) {
    msg = 'On the hot side.';
  } else {
    msg = 'I will die of heat.';
  }
  console.log(msg);
  console.log("And that's how I feel about the temp!");
  return msg;
};

const doubleAllItemsPurely = (arr) => {
return arr.map((num) => num * 2)
};

const addChildToParentMutation = (parent, child) => {
  parent.children.push(child);
  return parent;
};

module.exports = {
  fixVariables,
  doubleAllItemsPurely,
  addChildToParentMutation,
};
