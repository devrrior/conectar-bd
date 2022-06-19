const database = require('../config/database');
const mysql2 = require('mysql2');

const readUser = (req, res) => {
  const { id } = req.params;

  const readQuery = `SELECT * FROM User WHERE id=?;`;

  const query = mysql2.format(readQuery, [id]);

  database.query(query, (err, result) => {
    if (err) throw err;
    if (result[0] !== undefined) {
      res.json(result[0]);
    } else {
      res.json({ message: 'Usuario no encontrado' });
    }
  });
};

const createUser = (req, res) => {
  const { first_name, age } = req.body;

  const createQuery = `INSERT INTO User(first_name, age) VALUE(?, ?)`;

  const query = mysql2.format(createQuery, [first_name, age]);

  database.query(query, (err, result) => {
    if (err) throw err;
    // console.log(result);
    res.send({ message: 'Usuario creado' });
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { first_name, age } = req.body;

  const updateQuery = `UPDATE User SET first_name=?, age=? WHERE id=?`;

  const query = mysql2.format(updateQuery, [first_name, age, id]);

  database.query(query, (err, result) => {
    if (err) throw err;
    res.json({ message: 'Usuario actualizado' });
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  const deleteQuery = `DELETE FROM User WHERE id=?`;

  const query = mysql2.format(deleteQuery, [id]);

  database.query(query, (err, result) => {
    if (err) throw err;
    // console.log(result);
    res.json({ message: 'Usuario eliminado' });
  });
};

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
};
