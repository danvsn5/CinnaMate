// define our parent property accessible via globalThis. Also apply the TypeScript type.
var ting: globalAppVariables;

// define the child properties and their types. 
type globalAppVariables = {
  tingValue: number;
  // more can go here. 
};

// set the values.
globalThis.ting = {
  tingValue: 0,
  // more can go here.
};