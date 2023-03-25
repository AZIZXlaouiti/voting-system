"use strict"
let r = require('rethinkdb'),
    async = require('async')

class db {
    setupDb(){ 
        let self = this
        // array of tasks
        async.waterfall([ 
            /**
             * connnect to db
             * create db 
             * create table
             */
                function(callback){
                    self.connectToRethinkDbServer(function(err , conn){
                        if (err){
                            return callback(true, 'Error in connection with RethinkDB')
                        }
                        callback(null, conn)
                    })
                },
                function(conn, callback){
                    r.dbCreate('voting').run(conn, function(err, result){
                        if (err){
                            console.log('Database already created')
                        }else{
                            console.log('Created new databasse')
                        }
                        callback(null , conn)
                    })
                },
                function(conn, callback){
                    r.db('voting').tableCreate('poll').run(conn , function(err, result){
                        conn.close()
                        if (err){
                            console.log('Table already created')
                        } else {
                            console.log('New table created  ')
                        }
                        callback(null, "Database is setup successfully")
                    })
                },

            ],function(err, data){
                console.log('all tasks are complete')
                console.log(data)
            })
    }
    connectToRethinkDbServer(callback){
        r.connect({
            host : 'localhost',
            port : 28015
        }, function(err, conn){
            callback(err, conn)
        })
    }
    connectToDb(callback){
        r.connect({
            host : 'localhost',
            port : 28015,
            db : 'voting'
        }, function(err, conn){
            callback(err, conn)
        })
    }
}

module.exports = db ;