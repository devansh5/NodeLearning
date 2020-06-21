
const yargs=require('yargs')

// process.argv return the array containing the command line arguments 
// passes when the node.js was processed.
// console.log(process.argv)

// // customize yargs version
// // yargs.version('1.2.9')
// // so we can customize the yargs command and we can use this method to 
// // customize our notesapp for add,read and delete,list all the notes

yargs.command({
    command:'add',
    describe:'Add a new note',
    handler:function(){
        console.log('Adding a new note')
    }
})

// // create a remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Add a body',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        // console.log('removing a note',argv)
        console.log('Title:'+argv.title)
        console.log('body:'+argv.body)
    }
})

// // Read a note
yargs.command({
    command:'read',
    describe:'Read a Note',
    handler:function(){
        console.log('reading a note')
    }
})

// // list a node

yargs.command({
    command:'list',
    describe:'list all notes',
    handler:function(){
        console.log('Listing all notes')
    }
})

// // console.log(yargs.argv)
// // we can use instead the yargs.parse()
yargs.parse()
