const config = require('./config.json');
const { Kafka } = require('kafkajs');

module.exports = {
  client: null,
  producer: null,
  consumer: null
};

const createClient = () => {
  const client = module.exports.client = new Kafka({
    clientId: "session-kafka",
    brokers: config.brokers
  });
  return client;
};

const createProducer = () => {
  const client = module.exports.client || createClient();
  return module.exports.producer = client.producer();
};

const createConsumer = () => {
  const client = module.exports.client || createClient();
  return module.exports.consumer = client.consumer({
    groupId: config.consumer_group_id
  });
};


const setup = () => {
  createClient();
  createProducer();
  createConsumer();
}

setup();

// need to create topic before producing
// kafka-topics --create --topic broadcaster --partitions 1 --replication-factor 1 --bootstrap-server localhost:9092 
