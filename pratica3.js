

const iterate = (num) => {

    for(let i=0; i < num; i++) {

        console.log('Console', i);
        console.log(i === Number(i));

    }

}

iterate(process.argv[2])