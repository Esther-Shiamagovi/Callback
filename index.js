// 1 Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
// The function should log the message to the console after the specified delay time
function greet() {
    console.log('Hello world');
}

setTimeout(greet, 3000);
console.log('Hi welcome to hello world');


// 2You have an array of user IDs and a function getUserData(id) that returns a Promise with user data
//  when given a user ID. Write an asynchronous function that fetches and logs the data for each user ID 
// one by one, in sequence.

async function getUserData(userIDs) {
    const userDataArray = [];

    for (const userId of userIDs) {
        try {
            const userData = await getUserData(userId);
            userDataArray.push(userData);
            console.log(`User data for ID ${userId}:`, userData);
        } catch (error) {
            console.error(`Error fetching data for ID ${userId}:`, error.message);
        }
    }

    console.log(`Fetched data for ${userIds.length} user IDs.`);
}

const userIds = [1, 2, 3]; 
getUserData(userIds);

//3You have an array of user IDs and a function getUserData(id) that returns a Promise with user data
//  when given a user ID. Write an asynchronous function that fetches and logs the data for each user 
// ID one by one, in sequence.

async function handleTask() {
    try {
        await performTask(); 
        console.log("Task completed successfully!");
    } catch (error) {
        console.error("Error performing the task:", error.message);
    }
}

handleTask();

//4 A function to return task probability within the range of 0 and 1 returning a promise for  both
//  passing and failing probability with a message

function unstableTask(taskName, failureProbability) {
    if (failureProbability >= 0 && failureProbability <= 1) {
        if (failureProbability < 0.5) {
            return `Task '${taskName}' succeeded.`;
        } else {
            return `Task '${taskName}' failed.`;
        }
    } else {
        return "Failure probability must be between 0 and 1.";
    }
}

const taskName = "Perform Data Analysis";
const failureProb = 0.3; 
const result = unstableTaskDeterministic("Watching", 0.8);
console.log(result);
