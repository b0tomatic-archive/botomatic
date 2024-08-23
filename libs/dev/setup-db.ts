import { exec } from 'child_process';

// creates docker container with postgres db and persistent storage

// when the container os created it can be started by simpy
// docker start botomatic_dev_db

function runPostgresContainer(): void {
  // do not set port to 5432
  // since if pg and pgAdmin is installed on Windows
  // it automatically starts daemon on port 5432
  // that leads to unnotified conflicts
  const command = `docker run --name botomatic_dev_db -p 5433:5432 -d \
-e POSTGRES_PASSWORD=123 \
-e POSTGRES_USER=postgres \
-e POSTGRES_DB=botomatic_dev_db \
-v pgdata:/var/lib/postgresql/data \
postgres`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(
        `Failed to start Docker container. Error: ${error.message}`
      );
      return;
    }

    if (stderr) {
      console.error(`Error output: ${stderr}`);
      return;
    }

    console.log(
      'Dev Postgres data base started started successfully in docker container.'
    );
    console.log('\nConnection details:');
    console.log('Host: localhost');
    console.log('Port: 5433');
    console.log('Database: botomatic_dev_db');
    console.log('User: postgres');
    console.log('Password: 123');
  });
}

runPostgresContainer();
