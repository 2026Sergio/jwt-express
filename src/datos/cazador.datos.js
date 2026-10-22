export class CredencialesDTO {
    contructor(data = {}){
        this.usernamee = String(data.username ??"").trim(),tolowerCAse();
        this.password = String(data.password ?? "");
    }
}

export class PerfilCazadorDTO {
    constructor(cazador = {}){
        this.id = String(cazador.id ?? cazador._id ?? "");
        this.username = cazador.username;
        this.name = cazador.username;
        this.rango = cazador.rango ?? "8";
        this.admin = Boolean(cazador.admin ?? false);
    }
}

export class CrearRecompensaDTO {
    constructor(data = {}) {
        this.mision = String(data.mission ?? "").trim();
        this.cristales = Number(data.cristales ?? 0);
    }
}
