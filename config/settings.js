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
    //mongodb_connection_string = 'mongodb://127.0.0.1:27017/' + db_name;
    //take advantage of openshift env vars when available:
    mongoURL =process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL  + db_name;
    if (mongoURL == null && process.env.DATABASE_SERVICE_NAME) {
        var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase(),
            mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'],
            mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'],
            mongoDatabase = process.env[mongoServiceName + '_DATABASE'],
            mongoPassword = process.env[mongoServiceName + '_PASSWORD']
            mongoUser = process.env[mongoServiceName + '_USER'];
      
        if (mongoHost && mongoPort && mongoDatabase) {
          mongoURLLabel = mongoURL = 'mongodb://';
          if (mongoUser && mongoPassword) {
            mongoURL += mongoUser + ':' + mongoPassword + '@';
          }
          // Provide UI label that excludes user id and pw
          mongoURLLabel += mongoHost + ':' + mongoPort + '/' + mongoDatabase;
          mongoURL += mongoHost + ':' +  mongoPort + '/' + mongoDatabase;
        }
    }
    return mongoURL;
}