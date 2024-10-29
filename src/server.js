const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({        // konfigurasi servernya (port, host, dll)
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);               // cara untuk akses servernya (methode, path, logic)

  await server.start();               // keyword hapi buat jalanin servernya
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
