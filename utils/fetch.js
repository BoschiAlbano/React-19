export async function updateName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name.length < 3) {
                resolve("El nombre debe tener mas de 3 letras");
                return;
            }
            resolve();
        }, 3000);
    });
}

export async function UpdateMessage(tarea, IsSimulateError) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            IsSimulateError ? reject() : resolve();
        }, 1000);
    });
}
