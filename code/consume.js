const config = require('./config.json');
const { consumer } = require('./index');


const run = async () => {
  try {
    const topic = config.topics[0];
    
    await consumer.connect();
    
    await consumer.subscribe({ topic, fromBeginning: true });
    
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          value: message.value.toString(),
        });
        // console.log(message);
      },
    });

  } catch(e) {
    console.error(e);
  }  
}

run();
