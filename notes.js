const fs=require('fs')
const chalk=require('chalk')
const getnotes=function (){
    return 'Your notes .....'
}

const addnote=function(title,body){
    const notes=loadnotes()
    // below no. of times below function is called depending on the object in the notes.json
    const duplicatenotes=notes.filter(function(note){
        return note.title === title

    })
    if (duplicatenotes.length===0)
    {
        notes.push({
            title:title,
            body:body
        })
        savenotes(notes)
        console.log(chalk.inverse.blue('new note added'))
        

    }else{
        console.log(chalk.inverse.redBright('Note title taken'))
    }
    
   


}

const savenotes=function(notes){
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}


const loadnotes=function(){
    
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        // console.log('Notes is not created')
        return []
    }
    

}


const removenote=function(title)
{
    const notes=loadnotes()
    const notestokeep=notes.filter(function(note){
        return note.title!=title
    })
    if (notestokeep.length<notes.length)
    {
        console.log(chalk.inverse.green('Note is removed'))
        savenotes(notestokeep)
    }else if(notestokeep.length===notes.length){
        console.log(chalk.inverse.red('Already removed'))
    }

    
}

module.exports={
    getnotes:getnotes,
    addnote:addnote,
    removenote:removenote
}