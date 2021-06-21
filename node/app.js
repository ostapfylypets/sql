const users = [
    {name: 'olya', gender: 'female', age: 19},
    {name: 'ostap', gender: 'male', age: 21},
    {name: 'oleg', gender: 'male', age: 19},
    {name: 'anya', gender: 'female', age: 24},
    {name: 'andriy', gender: 'male', age: 10},
    {name: 'tanya', gender: 'female', age: 110}];


const fs = require('fs');
const path = require("path");
const manOld=`${__dirname}/manOlder20`
const manYounger=`${__dirname}/manYounger20`
const womanOld=`${__dirname}/womanOlder20`
const womanYounger=`${__dirname}/womanYounger20`

function nameText() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].gender === 'female') {
            if (users[i].age <= 20) {
                const filePath = path.join(__dirname, 'womanYounger20', users[i].name+'.txt');
                fs.writeFile(filePath, `${users[i].name.toString()}`, (err) => {
                    if (err) {
                        console.log('__________________________________');
                        console.log(err);
                        console.log('__________________________________');
                    }
                })
            }
        }
            if (users[i].gender === 'female') {
                if (users[i].age >= 20) {
                    const filePath = path.join(__dirname, 'womanOlder20', users[i].name+'.txt');

                    fs.writeFile(filePath, `${users[i].name.toString()}`, (err) => {
                        if (err) {
                            console.log('__________________________________');
                            console.log(err);
                            console.log('__________________________________');
                        }
                    })
                }
            }
                if (users[i].gender === 'male') {
                    if (users[i].age <= 20) {
                        const filePath = path.join(__dirname, 'manYounger20', users[i].name+'.txt');
                        fs.writeFile(filePath, `${users[i].name.toString()}`, (err) => {
                            if (err) {
                                console.log('__________________________________');
                                console.log(err);
                                console.log('__________________________________');
                            }
                        })
                    }
                }
                    if (users[i].gender === 'male') {
                        if (users[i].age >= 20) {
                            const filePath = path.join(__dirname, 'manOlder20', users[i].name+'.txt');
                            fs.writeFile(filePath, `${users[i].name.toString()}`, (err) => {
                                if (err) {
                                    console.log('__________________________________');
                                    console.log(err);
                                    console.log('__________________________________');
                                }
                            })

                        }
                    }
                }





    return ;
}


fs.mkdir(manOld, {recursive: true}, (err) => {
    if (err) {
        console.log(err);
    }
    fs.mkdir(womanYounger, {recursive: true}, (err) => {
        if (err) {
            console.log(err);
        }
        fs.mkdir(womanOld, {recursive: true}, (err) => {
            if (err) {
                console.log(err);
            }
            fs.mkdir(manYounger, {recursive: true}, (err) => {
                if (err) {
                    console.log(err);
                }



                nameText()
            })
        })
    })

})

