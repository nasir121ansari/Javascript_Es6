// A Promise is a way to handle asynchronous operations. 
/*
A Promise has three states:

Pending: The initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.
*/


const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            res('resolve')
        } else {
            rej('reject')
        }
    }, 2000);

})

myPromise.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log('This will run regardless of the outcome');
})



// async/await

// async/await is syntactic sugar built on top of Promises.

// async Function: Declares an asynchronous function. It implicitly returns a Promise.
// await Expression: Pauses the execution of the async function, waiting for the Promise to resolve or reject.

const fetchData = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                res('Data fetched successfully');
            } else {
                rej('Data fetching failed');
            }
        }, 2000)
    })
}


const getData = async () => {
    try {
        const result = await fetchData();
        console.log(result)

    } catch (error) {
        console.error(error); //
    } finally {
        console.log('This will run regardless of the outcome');
    }

}

getData()




// Promise chaining is a technique in JavaScript where you chain multiple promises together to handle a sequence of asynchronous operations. 

/*
How Promise Chaining Works
1.Sequential Execution: Each .then() method waits for the previous promise to be resolved.
2.Passing Results: The result of the previous promise is passed to the next .then() method.
3.Error Handling: Errors can be caught using .catch() at the end of the chain.
*/


// Simulate an asynchronous operation to fetch a user
const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetched user');
            resolve({ userId: 1 });
        }, 1000);
    });
};

// Simulate an asynchronous operation to fetch the user's profile
const fetchUserProfile = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetched user profile for user', user.userId);
            resolve({ userId: user.userId, profileId: 100 });
        }, 1000);
    });
};

// Simulate an asynchronous operation to fetch the user's activity log
const fetchUserActivity = (profile) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetched activity log for profile', profile.profileId);
            resolve(['Activity1', 'Activity2']);
        }, 1000);
    });
};

// Chaining the promises
fetchUser()
    .then(user => fetchUserProfile(user))
    .then(profile => fetchUserActivity(profile))
    .then(activities => {
        console.log('Fetched activities:', activities);
    })
    .catch(error => {
        console.error('Error:', error);
    });



// Promise.all
// The Promise.all() static method takes an iterable of promises as input and returns a single Promise .
// This method takes an array of promises ([fetchData1(), fetchData2(), fetchData3()]) and returns a single promise.
// then Block: When all promises resolve, the then block is executed with an array of results from all promises. The result order matches the order of the promises passed to Promise.all.
// catch Block: If any of the promises reject, the catch block is executed immediately with the rejection reason.


const fetchData1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetched data from source 1');
            resolve('Data 1');
        }, 1000);
    });
};

const fetchData2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetched data from source 2');
            resolve('Data 2');
        }, 2000);
    });
};

const fetchData3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetched data from source 3');
            resolve('Data 3');
        }, 1500);
    });
};

Promise.all([fetchData1(), fetchData2(), fetchData3()])
    .then((results) => {
        console.log('All data fetched:', results); // ["Data 1", "Data 2", "Data 3"]
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });



// Promise.all
// Runs multiple promises in parallel and waits for all of them to resolve. Rejects immediately if any promise rejects, and no further promises are processed.



// Promise.allSettled  : Runs multiple promises in parallel Waits for all promises to settle, regardless of whether they resolve or reject.




// Async and defer

/*
async: The script runs as soon as it is downloaded, which can interrupt the HTML parsing.
<script src="script1.js" async></script>
// defer: The script runs after the HTML parsing is complete, maintaining the order of execution.
<script src="script2.js" async></script>
*/



// Local Storage

// Data stored in local storage has no expiration time. It remains available even after the browser is closed and reopened.
// Data is shared across all tabs and windows with the same origin (domain).


// Session Storage

// Data stored in session storage is only available for the duration of the page session. It is cleared when the page session ends.
// Data is not shared across tabs or windows. 

/*
API Methods:
setItem(key, value): Stores a key-value pair.
getItem(key): Retrieves the value for a given key.
removeItem(key): Removes the key-value pair for a given key.
clear(): Clears all key-value pairs in the storage.
*/




function fetchData() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                if (!response.ok) {
                    reject(new Error('Network response was not ok'));
                }
                return response.json();
            })
            .then((data) => {
                resolve(data); // Resolve the promise with the data
            })
            .catch((err) => {
                reject(err); // Reject the promise on error
            });
    });
}

// Using the fetchData function
fetchData()
    .then((data) => {
        console.log(data); // Handle the fetched data
    })
    .catch((error) => {
        console.error('Error fetching data:', error); // Handle any errors
    });