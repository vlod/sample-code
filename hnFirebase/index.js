/**
 * Pulls from HN articles form the firebase store.
 *
 * Since we have ~ 500 articles to process, use a promise-queue
 * to limit concurreny to 20 requests to prevent overloading our and the remote server
 */
const firebase = require('firebase');
const Queue = require('simple-promise-queue');

firebase.initializeApp({
  "appName" : "HN Firebase",
  "databaseURL" : "https://hacker-news.firebaseio.com/"
});

const queue = new Queue({
  autoStart: true, // autostart the queue
  concurrency: 20,
});

// keep track of the promises so we know when all have completed
const promiseArr = [];

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
        };
      }
    })
    .catch((err) => {
      Promise.reject(err);
    });
}

/**
 * Pull details from firebase for this Array of id's
 * @param {Array} items
 *
 */
function getItems(items) {
  const results = [];

  for (const item of items) {
    // we have aroound 500 items, so we need to use a queue with a concurrency limit
    // to prevent overloading our and remote server
    const promise = queue.pushTask(function (resolve, reject) {
      getItem(item)
        .then((result) => {
          results.push(result);
          resolve();
        })
        .catch((err) => { reject(err) });
    });

    // we need to keep track of these promises so we know when they've completed
    promiseArr.push(promise);
  }

  console.log('..waiting for queue to empty');

  // this fires when all promises in the queue have been resolved
  return Promise.all(promiseArr)
    .then(function() {
      console.log('done! queue empty!');
      return results;
    });
}

// Connect to firebase and pull down id's for top stories
firebase.app().database().ref("v0/topstories").once('value')
  .then(snapshot => getItems(snapshot.val()))
  .then((results) => {
    console.log(JSON.stringify(results, null, 2));

    // disconnect from firebase, otherwise it waits for new records
    firebase.database().goOffline();
  })
  .catch((err) => {
    console.log('error: ', err);
  });
