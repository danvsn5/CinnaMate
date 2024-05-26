var PageID: globalAppVariables;

var loggedInState: globalUserVariables

/**
 * Contains two variables:
 * pageIdentifier: string value that is associated with the page the user has previously been on; variable is set
 * in the home page, browsing page and my movies page
 * onMovie: boolean value that is assocaited with whether or not the user is currently in an expanded movie;
 * variable is used in conditional rendering for visual elements
 */
type globalAppVariables = {
  pageIdentifier: string;
  onMovie: boolean
};


/**
 * Contains two variables:
 * isLoggedIn: boolean value that is associated with whether no the the user user currently logged in;
 * variable is used throughout app for accessing individual database elements and rendering
 * username: string value that will be used when querying the Firestore database so that items can be 
 * added, editied and removed from the correct user
 */
type globalUserVariables = {
  isLoggedIn: boolean
  username: string
};

globalThis.loggedInState = {

  isLoggedIn: false,
  username: ""

}

// set the values.
globalThis.PageID = {

  pageIdentifier: "",
  onMovie: false

};