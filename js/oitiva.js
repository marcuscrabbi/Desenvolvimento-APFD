function contarInputsNaoVazios() {
    const inputIds = ["idade_1", "idade_2", "idade_3", "idade_4", "idade_5"];
    let contador = 0;

    inputIds.forEach(id => {
        const input = document.getElementById(id);
        if (input.value.trim() !== "") {
            contador++;
        }
    });

    return contador;
}

async function gerarTexto() {    
    const genero = document.getElementById("genero").value;
    const advogado = document.getElementById("advogado").value;
    const nomeAdvogado = document.getElementById("nome_advogado").value;
    const oab = document.getElementById("oab").value;
    const idadeConduzido = document.getElementById("idade").value;
    const profissao = document.getElementById("profissao").value;
    const trabalho = document.getElementById("trabalho").value;
    const renda = document.getElementById("renda").value;
    const estadocivil = document.getElementById("estado_civil").value;
    const filhos = document.getElementById("filhos").value;
    const filhoidade1 = document.getElementById("idade_1").value;
    const filhoidade2 = document.getElementById("idade_2").value;
    const filhoidade3 = document.getElementById("idade_3").value;
    const filhoidade4 = document.getElementById("idade_4").value;
    const filhoidade5 = document.getElementById("idade_5").value;
    const saude = document.getElementById("saude").value;
    const deficiencia = document.getElementById("deficiencia").value;
    const dependentes = document.getElementById("dependente").value;
    const cuidados = document.getElementById("cuidados").value;
    const prisao = document.getElementById("preso").value;
    const motivoprisao = document.getElementById("motivo_prisao").value;
    const celular = document.getElementById("celular").value;
    const senhacelular = document.getElementById("senha_celular").value;
    const fianca = document.getElementById("fianca").value;
    const valorfianca = document.getElementById("valor_fianca").value;
    const familia = document.getElementById("familia").value;
    const nomefamilia = document.getElementById("nome_familia").value;
    const telefonefamilia = document.getElementById("telefone_familia").value;
    const declaracoes = document.getElementById("declaracoes").value;
    const silencio = document.getElementById("silencio").value;
    let varGenero, varGeneroFinal, varAdvogado, varIdade, varProfissao, varEstadoCivil, varFilhos, counter, varSaude, varDependentes, varPrisao, varCelular, varFianca, varFamilia, varDeclaracoes, varSilencio;

    if (genero === "homem") {
        varGenero = "o declarante";
        varGeneroFinal = "o";
    } else if (genero === "mulher") {
        varGenero = "a declarante";
        varGeneroFinal = "a";
    }

    if (advogado === "com_advogado") {
        varAdvogado = `Que neste ato está acompanhado do advogado Dr. ${nomeAdvogado}, OAB ${oab}; `;
    } else if (advogado === "com_advogada") {
        varAdvogado = `Que neste ato está acompanhado da advogada Dra. ${nomeAdvogado}, OAB ${oab}; `;
    } else if (advogado === "sem_advogado") {
        varAdvogado = "";
    }

    if (genero === "homem") {
        varIdade = `Que ${varGenero} informa ter ${idadeConduzido} anos de idade; `;
    } else if (genero === "mulher") {
        varIdade = `Que ${varGenero} informa ter ${idadeConduzido} anos de idade; `;
    }

    if (profissao === "exerce_profissao") {
        varProfissao = `Que exerce a profissão de ${trabalho}; `;
    } else if (profissao === "exerce_profissao_renda_mensal") {
        varProfissao = `Que exerce a profissão de ${trabalho}, onde tem uma renda básica mensal de R$${renda},00; `;
    } else if (profissao === "exerce_profissao_renda_semanal") {
        varProfissao = `Que exerce a profissão de ${trabalho}, onde tem uma renda básica semanal de R$${renda},00; `;
    } else if (profissao === "exerce_profissao_renda_diaria") {
        varProfissao = `Que exerce a profissão de ${trabalho}, onde tem uma renda básica diária de R$${renda},00; `;
    } else if (profissao === "exerce_trabalha_como") {
        varProfissao = `Que trabalha ${trabalho}; `;
    } else if (profissao === "exerce_trabalha") {
        varProfissao = `Que é ${trabalho}; `;
    } else if (profissao === "nao_trabalha") {
        varProfissao = `Que não exerce nenhuma profissão; `;
    }

    if (estadocivil === "sem_estado_civil") {
        varEstadoCivil = ``;
    } else if (estadocivil === "solteiro") {
        varEstadoCivil = `Que é solteir${varGeneroFinal}; `;
    } else if (estadocivil === "casado") {
        varEstadoCivil = `Que é casad${varGeneroFinal}; `;
    } else if (estadocivil === "uniao_estavel") {
        varEstadoCivil = `Que possui união estável; `;
    } else if (estadocivil === "viuvo") {
        varEstadoCivil = `Que é viúv${varGeneroFinal}; `;
    } else if (estadocivil === "divorciado") {
        varEstadoCivil = `Que é divorciad${varGeneroFinal}; `;
    }

    if (filhos === "sem_filhos") {
        varFilhos = `Que não tem filhos; `;
    } else if (filhos === "filho_independente") {
        varFilhos = `Que possui um filho, o qual não é seu dependente; `;
    } else if (filhos === "filhos_independentes") {
        varFilhos = `Que possui filhos, os quais não são seus dependentes; `;
    } else if (filhos === "um_filho") {
        varFilhos = `Que possui um filho que é seu dependente, o qual tem ${filhoidade1} anos de idade; `;
    } else if (filhos === "uma_filha") {
        varFilhos = `Que possui uma filha que é sua dependente, a qual tem ${filhoidade1} anos de idade; `;
    } else if (filhos === "mais_de_um_filho") {
        counter = contarInputsNaoVazios();
        if (counter <= 2) {
            varFilhos = `Que possui ${counter} filhos que são seus dependentes, os quais têm ${filhoidade1} e ${filhoidade2} anos de idade; `;
        }
        else if (counter === 3) {
            varFilhos = `Que possui ${counter} filhos que são seus dependentes, os quais têm ${filhoidade1}, ${filhoidade2} e ${filhoidade3} anos de idade; `;
        }
        else if (counter === 4) {
            varFilhos = `Que possui ${counter} filhos que são seus dependentes, os quais têm ${filhoidade1}, ${filhoidade2}, ${filhoidade3} e ${filhoidade4} anos de idade; `;
        }
        else if (counter === 5) {
            varFilhos = `Que possui ${counter} filhos que são seus dependentes, os quais têm ${filhoidade1}, ${filhoidade2}, ${filhoidade3}, ${filhoidade4} e ${filhoidade5} anos de idade; `;
        }
    }

    if (saude === "saude_sem_filho") {
        varSaude = ``;
    } else if (saude === "boa_saude") {
        varSaude = `Que seu filho tem boa saúde; `;
    } else if (saude === "boa_saude_filha") {
        varSaude = `Que sua filha tem boa saúde; `;
    } else if (saude === "boas_saudes") {
        varSaude = `Que seus filhos têm boa saúde; `;
    } else if (saude === "saude_deficiencia") {
        varSaude = `Que ${deficiencia}; `;
    }

    if (dependentes === "dependente_sem_filho") {
        varDependentes = ``;
    } else if (dependentes === "filho_dependente") {
        varDependentes = `Que seu filho está aos cuidados da mãe; `;
    } else if (dependentes === "filha_dependente") {
        varDependentes = `Que sua filha está aos cuidados da mãe; `;
    } else if (dependentes === "filhos_dependentes") {
        varDependentes = `Que seus filhos estão aos cuidados da mãe; `;
    } else if (dependentes === "filho_dependente_cuidado") {
        varDependentes = `Que seu filho está aos cuidados ${cuidados}; `;
    }

    if (prisao === "nunca_preso") {
        varPrisao = `Que ${varGenero} afirma nunca ter sido pres${varGeneroFinal} anteriormente; `;
    } else if (prisao === "sim_preso") {
        varPrisao = `Que ${varGenero} afirma já ter sido pres${varGeneroFinal} anteriormente por ${motivoprisao}; `;
    }

    if (celular === "sem_celular") {
        varCelular = ``;
    } else if (celular === "nao_autoriza") {
        varCelular = `Que não autoriza a análise de seu telefone celular apreendido para fins de investigação criminal; `;
    } else if (celular === "autoriza") {
        varCelular = `Que autoriza a análise de seu telefone celular apreendido para fins de investigação criminal, e que sua senha de acesso é ${senhacelular}; `;
    } else if (celular === "autoriza_sem_senha") {
        varCelular = `Que autoriza a análise de seu telefone celular apreendido para fins de investigação criminal, mas que neste ato não sabe informar qual é a sua senha de acesso; `;
    }

    if (fianca === "sem_fianca") {
        varFianca = ``;
    } else if (fianca === "com_fianca") {
        varFianca = `Que está ciente da fiança estabelecida no valor de R$${valorfianca},00; `;
    }

    if (familia === "familia_ciente") {
        varFamilia = `Que sua família está ciente que foi conduzid${varGeneroFinal} para esta unidade policial; `;
    } else if (familia === "familiar_sem_telefone") {
        varFamilia = `Que deseja comunicar a sua prisão a ${nomefamilia}, mas que não sabe informar o seu telefone para contato; `;
    } else if (familia === "familiar_com_telefone") {
        varFamilia = `Que deseja comunicar a sua prisão a ${nomefamilia}, de telefone ${telefonefamilia}; `;
    } else if (familia === "sem_comunicacao_1") {
        varFamilia = `Que neste ato não sabe informar a quem comunicar a sua prisão; `;
    } else if (familia === "sem_comunicacao_2") {
        varFamilia = `Que não deseja comunicar a sua prisão a ninguém; `;
    }

    if (declaracoes === "sem_declaracoes") {
        varDeclaracoes = ``;
    } else if (declaracoes === "com_declaracoes") {
        varDeclaracoes = `Que, aos fatos, disse que ___; `;
    }

    if (silencio === "sem_silencio") {
        varSilencio = ``;
    } else if (silencio === "silencio_total") {
        varSilencio = `Que, aos fatos, manifestou seu direito constitucional de permanecer em silêncio e de falar somente em juízo, se necessário for. `;
    } else if (silencio === "silencio_parcial") {
        varSilencio = `Que, quanto às demais indagações, manifestou seu direito constitucional de permanecer em silêncio e de falar somente em juízo, se necessário for. `;
    }

    const varOitivaConduzido = varAdvogado + varIdade + varProfissao + varEstadoCivil + varFilhos + varSaude + varDependentes + varPrisao + varCelular + varFianca + varFamilia + varDeclaracoes + varSilencio;

try {
    await navigator.clipboard.writeText(varOitivaConduzido);  
	alert('Texto copiado para a área de transferência!');
  } catch (err) {
    console.error('Erro ao copiar texto: ', err);
  }

}

//document.querySelector('button').addEventListener('click', gerarTexto);
