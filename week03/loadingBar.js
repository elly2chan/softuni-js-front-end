function loadingBar(num) {
    if (num / 10 != 10) {
        let percentages = '%'.repeat(num / 10);
        let loading = '.'.repeat(10 - (num / 10));
        console.log(`${num}% [${percentages + loading}]\nStill loading...`);  
    } else {
        console.log(`100% Complete!\n[${'%'.repeat(10)}]`);
    }
}

loadingBar(100);