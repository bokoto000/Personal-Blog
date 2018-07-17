module.exports = {
    development: {
        port:process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
        ip: process.env.IP || process.env.OPENSHIFT_NODEJS_IP || NODEJS_MONGO_PERSISTENT_PORT_8080_TCP_ADDR || '127.0.0.1',
        db: getDB() ||('mongodb://127.0.0.1:27017/calendar')
    }
}

function getDB()
{
    mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
    mongoURLLabel = "";

    if (mongoURL == null && process.env.DATABASE_SERVICE_NAME) {
    mongoURL=""
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
    console.log(mongoURL);
    return mongoURL;
}