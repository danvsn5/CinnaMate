var PageID: globalAppVariables;

/**
 * Contains two variables:
 * pageIdentifier: string value that is associated with the page the user has previously been on; variable is set
 * in the home page, browsing page and my movies page
 * onMovie: boolean value that is assocaited with whether or not the user is currently in an expanded movie;
 * variable is used in conditional rendering for visual elements
 */
type globalAppVariables = {
  pageIdentifier: string;
  onMovie:boolean
};

// set the values.
globalThis.PageID= {

  pageIdentifier: "",
  onMovie: false
  
};