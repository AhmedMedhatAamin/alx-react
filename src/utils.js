// function named getFullYear that will return the current year

export function getFullYear() {
    return new Date().getFullYear();
}

// function named getFooterCopy accept one argument isIndex when it is true return Holberton School if false otherwise Holberton School main dashboard

export function getFooterCopy(isIndex) {
    if (isIndex) {
        return "Holberton School";
    } else {
        return "Holberton School main dashboard";
    }
}

// function named getDayOfWeek that will return the current day of the week

// creating function that returns the following string <strong>Urgent requirement</strong> - complete by EOD
export function getLatestNotification() {
    return "<strong>Urgent requirement</strong> - complete by EOD";

}