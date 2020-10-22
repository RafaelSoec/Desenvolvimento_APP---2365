export default class AnimalDTO{

    constructor (nome, porte, sexo, nascimento, estado, municipio, imagem ) {
        this.imagem = imagem;
        this.estado = estado;
        this.municipio = municipio;
        this.nome = nome;
        this.porte = porte;
        this.sexo = sexo;
        this.nascimento = nascimento;
    }
}