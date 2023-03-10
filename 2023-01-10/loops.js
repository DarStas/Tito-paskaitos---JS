// cycles - ciklai

const orderNumberOfCars = (numberOfCars) => {


    for(let i = 1; i <= numberOfCars; i++) {
        console.log(` car ${i} has been ordered`);

    }

    console.log("finished");
}

orderNumberOfCars(10)


// types of cycles: for, while, do...while

const manufactureCars = (availableParts) => {
    let i = 1;
    while (i <= availableParts) {
        console.log(`manufactured a car with number: ${i}`);
        i++;
    }

    console.log("finished");
}

manufactureCars(10);

// do...while

const writeATicket = (isSpeeding) => {
    const maxTicketCount = 10;
    let i = 1;
    do {
        if (i === maxTicketCount) {
            console.log("Your driver licence has been revoked.");
            break;
        }
        console.log("Driver has received a ticket for speeding.");
        i++
    } while (isSpeeding && maxTicketCount > i)
}

writeATicket(true);