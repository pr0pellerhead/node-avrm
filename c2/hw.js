const fs = require('fs');

const read = (filename) => {
    return new Promise((success, fail) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if(err){
                return fail(err);
            }
            return success(data);
        });
    });
};

const counters = (text) => {
    let out = {
        words: 0,
        sentences: 0,
        chars: 0,
        gt7: 0,
        lt7: 0,
        eq7: 0
    };

    out.sentences = text.split(/[\.!?]/).length -1; // regex is used for pattern matching
    out.words = text.split(' ').length;
    out.chars = text.length;
    let wordlist = text.replace(/[\.!?,]/g, '').split(' ');
    wordlist.forEach(v => {
        if(v.length == 7){
            out.eq7++;
        } else if(v.length > 7){
            out.gt7++;
        } else if(v.length < 7){
            out.lt7++;
        }
    }); 

    return out;
};

const mostRepeated = (text) => {
    let wordlist = text.replace(/[\.!?,]/g, '').split(' ');
    let wordmap = {};
    wordlist.forEach(v => {
        if(!wordmap[v]){
            wordmap[v] = 0;
        }
        wordmap[v]++;
    });
    let max = '';
    let maxNum = 0;
    for(let v in wordmap){
        if(wordmap[v] > maxNum){
            maxNum = wordmap[v];
            max = v;
        }
    }
    return {
        word: max, 
        count: wordmap[max]
    };
};

read('lorem.txt')
    .then(data => {
        let c = counters(data);
        let mp = mostRepeated(data);

        console.log('broj na rechenici?', c.sentences);
        console.log('broj na zborovi?', c.words);
        console.log('broj na karakteri?', c.chars);

        console.log('kolku zborovi imaat > 7 karakteri?', c.gt7);
        console.log('kolku zborovi imaat < 7 karakteri?', c.lt7);
        console.log('kolku zborovi imaat == 7 karakteri?', c.eq7);

        console.log('koj zbor se povtoruva najmnogu?', mp.word, mp.count);
    })
    .catch(err => {
        console.log(err);
    });