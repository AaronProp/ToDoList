import React from 'react';

const Registro = () => {
    return (
        <div class="m-5">
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col max-w-md justify-center">
            <h1 class=" text-center italic">Registro</h1>
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                        Usuario
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Escribe tu nombre de usuario"></input>
                </div>
                <div class="mb-6">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                        Contrasena
                    </label>
                    <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************"></input>
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                       Confirmar Contrasena
                    </label>
                    <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************"></input>
                    <p class="text-red text-xs italic"> Ya tengo cuenta | Iniciar sesion</p>
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
                        Registrarse
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Registro;