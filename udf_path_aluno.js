function transform(line) {
var values = line.split(',');
var obj = new Object();
obj.NU_ANO_CENSO = values[0];
obj.CO_IES = values[1];
obj.TP_CATEGORIA_ADMINISTRATIVA = values[2];
obj.TP_ORGANIZACAO_ACADEMICA = values[3];
obj.CO_CURSO = values[4];
obj.CO_CURSO_POLO = values[5];
obj.TP_TURNO = values[6];
obj.TP_GRAU_ACADEMICO = values[7];
obj.TP_MODALIDADE_ENSINO = values[8];
obj.TP_NIVEL_ACADEMICO = values[9];
obj.CO_CINE_ROTULO = values[10];
obj.ID_ALUNO = values[11];
obj.CO_ALUNO_CURSO = values[12];
obj.CO_ALUNO_CURSO_ORIGEM = values[13];
obj.TP_COR_RACA = values[14];
obj.TP_SEXO = values[15];
obj.NU_ANO_NASCIMENTO = values[16];
obj.NU_MES_NASCIMENTO = values[17];
obj.NU_DIA_NASCIMENTO = values[18];
obj.NU_IDADE = values[19];
obj.TP_NACIONALIDADE = values[20];
obj.CO_PAIS_ORIGEM = values[21];
obj.CO_UF_NASCIMENTO = values[22];
obj.CO_MUNICIPIO_NASCIMENTO = values[23];
obj.IN_DEFICIENCIA = values[24];
obj.IN_DEFICIENCIA_AUDITIVA = values[25];
obj.IN_DEFICIENCIA_FISICA = values[26];
obj.IN_DEFICIENCIA_INTELECTUAL = values[27];
obj.IN_DEFICIENCIA_MULTIPLA = values[28];
obj.IN_DEFICIENCIA_SURDEZ = values[29];
obj.IN_DEFICIENCIA_SURDOCEGUEIRA = values[30];
obj.IN_DEFICIENCIA_BAIXA_VISAO = values[31];
obj.IN_DEFICIENCIA_CEGUEIRA = values[32];
obj.IN_DEFICIENCIA_SUPERDOTACAO = values[33];
obj.IN_TGD_AUTISMO = values[34];
obj.IN_TGD_SINDROME_ASPERGER = values[35];
obj.IN_TGD_SINDROME_RETT = values[36];
obj.IN_TGD_TRANSTOR_DESINTEGRATIVO = values[37];
obj.TP_SITUACAO = values[38];
obj.QT_CARGA_HORARIA_TOTAL = values[39];
obj.QT_CARGA_HORARIA_INTEG = values[40];
obj.DT_INGRESSO_CURSO = values[41];
obj.IN_INGRESSO_VESTIBULAR = values[42];
obj.IN_INGRESSO_ENEM = values[43];
obj.IN_INGRESSO_AVALIACAO_SERIADA = values[44];
obj.IN_INGRESSO_SELECAO_SIMPLIFICA = values[45];
obj.IN_INGRESSO_OUTRO_TIPO_SELECAO = values[46];
obj.IN_INGRESSO_VAGA_REMANESC = values[47];
obj.IN_INGRESSO_VAGA_PROG_ESPECIAL = values[48];
obj.IN_INGRESSO_TRANSF_EXOFFICIO = values[49];
obj.IN_INGRESSO_DECISAO_JUDICIAL = values[50];
obj.IN_INGRESSO_CONVENIO_PECG = values[51];
obj.IN_INGRESSO_EGRESSO = values[52];
obj.IN_INGRESSO_OUTRA_FORMA = values[53];
obj.IN_RESERVA_VAGAS = values[54];
obj.IN_RESERVA_ETNICO = values[55];
obj.IN_RESERVA_DEFICIENCIA = values[56];
obj.IN_RESERVA_ENSINO_PUBLICO = values[57];
obj.IN_RESERVA_RENDA_FAMILIAR = values[58];
obj.IN_RESERVA_OUTRA = values[59];
obj.IN_FINANCIAMENTO_ESTUDANTIL = values[60];
obj.IN_FIN_REEMB_FIES = values[61];
obj.IN_FIN_REEMB_ESTADUAL = values[62];
obj.IN_FIN_REEMB_MUNICIPAL = values[63];
obj.IN_FIN_REEMB_PROG_IES = values[64];
obj.IN_FIN_REEMB_ENT_EXTERNA = values[65];
obj.IN_FIN_REEMB_OUTRA = values[66];
obj.IN_FIN_NAOREEMB_PROUNI_INTEGR = values[67];
obj.IN_FIN_NAOREEMB_PROUNI_PARCIAL = values[68];
obj.IN_FIN_NAOREEMB_ESTADUAL = values[69];
obj.IN_FIN_NAOREEMB_MUNICIPAL = values[70];
obj.IN_FIN_NAOREEMB_PROG_IES = values[71];
obj.IN_FIN_NAOREEMB_ENT_EXTERNA = values[72];
obj.IN_FIN_NAOREEMB_OUTRA = values[73];
obj.IN_APOIO_SOCIAL = values[74];
obj.IN_APOIO_ALIMENTACAO = values[75];
obj.IN_APOIO_BOLSA_PERMANENCIA = values[76];
obj.IN_APOIO_BOLSA_TRABALHO = values[77];
obj.IN_APOIO_MATERIAL_DIDATICO = values[78];
obj.IN_APOIO_MORADIA = values[79];
var jsonString = JSON.stringify(obj);
return jsonString;
}