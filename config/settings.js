module.exports = {
    development: {
        port: process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
        ip: process.env.IP|| process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
        db: getDB()
    }
}

function getDB()
{
    db_name="calendar"
    mongodb_connection_string = 'mongodb://127.0.0.1:27017/' + db_name;
    //take advantage of openshift env vars when available:
    if(process.env.OPENSHIFT_MONGODB_DB_URL){
    mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL + db_name;
    }
    return mongodb_connection_string;
}