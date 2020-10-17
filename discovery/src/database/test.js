const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // Inserir dados na tabela
    /*await saveOrphanage(db, {
        lat: "-12.2588122",
        lng: "-38.9842765",
        name: "Lar dos meninos",
        about: 'Presta assitência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vunerabilidade social.',
        whatsapp: "98752465",
        images: [
                "https://images.unsplash.com/photo-1602571833995-03aa80922957?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

                "https://images.unsplash.com/photo-1567701562484-deab2750d1e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"
    })*/


    // Altera valor de uma linha da tabela
    await db.all("UPDATE orphanages SET open_on_weekends = '0' where id = '2'")

    // Consultar dados da tabela
    const selectedOrphanages =  await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '6'"))
})