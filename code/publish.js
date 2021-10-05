const config = require('./config.json');
const { producer } = require('./index');
const { getMessage } = require('./message');


const getMessages = () => {
  const howMany = +process.argv[2] || 2;
  return [...Array(howMany).keys()].map(_ => getMessage());
}

const produce = async () => {
  console.log(`About to produce...`);
  try {
    const topic = config.topics[0];
    const messages = getMessages().map(msg => ({value: msg}));
    await producer.send({ topic, messages });
    console.log(`Successfully produced ${messages.length} messages to topic ${topic} !`);
  } catch(e) {
    console.error(`Error producing messages.\n ${JSON.stringify(e)}`);
  }
}

const run = async () => {
  try {
    await producer.connect();
    await produce();
    await producer.disconnect();
  } catch(e) {
    console.error(e);
  }  
}

run();
