function hashPassword(password, salt) {
    const string = ['a','b','c','d','e','f','j','h','i','g','k','l','m','n','o','p','q','r','s','t','v','w','y','z',
    '0','1','2','3','4','5','6','7','8','9'];
    const crpt = [];

    if(salt === 8 || salt === 10 || salt === 12){
        // ID for the hash 10 digits
        for(let i = 0; i < 10; i++){
            let pos = Math.floor(Math.random()*34);
            if(pos < 34){
                crpt.push(string[pos]);
            } else {
                return console.error('No number');
            }
        }

        // Hashing based on the salt
        for(let num = 0; num < salt; num++){
            for(let i = 0; i < 3; i++){
                let pos = Math.floor(Math.random()*34);
                if(pos < 34) {
                    crpt.push(string[pos]);
                } else {
                    return console.error('No number');
                }
            }
        }

        // Algorithm signiture
        crpt.push('&wadi$o%v');

        // Stringify the output
        let hash = '';
        for(let i = 0; i < crpt.length; i++){
            hash += crpt[i]
        }
        // Final packet
        const crypted = {
           hash,
           data: password
        }
        return crypted;
    } else {
        return console.log('Invalid salt')
    }
}

console.log(hashPassword('123lfkg75hfhf6', 8));