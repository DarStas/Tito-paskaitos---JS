const users = [
    {
        id: Math.random(),
        firstName: 'Jessica',
        lastName: 'Silver',
        age: 21,
        hasIdentificationDocument: true,
        isBanned: false,
    },
    {
        id: Math.random(),
        firstName: 'Tom',
        lastName: 'Wood',
        age: 30,
        hasIdentificationDocument: false,
        isBanned: false,
    },
    {
        id: Math.random(),
        firstName: 'Allen',
        lastName: 'Green',
        age: 26,
        hasIdentificationDocument: true,
        isBanned: true,
    },
    {
        id: Math.random(),
        firstName: 'Joshua',
        lastName: 'Timber',
        age: 19,
        hasIdentificationDocument: true,
        isBanned: false,
    },
];

// REDUCE



const userGroups = users.reduce((acc, user) => {
    if (user.age >= 21) {
        acc[1].push(user)
        
    } else {
        acc[0].push(user)
    }

    return acc;
}, [[], []])

const userGroupsAsObject = users.reduce((groupedUsers, user) => {
    if (user.age >= 21) {
        groupedUsers.adults.push(user);
    } else {
        groupedUsers.underaged.push(user);
    }

    return groupedUsers;
}, {underaged: [], adults: []})

console.log(userGroupsAsObject);