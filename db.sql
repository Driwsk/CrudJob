import { Sequelize } from 'sequelize';
import SQLite from 'sqlite3';

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite', // or ':memory:'
  dialectOptions: {
    
    mode: SQLite.OPEN_READWRITE | SQLite.OPEN_CREATE | SQLite.OPEN_FULLMUTEX,
  },
});