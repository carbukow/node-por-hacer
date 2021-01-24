const { demandCommand } = require("yargs");

const argv = demandCommand()
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Actualización de una tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'marca como computado o pendiente la tarea'
        }
    })
    .command('borrar', 'borra una tarera', {
        descripcion: {
            demand: true,
            alias: 'b',
            desc: 'Actualización de una tarea por hacer'
        },
    })
    .help()
    .argv;


module.exports = {
    argv
}