module.exports = {
  host: '127.0.0.1',
  username: 'postgres',
  password: 'docker',
  database: 'nodeauth',
  dialect: 'postgres',
  operatorsAliases: false,
  loggin: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};