/**
 * Pulls from HN articles form the firebase store
 */
const firebase = require('firebase');

firebase.initializeApp({
  "appName" : "HN Firebase",
  "databaseURL" : "https://hacker-news.firebaseio.com/"
});

const MAX_POSTS = 20;

/**
 * Pull details from firebase for this id
 * @param {Integer} item
 *
 */
function getItem(item) {
  return firebase.app().database().ref(`v0/item/${item}`).once("value")
    .then((snapshot) => {
      const post = snapshot.val();

      if (post !== null) {
        return {
          title: post.title,
          url: post.url,
        }
      }
    });
}

/**
 * Pull details from firebase for this Array of id's
 * @param {Array} items
 *
 */
async function getItems(items) {
  const results = [];

  // to save time, don't bother processing all the items for now
  for (const item of items.slice(0, MAX_POSTS)) {
    const post = await getItem(item);
    results.push(post);
  }
  return results;
}

// Connect to firebase and pull down id's for top stories
firebase.app().database().ref("v0/topstories").once('value')
  .then(snapshot => getItems(snapshot.val()))
  .then((results) => {
    console.log('results: ', results);

    // disconnect from firebase, otherwise it waits for new records
    firebase.database().goOffline();
  });
