# Apache Kafka - An Introduction

Welcome to the session on Apache Kafka.

Below are the instructions to run the sample NodeJS client code locally.

### Requirements 
1. A modern editor - preferably VS Code.

2. Docker with version 3 support for docker file . Ensure `docker` & `docker-compose` are in path  and `docker` service(deamon) is running.

3. Node v14 or above and NPM v7 installed locally.

### Instructions

Assuming all actions are done from a directory called `session` 

1. Clone the repo locally
```sh
$  git clone https://github.com/devravitiwari/session-kafka
```

2. Move into the `code` directory
```sh
$  cd code
```

3. Install deps
```sh
$  npm install
```

4. Bring up Docker containers
```sh
$  docker-compose up -d
```

5. Go to kafka installation inside docker
```sh
$  docker exec -it code_kafka_1 sh
#  cd /usr/bin
```

6. Create topic
```sh
# kafka-topics --create --topic broadcaster --partitions 1 --replication-factor 1 --bootstrap-server localhost:9092 
```

7. In a new terminal session, produce messages
```sh
$  npm run publish # this by default publishes 2 messages

# to publish more
$  npm run publish -- 7 # this will publish 7 messages
```

8. In a new terminal session, consume messages
```sh
$  npm run consume
```

