const link1800 = `${__dirname}/users/1800`
const link2000 = `${__dirname}/users/2000`

const fs = require('fs');
const path = require("path");

fs.readdir(link1800, (err, data) => {
    if (err) {
        console.log('__________________________________');
        console.log(err);
        console.log('__________________________________');
        return;
    }
    data.forEach(value => {
        fs.rename(path.join(link1800, value), path.join(link2000, value), (err) => {
            if (err) {
                console.log('__________________________________');
                console.log(err);
                console.log('__________________________________');
            }
        })

    })
})

fs.readdir(link2000, (err, data) => {
    if (err) {
        console.log('__________________________________');
        console.log(err);
        console.log('__________________________________');
        return;
    }
    data.forEach(value => {
        fs.rename(path.join(link2000, value), path.join(link1800, value), (err) => {
            if (err) {
                console.log('__________________________________');
                console.log(err);
                console.log('__________________________________');
            }
        })
    })
})


// -------------------------------------------------------------------------------


const fs = require('fs');


const path = require("path");
const girls = `${__dirname}/girls`
const boys = `${__dirname}/boys`;

let gender = path.join(__dirname, "users");


fs.mkdir(girls, {recursive: true}, (err) => {
    if (err) {
        console.log(err);
    }
    fs.mkdir(boys, {recursive: true}, (err) => {
        if (err) {
            console.log(err);
        }


        let array;
        let jsonchik;


        fs.readdir(gender, (err, dir) => {
            if (err) {
                console.log('__________________________________');
                console.log(err);
                console.log('__________________________________');
                return;
            }
            dir.forEach(Direct => {
                fs.readdir(path.join(gender, Direct), ((err, data) => {
                    if (err) {
                        console.log('__________________________________');
                        console.log(err);
                        console.log('__________________________________');
                        return;
                    }
                    data.forEach(dataDaughter => {
                            fs.readFile(path.join(gender, Direct, dataDaughter), ((err2, data) => {
                                console.log(path.join(gender, Direct, dataDaughter))
                                array = data.toString();
                                jsonchik = JSON.parse(array);
                                if (jsonchik.gender === 'male') {
                                    fs.rename(path.join(gender, Direct, dataDaughter), path.join(boys, dataDaughter), (err) => {
                                        if (err) {
                                            console.log('__________________________________');
                                            console.log(err);
                                            console.log('__________________________________');
                                        }

                                    })
                                } else if (jsonchik.gender === 'female') {
                                    fs.rename(path.join(gender, Direct, dataDaughter), path.join(girls, dataDaughter), (err) => {
                                        if (err) {
                                            console.log('__________________________________');
                                            console.log(err);
                                            console.log('__________________________________');
                                        }

                                    })
                                }
                            }))
                        }
                    )
                }))
            })

        })

    })
})













