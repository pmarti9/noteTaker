const util = require('util');
const fs = require('fs');
//UUID
const uuidv1 = require('uuid/v1');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync('db/db.json','utf8')
    }
    write(note) {
        return writeFileAsync('db/db.json','utf8')
    }
}
