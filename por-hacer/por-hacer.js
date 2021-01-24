const { error, Console } = require('console');
const fs = require('fs');
const { require: req } = require('yargs');

let listadoPorHacer = [];
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDb = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {
    cargarDb();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDb();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDb();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB
        return true;
    } else {
        return false;
    }

    const borrrar = (descripcion) => {
        cargarDB();
        let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
        if (index >= 0) {
            listadoPorHacer.splice(index, 1);
            guardarDB();
            return true;
        } else {
            return false;
        }
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}