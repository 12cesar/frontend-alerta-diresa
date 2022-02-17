export interface AlertNew {
    ok:     boolean;
    alerta: Alerta[];
}

export interface Alerta {
    id:          number;
    personal:    string;
    descripcion: string;
    status:      number;
    createdAt:   string;
    updatedAt:   string;
    userId:      number;
    areaId:      number;
    user:        User;
    area:        Area;
}

export interface Area {
    title: string;
    id:    number;
}

export interface User {
    name:     string;
    lastname: string;
    id:       number;
}
