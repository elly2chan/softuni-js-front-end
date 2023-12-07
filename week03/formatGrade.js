function formatGrade (grade) {
    switch (true) {
        case grade < 3.00: console.log(`Fail (2)`); break;
        case grade >= 3.00 && grade < 3.50: console.log(`Poor (${grade.toFixed(2)})`); break;
        case grade >= 3.50 && grade < 4.50: console.log(`Good (${grade.toFixed(2)})`); break;
        case grade >= 4.50 && grade < 5.50: console.log(`Very good (${grade.toFixed(2)})`); break;
        case grade >= 5.50: console.log(`Excellent (${grade.toFixed(2)})`); break;
    }
}

formatGrade(4.5);