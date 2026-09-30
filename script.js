const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Durante o intervalo na escola, um amigo lhe mostra um aplicativo de IA capaz de clonar vozes perfeitamente e criar vídeos de pessoas famosas dizendo coisas que nunca disseram. Qual é a sua primeira reação?",
        alternativas: [
            {
                texto: "Acho preocupante, pois essa tecnologia pode ser usada para espalhar notícias falsas e enganar pessoas.",
                afirmacao: "Você demonstra uma visão crítica e ética, preocupando-se com a segurança digital e a integridade das informações na sociedade."
            },
            {
                texto: "Acho fascinante, pois abre um mundo de possibilidades para a dublagem, cinema e criação de conteúdo criativo.",
                afirmacao: "Você possui uma visão entusiasta e focada na inovação, enxergando primeiro o potencial criativo e as soluções práticas das novas tecnologias."
            }           
        ]
    },
    {
        enunciado: "Para aprofundar o assunto, o professor de História propôs um projeto avaliativo sobre 'Grandes Revoluções da Humanidade' e permitiu o uso de IA. Como você decide estruturar sua pesquisa?",
        alternativas: [
            {
                texto: "Uso prompts detalhados em um assistente de IA para criar o sumário do trabalho e gerar resumos de fatos históricos complexos, otimizando meu tempo.",
                afirmacao: "Sua abordagem é estratégica e focada na eficiência, utilizando a tecnologia como um copiloto para acelerar processos de aprendizagem."
            },
            {
                texto: "Prefiro ler livros digitais e artigos acadêmicos diretamente na internet, usando a IA apenas no final para revisar a gramática do meu texto.",
                afirmacao: "Você valoriza os métodos tradicionais de validação de conhecimento e prefere manter o controle direto sobre a curadoria das suas fontes de informação."
            }
        ]
    },
    {
        enunciado: "Durante a apresentação dos projetos, a turma começou a discutir sobre o viés da IA — o fato de que os algoritmos podem reproduzir preconceitos humanos contidos na internet. Qual o seu posicionamento nesse debate?",
        alternativas: [
            {
                texto: "Acredito que os desenvolvedores e governos devem regulamentar rigidamente a IA para garantir que ela seja neutra e justa.",
                afirmacao: "Você defende a responsabilidade social e a governança, acreditando que a tecnologia deve ser moldada por regras claras para proteger a coletividade."
            },
            {
                texto: "Acredito que cabe aos próprios usuários aprenderem a filtrar as respostas e usarem a IA de forma consciente e questionadora.",
                afirmacao: "Você prioriza a autonomia individual e o pensamento crítico, acreditando que a educação digital do usuário é a melhor defesa contra desinformações."
            }
        ]
    },
    {
        enunciado: "O professor gostou tanto do debate que pediu para cada aluno criar um logotipo digital que representasse a união entre 'Humanidade e Tecnologia'. Como você desenvolve essa arte?",
        alternativas: [
            {
                texto: "Utilizo um gerador de imagens por IA (como o Midjourney ou DALL-E) testando diferentes comandos até alcançar um conceito visual abstrato e moderno.",
                afirmacao: "Você tem facilidade em adotar ferramentas de automação estética, delegando a execução técnica à máquina para focar na direção de conceitos."
            },
            {
                texto: "Desenho o conceito à mão ou uso um software de edição tradicional (como Canva ou Photoshop) para construir cada linha do logotipo do meu próprio jeito.",
                afirmacao: "Você valoriza a autoria e o fazer artístico manual, preferindo expressar sua identidade de forma direta através do controle total da criação visual."
            }
        ]
    },
    {
        enunciado: "No projeto final de Ciências, um integrante do seu grupo utilizou IA para gerar todo o relatório de experimentos. Ao ler o documento, você percebe que a IA inventou alguns dados científicos e citou fontes que não existem. O que você faz?",
        alternativas: [
            {
                texto: "Confronto o colega e insisto para refazermos as partes falsas manualmente, pois a precisão científica e a honestidade acadêmica do grupo estão em jogo.",
                afirmacao: "Você possui um forte senso de integridade, compromisso com a verdade e entende os riscos das 'alucinações' dos sistemas de inteligência artificial."
            },
            {
                texto: "Uso a própria IA novamente, aplicando um novo comando para corrigir os erros apontados e validar as informações antes de entregar o arquivo final.",
                afirmacao: "Você é um solucionador prático de problemas, utilizando ciclos de feedback tecnológico para corrigir falhas e refinar entregas de forma ágil."
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}