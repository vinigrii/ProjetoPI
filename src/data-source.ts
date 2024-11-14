import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',                     // Alterado para 'mysql'
  host: 'localhost',
  port: 3306,                        
  username: 'root',                  
  password: 'ProjetoPI24',             
  database: 'ddg_solar',             
  synchronize: false,                 
  logging: true,                     
  entities: ['src/entities/*.ts'],   
  migrations: ['src/migrations/*.ts'], 
});

AppDataSource.initialize()
  .then(() => console.log("Data Source initialized"))
  .catch((err) => console.error("Error initializing Data Source", err));

