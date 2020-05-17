const util = require('util');
const fs = require('fs');
//UUID
const uuidv1 = require('uuid').v1;
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync('db/db.json','utf8');
    }
    getNotes(){
        return this.read()
        .then((data) => {
            
            data = JSON.parse(data);
            // return [...data];
            if(data.length === 0){
                return [];
            } else return [...data];
        }).then(notes => notes); 


    }
    write(note) {
        return writeFileAsync('db/db.json',JSON.stringify(note));
    }
    addNote(newNote) {
        let {title, text} = newNote;
        const note = {
            title,
            text,
            id: uuidv1()
        };
        return  this.getNotes().then((notes) => {
            return [...notes, note];
        }).then((updateNotes) => {
            return this.write(updateNotes);
        }).then(() => note);
    }
    deleteNote(id) {
        return this.getNotes().then((allNotes) => {
            let newNotesArr = [];
            for(let i = 0; i<allNotes.length; i++)
            {
                if(allNotes[i].id != id){
                newNotesArr.push(allNotes[i]);
                } ;
            } return newNotesArr;
        }).then((newUpdateNotes) => {
            return this.write(newUpdateNotes);

        });

    }
};
module.exports = new Store();