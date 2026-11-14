// ============================================================================
// PORTAL & MEMORIAL DA FAMÍLIA FAEDO — DADOS E INTERATIVIDADE
// ============================================================================

const CURATED_PHOTOS = [
  {
    "id": "doc-01",
    "category": "documentos",
    "category_label": "Documentos & Cidadania",
    "title": "Certificado de Chegada ao Brasil (1895) — Giuseppe Faedo (Patriarca)",
    "year": "1895 / 2000",
    "location": "Rio de Janeiro → Alfredo Chaves (Veranópolis - RS)",
    "people": "Giuseppe Faedo (Josep Faedo), Rosa Faedo",
    "caption": "Certificado Oficial Nr. 00075324 (Projeto Imigrantes): GIUSEPPE FAEDO, 33 anos, casado com Rosa Faedo, agricultor, natural da Itália. Chegou ao Brasil em 20/10/1895 pelo Rio de Janeiro e seguiu para o RS no Navio 'Satellite' com destino a Alfredo Chaves (atual Veranópolis/RS). Registro no Arquivo Histórico do RS: Códice 200, Folha 24, Lançamento Nr. 146.",
    "src": "documentos_cidadania/01_Certificado_Chegada_1895_GIUSEPPE_FAEDO_Lancamento_146.jpg"
  },
  {
    "id": "doc-02",
    "category": "documentos",
    "category_label": "Documentos & Cidadania",
    "title": "Certificado de Chegada ao Brasil (1895) — Rosa Vicário Faedo (Matriarca)",
    "year": "1895 / 2000",
    "location": "Rio de Janeiro → Alfredo Chaves (Veranópolis - RS)",
    "people": "Rosa Vicário Faedo (Rosa Faedo), Giuseppe Faedo",
    "caption": "Certificado Oficial Nr. 00075353 (Projeto Imigrantes): ROSA FAEDO (Rosa Vicário Faedo), 33 anos, casada com Giuseppe Faedo, agricultora, natural da Itália. Chegou em 20/10/1895 no Navio 'Satellite' rumo a Alfredo Chaves (Veranópolis/RS). Registro no Arquivo Histórico do RS: Códice 200, Folha 24, Lançamento Nr. 147.",
    "src": "documentos_cidadania/02_Certificado_Chegada_1895_ROSA_VICARIO_FAEDO_Lancamento_147.jpg"
  },
  {
    "id": "doc-03",
    "category": "documentos",
    "category_label": "Documentos & Cidadania",
    "title": "Certificado de Chegada ao Brasil (1895) — Luigi Faedo (Luiz Antônio Faedo, 10 anos)",
    "year": "1895 / 2000",
    "location": "Rio de Janeiro → Alfredo Chaves (Veranópolis - RS)",
    "people": "Luigi Faedo (Luiz Antônio Faedo), filho de Giuseppe Faedo e Rosa Faedo",
    "caption": "Certificado Oficial Nr. 00075357 (Projeto Imigrantes): LUIGI FAEDO, 10 anos de idade, solteiro, filho de Giuseppe Faedo e Rosa Faedo. Chegou em 20/10/1895 no Navio 'Satellite' rumo a Alfredo Chaves (Veranópolis/RS). Registro no Arquivo Histórico do RS: Códice 200, Folha 24, Lançamento Nr. 149. (Nota: no blog antigo a legenda abaixo desta imagem dizia apenas 'Giuseppe Faedo', mas o documento pertence ao filho Luigi Faedo).",
    "src": "documentos_cidadania/03_Certificado_Chegada_1895_LUIGI_FAEDO_Lancamento_149.jpg"
  },
  {
    "id": "doc-04",
    "category": "documentos",
    "category_label": "Documentos & Cidadania",
    "title": "Brasão Histórico da Família Faedo (Itália)",
    "year": "1997",
    "location": "Itália (Província de Vicenza / Vêneto)",
    "people": "Família Faedo",
    "caption": "Brasão de Armas e histórico de origem do sobrenome italiano Faedo (The Historical Research Center, 1997).",
    "src": "documentos_cidadania/04_Brasao_Historico_Familia_Faedo_Italia.jpg"
  },
  {
    "id": "doc-05",
    "category": "documentos",
    "category_label": "Documentos & Cidadania",
    "title": "Árvore Genealógica (Fan Chart) — Descendentes de Irineu Faedo e Maria Conceição Faedo",
    "year": "2012",
    "location": "Rio Grande do Sul / Paraná",
    "people": "Irineu Faedo, Maria Conceição Faedo, Antonio Hermes, Arnaldo Helio, Homorino, César João, Maria de Lurdes, Maria Terezinha e netos",
    "caption": "Gráfico genealógico em leque (MyHeritage) detalhando os 6 filhos, cônjuges, netos e bisnetos de Irineu Ferlim Faedo (1º filho de João Faedo e Erina Ferlim) e Maria Conceição Faedo.",
    "src": "documentos_cidadania/05_Arvore_Genealogica_Descendentes_Irineu_Faedo.jpg"
  },
  {
    "id": "doc-06",
    "category": "documentos",
    "category_label": "Documentos & Cidadania",
    "title": "Emblema Oficial do Portal Família Faedo",
    "year": "2012",
    "location": "Brasil / Itália",
    "people": "Família Faedo",
    "caption": "Logotipo comemorativo da Família Faedo unindo as cores da bandeira da Itália à heráldica da família.",
    "src": "documentos_cidadania/06_Emblema_Portal_Familia_Faedo.png"
  },
  {
    "id": "pio-01",
    "category": "pioneiros",
    "category_label": "Patriarcas & Pioneiros",
    "title": "Retrato de Luiz Antônio Faedo — O Pioneiro Beltronense",
    "year": "Século XX",
    "location": "Francisco Beltrão - PR",
    "people": "Luiz Antônio Faedo (Luigi Faedo)",
    "caption": "Luiz Antônio Faedo (filho de Giuseppe Faedo e Rosa Vicário Faedo), pioneiro desbravador de Vila Marrecas / Francisco Beltrão, onde viveu até falecer em 03 de junho de 1984. Doador do terreno da Praça Eduardo Virmond Suplicy e do Cemitério Municipal, homenageado com a Avenida Luiz Antônio Faedo no centro da cidade.",
    "src": "imagens_alta_resolucao/pages_04_historia-da-familia-faedo/02_523273_398839913461629_100000068720530_1629222_1853305122_n.jpg"
  },
  {
    "id": "pio-02",
    "category": "pioneiros",
    "category_label": "Patriarcas & Pioneiros",
    "title": "Luiz Antônio Faedo aos 25 anos de idade",
    "year": "c. 1910–1919",
    "location": "Rio Grande do Sul",
    "people": "Luiz Antônio Faedo",
    "caption": "Retrato histórico de juventude de Luiz Antônio Faedo aos 25 anos de idade, ainda no Rio Grande do Sul.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/03_snapshot-037.jpg"
  },
  {
    "id": "pio-03",
    "category": "pioneiros",
    "category_label": "Patriarcas & Pioneiros",
    "title": "João Faedo ('Joanim') e Erina Ferlim Faedo",
    "year": "Século XX",
    "location": "Marau / Água Santa - RS",
    "people": "Erina Ferlim Faedo e João Faedo",
    "caption": "Casal patriarca João Faedo (filho de Giuseppe Faedo e Rosa Vicário) e Erina Ferlim Faedo, pais de 12 filhos (Irineu, Afonso, José, Adolfo, Germano, Ângelo Alberto 'Angelim', Benito, Expedito, Luiz, Humberto Gentil, Maria e Helena). Viveram em Marau, Vila Marrecas (Francisco Beltrão) e Água Santa - RS.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/01_Erina_Ferlim__Joao_Faedo.jpg"
  },
  {
    "id": "pio-04",
    "category": "pioneiros",
    "category_label": "Patriarcas & Pioneiros",
    "title": "Primeiras Gerações da Família Faedo no Brasil (Luiz Antônio Faedo e os filhos de João Faedo)",
    "year": "Século XX",
    "location": "Rio Grande do Sul / Paraná",
    "people": "Luiz Antônio Faedo, Irineu, Afonso, José, Adolfo, Germano, Ângelo Alberto, Expedito, Luiz, Humberto Gentil, Maria e Helena Faedo",
    "caption": "Registro histórico das primeiras gerações da Família Faedo no Brasil: começando no canto esquerdo com Luiz Antônio Faedo, seguido pelos filhos de João Faedo e Erina Ferlim: Irineu, Afonso, José, Adolfo, Germano, Ângelo Alberto (Angelim), Expedito, Luiz, Humberto Gentil, Maria e Helena Faedo (ausente na foto apenas o irmão Benito Faedo).",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/04_Familia_Faedo.jpg"
  },
  {
    "id": "pio-05",
    "category": "pioneiros",
    "category_label": "Patriarcas & Pioneiros",
    "title": "Vitório Faedo e Angelina Ferneda Faedo",
    "year": "c. Década de 1950–1960",
    "location": "Francisco Beltrão - PR",
    "people": "Angelina Ferneda Faedo e Vitório Faedo",
    "caption": "Vitório Faedo (nascido em 07/11/1911, filho de Giuseppe Faedo e Narciza Pereira; falecido em 16/06/1969) ao lado da esposa Angelina Ferneda. Em 1945 viajaram 21 dias em carroças puxadas por mulas do RS até Francisco Beltrão, tendo 10 filhos (Antoninho, Verônica, Terezinha, Maria, Irineu, Luiz, Natalina, José, Lurdes e Inez).",
    "src": "imagens_alta_resolucao/posts_04_vitorio-faedo/01_vitorio__faedo.jpg"
  },
  {
    "id": "pio-06",
    "category": "pioneiros",
    "category_label": "Patriarcas & Pioneiros",
    "title": "Vitório Faedo e Angelina Ferneda em Festa na Comunidade de Divisor",
    "year": "c. 1968",
    "location": "Comunidade de Divisor — Francisco Beltrão - PR",
    "people": "Vitório Faedo, Angelina Ferneda e gaiteiro",
    "caption": "Ao lado do gaiteiro, Vitório Faedo e Angelina Ferneda (com a mão na cabeça) em uma festa comunitária organizada por eles na Comunidade de Divisor, interior de Francisco Beltrão.",
    "src": "imagens_alta_resolucao/posts_03_vitorio-faedo/01_v_-2.jpg"
  },
  {
    "id": "cas-01",
    "category": "casas",
    "category_label": "Casas & Marcos Históricos",
    "title": "Foto N.º 4 — A Primeira Habitação Construída em Marrecas (Rancho de Luiz Antônio Faedo)",
    "year": "Década de 1940",
    "location": "Centro da antiga Vila Marrecas (atual Francisco Beltrão - PR)",
    "people": "Propriedade histórica de Luiz Antônio Faedo (adquirida de Sebastião Müller)",
    "caption": "FOTO N.º 4: Rancho pertencente a Luís Antônio Faedo, adquirido de seu compadre Sebastião Müller, considerado historicamente a primeira habitação construída em Marrecas (hoje pleno centro de Francisco Beltrão). Acervo: Coleção Duzolina Benedete Bassoto.",
    "src": "imagens_alta_resolucao/pages_04_historia-da-familia-faedo/03_292990_398841210128166_1553346726_n.jpg"
  },
  {
    "id": "cas-02",
    "category": "casas",
    "category_label": "Casas & Marcos Históricos",
    "title": "Morada Histórica de Luiz Antônio Faedo",
    "year": "Década de 1940–1950",
    "location": "Francisco Beltrão - PR",
    "people": "Família de Luiz Antônio Faedo",
    "caption": "Antiga morada de madeira lascada da família de Luiz Antônio Faedo nos primeiros tempos da colonização de Francisco Beltrão.",
    "src": "imagens_alta_resolucao/pages_04_historia-da-familia-faedo/04_534419_398841850128102_100000068720530_1629228_2101392062_n.jpg"
  },
  {
    "id": "cas-03",
    "category": "casas",
    "category_label": "Casas & Marcos Históricos",
    "title": "A Casa de Luiz Antônio Faedo após a viagem do Rio Grande do Sul",
    "year": "Década de 1950–1960",
    "location": "Francisco Beltrão - PR",
    "people": "Família de Luiz Antônio Faedo",
    "caption": "Residência de Luiz Antônio Faedo estabelecida após a jornada pioneira a cavalo vinda do Rio Grande do Sul até as margens do Rio Marrecas.",
    "src": "imagens_alta_resolucao/pages_04_historia-da-familia-faedo/05_306538_212278622216934_100003043940340_342786_1065277336_n_2.jpg"
  },
  {
    "id": "cas-04",
    "category": "casas",
    "category_label": "Casas & Marcos Históricos",
    "title": "Casa de José Faedo (Filho de João Faedo e Erina Ferlim)",
    "year": "Século XX",
    "location": "Rio Grande do Sul",
    "people": "Família de José Faedo (colaboração de Ruben Faedo)",
    "caption": "Casa histórica de José Faedo, filho de João Faedo e Erina Ferlim, ferreiro e mecânico que aprendeu o ofício com o pai. Fotografia enviada por Ruben Faedo.",
    "src": "imagens_alta_resolucao/posts_02_casa-de-jose-faedo/01_IMG100__jose_faedo.jpg"
  },
  {
    "id": "laf-01",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Luiz Antônio Faedo e seu filho Benito Rômulo Faedo",
    "year": "Século XX",
    "location": "Rio Grande do Sul / Paraná",
    "people": "Luiz Antônio Faedo (à direita) e Benito Rômulo Faedo",
    "caption": "Ao lado direito da foto, Luiz Antônio Faedo e, ao seu lado, seu filho primogênito Benito Rômulo Faedo.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/02_snapshot-0273.jpg"
  },
  {
    "id": "laf-02",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Dona Leontina Assis Cavalheiro Faedo e os 6 filhos com Luiz Antônio Faedo",
    "year": "Século XX",
    "location": "Passo Fundo - RS / Francisco Beltrão - PR",
    "people": "Leontina Assis Cavalheiro Faedo (sentada); em pé: Benito, Adão, Adroaldo, Plínio, Rosalino e João Flaviano",
    "caption": "Os filhos do 1º casamento do Sr. Luiz Antônio Faedo com Dona Leontina Assis Cavalheiro Faedo (sentada). Em pé, da esquerda para a direita: Benito Rômulo, Adão, Adroaldo, Plínio Luiz, Rosalino Tácito e João Flaviano Faedo.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/13_FOTO_04.jpg"
  },
  {
    "id": "laf-03",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Dona Leontina, a filha Rosa e as noras da Família Faedo",
    "year": "Século XX",
    "location": "Rio Grande do Sul / Paraná",
    "people": "Rosa, Leonor, Marlene, Dona Leontina, Maria e Lourdes",
    "caption": "Da esquerda para a direita: Rosa (filha), Leonor (1ª esposa de Adroaldo), Marlene (esposa de João Flaviano), Dona Leontina, Maria Agnoleto (esposa de Rosalino) e Lourdes (esposa de Benito).",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/14_FOTO_05.jpg"
  },
  {
    "id": "laf-04",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Luiz Antônio Faedo e Rosalino Tácito Faedo no casamento de Luiz Faedo",
    "year": "Século XX",
    "location": "Paraná / Rio Grande do Sul",
    "people": "Luiz Antônio Faedo, Rosalino Tácito Faedo, Luiz Faedo (filho de Adão e Ema Faedo)",
    "caption": "Sr. Luiz Antônio Faedo e seu filho Rosalino Tácito Faedo no casamento de Luiz Faedo (filho de Adão Faedo e Ema Faedo).",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/15_FOTO_03.jpg"
  },
  {
    "id": "laf-05",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Os irmãos Rosalino, Adão, João e Plínio no casamento de Rosana Shoaila",
    "year": "Século XX",
    "location": "Paraná",
    "people": "Rosalino Tácito, Adão, João Flaviano e Plínio Luiz Faedo",
    "caption": "Os irmãos Rosalino, Adão, João e Plínio reunidos no casamento da sobrinha Rosana Shoaila Teixeira, filha de Rosa Faedo Teixeira.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/16_FOTO_07.jpg"
  },
  {
    "id": "laf-06",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Visita dos irmãos Faedo ao irmão Adroaldo em Rondônia",
    "year": "Século XX",
    "location": "Rondônia",
    "people": "Plínio, João Flaviano, Adroaldo, Rosalino, Adão Faedo e filha da 2ª esposa de Adroaldo",
    "caption": "Os irmãos em visita ao irmão Adroaldo que morava em Rondônia. Da esquerda para a direita: Plínio, João, Adroaldo, Rosalino e Adão (a menina é filha da 2ª esposa do Sr. Adroaldo).",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/17_FOTO_06.jpg"
  },
  {
    "id": "laf-07",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Festa de fim de ano na última morada de Luiz Antônio Faedo com os netos",
    "year": "Década de 1970–1980",
    "location": "Francisco Beltrão - PR",
    "people": "Luiz Antônio Faedo, Marta Aparecida Faedo, Marco Antônio Faedo, Márcia Rosely Faedo e Marcelo Faedo",
    "caption": "Festa de fim de ano na última morada do Sr. Luiz Antônio Faedo: ao fundo de vermelho Marta Aparecida Faedo; no colo do avô está Marco Antônio Faedo; ao lado Márcia Rosely Faedo (ambos filhos de Rosalino Tácito Faedo); e de camisa xadrez Marcelo Faedo (filho de João Flaviano Faedo).",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/18_FOTO_02.jpg"
  },
  {
    "id": "laf-08",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Aniversário de 66 anos de Luiz Antônio Faedo",
    "year": "c. 1960",
    "location": "Francisco Beltrão - PR",
    "people": "Luiz Antônio Faedo, Maria Conceição Faedo (2ª esposa), Rosa Faedo Teixeira e Lourdes (esposa de Benito)",
    "caption": "Aniversário de 66 anos de Luiz Antônio Faedo: ao seu lado (de vestido estampado) sua 2ª esposa Dona Maria Conceição Faedo; do outro lado (de azul) sua filha Rosa Teixeira; ao fundo (de óculos) sua nora Sra. Lourdes, esposa de Benito.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/19_FOTO_08.jpg"
  },
  {
    "id": "laf-09",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Plínio Luiz Faedo e seu filho Gerson Luiz Faedo",
    "year": "Século XX",
    "location": "Paraná",
    "people": "Plínio Luiz Faedo e Gerson Luiz Faedo",
    "caption": "Plínio Luiz Faedo (filho de Luiz Antônio Faedo e Leontina Cavalheiro) e seu filho Gerson Luiz Faedo (grande colaborador do acervo histórico da família).",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/20_plinio_gerson.jpg"
  },
  {
    "id": "laf-10",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Retrato de Plínio Luiz Faedo",
    "year": "Século XX",
    "location": "Rio Grande do Sul / Paraná",
    "people": "Plínio Luiz Faedo",
    "caption": "Plínio Luiz Faedo, filho de Luiz Antônio Faedo e Leontina Nunes Cavalheiro.",
    "src": "imagens_alta_resolucao/pages_03_fotos-novas/05_PLINIO_2.jpg"
  },
  {
    "id": "laf-11",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Aniversário de Rosana Shoaila Teixeira (Reunião do 1º e 2º Casamento de Luiz Antônio Faedo)",
    "year": "Década de 1970",
    "location": "Francisco Beltrão - PR",
    "people": "Odair Teixeira, Rosa Faedo Teixeira, Rosana, Dona Maria, Luiz Antônio Faedo, Rosalino, Maria Agnoleto, Marta, Márcia Rosely, Juca Faedo, Krishna e Nedir",
    "caption": "Festa de aniversário de Rosana Shoaila Teixeira (filha de Rosa Faedo Teixeira, do 2º casamento de Luiz Antônio Faedo). Da esquerda para a direita: Odair Teixeira, Rosa Teixeira com Rosana no colo, Dona Maria, Sr. Luiz Antônio Faedo, Rosalino T. Faedo e sua esposa Maria Agnoleto Faedo com Marta Apa. Faedo no colo (e no chão Márcia Rosely Faedo), Juca Faedo (filho do 2º casamento de Luiz Antônio Faedo), sua filha Krishna e sua esposa Nedir.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/21_Downloads3.jpg"
  },
  {
    "id": "laf-12",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Luiz Antônio Faedo com os 6 filhos em festa no Tuna (Francisco Beltrão)",
    "year": "Década de 1960–1970",
    "location": "Tuna — Francisco Beltrão - PR",
    "people": "Luiz Antônio Faedo, Benito, Adão, Adroaldo, Plínio, Rosalino e João Flaviano",
    "caption": "Luiz Antônio Faedo reunido com os filhos Benito, Adão, Adroaldo, Plínio, Rosalino e João em uma festa no Tuna, em Francisco Beltrão - PR.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/22_img062.jpg"
  },
  {
    "id": "laf-13",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Encontro de 1968 na antiga casa de Luiz Antônio Faedo (Benito e irmãos do 2º casamento)",
    "year": "1968",
    "location": "Francisco Beltrão - PR",
    "people": "Benito Rômulo Faedo (na ponta esquerda) e filhos do 2º casamento de Luiz Antônio Faedo com Dona Maria",
    "caption": "Foto tirada em 1968 na antiga casa do Sr. Luiz Antônio Faedo: Benito Rômulo Faedo na ponta esquerda junto aos filhos do segundo casamento de Luiz Antônio Faedo com Dona Maria.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/23_img063.jpg"
  },
  {
    "id": "laf-14",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Luiz Antônio Faedo e o bisneto Gerson L. Faedo Jr. (1983 — Foto 1)",
    "year": "1983",
    "location": "Francisco Beltrão - PR",
    "people": "Luiz Antônio Faedo e Gerson L. Faedo Jr.",
    "caption": "Registro emocionante de Luiz Antônio Faedo aos 89 anos ao lado de Gerson L. Faedo Jr. em 1983 (um ano antes do falecimento do patriarca).",
    "src": "imagens_alta_resolucao/posts_09_luiz-antonio-faedo/02_404058_401370619875225_100000068720530_1636613_794818022_n.jpg"
  },
  {
    "id": "laf-15",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Luiz Antônio Faedo e Gerson L. Faedo Jr. (1983 — Foto 2)",
    "year": "1983",
    "location": "Francisco Beltrão - PR",
    "people": "Luiz Antônio Faedo e Gerson L. Faedo Jr.",
    "caption": "Segundo retrato de Luiz Antônio Faedo com o jovem Gerson L. Faedo Jr. em 1983.",
    "src": "imagens_alta_resolucao/posts_09_luiz-antonio-faedo/03_LUIZ_ANTONIO_FAEDO_E_GERSON_L._FAEDO_JR_-_1983.jpg"
  },
  {
    "id": "scn-24",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Irmãos Faedo em Passo Fundo - RS (Adão, Rosalino, Plínio, Adroaldo, João e amigo Vitor)",
    "year": "Década de 1950",
    "location": "Passo Fundo - RS",
    "people": "Vitor, Adão Faedo, Rosalino Faedo, Plínio L. Faedo, Adroaldo Faedo e João Faedo",
    "caption": "Em pé: Vitor, Adão Faedo, Rosalino Faedo e Plínio L. Faedo. Sentados: Adroaldo Faedo e João Faedo — Passo Fundo - RS.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/24_SCAN_20130416_212450922.jpg"
  },
  {
    "id": "scn-25",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "João Flaviano Faedo e Plínio Luiz Faedo em Passo Fundo (1958)",
    "year": "1958",
    "location": "Passo Fundo - RS",
    "people": "João Flaviano Faedo e Plínio Luiz Faedo",
    "caption": "Passo Fundo - RS (1958): Os irmãos João Flaviano Faedo e Plínio Luiz Faedo.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/25_SCAN_20130416_212559203.jpg"
  },
  {
    "id": "scn-26",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Plínio Luiz Faedo na lida campeira",
    "year": "Década de 1950–1960",
    "location": "Rio Grande do Sul / Paraná",
    "people": "Plínio Luiz Faedo",
    "caption": "Plínio Luiz Faedo na lida campeira com o gado.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/26_SCAN_20130416_212704177.jpg"
  },
  {
    "id": "scn-27",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Plínio L. Faedo declamando em Capanema - PR (1968)",
    "year": "1968",
    "location": "Capanema - PR",
    "people": "Plínio Luiz Faedo",
    "caption": "Plínio L. Faedo declamando ao microfone em evento no ano de 1968, em Capanema - PR.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/27_SCAN_20130416_212756390.jpg"
  },
  {
    "id": "scn-28",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Plínio Luiz Faedo em Time de Futebol com Taça — Passo Fundo (1950)",
    "year": "1950",
    "location": "Passo Fundo - RS",
    "people": "Plínio Luiz Faedo (sentado à esquerda)",
    "caption": "Passo Fundo - RS (1950): Plínio Luiz Faedo (agachado na ponta esquerda) com sua equipe de futebol e troféu.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/28_SCAN_20130416_212842754.jpg"
  },
  {
    "id": "scn-29",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Plínio Luiz Faedo, Fiscal da Receita Estadual em Porto Lupion — Divisa com a Argentina (1965)",
    "year": "1965",
    "location": "Porto Lupion (Capanema - PR, divisa com a Argentina)",
    "people": "Plínio Luiz Faedo",
    "caption": "Porto Lupion, divisa com a Argentina (1965): Plínio Luiz Faedo atuando como Fiscal da Receita Estadual.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/29_SCAN_20130416_212926605.jpg"
  },
  {
    "id": "scn-30",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Casamento de Maria Agnoleto e Rosalino Tácito Faedo com os irmãos",
    "year": "Década de 1950–1960",
    "location": "Rio Grande do Sul / Paraná",
    "people": "Plínio, Benito, Maria Agnoleto, Rosalino Tácito, Adroaldo, João Flaviano e Vitor (amigo)",
    "caption": "Casamento de Maria e Rosalino Faedo — Da esquerda para a direita: Plínio, Benito, os noivos Maria e Rosalino, Adroaldo, João e Vitor (amigo).",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/30_SCAN_20130416_213021736.jpg"
  },
  {
    "id": "scn-31",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Plínio Luiz Faedo em Passo Fundo - RS (1956)",
    "year": "1956",
    "location": "Passo Fundo - RS",
    "people": "Plínio Luiz Faedo",
    "caption": "Passo Fundo - RS (1956): Plínio Luiz Faedo no campo de futebol.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/31_SCAN_20130416_220221905.jpg"
  },
  {
    "id": "scn-32",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Plínio Luiz Faedo no Exército — Passo Fundo - RS",
    "year": "Década de 1950",
    "location": "Passo Fundo - RS",
    "people": "Plínio Luiz Faedo",
    "caption": "Plínio Luiz Faedo, filho de Luiz Antônio Faedo, servindo em Passo Fundo - RS.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/32_SCAN_20130416_220302559.jpg"
  },
  {
    "id": "scn-33",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Plínio L. Faedo no Time Santa Terezinha — Passo Fundo (1954)",
    "year": "1954",
    "location": "Passo Fundo - RS",
    "people": "Plínio Luiz Faedo (agachado à esquerda)",
    "caption": "Passo Fundo - RS (1954): Plínio L. Faedo (agachado na ponta esquerda) na equipe do Santa Terezinha.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/33_SCAN_20130416_220357985.jpg"
  },
  {
    "id": "scn-34",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Plínio L. Faedo no Time Santa Terezinha — Passo Fundo (1955)",
    "year": "1955",
    "location": "Passo Fundo - RS",
    "people": "Plínio Luiz Faedo (em pé no centro)",
    "caption": "Passo Fundo - RS (1955): Plínio L. Faedo na equipe do Santa Terezinha.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/34_SCAN_20130416_220441447.jpg"
  },
  {
    "id": "scn-35",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Plínio L. Faedo em Equipe de Futebol — Passo Fundo - RS",
    "year": "Década de 1950",
    "location": "Passo Fundo - RS",
    "people": "Plínio Luiz Faedo",
    "caption": "Passo Fundo - RS: Plínio L. Faedo (em pé, quarto da esquerda para a direita) com os companheiros de time.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/35_SCAN_20130416_220521758.jpg"
  },
  {
    "id": "scn-36",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Plínio Luiz Faedo pilchado com chimarrão e crianças",
    "year": "Década de 1960",
    "location": "Rio Grande do Sul / Paraná",
    "people": "Plínio Luiz Faedo e crianças da família",
    "caption": "Plínio Luiz Faedo mantendo a tradição gaúcha com bombacha e chimarrão ao lado das crianças.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/36_SCAN_20130416_220602115.jpg"
  },
  {
    "id": "scn-37",
    "category": "ramo_luiz_antonio",
    "category_label": "Ramo Luiz Antônio Faedo",
    "title": "Plínio L. Faedo com Troféu Esportivo — Passo Fundo - RS",
    "year": "Década de 1950",
    "location": "Passo Fundo - RS",
    "people": "Plínio Luiz Faedo",
    "caption": "Passo Fundo - RS: Plínio L. Faedo, filho de Luiz Antônio Faedo, posando no campo com troféu conquistado.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/37_SCAN_20130416_220642550.jpg"
  },
  {
    "id": "jfa-01",
    "category": "ramo_joao_faedo",
    "category_label": "Ramo João Faedo & Erina",
    "title": "Reunião da Família de João Faedo no Casamento de 1964",
    "year": "1964",
    "location": "Rio Grande do Sul",
    "people": "João Faedo, Benito e esposa, Luiz e Cila, Expedito e esposa, José e Maria, Adolfo e Lurdes, Helena, Ângelo (Angelim)",
    "caption": "Família de João Faedo reunida no ano de 1964 (casamento de tio Luiz e tia Cila): Benito e esposa, tio Luiz e tia Cila, tio Expedito e esposa, tio José e tia Maria, tio Adolfo e tia Lurdes, tia Helena, patriarca João Faedo, Ângelo ('Angelim') — ausentes na foto apenas os irmãos Afonso e Irineu (com tia Maria).",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/05_Familia_Faedo__284_29.jpg"
  },
  {
    "id": "jfa-02",
    "category": "ramo_joao_faedo",
    "category_label": "Ramo João Faedo & Erina",
    "title": "Grande Encontro da Família Faedo",
    "year": "Década de 1960",
    "location": "Rio Grande do Sul",
    "people": "Família de João Faedo e descendentes",
    "caption": "Registro coletivo de reunião familiar dos descendentes de João Faedo e Erina Ferlim.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/06_Familia_Faedo__283_29.jpg"
  },
  {
    "id": "jfa-03",
    "category": "ramo_joao_faedo",
    "category_label": "Ramo João Faedo & Erina",
    "title": "Casamento de Ângelo Alberto Faedo ('Angelim') e Armeri Nunes (Foto 1)",
    "year": "Década de 1950",
    "location": "Rio Grande do Sul",
    "people": "Ângelo Alberto Faedo e Armeri Nunes Faedo",
    "caption": "Retrato oficial de casamento de Ângelo Alberto Faedo ('Angelim', nascido em 24/11/1927 em Passo Fundo - RS, 6º filho de João Faedo e Erina Ferlim) e Armeri Nunes.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/07_Documento-Fotografia-1__casamento.jpg"
  },
  {
    "id": "jfa-04",
    "category": "ramo_joao_faedo",
    "category_label": "Ramo João Faedo & Erina",
    "title": "Casamento de Ângelo Alberto Faedo e Armeri Nunes (Foto 2)",
    "year": "Década de 1950",
    "location": "Rio Grande do Sul",
    "people": "Ângelo Alberto Faedo e Armeri Nunes Faedo",
    "caption": "Segundo registro fotográfico do casamento de Ângelo A. Faedo e Armeri Nunes.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/08_casmento_de__angelo_e__almeri.jpg"
  },
  {
    "id": "jfa-05",
    "category": "ramo_joao_faedo",
    "category_label": "Ramo João Faedo & Erina",
    "title": "Casamento de Severino e Eracy",
    "year": "Século XX",
    "location": "Rio Grande do Sul / Paraná",
    "people": "Severino, Eracy e familiares Faedo",
    "caption": "Celebração do casamento de Severino e Eracy com a presença da família Faedo.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/09_Documento-Fotografia-1_12.jpg"
  },
  {
    "id": "jfa-06",
    "category": "ramo_joao_faedo",
    "category_label": "Ramo João Faedo & Erina",
    "title": "As irmãs Helena Faedo e Maria Faedo",
    "year": "Década de 1940–1950",
    "location": "Rio Grande do Sul",
    "people": "Helena Faedo e Maria Faedo",
    "caption": "Retrato de juventude das irmãs Helena Faedo e Maria Faedo, filhas de João Faedo e Erina Ferlim.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/10_snapshot-020.jpg"
  },
  {
    "id": "jfa-07",
    "category": "ramo_joao_faedo",
    "category_label": "Ramo João Faedo & Erina",
    "title": "Irineu Ferlim Faedo e Maria Conceição Faedo",
    "year": "Século XX",
    "location": "Rio Grande do Sul / Paraná",
    "people": "Irineu Faedo e Maria Conceição Faedo",
    "caption": "Irineu Ferlim Faedo (1º filho de João Faedo e Erina Ferlim) e sua esposa Maria Conceição Faedo, pais de Arnaldo Helio, Homorino, César João, Antonio Hermes, Maria de Lurdes e Maria Terezinha Faedo.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/11_DSC01835.JPG"
  },
  {
    "id": "jfa-08",
    "category": "ramo_joao_faedo",
    "category_label": "Ramo João Faedo & Erina",
    "title": "Casamento de César João Faedo e Sirlei Maria da Silva Faedo",
    "year": "Século XX",
    "location": "Rio Grande do Sul / Paraná",
    "people": "César João Faedo e Sirlei Maria da Silva Faedo",
    "caption": "Casamento de César João Faedo (filho de Irineu Faedo e Maria Conceição Faedo) e Sirlei Maria da Silva Faedo, pais de João Vitor, Cíntia Carla e Emanuelle Faedo.",
    "src": "imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/12_523984_216218075147659_773724487_n.jpg"
  },
  {
    "id": "jfa-09",
    "category": "ramo_joao_faedo",
    "category_label": "Ramo João Faedo & Erina",
    "title": "Ângelo Alberto Faedo ('Angelim') e seu neto Eduardo Felipe",
    "year": "c. 2011",
    "location": "Paraná / Rio Grande do Sul",
    "people": "Ângelo Alberto Faedo e Eduardo Felipe",
    "caption": "Ângelo Alberto Faedo ('Angelim') ao lado de seu neto Eduardo Felipe.",
    "src": "imagens_alta_resolucao/pages_03_fotos-novas/01_ANGELO_ALBERTO_FAEDO__28ANGELIM_29_E__SE_NETO___EDUARDO_FELIPE.JPG"
  },
  {
    "id": "jfa-10",
    "category": "ramo_joao_faedo",
    "category_label": "Ramo João Faedo & Erina",
    "title": "Aniversário de 84 anos de Ângelo Alberto Faedo ('Angelim')",
    "year": "2011",
    "location": "Paraná / Rio Grande do Sul",
    "people": "Ângelo Alberto Faedo ('Angelim')",
    "caption": "Comemoração dos 84 anos de Ângelo Alberto Faedo ('Angelim'), nascido em 24 de novembro de 1927 em Passo Fundo - RS, filho de João Faedo e Erina Ferlim.",
    "src": "imagens_alta_resolucao/pages_03_fotos-novas/02_ANGELO_ALBERTO__FAEDO__28ANGELIM_29_ANIVERSSARIO_DE_84__ANOS.JPG"
  },
  {
    "id": "jfa-11",
    "category": "ramo_joao_faedo",
    "category_label": "Ramo João Faedo & Erina",
    "title": "Retrato de Germano Faedo",
    "year": "Século XX",
    "location": "Rio Grande do Sul",
    "people": "Germano Faedo",
    "caption": "Germano Faedo (5º filho de João Faedo e Erina Ferlim), casado com Honorina Felizzari Faedo.",
    "src": "imagens_alta_resolucao/pages_03_fotos-novas/03_GERMANO.jpg"
  },
  {
    "id": "jfa-12",
    "category": "ramo_joao_faedo",
    "category_label": "Ramo João Faedo & Erina",
    "title": "Germano Faedo e Honorina Felizzari Faedo",
    "year": "Século XX",
    "location": "Rio Grande do Sul",
    "people": "Germano Faedo e Honorina Felizzari Faedo",
    "caption": "Casal Germano Faedo e Honorina Felizzari Faedo, pais de Jorge Auri, Mari de Lurdes, Maria de Fátima, Cleunice Maria, Clarice Terezinha e Odete Marta Faedo.",
    "src": "imagens_alta_resolucao/pages_03_fotos-novas/04_533310_180048338785151_100003399580733_252931_1102414500_n2.jpg"
  },
  {
    "id": "jfa-13",
    "category": "pioneiros",
    "category_label": "Patriarcas & Pioneiros",
    "title": "Mosaico Fotográfico do Site Original da Família Faedo",
    "year": "2012",
    "location": "Rio Grande do Sul / Paraná",
    "people": "Família Faedo",
    "caption": "Banner fotográfico que ilustrava a postagem inaugural do blog da Família Faedo em abril de 2012.",
    "src": "imagens_alta_resolucao/posts_11_familia-faedo/01_fotos__site_da_familia__Faedo.jpg"
  }
];
const ARCHIVE_ENTRIES = [
  {
    "kind": "pages",
    "kind_label": "Página Principal",
    "index": 1,
    "title": "Fotos Da  Família  Faedo",
    "published": "2013-04-16",
    "url": "https://familiafaedo.blogspot.com/p/fotos-da-familia-faedo.html",
    "html": "<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/01_Erina_Ferlim__Joao_Faedo.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/01_Erina_Ferlim__Joao_Faedo.jpg\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\nErina Ferlin &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; João&nbsp;&nbsp;Faedo</div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><br /></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><b>filhos&nbsp;</b></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><b><br /></b></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n</div>\n<div class=\"MsoListParagraphCxSpFirst\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">1.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> IRINEU FERLIM FAEDO<o:p></o:p></span></div>\n<div class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">2.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> AFONSSO FAEDO<o:p></o:p></span></div>\n<div class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">3.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> JOSE FAEDO<o:p></o:p></span></div>\n<div class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">4.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> ADOLFO FAEDO<o:p></o:p></span></div>\n<div class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">5.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> GERMANO FAEDO<o:p></o:p></span></div>\n<div class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">6.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> ANGELO ALBERTO FAEDO\n(ANGELIM)<o:p></o:p></span></div>\n<div class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">7.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> BENITO FAEDO<o:p></o:p></span></div>\n<div class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">8.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> EXPEDITO FAEDO<o:p></o:p></span></div>\n<div class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">9.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> LUIZ&nbsp; FAEDO<o:p></o:p></span></div>\n<div class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">10.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> HUMBERTO GENTIL&nbsp; FAEDO<o:p></o:p></span></div>\n<div class=\"MsoListParagraphCxSpLast\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">11.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> MARIA&nbsp; FAEDO<o:p></o:p></span></div>\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 12 .HELENA&nbsp;&nbsp;\nFAEDO&nbsp;</span><br />\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"><br /></span>\n<div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/02_snapshot-0273.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"640\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/02_snapshot-0273.jpg\" width=\"570\" /></a></div>\n&nbsp;<span style=\"font-size: large;\">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<b>Ao lado &nbsp;direito da foto Luiz&nbsp;Antonio&nbsp; Faedo &nbsp;e ao seu&nbsp;lado o&nbsp;</b></span><span style=\"font-size: large;\"><b>&nbsp;filho &nbsp; Benito Rômulo &nbsp;Faedo</b></span><br />\n<b style=\"font-size: x-large;\"><br /></b>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/03_snapshot-037.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"640\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/03_snapshot-037.jpg\" width=\"506\" /></a></div>\n<span style=\"font-family: 'Lucida Calligraphy';\"><span style=\"font-size: 21px; line-height: 24px;\"><br /></span></span>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: x-large;\"><b>Luiz Antonio Faedo &nbsp;aos 25 anos de idade</b></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: x-large;\"><br /></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: x-large;\"><br /></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b><span style=\"font-size: x-large;\">PRIMEIRAS &nbsp;GERAÇÕES DA&nbsp;FAMÍLIA&nbsp;FAEDO&nbsp; NO&nbsp;BRASIL</span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/04_Familia_Faedo.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"268\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/04_Familia_Faedo.jpg\" width=\"400\" /></a></div>\n<b><span style=\"font-size: large;\">Podemos ver  nesta  foto  a   Família  Faedo no  Brasil Começando  do canto  esquerdo  da foto  Luis Antonio Faedo e  logo após veja  na foto  os  filhos  de João Faedo e  Erina Ferlim \n Irineu Faedo, Afonso Faedo, Jose Faedo, Adolfo Faedo,Germano Faedo, Ângelo Alberto Faedo ,Expedito Faedo,Luis Faedo ,Humberto  Gentil Faedo,Maria Faedo,Helena Faedo ,(falta na foto  um  dos irmãos o SR. Benito Faedo)\n\n\n\n\n</span></b><br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/05_Familia_Faedo__284_29.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"286\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/05_Familia_Faedo__284_29.jpg\" width=\"400\" /></a></div>\n<b><span style=\"font-size: large;\">João Faedo  ano  1964\n\n\n\n\nBenito e  esposa ,tio Luiz e tia  cila casamento no ano de 1964 )tio  Espedito e esposa ,tio Jose e tia  maria ,tio Adolfo e tia Lurdes  , tia helena  joão  Faedo sea marica , Ângelo (angelim)  esta faltando  o tio  afonso , e tio  Irineu e tia maria !\n\n\n\n</span></b><br />\n<br />\n<br />\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/06_Familia_Faedo__283_29.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"428\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/06_Familia_Faedo__283_29.jpg\" width=\"640\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/07_Documento-Fotografia-1__casamento.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"640\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/07_Documento-Fotografia-1__casamento.jpg\" width=\"386\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><br /></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><b>Casamento &nbsp;de &nbsp;Ângelo&nbsp;A &nbsp;Faedo &nbsp;e &nbsp;Armeri &nbsp;Nunes&nbsp;</b></span></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/08_casmento_de__angelo_e__almeri.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"640\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/08_casmento_de__angelo_e__almeri.jpg\" width=\"378\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><b>Casamento &nbsp;de &nbsp;Ângelo A &nbsp;Faedo &nbsp;e &nbsp;Armeri &nbsp;Nunes&nbsp;</b></span></div>\n<br />\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/09_Documento-Fotografia-1_12.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"384\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/09_Documento-Fotografia-1_12.jpg\" width=\"640\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><b>&nbsp;Casamento &nbsp;de &nbsp; &nbsp;Severino &nbsp;e Eracy</b></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><b><br /></b></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><b><br /></b></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><b><br /></b></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><b><br /></b></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><b><br /></b></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/10_snapshot-020.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"640\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/10_snapshot-020.jpg\" width=\"431\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b><span style=\"font-size: x-large;\"><br /></span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b><span style=\"font-size: x-large;\">Helena Faedo &nbsp;e &nbsp;Maria &nbsp;Faedo&nbsp;</span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b style=\"font-size: xx-large;\">Filhas de João&nbsp;Faedo&nbsp;e&nbsp;Erina&nbsp;Ferlin</b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b style=\"font-size: xx-large;\"><br /></b></div>\n<div class=\"\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: x-large;\"><b><br /></b></span></div>\n<div class=\"\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: x-large;\"><b><br /></b></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_05_irineu-faedo-e-maria-conceicao-faedo/01_DSC01835.JPG\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"640\" src=\"imagens_alta_resolucao/posts_05_irineu-faedo-e-maria-conceicao-faedo/01_DSC01835.JPG\" width=\"480\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n</div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b><span style=\"font-size: large;\">Irineu Faedo e &nbsp;Maria Conceição Faedo</span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b><span style=\"font-size: large;\"><br /></span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b><span style=\"font-size: large;\"><br /></span></b></div>\n<div>\n<br /></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/12_523984_216218075147659_773724487_n.jpg\" imageanchor=\"1\" style=\"clear: right; float: right; margin-bottom: 1em; margin-left: 1em;\"><img border=\"0\" height=\"480\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/12_523984_216218075147659_773724487_n.jpg\" width=\"640\" /></a><br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n</div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><b>Casamento &nbsp;de Cesar Joao Faedo e Sirlei M. da Silva Faedo</b></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><b><br /></b></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><b><br /></b></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/13_FOTO_04.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"467\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/13_FOTO_04.jpg\" width=\"640\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><b>Os filhos do Sr. Luiz Antonio Faedo com Leontina Assis Cavalheiro Faedo que está sentada, de pé da esquerda para a direita: Benito, Adão, Adroaldo, Plinio, Rosalino e João.</b></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/14_FOTO_05.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"424\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/14_FOTO_05.jpg\" width=\"640\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><b>Da&nbsp;esquerda para direita: Rosa (filha), Leonor (1a esposa de Adroaldo), Marlene (esposa de João), D. Leontina, Maria (esposa de Rosalino) e Lourdes (esposa de Benito).</b></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/15_FOTO_03.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"440\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/15_FOTO_03.jpg\" width=\"640\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><b>Sr. Luiz Antonio Faedo e seu filho Rosalino Tacito Faedo, no casamento de Luiz Faedo, filho de Adão e Ema Faedo.</b></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><br /></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><br /></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/16_FOTO_07.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"408\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/16_FOTO_07.jpg\" width=\"640\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><b><br /></b></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><b>Os irmãos Rosalino, Adão, João e Plinio no casamento de Rosana Shoala, filha de Rosa Faedo Teixeira</b></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/17_FOTO_06.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"424\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/17_FOTO_06.jpg\" width=\"640\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b><span style=\"font-size: large;\">&nbsp;Os irmãos em visita ao irmão Adroaldo que morava em Rondonia, da esquerda para a direita Plinio, João, Adroaldo, Rosalino e Adão, a menina é filha da 2ª esposa do Sr. Adroaldo.</span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b><span style=\"font-size: large;\"><br /></span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/18_FOTO_02.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"640\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/18_FOTO_02.jpg\" width=\"624\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b><span style=\"font-size: large;\">&nbsp;Festa de fim de ano na última morada do Sr. Luiz Antonio Faedo, ao fundo de vermelho Marta Apa Faedo, no colo do Sr. Luiz A &nbsp;Faedo ; Marco Antonio Faedo, ao lado Márcia Rosely Faedo ambos filhos do Sr. Rosalino Tacito Faedo e com camisa xadrez Marcelo Faedo, filho de João Flaviano Faedo.</span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b><span style=\"font-size: large;\"><br /></span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/19_FOTO_08.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"416\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/19_FOTO_08.jpg\" width=\"640\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n&nbsp;<b><span style=\"font-size: large;\">Aniversário de 66 anos de Luiz Antonio Faedo, ao seu lado de vestido estampado sua esposa D. Maria Conceição&nbsp;Faedo, do outro lado de azul sua filha Rosa Teixeira, ao fundo de óculos sua nora Sra. Lurdes, esposa do filho Benito.</span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b><span style=\"font-size: large;\"><br /></span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/20_plinio_gerson.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"640\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/20_plinio_gerson.jpg\" width=\"408\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><b>Plínio</b></span><b><span style=\"font-size: large;\">&nbsp;Luiz&nbsp;Faedo &nbsp;e &nbsp;seu &nbsp;filho &nbsp;Gerson Luiz &nbsp;Faedo&nbsp;</span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b><span style=\"font-size: large;\">( Plínio&nbsp;filho&nbsp; de &nbsp;Luiz Antonio Faedo e Leontina cavalheiro&nbsp;)&nbsp;</span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b><span style=\"font-size: large;\"><br /></span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b><span style=\"font-size: large;\"><br /></span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/21_Downloads3.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"400\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/21_Downloads3.jpg\" width=\"640\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b><span style=\"font-size: large;\">&nbsp;Festa de aniversário de Rosana Shoaila Teixeira, filha de Rosa Faedo Teixeira, que faz parte dos filhos do 2º Casamento do Sr Luiz Antonio Faedo, da esquerda para a direita estão: Sr.Odair Teixeira, Sra. Rosa Teixeira com Rosana no colo, D. Maria, Sr. Luiz Antonio Faedo, Sr. Rosalino T. Faedo e sua esposa Maria Agnoleto Faedo com Marta Apa Faedo no colo e no chão Márcia Rosely Faedo, Juca Faedo outro filho do 2º Casamento do Sr. Luiz Antonio Faedo, sua filha Krishna &nbsp;e sua esposa Sra Nedir.</span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b><span style=\"font-size: large;\"><br /></span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/22_img062.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"496\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/22_img062.jpg\" width=\"640\" /></a></div>\n<br />\n<span style=\"font-family: Calibri, sans-serif; line-height: 115%;\"><b><span style=\"font-size: large;\">Luiz\nAntonio Faedo&nbsp; com os filhos\nBenito,Adão,Adroaldo,Plinio,Rosalino e João em uma festa no Tuna ( Francisco Beltrão)</span></b></span><br />\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/23_img063.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"480\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/23_img063.jpg\" width=\"640\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b><span style=\"font-size: large;\"><br /></span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-family: Calibri, sans-serif; font-size: large;\"><b><span style=\"line-height: 115%;\">Foto &nbsp;tirada\nem 1968 na antiga casa do sr &nbsp;Luiz &nbsp;Antonio &nbsp;Faedo Benito&nbsp;</span><span style=\"line-height: 16px;\">Rômulo</span><span style=\"line-height: 115%;\">&nbsp;Faedo na ponta esquerda &nbsp;e os filhos do sr &nbsp;</span></b><span style=\"line-height: 26px;\"><b>Luiz &nbsp;Antonio &nbsp;Faedo&nbsp;</b></span></span><b style=\"font-family: Calibri, sans-serif; font-size: x-large;\"><span style=\"line-height: 115%;\">segundo\ncasamento com a dona Maria</span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b style=\"font-family: Calibri, sans-serif; font-size: x-large;\"><span style=\"line-height: 115%;\"><br /></span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/24_SCAN_20130416_212450922.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"427\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/24_SCAN_20130416_212450922.jpg\" width=\"640\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/25_SCAN_20130416_212559203.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"640\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/25_SCAN_20130416_212559203.jpg\" width=\"462\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/26_SCAN_20130416_212704177.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"430\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/26_SCAN_20130416_212704177.jpg\" width=\"640\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/27_SCAN_20130416_212756390.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"490\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/27_SCAN_20130416_212756390.jpg\" width=\"640\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/28_SCAN_20130416_212842754.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"410\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/28_SCAN_20130416_212842754.jpg\" width=\"640\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/29_SCAN_20130416_212926605.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"426\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/29_SCAN_20130416_212926605.jpg\" width=\"640\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/30_SCAN_20130416_213021736.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"394\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/30_SCAN_20130416_213021736.jpg\" width=\"640\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/31_SCAN_20130416_220221905.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"640\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/31_SCAN_20130416_220221905.jpg\" width=\"410\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/32_SCAN_20130416_220302559.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"640\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/32_SCAN_20130416_220302559.jpg\" width=\"422\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/33_SCAN_20130416_220357985.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"410\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/33_SCAN_20130416_220357985.jpg\" width=\"640\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/34_SCAN_20130416_220441447.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"404\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/34_SCAN_20130416_220441447.jpg\" width=\"640\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/35_SCAN_20130416_220521758.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"410\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/35_SCAN_20130416_220521758.jpg\" width=\"640\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/36_SCAN_20130416_220602115.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"390\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/36_SCAN_20130416_220602115.jpg\" width=\"640\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/37_SCAN_20130416_220642550.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"640\" src=\"imagens_alta_resolucao/pages_01_fotos-da-familia-faedo/37_SCAN_20130416_220642550.jpg\" width=\"430\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b style=\"font-family: Calibri, sans-serif; font-size: x-large;\"><span style=\"line-height: 115%;\"><br /></span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n</div>\n",
    "text": "Erina Ferlin                   João  Faedo\n\nfilhos\n\n1. IRINEU FERLIM FAEDO\n\n2. AFONSSO FAEDO\n\n3. JOSE FAEDO\n\n4. ADOLFO FAEDO\n\n5. GERMANO FAEDO\n\n6. ANGELO ALBERTO FAEDO\n(ANGELIM)\n\n7. BENITO FAEDO\n\n8. EXPEDITO FAEDO\n\n9. LUIZ  FAEDO\n\n10. HUMBERTO GENTIL  FAEDO\n\n11. MARIA  FAEDO\n\n12 .HELENA\nFAEDO\n\nAo lado  direito da foto Luiz Antonio  Faedo  e ao seu lado o  filho   Benito Rômulo  Faedo\n\nLuiz Antonio Faedo  aos 25 anos de idade\n\nPRIMEIRAS  GERAÇÕES DA FAMÍLIA FAEDO  NO BRASIL\n\nPodemos ver  nesta  foto  a   Família  Faedo no  Brasil Começando  do canto  esquerdo  da foto  Luis Antonio Faedo e  logo após veja  na foto  os  filhos  de João Faedo e  Erina Ferlim\nIrineu Faedo, Afonso Faedo, Jose Faedo, Adolfo Faedo,Germano Faedo, Ângelo Alberto Faedo ,Expedito Faedo,Luis Faedo ,Humberto  Gentil Faedo,Maria Faedo,Helena Faedo ,(falta na foto  um  dos irmãos o SR. Benito Faedo)\n\nJoão Faedo  ano  1964\n\nBenito e  esposa ,tio Luiz e tia  cila casamento no ano de 1964 )tio  Espedito e esposa ,tio Jose e tia  maria ,tio Adolfo e tia Lurdes  , tia helena  joão  Faedo sea marica , Ângelo (angelim)  esta faltando  o tio  afonso , e tio  Irineu e tia maria !\n\nCasamento  de  Ângelo A  Faedo  e  Armeri  Nunes\n\nCasamento  de  Ângelo A  Faedo  e  Armeri  Nunes\n\nCasamento  de    Severino  e Eracy\n\nHelena Faedo  e  Maria  Faedo\n\nFilhas de João Faedo e Erina Ferlin\n\nIrineu Faedo e  Maria Conceição Faedo\n\nCasamento  de Cesar Joao Faedo e Sirlei M. da Silva Faedo\n\nOs filhos do Sr. Luiz Antonio Faedo com Leontina Assis Cavalheiro Faedo que está sentada, de pé da esquerda para a direita: Benito, Adão, Adroaldo, Plinio, Rosalino e João.\n\nDa esquerda para direita: Rosa (filha), Leonor (1a esposa de Adroaldo), Marlene (esposa de João), D. Leontina, Maria (esposa de Rosalino) e Lourdes (esposa de Benito).\n\nSr. Luiz Antonio Faedo e seu filho Rosalino Tacito Faedo, no casamento de Luiz Faedo, filho de Adão e Ema Faedo.\n\nOs irmãos Rosalino, Adão, João e Plinio no casamento de Rosana Shoala, filha de Rosa Faedo Teixeira\n\nOs irmãos em visita ao irmão Adroaldo que morava em Rondonia, da esquerda para a direita Plinio, João, Adroaldo, Rosalino e Adão, a menina é filha da 2ª esposa do Sr. Adroaldo.\n\nFesta de fim de ano na última morada do Sr. Luiz Antonio Faedo, ao fundo de vermelho Marta Apa Faedo, no colo do Sr. Luiz A  Faedo ; Marco Antonio Faedo, ao lado Márcia Rosely Faedo ambos filhos do Sr. Rosalino Tacito Faedo e com camisa xadrez Marcelo Faedo, filho de João Flaviano Faedo.\n\nAniversário de 66 anos de Luiz Antonio Faedo, ao seu lado de vestido estampado sua esposa D. Maria Conceição Faedo, do outro lado de azul sua filha Rosa Teixeira, ao fundo de óculos sua nora Sra. Lurdes, esposa do filho Benito.\n\nPlínio Luiz Faedo  e  seu  filho  Gerson Luiz  Faedo\n\n( Plínio filho  de  Luiz Antonio Faedo e Leontina cavalheiro )\n\nFesta de aniversário de Rosana Shoaila Teixeira, filha de Rosa Faedo Teixeira, que faz parte dos filhos do 2º Casamento do Sr Luiz Antonio Faedo, da esquerda para a direita estão: Sr.Odair Teixeira, Sra. Rosa Teixeira com Rosana no colo, D. Maria, Sr. Luiz Antonio Faedo, Sr. Rosalino T. Faedo e sua esposa Maria Agnoleto Faedo com Marta Apa Faedo no colo e no chão Márcia Rosely Faedo, Juca Faedo outro filho do 2º Casamento do Sr. Luiz Antonio Faedo, sua filha Krishna  e sua esposa Sra Nedir.\n\nLuiz\nAntonio Faedo  com os filhos\nBenito,Adão,Adroaldo,Plinio,Rosalino e João em uma festa no Tuna ( Francisco Beltrão)\n\nFoto  tirada\nem 1968 na antiga casa do sr  Luiz  Antonio  Faedo Benito Rômulo Faedo na ponta esquerda  e os filhos do sr  Luiz  Antonio  Faedo segundo\ncasamento com a dona Maria",
    "image_count": 37
  },
  {
    "kind": "pages",
    "kind_label": "Página Principal",
    "index": 2,
    "title": "PORTAL  FAMÍLIA  FAEDO",
    "published": "2012-05-05",
    "url": "https://familiafaedo.blogspot.com/p/portal-faedo.html",
    "html": "<span style=\"font-size: x-large;\"><b>ENTRE &nbsp;NO PORTAL &nbsp;DA FAMÍLIA&nbsp;FAEDO</b></span><br />\n<div>\n<table cellpadding=\"0\" cellspacing=\"0\" class=\"tr-caption-container\" style=\"float: right; text-align: center;\"><tbody>\n<tr><td style=\"text-align: center;\"><a href=\"imagens_alta_resolucao/pages_04_historia-da-familia-faedo/01_Familia_Faedo.png\" imageanchor=\"1\" style=\"margin-left: auto; margin-right: auto;\"><img border=\"0\" height=\"214\" src=\"imagens_alta_resolucao/pages_02_portal-familia-faedo/01_Familia_Faedo.png\" width=\"320\" /></a></td></tr>\n<tr><td class=\"tr-caption\" style=\"text-align: center;\"><br /></td></tr>\n</tbody></table>\n<br />\n<br />\nAtravés&nbsp;do portal&nbsp;você&nbsp; pode ajudar&nbsp;a contar&nbsp;a nossa &nbsp;historia &nbsp; mande fotos antigas ou &nbsp;novas e conte a historia delas &nbsp;.<br />\n<br />\n<span style=\"color: blue;\"></span><br />\n<span style=\"color: blue;\"></span><br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<br />\n<a class=\"l\" href=\"http://www.orkut.com/Community?cmm=1215261&amp;hl=pt-BR\" style=\"color: #1122cc; cursor: pointer; font-family: arial, sans-serif; white-space: nowrap;\"><b><span style=\"font-size: large;\"><span style=\"color: #1122cc; cursor: pointer; font-family: arial, sans-serif; white-space: nowrap;\"><span style=\"cursor: pointer;\">orkut - Familia&nbsp;</span></span><em style=\"color: #1122cc; cursor: pointer; font-family: arial, sans-serif; font-style: normal; white-space: nowrap;\">Faedo</em></span></b></a><span style=\"background-color: white; color: #222222; font-family: arial, sans-serif; white-space: nowrap;\"><b><span style=\"font-size: large;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></div>\n<div>\n<div>\n<br />\n<br />\n<u><b><a href=\"https://sites.google.com/site/familiafaedo/\"><span style=\"color: red;\">SITE &nbsp;-&nbsp;FAMÍLIA&nbsp; FAEDO</span></a></b></u><br />\n<span style=\"color: blue;\"><u>https://sites.google.com/site/familiafaedo/</u></span><br />\n<u><span style=\"color: blue;\"></span></u><br />\n<u><span style=\"color: blue;\"></span></u><br />\n<u><span style=\"color: blue;\"></span></u><br />\n<u><span style=\"color: blue;\"></span></u><br />\n<u><span style=\"color: blue;\"></span></u><br />\n<u><span style=\"color: blue;\"></span></u><br />\n<span style=\"color: blue;\"><u></u></span><br />\n<span style=\"color: blue;\"><u></u></span><br />\n<u><span style=\"color: blue;\"></span></u><br />\n<u><span style=\"color: blue;\"></span></u><br />\n<u><span style=\"color: blue;\"></span></u><br />\n<u><span style=\"color: blue;\"></span></u><br />\n<span style=\"color: red;\"><b>MANDE SUAS &nbsp;FOTOS &nbsp; ANTIGAS &nbsp;E NOVAS &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</b></span><br />\n<span style=\"color: red;\"><b>PARA SEREM &nbsp;COLOCADAS NO SITE E NO BLOG</b></span><br />\n<span style=\"color: red;\"><b>AJUDE A CONSTRUIR &nbsp;A NOSSA HISTORIA&nbsp;</b></span><br />\n<span style=\"color: blue;\"><br /></span><br />\n<span style=\"color: blue;\"><br /></span><br />\n<span style=\"color: lime;\"><br /></span><br />\n<span style=\"color: blue; font-size: large;\">EMAIL &nbsp;ld_faedo@hotmail.com</span><br />\n<span style=\"color: blue; font-size: large;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; leandrofaedo@gmail.com</span><br />\n<span style=\"color: blue;\"></span><br />\n<span style=\"color: blue;\"></span></div>\n</div>",
    "text": "ENTRE  NO PORTAL  DA FAMÍLIA FAEDO\n\nAtravés do portal você  pode ajudar a contar a nossa  historia   mande fotos antigas ou  novas e conte a historia delas  .\n\norkut - Familia Faedo\n\nSITE  - FAMÍLIA  FAEDO\n\nhttps://sites.google.com/site/familiafaedo/\n\nMANDE SUAS  FOTOS   ANTIGAS  E NOVAS\n\nPARA SEREM  COLOCADAS NO SITE E NO BLOG\n\nAJUDE A CONSTRUIR  A NOSSA HISTORIA\n\nEMAIL  ld_faedo@hotmail.com\n\nleandrofaedo@gmail.com",
    "image_count": 1
  },
  {
    "kind": "pages",
    "kind_label": "Página Principal",
    "index": 3,
    "title": "Fotos Novas",
    "published": "2012-05-01",
    "url": "https://familiafaedo.blogspot.com/p/fotos-novas.html",
    "html": "<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_03_fotos-novas/01_ANGELO_ALBERTO_FAEDO__28ANGELIM_29_E__SE_NETO___EDUARDO_FELIPE.JPG\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"400\" src=\"imagens_alta_resolucao/pages_03_fotos-novas/01_ANGELO_ALBERTO_FAEDO__28ANGELIM_29_E__SE_NETO___EDUARDO_FELIPE.JPG\" width=\"300\" /></a></div>\n<b>ÂNGELO ALBERTO FAEDO (ANGELIM)  E  SEU NETO  EDUARDO\n</b>\n\n\n\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_03_fotos-novas/02_ANGELO_ALBERTO__FAEDO__28ANGELIM_29_ANIVERSSARIO_DE_84__ANOS.JPG\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"300\" src=\"imagens_alta_resolucao/pages_03_fotos-novas/02_ANGELO_ALBERTO__FAEDO__28ANGELIM_29_ANIVERSSARIO_DE_84__ANOS.JPG\" width=\"400\" /></a></div>\n<b>ANIVERSSARIO   DE ÂNGELO  FAEDO   84 ANOS  \n\nNASCIDO EM  24 DE NOVEMBRO  DE  1927 E NATURAL DA CIDADE  DE PASSO FUNDO  RIO GRANDE  DO SUL  ÂNGELO  FEZ  84   ANOS FILHO  DE  JOÃO FAEDO  E ÉRINA FERLIM\n</b><br />\n<b><br /></b><br />\n<b><br /></b><br />\n<b><br /></b><br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_03_fotos-novas/03_GERMANO.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"620\" src=\"imagens_alta_resolucao/pages_03_fotos-novas/03_GERMANO.jpg\" width=\"640\" /></a></div>\n<b><span style=\"font-size: large;\"><br /></span></b><br />\n<b><span style=\"font-size: large;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style=\"font-size: x-large;\">Germano &nbsp;Faedo</span></b><br />\n<b><span style=\"font-size: large;\">&nbsp;&nbsp;</span></b><br />\n<span style=\"font-size: large;\"><b></b></span><br />\n<span style=\"font-size: large;\"><b>Germano Faedo casou-se com Honorina Felizzari Faedo. Tiveram cinco filhos:</b></span><br />\n<span style=\"font-size: large;\"><b><br /></b></span><br />\n<span style=\"font-size: large;\"><b>Jorge Auri Faedo</b></span><br />\n<span style=\"font-size: large;\"><b>Mari de Lurdes Faedo&nbsp;</b></span><br />\n<span style=\"font-size: large;\"><b>Maria De&nbsp;Fátima Faedo</b></span><br />\n<span style=\"font-size: large;\"><b>Cleunice Maria Faedo</b></span><br />\n<span style=\"font-size: large;\"><b>Clarice Terezinha Faedo</b></span><br />\n<span style=\"font-size: large;\"><b>Odete Marta Faedo</b></span><br />\n<span style=\"font-size: large;\"><b><br /></b></span><br />\n<a href=\"imagens_alta_resolucao/pages_03_fotos-novas/04_533310_180048338785151_100003399580733_252931_1102414500_n2.jpg\" imageanchor=\"1\" style=\"clear: right; float: right; margin-bottom: 1em; margin-left: 1em;\"><img border=\"0\" height=\"600\" src=\"imagens_alta_resolucao/pages_03_fotos-novas/04_533310_180048338785151_100003399580733_252931_1102414500_n2.jpg\" width=\"640\" /></a><span style=\"font-size: large;\"><b><br /></b></span><br />\n<span style=\"font-size: large;\"><b><br /></b></span><br />\n<span style=\"font-size: large;\"><b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Germano Faedo E Honorina Felizzari Faedo</b></span><br />\n<span style=\"font-size: large;\"><b><br /></b></span><br />\n<span style=\"font-size: large;\"><b><br /></b></span><br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"color: #0000ee;\"><u><br /></u></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_03_fotos-novas/05_PLINIO_2.jpg\" imageanchor=\"1\" style=\"clear: left; float: left; margin-bottom: 1em; margin-right: 1em; text-align: right;\"><img border=\"0\" height=\"640\" src=\"imagens_alta_resolucao/pages_03_fotos-novas/05_PLINIO_2.jpg\" width=\"282\" /></a><b style=\"font-size: x-large;\">Plínio&nbsp;</b><b style=\"font-size: x-large;\">Luiz &nbsp;Faedo &nbsp;Filho de &nbsp;Luiz Antonio Faedo e Leontina Nunes &nbsp;Cavalheiro &nbsp; &nbsp;</b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b><span style=\"font-size: x-large;\">Plínio Luiz &nbsp;Faedo&nbsp;</span></b></div>",
    "text": "ÂNGELO ALBERTO FAEDO (ANGELIM)  E  SEU NETO  EDUARDO\n\nANIVERSSARIO   DE ÂNGELO  FAEDO   84 ANOS\n\nNASCIDO EM  24 DE NOVEMBRO  DE  1927 E NATURAL DA CIDADE  DE PASSO FUNDO  RIO GRANDE  DO SUL  ÂNGELO  FEZ  84   ANOS FILHO  DE  JOÃO FAEDO  E ÉRINA FERLIM\n\nGermano  Faedo\n\nGermano Faedo casou-se com Honorina Felizzari Faedo. Tiveram cinco filhos:\n\nJorge Auri Faedo\n\nMari de Lurdes Faedo\n\nMaria De Fátima Faedo\n\nCleunice Maria Faedo\n\nClarice Terezinha Faedo\n\nOdete Marta Faedo\n\nGermano Faedo E Honorina Felizzari Faedo\n\nPlínio Luiz  Faedo  Filho de  Luiz Antonio Faedo e Leontina Nunes  Cavalheiro\n\nPlínio Luiz  Faedo",
    "image_count": 5
  },
  {
    "kind": "pages",
    "kind_label": "Página Principal",
    "index": 4,
    "title": "Historia  da Família  Faedo",
    "published": "2012-04-28",
    "url": "https://familiafaedo.blogspot.com/p/historia-da-familia-faedo.html",
    "html": "<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_04_historia-da-familia-faedo/01_Familia_Faedo.png\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"268\" src=\"imagens_alta_resolucao/pages_04_historia-da-familia-faedo/01_Familia_Faedo.png\" width=\"400\" /></a></div>\n<b>Natural de Monte Faedo, Província de Vicenza, Itália, Josep Faedo era filho de Luizi Faedo e Margarida Dalban. Em 1891, veio conhecer a América, deixando a família na Europa. Percorreu inicialmente a Argentina e o Uruguai. Josep era agrimensor prático e técnico em vinicultura.\n         Em 1892, foi convidado para orientar a colonização italiana na região da futura cidade de Nova Bassano, no Rio Grande do Sul. Retornou à Itália para trazer a esposa, Rosa Vicário, e seu filho João Faedo. Imigrou para o Brasil em 1895, em Alfredo Chaves, atual Veranópolis (RS). \n     Na década de 1930, Josep e seu irmão João Faedo (interessado por pedras preciosas) vieram conhecer o Paraná. Ao retornar para o Rio Grande do Sul, incentivou seu filho Luiz Antônio Faedo a vir se instalar nesta região, motivado pelas terras férteis do Sudoeste.</b><br />\n<br />\n<br />\n<span style=\"font-size: x-large;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Luiz &nbsp;Antonio &nbsp;Faedo</span><br />\n<br />\n<h3>\n\n\n\n\n<a href=\"imagens_alta_resolucao/pages_04_historia-da-familia-faedo/02_523273_398839913461629_100000068720530_1629222_1853305122_n.jpg\" imageanchor=\"1\" style=\"clear: left; float: left; margin-bottom: 1em; margin-right: 1em;\"><img border=\"0\" src=\"imagens_alta_resolucao/pages_04_historia-da-familia-faedo/02_523273_398839913461629_100000068720530_1629222_1853305122_n.jpg\" /></a><span style=\"font-family: Arial, sans-serif;\"><span style=\"font-size: medium; font-weight: normal;\">&nbsp; &nbsp; </span><span style=\"font-size: large;\">&nbsp; &nbsp;Em fins de&nbsp; 1942, nos meados&nbsp; do&nbsp;\nmês&nbsp; de&nbsp; outubro, Luiz Antonio Faedo. Juntamente&nbsp; com seu irmão\nJoão Faedo, mais conhecido&nbsp; por Joanim&nbsp; Faedo, que era italiano&nbsp;\nde&nbsp; nascimento, da região&nbsp; de Faedo. Província de&nbsp; Vicenza,</span></span><span style=\"font-size: large;\"><span style=\"font-family: Arial, sans-serif;\">&nbsp; &nbsp;Vieram fazer um reconhecimento nesta\nregião (hoje Francisco Beltrão ) . E&nbsp;\nposteriormente&nbsp; regressaram\npara&nbsp; o Rio\nGrande&nbsp; do\nSu, Meses depois&nbsp;\njá no&nbsp; ano de 1943&nbsp; ele&nbsp;\nveio&nbsp; em definitivo.</span><span style=\"font-family: Arial, sans-serif; line-height: 115%;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style=\"font-family: Arial, sans-serif; line-height: 115%;\">O\ndestino seria&nbsp; o recém criado, pelo\ngoverno&nbsp; de Getúlio Vargas. Território do\nIguaçu&nbsp; que compreendia o atual sudoeste\ndo Paraná,&nbsp; e&nbsp; oeste de Santa\nCatarina, em 13 de&nbsp;&nbsp; maio&nbsp;&nbsp; de 1943. Após&nbsp; uma viagem&nbsp;\na&nbsp; cavalo&nbsp; que durou&nbsp;\nmais de&nbsp; um mês, mas já\nchegava&nbsp; as imediações&nbsp; de&nbsp;\nClevelândia,&nbsp; onde adquiriu uma\npropriedade&nbsp; nas margens&nbsp; do&nbsp;\nrio&nbsp; Pato\nBranco (neste&nbsp;\nlocal&nbsp; ficou o filho &nbsp;Adão Faedo. No&nbsp; mesmo\nano se deslocou para novos reconhecimentos, enfrentando\npicadas e com muita&nbsp; dificuldade chegou até as margens do Rio&nbsp;\nMarrecas, onde&nbsp;&nbsp; veio\nconhecer&nbsp; Sebastião Müller, morador do local,\nmais tarde&nbsp;&nbsp; seu&nbsp; compadre. O\nseu&nbsp; rancho.\nAnos depois, isso&nbsp; por 1946&nbsp;\nacabou&nbsp; comprando a posse dessas\nterras (aproximadamente&nbsp; 100 hectares),\naonde esta hoje&nbsp; situada a cidade de\nFrancisco Beltrão.</span></span></h3>\n<div>\n<span style=\"font-size: small;\"><span style=\"font-family: Arial, sans-serif; line-height: 115%;\"><br /></span></span></div>\n<div>\n<span style=\"font-size: small;\"><span style=\"font-family: Arial, sans-serif; line-height: 115%;\"><br /></span></span></div>\n<div>\n<span style=\"font-size: small;\"><span style=\"font-family: Arial, sans-serif; line-height: 115%;\"><br /></span></span></div>\n<div>\n<span style=\"font-size: small;\"><span style=\"font-family: Arial, sans-serif; line-height: 115%;\"><br /></span></span></div>\n<div>\n<span style=\"font-size: small;\"><span style=\"font-family: Arial, sans-serif; line-height: 115%;\"><br /></span></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_04_historia-da-familia-faedo/03_292990_398841210128166_1553346726_n.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"488\" src=\"imagens_alta_resolucao/pages_04_historia-da-familia-faedo/03_292990_398841210128166_1553346726_n.jpg\" width=\"640\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_04_historia-da-familia-faedo/04_534419_398841850128102_100000068720530_1629228_2101392062_n.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"352\" src=\"imagens_alta_resolucao/pages_04_historia-da-familia-faedo/04_534419_398841850128102_100000068720530_1629228_2101392062_n.jpg\" width=\"640\" /></a></div>\n<div>\n<span style=\"font-size: small;\"><span style=\"font-family: Arial, sans-serif; line-height: 115%;\"><br /></span></span></div>\n<div>\n<span style=\"font-family: Arial, sans-serif;\"><span style=\"line-height: 17px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Morada de &nbsp;Luiz &nbsp;&nbsp;</span></span><span style=\"font-family: Arial, sans-serif; line-height: 17px;\">Antonio &nbsp;Faedo</span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_04_historia-da-familia-faedo/05_306538_212278622216934_100003043940340_342786_1065277336_n_2.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"449\" src=\"imagens_alta_resolucao/pages_04_historia-da-familia-faedo/05_306538_212278622216934_100003043940340_342786_1065277336_n_2.jpg\" width=\"640\" /></a></div>\n<div>\n<span style=\"font-size: small;\"><span style=\"font-family: Arial, sans-serif; line-height: 115%;\"><br /></span></span></div>\n<br />\n<br />",
    "text": "Natural de Monte Faedo, Província de Vicenza, Itália, Josep Faedo era filho de Luizi Faedo e Margarida Dalban. Em 1891, veio conhecer a América, deixando a família na Europa. Percorreu inicialmente a Argentina e o Uruguai. Josep era agrimensor prático e técnico em vinicultura.\nEm 1892, foi convidado para orientar a colonização italiana na região da futura cidade de Nova Bassano, no Rio Grande do Sul. Retornou à Itália para trazer a esposa, Rosa Vicário, e seu filho João Faedo. Imigrou para o Brasil em 1895, em Alfredo Chaves, atual Veranópolis (RS).\nNa década de 1930, Josep e seu irmão João Faedo (interessado por pedras preciosas) vieram conhecer o Paraná. Ao retornar para o Rio Grande do Sul, incentivou seu filho Luiz Antônio Faedo a vir se instalar nesta região, motivado pelas terras férteis do Sudoeste.\n\nLuiz  Antonio  Faedo\n\nEm fins de  1942, nos meados  do\nmês  de  outubro, Luiz Antonio Faedo. Juntamente  com seu irmão\nJoão Faedo, mais conhecido  por Joanim  Faedo, que era italiano\nde  nascimento, da região  de Faedo. Província de  Vicenza,   Vieram fazer um reconhecimento nesta\nregião (hoje Francisco Beltrão ) . E\nposteriormente  regressaram\npara  o Rio\nGrande  do\nSu, Meses depois\njá no  ano de 1943  ele\nveio  em definitivo.      O\ndestino seria  o recém criado, pelo\ngoverno  de Getúlio Vargas. Território do\nIguaçu  que compreendia o atual sudoeste\ndo Paraná,  e  oeste de Santa\nCatarina, em 13 de   maio   de 1943. Após  uma viagem\na  cavalo  que durou\nmais de  um mês, mas já\nchegava  as imediações  de\nClevelândia,  onde adquiriu uma\npropriedade  nas margens  do\nrio  Pato\nBranco (neste\nlocal  ficou o filho  Adão Faedo. No  mesmo\nano se deslocou para novos reconhecimentos, enfrentando\npicadas e com muita  dificuldade chegou até as margens do Rio\nMarrecas, onde   veio\nconhecer  Sebastião Müller, morador do local,\nmais tarde   seu  compadre. O\nseu  rancho.\nAnos depois, isso  por 1946\nacabou  comprando a posse dessas\nterras (aproximadamente  100 hectares),\naonde esta hoje  situada a cidade de\nFrancisco Beltrão.\n\nMorada de  Luiz   Antonio  Faedo",
    "image_count": 5
  },
  {
    "kind": "pages",
    "kind_label": "Página Principal",
    "index": 5,
    "title": "Arquivos da  Família  Faedo",
    "published": "2012-04-08",
    "url": "https://familiafaedo.blogspot.com/p/arquivos-da-familia-faedo.html",
    "html": "<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"text-align: -webkit-auto;\">&nbsp; &nbsp; &nbsp; &nbsp; CERTIFICADOS &nbsp;DE CHEGADA AO BRASIL</span>\n</div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"text-align: -webkit-auto;\"><br /></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_05_arquivos-da-familia-faedo/01_531834_398839260128361_100000068720530_1629219_1976991502_n.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" src=\"imagens_alta_resolucao/pages_05_arquivos-da-familia-faedo/01_531834_398839260128361_100000068720530_1629219_1976991502_n.jpg\" /></a></div>\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br />\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;GIUSEPPE FAEDO<br />\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_05_arquivos-da-familia-faedo/02_398872_398838160128471_100000068720530_1629216_428103149_n.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" src=\"imagens_alta_resolucao/pages_05_arquivos-da-familia-faedo/02_398872_398838160128471_100000068720530_1629216_428103149_n.jpg\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\nROSA&nbsp;VICÁRIO FAEDO</div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/pages_05_arquivos-da-familia-faedo/03_523797_401368216542132_100000068720530_1636607_24209984_n.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" src=\"imagens_alta_resolucao/pages_05_arquivos-da-familia-faedo/03_523797_401368216542132_100000068720530_1636607_24209984_n.jpg\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\nBRASÃO&nbsp;FAMÍLIA&nbsp;FAEDO&nbsp;</div>\n<br />\n<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" class=\"tr-caption-container\" style=\"margin-left: auto; margin-right: auto; text-align: center;\"><tbody>\n<tr><td style=\"text-align: center;\"><a href=\"imagens_alta_resolucao/pages_05_arquivos-da-familia-faedo/04_549237_398840213461599_100000068720530_1629223_934641111_n.jpg\" imageanchor=\"1\" style=\"margin-left: auto; margin-right: auto;\"><img border=\"0\" height=\"640\" src=\"imagens_alta_resolucao/pages_05_arquivos-da-familia-faedo/04_549237_398840213461599_100000068720530_1629223_934641111_n.jpg\" width=\"514\" /></a></td></tr>\n<tr><td class=\"tr-caption\" style=\"text-align: center;\">Add caption</td></tr>\n</tbody></table>\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;",
    "text": "CERTIFICADOS  DE CHEGADA AO BRASIL\n\nGIUSEPPE FAEDO\n\nROSA VICÁRIO FAEDO\n\nBRASÃO FAMÍLIA FAEDO\n\nAdd caption",
    "image_count": 4
  },
  {
    "kind": "pages",
    "kind_label": "Página Principal",
    "index": 6,
    "title": "Noticias Família  Faedo",
    "published": "2012-04-07",
    "url": "https://familiafaedo.blogspot.com/p/noticias-familia-faedo.html",
    "html": "<a href=\"imagens_alta_resolucao/pages_06_noticias-familia-faedo/01_398872_398838160128471_100000068720530_1629216_428103149_n.jpg\" imageanchor=\"1\" style=\"clear: right; float: right; margin-bottom: 1em; margin-left: 1em;\"><img border=\"0\" height=\"320\" src=\"imagens_alta_resolucao/pages_06_noticias-familia-faedo/01_398872_398838160128471_100000068720530_1629216_428103149_n.jpg\" width=\"206\" /></a><b>CERTIFICADOS DE CHEGADA AO BRASIL DA&nbsp;FAMÍLIA&nbsp;FAEDO</b><br />\n<b><br /></b><br />\n<b>CLIQUE AQUI E VEJA OS &nbsp;CERTIFICADOS &nbsp;DE CHEGADA &nbsp;AO BRASIL</b><br />\n<br />\n<b><a href=\"http://familiafaedo.blogspot.com.br/p/arquivos-da-familia-faedo.html\"><span style=\"color: blue;\">ARQUIVOS DA &nbsp;FAMÍLIA&nbsp;FAEDO</span></a></b><br />\n<b><br /></b><br />\n<b><br /></b><br />\n<b>AGRADECIMENTOS A GERSON FAEDO</b><br />\n<b><br /></b><br />\n<b><br /></b><br />\n<b><br /></b><br />\n<b>POSTADO &nbsp;POR &nbsp;LEANDRO DE SOUZA &nbsp;FAEDO</b><br />\n<b><br /></b><br />\n<b><br /></b><br />\n<br />\n<b><u>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</u></b><br />\n&nbsp;ARQUIVO PUBLICO MINEIRO<br />\n<span style=\"background-color: white; font-family: Arial, sans-serif; font-size: 8pt;\"><b><br /></b></span><br />\n<span style=\"background-color: white; font-family: Arial, sans-serif; font-size: 8pt;\"><b>Arquivo Público Mineiro - APM</b></span><br />\n<div style=\"background-color: white; color: #260a00; font-family: Arial, Verdana, sans-serif; font-size: 13px; margin-bottom: 0.0001pt; margin-top: 5px;\">\n<span style=\"color: black; font-family: Arial, sans-serif; font-size: 25pt;\">SA-884 - FAEDO &nbsp; &nbsp;&nbsp;</span></div>\n<div style=\"background-color: white; color: #260a00; font-family: Arial, Verdana, sans-serif; font-size: 13px; margin-bottom: 0.0001pt; margin-top: 5px;\">\n<b><i><span style=\"color: black; font-family: Arial, sans-serif; font-size: 10pt;\">Sobrenome:&nbsp;</span></i></b><span style=\"color: #333333; font-family: Arial, sans-serif; font-size: 10pt;\">FAEDO Tranquillo - 40 anos</span></div>\n<div style=\"background-color: white; color: #260a00; font-family: Arial, Verdana, sans-serif; font-size: 13px; margin-bottom: 0.0001pt; margin-top: 5px;\">\n<b><i><span style=\"color: black; font-family: Arial, sans-serif; font-size: 10pt;\">Livro:&nbsp;</span></i></b><span style=\"color: #333333; font-family: Arial, sans-serif; font-size: 10pt;\">SA-884 pag.: 243&nbsp;</span></div>\n<div style=\"background-color: white; color: #260a00; font-family: Arial, Verdana, sans-serif; font-size: 13px; margin-bottom: 0.0001pt; margin-top: 5px;\">\n<b><i><span style=\"color: black; font-family: Arial, sans-serif; font-size: 10pt;\">Data:&nbsp;</span></i></b><span style=\"color: #333333; font-family: Arial, sans-serif; font-size: 10pt;\">05/04/1896 ( Data de entrada na Hospedaria )</span></div>\n<div style=\"background-color: white; color: #260a00; font-family: Arial, Verdana, sans-serif; font-size: 13px; margin-bottom: 0.0001pt; margin-top: 5px;\">\n<b><i><span style=\"color: black; font-family: Arial, sans-serif; font-size: 10pt;\">Nacionalidade:&nbsp;</span></i></b><span style=\"color: #333333; font-family: Arial, sans-serif; font-size: 10pt;\">Italiana</span></div>\n<div style=\"background-color: white; color: #260a00; font-family: Arial, Verdana, sans-serif; font-size: 13px; margin-bottom: 0.0001pt; margin-top: 5px;\">\n<b><i><span style=\"color: black; font-family: Arial, sans-serif; font-size: 10pt;\">Dependentes:&nbsp;</span></i></b><span style=\"color: #333333; font-family: Arial, sans-serif; font-size: 10pt;\">FAEDO Marianna - 37 anos - mulher</span></div>\n<div style=\"background-color: white; color: #260a00; font-family: Arial, Verdana, sans-serif; font-size: 13px; margin-bottom: 0.0001pt; margin-top: 5px;\">\n<span style=\"color: #333333; font-family: Arial, sans-serif; font-size: 10pt;\">FAEDO Paride - 15 anos - filho</span></div>\n<div style=\"background-color: white; color: #260a00; font-family: Arial, Verdana, sans-serif; font-size: 13px; margin-bottom: 0.0001pt; margin-top: 5px;\">\n<span style=\"color: #333333; font-family: Arial, sans-serif; font-size: 10pt;\">FAEDO Virginia - 14 anos - filha</span></div>\n<div style=\"background-color: white; color: #260a00; font-family: Arial, Verdana, sans-serif; font-size: 13px; margin-bottom: 0.0001pt; margin-top: 5px;\">\n<span style=\"color: #333333; font-family: Arial, sans-serif; font-size: 10pt;\">FAEDO Albino - 10 anos - filho</span></div>\n<div style=\"background-color: white; color: #260a00; font-family: Arial, Verdana, sans-serif; font-size: 13px; margin-bottom: 0.0001pt; margin-top: 5px;\">\n<span style=\"color: #333333; font-family: Arial, sans-serif; font-size: 10pt;\">FAEDO Albina - 3 anos - filha</span></div>\n<div style=\"background-color: white; color: #260a00; font-family: Arial, Verdana, sans-serif; font-size: 13px; margin-bottom: 0.0001pt; margin-top: 5px;\">\n<span style=\"color: #333333; font-family: Arial, sans-serif; font-size: 10pt;\">FAEDO Almerico - 1 ano - filho</span></div>\n<div style=\"background-color: white; color: #260a00; font-family: Arial, Verdana, sans-serif; font-size: 13px; margin-bottom: 0.0001pt; margin-top: 5px;\">\n<b><i><span style=\"color: black; font-family: Arial, sans-serif; font-size: 10pt;\">Embarcação:&nbsp;</span></i></b><span style=\"color: #333333; font-family: Arial, sans-serif; font-size: 10pt;\">Colombo</span></div>\n<div style=\"background-color: white; color: #260a00; font-family: Arial, Verdana, sans-serif; font-size: 13px; margin-bottom: 0.0001pt; margin-top: 5px;\">\n<b><i><span style=\"color: black; font-family: Arial, sans-serif; font-size: 10pt;\">Microfilme:&nbsp;</span></i></b><span style=\"color: #333333; font-family: Arial, sans-serif; font-size: 10pt;\">Rolo 02</span></div>\n<br />\n<u>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</u><br />\n02\n\n\n\n\n\n\n<b>\nFRANCISCO BELTRAO FAZ HOMENAGEM JOSEP FAEDO</b><br />\n<br />\n<br />\n<b></b>A Prefeitura de Francisco Beltrão reinaugurou quarta-feira pela manhã a Praça Josep Faedo (antigo half de skate), na Rua Palmas, no centro. O projeto de revitalização foi elaborado pela arquiteta Liziane Behne e executado pela Secretaria de Urbanismo, em parceria com a empresa Consisa Net, que ficou responsável por cuidar da praça.\n\n\nAlém da remodelação do espaço, as árvores foram conservadas. A próxima etapa será a iluminação especial e a instalação dos bancos. Sara Faedo da Costa, neta de Luiz Antônio Faedo, agradeceu a homenagem. \"Esta obra valoriza o lugar. Meu avô gostava tanto daqui, tanto que deixou tudo e veio pra cá da região de Passo Fundo (RS).\"\nA reinauguração contou com a presença de Sara, do prefeito Wilmar Reichembach (PSDB), do secretário Sérgio Galvão (Urbanismo) e de José Antonio Antunes Zanrosso, diretor da Consisa Net.\n\n\nFRANCISCO BELTRAO FAZ HOMENAGEM JOSEP FAEDO\npostado em 12/10/2009 17:35 por Leandro de Souza Faedo   [ há 22 horas atualizado‎(s)‎ ]\nA Prefeitura de Francisco Beltrão reinaugurou quarta-feira pela manhã a Praça Josep Faedo (antigo half de skate), na Rua Palmas, no centro. O projeto de revitalização foi elaborado pela arquiteta Liziane Behne e executado pela Secretaria de Urbanismo, em parceria com a empresa Consisa Net, que ficou responsável por cuidar da praça.\n\n\nAlém da remodelação do espaço, as árvores foram conservadas. A próxima etapa será a iluminação especial e a instalação dos bancos. Sara Faedo da Costa, neta de Luiz Antônio Faedo, agradeceu a homenagem. \"Esta obra valoriza o lugar. Meu avô gostava tanto daqui, tanto que deixou tudo e veio pra cá da região de Passo Fundo (RS).\"\nA reinauguração contou com a presença de Sara, do prefeito Wilmar Reichembach (PSDB), do secretário Sérgio Galvão (Urbanismo) e de José Antonio Antunes Zanrosso, diretor da Consisa Net.<a href=\"http://www.jornaldebeltrao.com.br/geral/prefeitura-revitaliza-praca-josep-faedo-69670/\">        http://www.jornaldebeltrao.com.br/geral/prefeitura-revitaliza-praca-josep-faedo-69670/</a><br />\n<a name='more'></a>",
    "text": "CERTIFICADOS DE CHEGADA AO BRASIL DA FAMÍLIA FAEDO\n\nCLIQUE AQUI E VEJA OS  CERTIFICADOS  DE CHEGADA  AO BRASIL\n\nARQUIVOS DA  FAMÍLIA FAEDO\n\nAGRADECIMENTOS A GERSON FAEDO\n\nPOSTADO  POR  LEANDRO DE SOUZA  FAEDO\n\nARQUIVO PUBLICO MINEIRO\n\nArquivo Público Mineiro - APM\n\nSA-884 - FAEDO\n\nSobrenome: FAEDO Tranquillo - 40 anos\n\nLivro: SA-884 pag.: 243\n\nData: 05/04/1896 ( Data de entrada na Hospedaria )\n\nNacionalidade: Italiana\n\nDependentes: FAEDO Marianna - 37 anos - mulher\n\nFAEDO Paride - 15 anos - filho\n\nFAEDO Virginia - 14 anos - filha\n\nFAEDO Albino - 10 anos - filho\n\nFAEDO Albina - 3 anos - filha\n\nFAEDO Almerico - 1 ano - filho\n\nEmbarcação: Colombo\n\nMicrofilme: Rolo 02\n\n02\n\nFRANCISCO BELTRAO FAZ HOMENAGEM JOSEP FAEDO\n\nA Prefeitura de Francisco Beltrão reinaugurou quarta-feira pela manhã a Praça Josep Faedo (antigo half de skate), na Rua Palmas, no centro. O projeto de revitalização foi elaborado pela arquiteta Liziane Behne e executado pela Secretaria de Urbanismo, em parceria com a empresa Consisa Net, que ficou responsável por cuidar da praça.\n\nAlém da remodelação do espaço, as árvores foram conservadas. A próxima etapa será a iluminação especial e a instalação dos bancos. Sara Faedo da Costa, neta de Luiz Antônio Faedo, agradeceu a homenagem. \"Esta obra valoriza o lugar. Meu avô gostava tanto daqui, tanto que deixou tudo e veio pra cá da região de Passo Fundo (RS).\"\nA reinauguração contou com a presença de Sara, do prefeito Wilmar Reichembach (PSDB), do secretário Sérgio Galvão (Urbanismo) e de José Antonio Antunes Zanrosso, diretor da Consisa Net.\n\nFRANCISCO BELTRAO FAZ HOMENAGEM JOSEP FAEDO\npostado em 12/10/2009 17:35 por Leandro de Souza Faedo   [ há 22 horas atualizado‎(s)‎ ]\nA Prefeitura de Francisco Beltrão reinaugurou quarta-feira pela manhã a Praça Josep Faedo (antigo half de skate), na Rua Palmas, no centro. O projeto de revitalização foi elaborado pela arquiteta Liziane Behne e executado pela Secretaria de Urbanismo, em parceria com a empresa Consisa Net, que ficou responsável por cuidar da praça.\n\nAlém da remodelação do espaço, as árvores foram conservadas. A próxima etapa será a iluminação especial e a instalação dos bancos. Sara Faedo da Costa, neta de Luiz Antônio Faedo, agradeceu a homenagem. \"Esta obra valoriza o lugar. Meu avô gostava tanto daqui, tanto que deixou tudo e veio pra cá da região de Passo Fundo (RS).\"\nA reinauguração contou com a presença de Sara, do prefeito Wilmar Reichembach (PSDB), do secretário Sérgio Galvão (Urbanismo) e de José Antonio Antunes Zanrosso, diretor da Consisa Net.        http://www.jornaldebeltrao.com.br/geral/prefeitura-revitaliza-praca-josep-faedo-69670/",
    "image_count": 1
  },
  {
    "kind": "pages",
    "kind_label": "Página Principal",
    "index": 7,
    "title": "Contatos",
    "published": "2012-04-02",
    "url": "https://familiafaedo.blogspot.com/p/contatos.html",
    "html": "Email &nbsp;ld_faedo@hotmail.com &nbsp;&nbsp;<div>\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;leandrofaedo@gmail.com</div>\n<div>\n<br /></div>\n<div>\n<br /></div>\n<div>\n<br /></div>",
    "text": "Email  ld_faedo@hotmail.com\nleandrofaedo@gmail.com",
    "image_count": 0
  },
  {
    "kind": "posts",
    "kind_label": "Postagem do Blog",
    "index": 1,
    "title": "Fotos Antigas da Familia Faedo",
    "published": "2013-04-16",
    "url": "https://familiafaedo.blogspot.com/2013/04/fotos-antigas-da-familia-faedo.html",
    "html": "<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/01_SCAN_20130416_212450922.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"433\" src=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/01_SCAN_20130416_212450922.jpg\" width=\"640\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/02_SCAN_20130416_212559203.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"640\" src=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/02_SCAN_20130416_212559203.jpg\" width=\"462\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/03_SCAN_20130416_212704177.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"430\" src=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/03_SCAN_20130416_212704177.jpg\" width=\"640\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/04_SCAN_20130416_212756390.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"490\" src=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/04_SCAN_20130416_212756390.jpg\" width=\"640\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/05_SCAN_20130416_212842754.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"410\" src=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/05_SCAN_20130416_212842754.jpg\" width=\"640\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/06_SCAN_20130416_212926605.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"213\" src=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/06_SCAN_20130416_212926605.jpg\" width=\"320\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/07_SCAN_20130416_213021736.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"394\" src=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/07_SCAN_20130416_213021736.jpg\" width=\"640\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/08_SCAN_20130416_220221905.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" src=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/08_SCAN_20130416_220221905.jpg\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/09_SCAN_20130416_220302559.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" src=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/09_SCAN_20130416_220302559.jpg\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/10_SCAN_20130416_220357985.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"410\" src=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/10_SCAN_20130416_220357985.jpg\" width=\"640\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/11_SCAN_20130416_220441447.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"404\" src=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/11_SCAN_20130416_220441447.jpg\" width=\"640\" /></a></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/12_SCAN_20130416_220521758.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"410\" src=\"imagens_alta_resolucao/posts_01_fotos-antigas-da-familia-faedo/12_SCAN_20130416_220521758.jpg\" width=\"640\" /></a></div>\n<br />",
    "text": "",
    "image_count": 12
  },
  {
    "kind": "posts",
    "kind_label": "Postagem do Blog",
    "index": 2,
    "title": "Casa de José Faedo",
    "published": "2013-04-01",
    "url": "https://familiafaedo.blogspot.com/2013/04/casa-de-jose-faedo.html",
    "html": "<div style=\"text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_02_casa-de-jose-faedo/01_IMG100__jose_faedo.jpg\" imageanchor=\"1\"><img border=\"0\" height=\"480\" src=\"imagens_alta_resolucao/posts_02_casa-de-jose-faedo/01_IMG100__jose_faedo.jpg\" width=\"640\" /></a></div>\n<div style=\"text-align: center;\">\nCasa de Jose Faedo &nbsp; (Filho de &nbsp;João&nbsp;Faedo e Erina Ferlin)</div>\n<div style=\"text-align: center;\">\n<br /></div>\n<div style=\"text-align: center;\">\nAgradecimentos a Ruben Faedo</div>\n<div style=\"text-align: center;\">\n<br /></div>\n<div style=\"text-align: center;\">\n<br /></div>\n",
    "text": "Casa de Jose Faedo   (Filho de  João Faedo e Erina Ferlin)\n\nAgradecimentos a Ruben Faedo",
    "image_count": 1
  },
  {
    "kind": "posts",
    "kind_label": "Postagem do Blog",
    "index": 3,
    "title": "vitorio  Faedo",
    "published": "2012-06-09",
    "url": "https://familiafaedo.blogspot.com/2012/06/ao-lado-do-gaiteiro-vittorio-ferneda.html",
    "html": "<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_03_vitorio-faedo/01_v_-2.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"426\" src=\"imagens_alta_resolucao/posts_03_vitorio-faedo/01_v_-2.jpg\" width=\"640\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-size: large;\"><span style=\"font-family: 'Lucida Calligraphy';\"><span style=\"line-height: 115%;\">Ao lado do Gaiteiro Vittorio &nbsp;Faedo\ne &nbsp;Angelina Ferneda( que &nbsp;esta &nbsp;com a&nbsp;</span></span><span style=\"font-family: 'Lucida Calligraphy';\"><span style=\"line-height: 17px;\">mão</span></span><span style=\"font-family: 'Lucida Calligraphy';\"><span style=\"line-height: 115%;\">&nbsp;na cabeça )</span></span><span style=\"font-family: 'Lucida Calligraphy'; line-height: 115%;\">em uma festa que organizaram para\na comunidade onde residiam (Divisor - interior de Francisco Beltrão), a mais de\n42 anos atrás</span></span></div>",
    "text": "Ao lado do Gaiteiro Vittorio  Faedo\ne  Angelina Ferneda( que  esta  com a mão na cabeça )em uma festa que organizaram para\na comunidade onde residiam (Divisor - interior de Francisco Beltrão), a mais de\n42 anos atrás",
    "image_count": 1
  },
  {
    "kind": "posts",
    "kind_label": "Postagem do Blog",
    "index": 4,
    "title": "VITORIO  FAEDO",
    "published": "2012-05-17",
    "url": "https://familiafaedo.blogspot.com/2012/05/vitorio-faedo.html",
    "html": "<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_04_vitorio-faedo/01_vitorio__faedo.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"448\" src=\"imagens_alta_resolucao/posts_04_vitorio-faedo/01_vitorio__faedo.jpg\" width=\"640\" /></a></div>\n<br />\n&nbsp; &nbsp; &nbsp; <span style=\"font-size: x-large;\">ANGELINA FERNEDA &nbsp;E VITÓRIO FAEDO&nbsp;</span><br />\n<br />\n<span style=\"font-size: large;\">Vitório Faedo: Nascido em 07 de Novembro de 1911 (Filho Giuseppe Faedo &nbsp;(José&nbsp;Faedo) e Narciza Pereira) –Vitório Faedo Faleceu em 16/06/1969.</span><br />\n<span style=\"font-size: large;\"><br /></span><br />\n<span style=\"font-size: large;\">Por volta de 1945 &nbsp;chegaram em Francisco Beltrão vindo do Rio Grande do Sul, viajaram 21 dias com carroças puxadas por mulas. Vieram com eles os filhos Verônica, Antonio, Irineu , Terezinha, Maria e Luiz, sendo que &nbsp;Natalina, José, Lourdes e Inez nasceram em Fco Beltrão. Quando aqui chegaram residiram próximo ao Seminário São José no Bairro Vila Nova até 1953 e &nbsp;mudaram-se para Enéas Marques. Por volta de 1960 mudaram-se &nbsp;para a Comunidade de Divisor, no Município de Fco Beltrão. Foi na Comunidade de Divisor que Vitório Faedo faleceu em 16 de Junho de 1969 com 58 anos de idade.</span><br />\n<span style=\"font-size: large;\">Vitorio Faedo &nbsp;&nbsp;&nbsp;irmão&nbsp; de &nbsp; Luis &nbsp;Antonio &nbsp;Faedo e de &nbsp;&nbsp;João&nbsp; Faedo (Joanim) por &nbsp;parte &nbsp;de &nbsp;pai &nbsp;veio &nbsp;para &nbsp;o &nbsp;sudoeste &nbsp;do parana &nbsp; onde &nbsp;também&nbsp;&nbsp;foi um &nbsp;desbravador &nbsp;desta &nbsp;região .</span><br />\n<span style=\"font-size: large;\"><br /></span><br />\n<span style=\"font-size: large;\">&nbsp;&nbsp;</span><br />\n<span style=\"font-size: large;\"><br /></span><br />\n<span style=\"font-size: large;\">FILHOS:</span><br />\n<span style=\"font-size: large;\"><br /></span><br />\n<span style=\"font-size: large;\">ANTONINHO</span><br />\n<span style=\"font-size: large;\">VERÔNICA</span><br />\n<span style=\"font-size: large;\">TEREZINHA</span><br />\n<span style=\"font-size: large;\">MARIA</span><br />\n<span style=\"font-size: large;\">IRINEU</span><br />\n<span style=\"font-size: large;\">LUIZ</span><br />\n<span style=\"font-size: large;\">NATALINA</span><br />\n<span style=\"font-size: large;\">JOSE</span><br />\n<span style=\"font-size: large;\">LURDES</span><br />\n<span style=\"font-size: large;\">INEZ</span><br />\n<span style=\"font-size: large;\"><br /></span><br />\n<span style=\"font-size: large;\"><br /></span><br />\n<span style=\"font-size: large;\"><br /></span><br />\n<span style=\"font-size: large;\"><br /></span><br />\n<span style=\"font-size: large;\">Agradecimentos a &nbsp; Sirlei &nbsp;Faedo &nbsp;neta &nbsp;de &nbsp;Vitorio &nbsp;Faedo</span><br />\n<span style=\"font-size: large;\"><br /></span><br />\n<span style=\"font-size: large;\"><br /></span><br />\n<span style=\"font-size: large;\"><br /></span><br />\n<span style=\"font-size: large;\"><br /></span><br />\n<span style=\"font-size: large;\"><br /></span><br />\n<br />",
    "text": "ANGELINA FERNEDA  E VITÓRIO FAEDO\n\nVitório Faedo: Nascido em 07 de Novembro de 1911 (Filho Giuseppe Faedo  (José Faedo) e Narciza Pereira) –Vitório Faedo Faleceu em 16/06/1969.\n\nPor volta de 1945  chegaram em Francisco Beltrão vindo do Rio Grande do Sul, viajaram 21 dias com carroças puxadas por mulas. Vieram com eles os filhos Verônica, Antonio, Irineu , Terezinha, Maria e Luiz, sendo que  Natalina, José, Lourdes e Inez nasceram em Fco Beltrão. Quando aqui chegaram residiram próximo ao Seminário São José no Bairro Vila Nova até 1953 e  mudaram-se para Enéas Marques. Por volta de 1960 mudaram-se  para a Comunidade de Divisor, no Município de Fco Beltrão. Foi na Comunidade de Divisor que Vitório Faedo faleceu em 16 de Junho de 1969 com 58 anos de idade.\n\nVitorio Faedo    irmão  de   Luis  Antonio  Faedo e de   João  Faedo (Joanim) por  parte  de  pai  veio  para  o  sudoeste  do parana   onde  também  foi um  desbravador  desta  região .\n\nFILHOS:\n\nANTONINHO\n\nVERÔNICA\n\nTEREZINHA\n\nMARIA\n\nIRINEU\n\nLUIZ\n\nNATALINA\n\nJOSE\n\nLURDES\n\nINEZ\n\nAgradecimentos a   Sirlei  Faedo  neta  de  Vitorio  Faedo",
    "image_count": 1
  },
  {
    "kind": "posts",
    "kind_label": "Postagem do Blog",
    "index": 5,
    "title": "Irineu Faedo e Maria Conçeiçao Faedo",
    "published": "2012-05-01",
    "url": "https://familiafaedo.blogspot.com/2012/05/irineu-faedo-e-maria-conceicao-faedo.html",
    "html": "<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_05_irineu-faedo-e-maria-conceicao-faedo/01_DSC01835.JPG\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"640\" src=\"imagens_alta_resolucao/posts_05_irineu-faedo-e-maria-conceicao-faedo/01_DSC01835.JPG\" width=\"480\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b><span style=\"font-size: large;\">Irineu Faedo &nbsp;e &nbsp;Maria Conçeiçao Faedo &nbsp;</span></b></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<b><span style=\"font-size: large;\">Irineu &nbsp;Faedo &nbsp;o primeiro &nbsp;filho &nbsp;de &nbsp;João&nbsp;Faedo e &nbsp;Erina Ferlin , &nbsp;Irineu &nbsp;Faedo&nbsp;casou &nbsp; com &nbsp;Maria Conceiçao &nbsp; Faedo os dois &nbsp;tiveram &nbsp;os seguintes filhos</span></b></div>\n<br />\n<b><span style=\"font-size: large;\">Arnaldo &nbsp;Helio Faedo&nbsp;</span></b><br />\n<b><span style=\"font-size: large;\">Homorino Faedo&nbsp;</span></b><br />\n<b><span style=\"font-size: large;\">Cersar &nbsp;João Faedo <span class=\"Apple-tab-span\" style=\"white-space: pre;\"> </span></span></b><br />\n<b><span style=\"font-size: large;\">Hermes Faedo <span class=\"Apple-tab-span\" style=\"white-space: pre;\"> </span></span></b><br />\n<b><span style=\"font-size: large;\">Maria &nbsp;de &nbsp;Lurdes Faedo&nbsp;</span></b><br />\n<b><span style=\"font-size: large;\">Maria Terezinha Faedo&nbsp;</span></b><br />\n<b><span style=\"font-size: large;\"><br /></span></b><br />\n<b><span style=\"font-size: large;\"><br /></span></b><br />\n<b><span style=\"font-size: large;\">ARVORE&nbsp;GENEALÓGICA&nbsp; DE &nbsp;IRINEU &nbsp;FAEDO!</span></b><br />\n<b><span style=\"font-size: large;\">AJUDE &nbsp;A&nbsp;CONSTRUIR</span></b><br />\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_05_irineu-faedo-e-maria-conceicao-faedo/02_Fan_Chart.JPG_Irineu__Faedo.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"640\" src=\"imagens_alta_resolucao/posts_05_irineu-faedo-e-maria-conceicao-faedo/02_Fan_Chart.JPG_Irineu__Faedo.jpg\" width=\"452\" /></a></div>\n<br />\nEstamos &nbsp;montando a &nbsp;arvore &nbsp;de &nbsp;Irineu &nbsp;Faedo e de &nbsp;Toda&nbsp;&nbsp;família&nbsp; Faedo &nbsp;Ajude a construir<br />\n<br />\nvejam &nbsp;mais fotos da&nbsp;família&nbsp; Faedo &nbsp;na &nbsp;Pagina de &nbsp;fotos<br />",
    "text": "Irineu Faedo  e  Maria Conçeiçao Faedo\n\nIrineu  Faedo  o primeiro  filho  de  João Faedo e  Erina Ferlin ,  Irineu  Faedo casou   com  Maria Conceiçao   Faedo os dois  tiveram  os seguintes filhos\n\nArnaldo  Helio Faedo\n\nHomorino Faedo\n\nCersar  João Faedo\n\nHermes Faedo\n\nMaria  de  Lurdes Faedo\n\nMaria Terezinha Faedo\n\nARVORE GENEALÓGICA  DE  IRINEU  FAEDO!\n\nAJUDE  A CONSTRUIR\n\nEstamos  montando a  arvore  de  Irineu  Faedo e de  Toda  família  Faedo  Ajude a construir\n\nvejam  mais fotos da família  Faedo  na  Pagina de  fotos",
    "image_count": 2
  },
  {
    "kind": "posts",
    "kind_label": "Postagem do Blog",
    "index": 6,
    "title": "Sem titulo (casa-de-em-apos-viagem-do-rio-grande-do.html)",
    "published": "2012-04-28",
    "url": "https://familiafaedo.blogspot.com/2012/04/casa-de-em-apos-viagem-do-rio-grande-do.html",
    "html": "<div class=\"separator\" style=\"clear: both; text-align: center;\">\nA Casa de&nbsp;Luiz&nbsp;Antonio&nbsp;Faedo</div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_06_sem-titulo-casa-de-em-apos-viagem-do-rio/01_306538_212278622216934_100003043940340_342786_1065277336_n_2.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"449\" src=\"imagens_alta_resolucao/posts_06_sem-titulo-casa-de-em-apos-viagem-do-rio/01_306538_212278622216934_100003043940340_342786_1065277336_n_2.jpg\" width=\"640\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\nEm &nbsp;1943. Após &nbsp;uma viagem do Rio Grande do Sul &nbsp;a &nbsp;cavalo &nbsp;que durou &nbsp;mais de &nbsp;um mês, mas já chegava &nbsp;as imediações &nbsp;de &nbsp;Clevelândia, &nbsp;onde adquiriu uma propriedade &nbsp;nas margens &nbsp;do &nbsp;rio &nbsp;Pato Branco (neste &nbsp;local &nbsp;ficou o meu irmão Adão. No &nbsp;mesmo ano se deslocou para novos reconhecimentos, enfrentando picadas e com muita &nbsp;dificuldade chegou até as margens do Rio &nbsp;Marrecas, onde &nbsp; veio conhecer &nbsp;Sebastião Müller, morador do local, mais tarde &nbsp; seu &nbsp;compadre. O seu &nbsp;rancho. Anos depois, isso &nbsp;por 1946 &nbsp;acabou &nbsp;comprando a posse dessas terras (aproximadamente &nbsp;100 hectares), aonde esta hoje &nbsp;situada a cidade de Francisco Beltrão...........</div>\n<div>\n<br /></div>\nveja &nbsp;mais &nbsp;na pagina &nbsp; Historia &nbsp;da Família Faedo<div>\n<br /><div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_06_sem-titulo-casa-de-em-apos-viagem-do-rio/02_292990_398841210128166_1553346726_n.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"488\" src=\"imagens_alta_resolucao/posts_06_sem-titulo-casa-de-em-apos-viagem-do-rio/02_292990_398841210128166_1553346726_n.jpg\" width=\"640\" /></a></div>\n<br /></div>",
    "text": "A Casa de Luiz Antonio Faedo\n\nEm  1943. Após  uma viagem do Rio Grande do Sul  a  cavalo  que durou  mais de  um mês, mas já chegava  as imediações  de  Clevelândia,  onde adquiriu uma propriedade  nas margens  do  rio  Pato Branco (neste  local  ficou o meu irmão Adão. No  mesmo ano se deslocou para novos reconhecimentos, enfrentando picadas e com muita  dificuldade chegou até as margens do Rio  Marrecas, onde   veio conhecer  Sebastião Müller, morador do local, mais tarde   seu  compadre. O seu  rancho. Anos depois, isso  por 1946  acabou  comprando a posse dessas terras (aproximadamente  100 hectares), aonde esta hoje  situada a cidade de Francisco Beltrão...........\n\nveja  mais  na pagina   Historia  da Família Faedo",
    "image_count": 2
  },
  {
    "kind": "posts",
    "kind_label": "Postagem do Blog",
    "index": 7,
    "title": "O  POEMA",
    "published": "2012-04-12",
    "url": "https://familiafaedo.blogspot.com/2012/04/o-poema.html",
    "html": "<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_07_o-poema/01_523273_398839913461629_100000068720530_1629222_1853305122_n.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" src=\"imagens_alta_resolucao/posts_07_o-poema/01_523273_398839913461629_100000068720530_1629222_1853305122_n.jpg\" /></a></div>\n<br />\n<div align=\"center\" class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt; text-align: center;\">\n<b><span style=\"font-family: 'Lucida Calligraphy'; font-size: 22pt;\">O Velho guerreiro<o:p></o:p></span></b></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<br /></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<br /></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt;\">Lá&nbsp; da minha&nbsp;\nterra&nbsp; eu&nbsp; parti&nbsp;\n!<o:p></o:p></span></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt;\">E&nbsp; trouxe a&nbsp;\nbruaca&nbsp; ,carregada&nbsp; de&nbsp;\nhumildade&nbsp; !<o:p></o:p></span></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt;\">E quando\nCheguei por&nbsp; aqui &nbsp;&nbsp;! <o:p></o:p></span></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt;\">E com\ncoragem eu construí , uma nova cidade&nbsp; !<o:p></o:p></span></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<br /></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt;\">Lá&nbsp; quando&nbsp;\neu&nbsp; as&nbsp; terras&nbsp;\ngauchas eu deixei &nbsp;!<o:p></o:p></span></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt;\">Na&nbsp; minha carroça&nbsp;&nbsp; eu&nbsp;\ncarreguei&nbsp; muita sabedoria&nbsp; !<o:p></o:p></span></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt;\">Porque no\nfundo eu sabia!<o:p></o:p></span></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt;\">O&nbsp; que vila Marrecas&nbsp; se tornaria &nbsp;&nbsp;! <o:p></o:p></span></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt;\">A minha&nbsp; casa abençoada&nbsp;&nbsp;&nbsp; &nbsp;!&nbsp;&nbsp; <o:p></o:p></span></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<br /></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt;\">Sobre\nlombo&nbsp; de cavalo &nbsp;!<o:p></o:p></span></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt;\">Desbravando&nbsp; um novo mundo&nbsp;\n!<o:p></o:p></span></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt;\">Nas &nbsp;terras&nbsp;\npor&nbsp; onde&nbsp; passei&nbsp;\n!<o:p></o:p></span></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt;\">O meu\nnome&nbsp; deixei &nbsp;&nbsp;!<o:p></o:p></span></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt;\">Com coragem\ne sem medo&nbsp; !<o:p></o:p></span></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt;\">Meu&nbsp; sangue é italiano sou gaucho com tradição&nbsp; !<o:p></o:p></span></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt;\">Meu&nbsp; nome Luis Antonio&nbsp; Faedo &nbsp;!<o:p></o:p></span></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt;\">Pioneiro\nde&nbsp; Francisco&nbsp; Beltrão !<o:p></o:p></span></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<br /></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt;\">Autor:\nLeandro de Souza Faedo<o:p></o:p></span></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt;\">Em\nhomenagem a Luiz Antonio Faedo&nbsp;<o:p></o:p></span></div>",
    "text": "O Velho guerreiro\n\nLá  da minha\nterra  eu  parti\n!\n\nE  trouxe a\nbruaca  ,carregada  de\nhumildade  !\n\nE quando\nCheguei por  aqui   !\n\nE com\ncoragem eu construí , uma nova cidade  !\n\nLá  quando\neu  as  terras\ngauchas eu deixei  !\n\nNa  minha carroça   eu\ncarreguei  muita sabedoria  !\n\nPorque no\nfundo eu sabia!\n\nO  que vila Marrecas  se tornaria   !\n\nA minha  casa abençoada     !\n\nSobre\nlombo  de cavalo  !\n\nDesbravando  um novo mundo\n!\n\nNas  terras\npor  onde  passei\n!\n\nO meu\nnome  deixei   !\n\nCom coragem\ne sem medo  !\n\nMeu  sangue é italiano sou gaucho com tradição  !\n\nMeu  nome Luis Antonio  Faedo  !\n\nPioneiro\nde  Francisco  Beltrão !\n\nAutor:\nLeandro de Souza Faedo\n\nEm\nhomenagem a Luiz Antonio Faedo",
    "image_count": 1
  },
  {
    "kind": "posts",
    "kind_label": "Postagem do Blog",
    "index": 8,
    "title": "Sem titulo (leiam-sobre-luiz-antonio-faedoo.html)",
    "published": "2012-04-10",
    "url": "https://familiafaedo.blogspot.com/2012/04/leiam-sobre-luiz-antonio-faedoo.html",
    "html": "<br />\nleiam sobre \"LUIZ ANTONIO FAEDO\"O PIONEIRO BELTRONENSE<br />\n<br />\n<br />\n<a href=\"imagens_alta_resolucao/posts_08_sem-titulo-leiam-sobre-luiz-antonio-faed/01_523273_398839913461629_100000068720530_1629222_1853305122_n.jpg\" imageanchor=\"1\" style=\"clear: left; float: left; margin-bottom: 1em; margin-right: 1em;\"><img border=\"0\" src=\"imagens_alta_resolucao/posts_08_sem-titulo-leiam-sobre-luiz-antonio-faed/01_523273_398839913461629_100000068720530_1629222_1853305122_n.jpg\" /></a><br />\n... Luiz Antonio Faedo, filho de Giuseppe (josepp) Faedo e Rosa Vicario Faedo, ambos naturais da Itália, deste casamento nasceu um de seus filho o qual com o passar do tempo emigrou para o sudoeste do Paraná.<br />\n<br />\nNaquela distante 1945, quando LUIZ ANTONIO FAEDO chegou a localidade de Marrecas, hoje denominada de Francisco Beltrão, talvez nem mesmo pudesse imaginar que ali estivesse começando a história de uma cidade que em pouco tempo se transformaria em pólo regional. Aquele *gaúcho de Passo Fundo conhecera o Paraná 5 anos antes, quando no lombo de cavalos, empreendera uma viagem de 18 dias desde Passo Fundo-RS até Mariópolis-PR. Foi ali que ele ouviu falar pela primeira vez, das férteis terras da costa do Marrecas.<br />\n<br />\nLUIZ ANTONIO FAEDO adquiriu extensa área de terra e ali viveu os primeiros anos, em meio às dificuldades comuns a todo pioneiro \" precárias condições de moradia, muito trabalho e quase nenhum contato com outras regiões. A casa era um rancho de madeira lascada, a caça abundante e diversificada.<br />\n<br />\nNaquela época começaram a chegar as primeiras levas de colonos gaúchos ao sudoeste do Paraná, em partes incentivando pela política de colonização do então Presidente Getúlio Vargas.<br />\n<br />\nO pioneiro começou a vender os primeiros terrenos em longas prestações. LUIZ ANTONIO FAEDO vendia os terrenos e dava um ou dois pinheiros para o novo morador derrubar e tirar a madeira para sua propriedade.<br />\n<br />\n<br />\nDesta forma LUIZ ANTONIO FAEDO contribuiu para o aumento do número de casa no povoado que nascia.<br />\n<br />\n<br />\nLUIZ ANTONIO FAEDO, doaria a comunidade o terreno onde está localizada a praça Eduardo Virnond Suplicy, Cemitério Municipal onde hoje repousa. Foi também LUIZ ANTONIO FAEDO que vendeu a baixo preço o terreno do atual Colégio Nossa Senhora da Glória. Tinha grande orgulho pelo progresso de Francisco Beltrão, sentia-se feliz ao falar dos primeiros passos da antiga Vila das Marrecas. Ao falecer aos 90 anos, no dia 03 de junho1984 pareceu dar a entender que já tinha dado a sua parte pelo progresso de Francisco Beltrão e era hora de deixar a responsabilidade para outros.<br />\n<br />\n<br />\nE numa ensolarada tarde de outono, LUIZ ANTONIO FAEDO deu adeus a sua querida Francisco Beltrão.<br />\n<br />\n<br />\n*Gaúcho Que residem na região Sul do Brasil, vestem roupas<br />\n<br />\ntípicas e se consideram valentes.<br />\n<br />\n<br />\nPIONEER BELTRONENSE<br />\n<br />\n<br />\nLuiz Antonio Faedo, son of Josepp Faedo and Rosa Vicario Faedo, both natural of Italy, of this marriage one of its son was born which emigrated for the Southwest of Paraná with passing of the time.<br />\n<br />\n<br />\nIn that distant one 1945, when LUIZ ANTONIO FAEDO arrived the place of Marrecas, today denominated of Francisco Beltrão, perhaps not even it could imagine that there was beginning the history of a city that in little time he would become regional pole. That *gaúcho of Passo Fundo had known Paraná before 5 years, when in the loin of horses, it had undertaken a trip of 18 days from Passo Fundo-RS to Mariópolis-PR. It was there that he heard to speak for the first time, of the fertile lands of the coast of Marrecas.<br />\n<br />\n<br />\nLUIZ ANTONIO FAEDO acquired extensive earth area and there he lived the first years, amid the difficulties common to whole pioneer \" precarious dwelling conditions, a lot of work and almost any contact with other areas. The house was a ranch of splintered wood, the abundant and diversified hunt.<br />\n<br />\nIn that time they began to arrive the first recruitments of colonists gaúchos to the Southwest of Paraná, in parts motivating then for the politics of colonization of the President Getúlio Vargas.<br />\n<br />\nThe pioneer began to sell the first lands in long installments. LUIZ ANTONIO FAEDO sold the lands and he gave an or two pine trees for the new inhabitant to knock down and to remove the wood for its property.<br />\n<br />\n<br />\nThis way LUIZ ANTONIO FAEDO contributed to the increase of the house number in the town that was born.<br />\n<br />\nLUIZ ANTONIO FAEDO, would donate the community the land where is located the square Eduardo Virnond Suplicy, Municipal Cemetery where today rests. LUIZ ANTONIO FAEDO that sold to low price the land of Our current Colégio Senhora of the Glory was also. He/she had great pride for the progress of Francisco Beltrão, it felt happy when speaking of the first steps of the old Villa of Marrecas. When dying to the 90 years, in the 03 of junho1984 he/she seemed to give to understand that had already given its part for the progress of Francisco Beltrão and it was hour of leaving the responsibility for others.<br />\n<br />\nAnd in a sunny autumn afternoon, LUIZ ANTONIO FAEDO gave good-bye its dear Francisco Beltrão.<br />\n<br />\n<br />\n*Gaúcho That they reside in the South area of Brazil, they dress clothes<br />\n<span style=\"font-size: large;\"><br /></span><br />\n<span style=\"font-size: large;\">Artigo publicado &nbsp;Por &nbsp; Gerson L .Faedo</span><br />",
    "text": "leiam sobre \"LUIZ ANTONIO FAEDO\"O PIONEIRO BELTRONENSE\n\n... Luiz Antonio Faedo, filho de Giuseppe (josepp) Faedo e Rosa Vicario Faedo, ambos naturais da Itália, deste casamento nasceu um de seus filho o qual com o passar do tempo emigrou para o sudoeste do Paraná.\n\nNaquela distante 1945, quando LUIZ ANTONIO FAEDO chegou a localidade de Marrecas, hoje denominada de Francisco Beltrão, talvez nem mesmo pudesse imaginar que ali estivesse começando a história de uma cidade que em pouco tempo se transformaria em pólo regional. Aquele *gaúcho de Passo Fundo conhecera o Paraná 5 anos antes, quando no lombo de cavalos, empreendera uma viagem de 18 dias desde Passo Fundo-RS até Mariópolis-PR. Foi ali que ele ouviu falar pela primeira vez, das férteis terras da costa do Marrecas.\n\nLUIZ ANTONIO FAEDO adquiriu extensa área de terra e ali viveu os primeiros anos, em meio às dificuldades comuns a todo pioneiro \" precárias condições de moradia, muito trabalho e quase nenhum contato com outras regiões. A casa era um rancho de madeira lascada, a caça abundante e diversificada.\n\nNaquela época começaram a chegar as primeiras levas de colonos gaúchos ao sudoeste do Paraná, em partes incentivando pela política de colonização do então Presidente Getúlio Vargas.\n\nO pioneiro começou a vender os primeiros terrenos em longas prestações. LUIZ ANTONIO FAEDO vendia os terrenos e dava um ou dois pinheiros para o novo morador derrubar e tirar a madeira para sua propriedade.\n\nDesta forma LUIZ ANTONIO FAEDO contribuiu para o aumento do número de casa no povoado que nascia.\n\nLUIZ ANTONIO FAEDO, doaria a comunidade o terreno onde está localizada a praça Eduardo Virnond Suplicy, Cemitério Municipal onde hoje repousa. Foi também LUIZ ANTONIO FAEDO que vendeu a baixo preço o terreno do atual Colégio Nossa Senhora da Glória. Tinha grande orgulho pelo progresso de Francisco Beltrão, sentia-se feliz ao falar dos primeiros passos da antiga Vila das Marrecas. Ao falecer aos 90 anos, no dia 03 de junho1984 pareceu dar a entender que já tinha dado a sua parte pelo progresso de Francisco Beltrão e era hora de deixar a responsabilidade para outros.\n\nE numa ensolarada tarde de outono, LUIZ ANTONIO FAEDO deu adeus a sua querida Francisco Beltrão.\n\n*Gaúcho Que residem na região Sul do Brasil, vestem roupas\n\ntípicas e se consideram valentes.\n\nPIONEER BELTRONENSE\n\nLuiz Antonio Faedo, son of Josepp Faedo and Rosa Vicario Faedo, both natural of Italy, of this marriage one of its son was born which emigrated for the Southwest of Paraná with passing of the time.\n\nIn that distant one 1945, when LUIZ ANTONIO FAEDO arrived the place of Marrecas, today denominated of Francisco Beltrão, perhaps not even it could imagine that there was beginning the history of a city that in little time he would become regional pole. That *gaúcho of Passo Fundo had known Paraná before 5 years, when in the loin of horses, it had undertaken a trip of 18 days from Passo Fundo-RS to Mariópolis-PR. It was there that he heard to speak for the first time, of the fertile lands of the coast of Marrecas.\n\nLUIZ ANTONIO FAEDO acquired extensive earth area and there he lived the first years, amid the difficulties common to whole pioneer \" precarious dwelling conditions, a lot of work and almost any contact with other areas. The house was a ranch of splintered wood, the abundant and diversified hunt.\n\nIn that time they began to arrive the first recruitments of colonists gaúchos to the Southwest of Paraná, in parts motivating then for the politics of colonization of the President Getúlio Vargas.\n\nThe pioneer began to sell the first lands in long installments. LUIZ ANTONIO FAEDO sold the lands and he gave an or two pine trees for the new inhabitant to knock down and to remove the wood for its property.\n\nThis way LUIZ ANTONIO FAEDO contributed to the increase of the house number in the town that was born.\n\nLUIZ ANTONIO FAEDO, would donate the community the land where is located the square Eduardo Virnond Suplicy, Municipal Cemetery where today rests. LUIZ ANTONIO FAEDO that sold to low price the land of Our current Colégio Senhora of the Glory was also. He/she had great pride for the progress of Francisco Beltrão, it felt happy when speaking of the first steps of the old Villa of Marrecas. When dying to the 90 years, in the 03 of junho1984 he/she seemed to give to understand that had already given its part for the progress of Francisco Beltrão and it was hour of leaving the responsibility for others.\n\nAnd in a sunny autumn afternoon, LUIZ ANTONIO FAEDO gave good-bye its dear Francisco Beltrão.\n\n*Gaúcho That they reside in the South area of Brazil, they dress clothes\n\nArtigo publicado  Por   Gerson L .Faedo",
    "image_count": 1
  },
  {
    "kind": "posts",
    "kind_label": "Postagem do Blog",
    "index": 9,
    "title": "Luiz Antônio Faedo",
    "published": "2012-04-08",
    "url": "https://familiafaedo.blogspot.com/2012/04/luiz-antonio-faedo.html",
    "html": "<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_09_luiz-antonio-faedo/01_523273_398839913461629_100000068720530_1629222_1853305122_n.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"320\" src=\"imagens_alta_resolucao/posts_09_luiz-antonio-faedo/01_523273_398839913461629_100000068720530_1629222_1853305122_n.jpg\" width=\"236\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt; line-height: 115%;\"><br /></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt; line-height: 115%;\">Luiz Antonio Faedo pioneiro de Francisco Beltrão ,onde viveu de 1945 até\nfalecer, dia 3 de junho de 1984,deixou seu nome numa das principais vias\npublicas da cidade e a biografia de um homem que se distinguia pela\nhonestidade&nbsp; .</span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt; line-height: 115%;\"><br /></span></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n</div>\n<div align=\"center\" class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<b><span style=\"font-family: 'Lucida Calligraphy'; font-size: 18pt;\">Perfil&nbsp; de&nbsp;\nLuiz Antonio Faedo<o:p></o:p></span></b></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt; text-align: justify;\">\n<br /></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt;\">homem&nbsp;&nbsp; honesto pacato . honesto&nbsp; e&nbsp;\nhumilde.que se&nbsp; baseou no&nbsp; trabalho&nbsp;\npara o bem&nbsp; de seus\nconcidadãos&nbsp;&nbsp;&nbsp; por tudo isso a\ncidade&nbsp; de Francisco&nbsp; Beltrão&nbsp;\nem sinal de agradecimentos&nbsp; e\nrespeito . o&nbsp;&nbsp; distinguiu dando ao seu\nnome&nbsp; a&nbsp;\numa das&nbsp; principais&nbsp; avenidas . a avenida Luis Antonio Faedo .no\ncentro&nbsp; da &nbsp;&nbsp;cidade .<o:p></o:p></span></div>\n<div class=\"MsoNormal\" style=\"margin-bottom: 0.0001pt;\">\n<br /></div>\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_09_luiz-antonio-faedo/02_404058_401370619875225_100000068720530_1636613_794818022_n.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" src=\"imagens_alta_resolucao/posts_09_luiz-antonio-faedo/02_404058_401370619875225_100000068720530_1636613_794818022_n.jpg\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\nLUIZ ANTONIO FAEDO E GERSON L. FAEDO JR - 1983</div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_09_luiz-antonio-faedo/03_LUIZ_ANTONIO_FAEDO_E_GERSON_L._FAEDO_JR_-_1983.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"640\" src=\"imagens_alta_resolucao/posts_09_luiz-antonio-faedo/03_LUIZ_ANTONIO_FAEDO_E_GERSON_L._FAEDO_JR_-_1983.jpg\" width=\"444\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\nLUIZ ANTONIO FAEDO E GERSON L. FAEDO JR - 1983</div>\n<br />",
    "text": "Luiz Antonio Faedo pioneiro de Francisco Beltrão ,onde viveu de 1945 até\nfalecer, dia 3 de junho de 1984,deixou seu nome numa das principais vias\npublicas da cidade e a biografia de um homem que se distinguia pela\nhonestidade  .\n\nPerfil  de\nLuiz Antonio Faedo\n\nhomem   honesto pacato . honesto  e\nhumilde.que se  baseou no  trabalho\npara o bem  de seus\nconcidadãos    por tudo isso a\ncidade  de Francisco  Beltrão\nem sinal de agradecimentos  e\nrespeito . o   distinguiu dando ao seu\nnome  a\numa das  principais  avenidas . a avenida Luis Antonio Faedo .no\ncentro  da   cidade .\n\nLUIZ ANTONIO FAEDO E GERSON L. FAEDO JR - 1983\n\nLUIZ ANTONIO FAEDO E GERSON L. FAEDO JR - 1983",
    "image_count": 3
  },
  {
    "kind": "posts",
    "kind_label": "Postagem do Blog",
    "index": 10,
    "title": "JOAO  FAEDO  E   ERINA FERLIM",
    "published": "2012-04-04",
    "url": "https://familiafaedo.blogspot.com/2012/04/joao-faedo-e-erina-ferlim.html",
    "html": "<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_10_joao-faedo-e-erina-ferlim/01_Erina_Ferlim__Joao_Faedo.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" src=\"imagens_alta_resolucao/posts_10_joao-faedo-e-erina-ferlim/01_Erina_Ferlim__Joao_Faedo.jpg\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\nErina Ferlim &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;João&nbsp; Faedo</div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n</div>\n<div class=\"MsoNormal\">\n<br /></div>\n<div class=\"MsoNormal\">\n<span style=\"font-size: 14pt; line-height: 115%;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span><u><span style=\"font-family: 'Lucida Calligraphy'; font-size: 18pt; line-height: 115%;\">João\nFaedo e Erina Ferlim&nbsp;&nbsp;&nbsp; </span></u><span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt; line-height: 115%;\"><o:p></o:p></span></div>\n<div class=\"MsoNormal\">\n<span style=\"font-size: 12pt; line-height: 115%;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>\n<div class=\"MsoNormal\">\n<span style=\"font-size: 12pt; line-height: 115%;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 24pt; line-height: 115%;\">Filhos&nbsp;&nbsp;<o:p></o:p></span></div>\n<div class=\"MsoNormal\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 24pt; line-height: 115%;\"><br /></span></div>\n<div class=\"MsoListParagraphCxSpFirst\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">1.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> IRINEU &nbsp;FAEDO<o:p></o:p></span></div>\n<div class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">2.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> AFONSSO&nbsp; FAEDO<o:p></o:p></span></div>\n<div class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">3.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> JOSE FAEDO<o:p></o:p></span></div>\n<div class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">4.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> ADOLFO FAEDO<o:p></o:p></span></div>\n<div class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">5.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> GERMANO FAEDO<o:p></o:p></span></div>\n<div class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">6.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> ANGELO ALBERTO FAEDO\n(ANGELIM)<o:p></o:p></span></div>\n<div class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">7.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> BENITO&nbsp; FAEDO<o:p></o:p></span></div>\n<div class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">8.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> EXPEDITO FAEDO<o:p></o:p></span></div>\n<div class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">9.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> LUIZ&nbsp; FAEDO<o:p></o:p></span></div>\n<div class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">10.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> HUMBERTO GENTIL&nbsp; FAEDO<o:p></o:p></span></div>\n<div class=\"MsoListParagraphCxSpMiddle\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">11.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> MARIA&nbsp; FAEDO<o:p></o:p></span></div>\n<div class=\"MsoListParagraphCxSpLast\" style=\"margin-left: 67.65pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">12.</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\"> HELENA&nbsp;&nbsp; FAEDO<o:p></o:p></span></div>\n<br />\n<br />",
    "text": "Erina Ferlim                       João  Faedo\n\nJoão\nFaedo e Erina Ferlim\n\nFilhos\n\n1. IRINEU  FAEDO\n\n2. AFONSSO  FAEDO\n\n3. JOSE FAEDO\n\n4. ADOLFO FAEDO\n\n5. GERMANO FAEDO\n\n6. ANGELO ALBERTO FAEDO\n(ANGELIM)\n\n7. BENITO  FAEDO\n\n8. EXPEDITO FAEDO\n\n9. LUIZ  FAEDO\n\n10. HUMBERTO GENTIL  FAEDO\n\n11. MARIA  FAEDO\n\n12. HELENA   FAEDO",
    "image_count": 1
  },
  {
    "kind": "posts",
    "kind_label": "Postagem do Blog",
    "index": 11,
    "title": "Família  Faedo",
    "published": "2012-04-02",
    "url": "https://familiafaedo.blogspot.com/2012/04/familia-faedo.html",
    "html": "<div class=\"separator\" style=\"clear: both; text-align: center;\">\n</div>\n<br />\n<br />\n<br />\n<br />\n<br />\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_11_familia-faedo/01_fotos__site_da_familia__Faedo.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"180\" src=\"imagens_alta_resolucao/posts_11_familia-faedo/01_fotos__site_da_familia__Faedo.jpg\" width=\"320\" /></a></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<br /></div>\n<br />\n<div class=\"MsoNormal\">\n<span style=\"font-size: 14pt; line-height: 115%;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><b><u><span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt; line-height: 115%;\">Guiosepe&nbsp; Faedo&nbsp;\nx&nbsp;&nbsp; Rosa&nbsp; vicário &nbsp;Faedo <o:p></o:p></span></u></b></div>\n<div class=\"MsoNormal\" style=\"background: white; line-height: 24.8pt; margin-bottom: 23.6pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\nNatural de Monte Faedo, Província de Vicenza, Itália, Josep Faedo era\nfilho de Luizi Faedo e Margarida Dalban. Em 1891, veio conhecer a América,\ndeixando a família na Europa. Percorreu inicialmente a Argentina e o Uruguai.\nJosep era agrimensor prático e técnico em vinicultura.<o:p></o:p></span></div>\n<div class=\"MsoNormal\" style=\"background: white; line-height: 24.8pt; margin-bottom: 23.6pt;\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\nEm 1892, foi convidado para orientar a colonização italiana na região da\nfutura cidade de Nova Bassano, no Rio Grande do Sul. Retornou à Itália para\ntrazer a esposa, Rosa Vicário, e seu filho João Faedo. Imigrou para o Brasil em\n1895, em</span><span style=\"color: #444444; font-family: 'Lucida Calligraphy'; font-size: 12pt;\"> </span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt;\">Alfredo\nChaves, atual Veranópolis (RS</span><span style=\"color: #444444; font-family: 'Lucida Calligraphy'; font-size: 12pt;\">).</span><span style=\"color: #444444; font-family: Arial, sans-serif; font-size: 12pt;\"> <o:p></o:p></span></div>\n<div class=\"MsoNormal\" style=\"background: white; line-height: 24.8pt; margin-bottom: 23.6pt;\">\n<span style=\"color: #444444; font-family: Arial, sans-serif; font-size: 16.5pt;\">&nbsp;&nbsp;&nbsp;&nbsp; </span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt;\">Na década de 1930, Josep e seu irmão João Faedo (interessado por pedras\npreciosas) vieram conhecer o Paraná. Ao retornar para o Rio Grande do Sul,\nincentivou seu filho Luiz Antônio Faedo a vir se instalar nesta região,\nmotivado pelas terras férteis do Sudoeste.<o:p></o:p></span></div>\n<div class=\"MsoNormal\">\n<br /></div>\n<div class=\"MsoNormal\">\n<div class=\"separator\" style=\"clear: both; text-align: center;\">\n<a href=\"imagens_alta_resolucao/posts_11_familia-faedo/02_534419_398841850128102_100000068720530_1629228_2101392062_n.jpg\" imageanchor=\"1\" style=\"margin-left: 1em; margin-right: 1em;\"><img border=\"0\" height=\"177\" src=\"imagens_alta_resolucao/posts_11_familia-faedo/02_534419_398841850128102_100000068720530_1629228_2101392062_n.jpg\" width=\"320\" /></a></div>\n<b><span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt; line-height: 115%;\"><br /></span></b><br />\n<b><span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt; line-height: 115%;\"><br /></span></b><br />\n<b><span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt; line-height: 115%;\"><br /></span></b><br />\n<b><span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt; line-height: 115%;\"><br /></span></b><br />\n<b><span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt; line-height: 115%;\"><br /></span></b><br />\n<b><span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt; line-height: 115%;\"><br /></span></b><br />\n<b><span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt; line-height: 115%;\"><br /></span></b><br />\n<b><span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt; line-height: 115%;\">João\nFaedo&nbsp; </span></b><span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt; line-height: 115%;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 14pt; line-height: 115%;\">x </span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt; line-height: 115%;\">&nbsp;&nbsp;&nbsp;Erina&nbsp; Ferlim<o:p></o:p></span></div>\n<div class=\"MsoNormal\">\n<b><span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt; line-height: 115%;\">Luis\nAntonio Faedo&nbsp;&nbsp;&nbsp; </span></b><span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt; line-height: 115%;\">X&nbsp;&nbsp; </span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt; line-height: 115%;\">Leontina\nCavalheiro</span><span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt; line-height: 115%;\"><o:p></o:p></span></div>\n<div class=\"MsoNormal\">\n<span style=\"font-family: 'Lucida Calligraphy';\"><span style=\"line-height: 18px;\"><b><br /></b></span></span></div>\n<div class=\"MsoNormal\">\n<span style=\"font-size: 14pt; line-height: 115%;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<o:p></o:p></span></div>\n<div class=\"MsoNormal\">\n<span style=\"font-size: 14pt; line-height: 115%;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<o:p></o:p></span></div>\n<div class=\"MsoNormal\">\n<span style=\"font-size: 14pt; line-height: 115%;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><u><span style=\"font-family: 'Lucida Calligraphy'; font-size: 16pt; line-height: 115%;\">João&nbsp; Faedo&nbsp;\ne&nbsp;&nbsp; Erina&nbsp;&nbsp; Ferlim<o:p></o:p></span></u></div>\n<div class=\"MsoNormal\">\n<br /></div>\n<div class=\"MsoNormal\">\n<br /></div>\n<div class=\"MsoNormal\">\n<span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt; line-height: 115%;\">Vieram&nbsp; por&nbsp; Bento&nbsp;\nGonçalves&nbsp; passaram pelo rio&nbsp; da casca com o destino&nbsp; maral&nbsp;&nbsp;\n<b><u>João&nbsp;&nbsp; Faedo</u></b> casou se com <b><u>Erina Ferlim</u></b> cidade de\nMaral&nbsp; depois&nbsp; vieram&nbsp;\nmorar em&nbsp; água santa diz <b><u>Ângelo Alberto&nbsp; Faedo</u></b> , meu&nbsp; pai&nbsp;\ntinha 5 alqueires de&nbsp; terra&nbsp; e&nbsp; uma\nFerraria&nbsp; &nbsp;nos&nbsp;\nprimeiros&nbsp; anos&nbsp; o pai&nbsp;\ntrabalhava&nbsp; no porão de&nbsp; casa&nbsp;\ndepois fizeram &nbsp;a&nbsp; ferraria&nbsp;\nonde ele &nbsp;fazia &nbsp;foice ,foice de cortar trigo até navalha de\ncortar barba ,ele temperava&nbsp; e se&nbsp; não presta se &nbsp;&nbsp;dava outra &nbsp;<b><u>João&nbsp; &nbsp;Faedo</u></b>&nbsp; tirava o&nbsp;\nsustento&nbsp; da pequena&nbsp;&nbsp; ferraria e&nbsp;\ntoda a ferramenta&nbsp; que um\nferreiro&nbsp; pôde&nbsp; fazer meu&nbsp;\npai&nbsp; fazia&nbsp; diz <b><u>Ângelo\nAlberto&nbsp; Faedo</u></b> e meu&nbsp; irmão&nbsp; <b><u>Jose Faedo</u></b> . Jose aprendeu&nbsp;&nbsp; com&nbsp;\nmeu&nbsp; pai , Jose&nbsp; fazia até&nbsp;\nmotor &nbsp;de carro &nbsp;e&nbsp;\nna&nbsp; colônia de&nbsp; terra&nbsp;\nnos&nbsp; plantávamos&nbsp; trigo , batata . No&nbsp; meio&nbsp;\nda&nbsp; cidade&nbsp; de&nbsp;\nágua&nbsp;&nbsp; santa&nbsp;&nbsp; tinha um&nbsp;\nquiosque&nbsp; para&nbsp; tomar&nbsp;\nchimarao&nbsp; <b>!&nbsp;&nbsp; <u>Sr. &nbsp;João</u></b>&nbsp;\n<b><u>Faedo</u></b><u> </u>&nbsp;morou&nbsp;\nna cidade de Marau&nbsp; 2 vês moraram\nna vila marrecas&nbsp; no Paraná&nbsp; atual Francisco Beltrão e&nbsp; posteriormente &nbsp;moram &nbsp;em água santa onde morram&nbsp; e criaram suas raízes em água santa . E de&nbsp; onde&nbsp;\nse&nbsp; formou&nbsp; a&nbsp;\nfamília&nbsp; &nbsp;<b><u>FAEDO</u></b>&nbsp; no&nbsp;\nfinal&nbsp; do século\n&nbsp;</span><em><span style=\"background-attachment: initial; background-clip: initial; background-color: white; background-image: initial; background-origin: initial; font-family: 'Lucida Calligraphy'; font-size: 12pt; font-style: normal; line-height: 115%;\">XIX &nbsp;&nbsp;e&nbsp; inicio&nbsp;&nbsp;\ndo&nbsp;&nbsp; século xx</span></em><em><b><span style=\"background-attachment: initial; background-clip: initial; background-color: white; background-image: initial; background-origin: initial; font-family: 'Lucida Calligraphy'; font-style: normal;\"> </span></b></em><em><span style=\"background-attachment: initial; background-clip: initial; background-color: white; background-image: initial; background-origin: initial; font-family: 'Lucida Calligraphy'; font-style: normal;\">em quase\ntodo&nbsp; o&nbsp;\nBrasil&nbsp;</span></em><span style=\"font-family: 'Lucida Calligraphy'; font-size: 12pt; line-height: 115%;\"><o:p></o:p></span><br />\n<span style=\"font-family: 'Lucida Calligraphy';\"><br /></span></div>",
    "text": "Guiosepe  Faedo\nx   Rosa  vicário  Faedo\n\nNatural de Monte Faedo, Província de Vicenza, Itália, Josep Faedo era\nfilho de Luizi Faedo e Margarida Dalban. Em 1891, veio conhecer a América,\ndeixando a família na Europa. Percorreu inicialmente a Argentina e o Uruguai.\nJosep era agrimensor prático e técnico em vinicultura.\n\nEm 1892, foi convidado para orientar a colonização italiana na região da\nfutura cidade de Nova Bassano, no Rio Grande do Sul. Retornou à Itália para\ntrazer a esposa, Rosa Vicário, e seu filho João Faedo. Imigrou para o Brasil em\n1895, em Alfredo\nChaves, atual Veranópolis (RS).\n\nNa década de 1930, Josep e seu irmão João Faedo (interessado por pedras\npreciosas) vieram conhecer o Paraná. Ao retornar para o Rio Grande do Sul,\nincentivou seu filho Luiz Antônio Faedo a vir se instalar nesta região,\nmotivado pelas terras férteis do Sudoeste.\n\nJoão\nFaedo                 x    Erina  Ferlim\n\nLuis\nAntonio Faedo    X   Leontina\nCavalheiro\n\nJoão  Faedo\ne   Erina   Ferlim\n\nVieram  por  Bento\nGonçalves  passaram pelo rio  da casca com o destino  maral\nJoão   Faedo casou se com Erina Ferlim cidade de\nMaral  depois  vieram\nmorar em  água santa diz Ângelo Alberto  Faedo , meu  pai\ntinha 5 alqueires de  terra  e  uma\nFerraria   nos\nprimeiros  anos  o pai\ntrabalhava  no porão de  casa\ndepois fizeram  a  ferraria\nonde ele  fazia  foice ,foice de cortar trigo até navalha de\ncortar barba ,ele temperava  e se  não presta se   dava outra  João   Faedo  tirava o\nsustento  da pequena   ferraria e\ntoda a ferramenta  que um\nferreiro  pôde  fazer meu\npai  fazia  diz Ângelo\nAlberto  Faedo e meu  irmão  Jose Faedo . Jose aprendeu   com\nmeu  pai , Jose  fazia até\nmotor  de carro  e\nna  colônia de  terra\nnos  plantávamos  trigo , batata . No  meio\nda  cidade  de\nágua   santa   tinha um\nquiosque  para  tomar\nchimarao  !   Sr.  João\nFaedo  morou\nna cidade de Marau  2 vês moraram\nna vila marrecas  no Paraná  atual Francisco Beltrão e  posteriormente  moram  em água santa onde morram  e criaram suas raízes em água santa . E de  onde\nse  formou  a\nfamília   FAEDO  no\nfinal  do século\nXIX   e  inicio\ndo   século xx em quase\ntodo  o\nBrasil",
    "image_count": 2
  }
];
const GENUINE_COMMENTS = [
  {
    "author": "Gerson Faedo",
    "date": "30 de abril de 2012",
    "page": "História da Família Faedo",
    "text": "Nesse aonde foi construída a primeira habitação, na antiga Marrecas, Hoje Francisco Beltrão, temos que deixar em destaque que nesse lugar é o centro de Francisco Beltrão."
  },
  {
    "author": "Gerson L. Faedo",
    "date": "30 de abril de 2012",
    "page": "História da Família Faedo",
    "text": "Quando falar de Josep Faedo, para que entendam que o referido nome em Italiano é Giuseppe Faedo, pois várias perguntas de outros países querem saber se é a mesma pessoa, portanto sugiro que qdo falar em Josep deixar entre parênteses (Giuseppe). Josep (Giuseppe Faedo)."
  },
  {
    "author": "Gerson Luiz Faedo",
    "date": "30 de abril de 2012",
    "page": "Arquivos da Família Faedo",
    "text": "Esclarecendo que certificado Giuseppe Faedo é o mesmo Josep Faedo."
  },
  {
    "author": "Nanda (filha de Maria Jussara Faedo / neta de Antonio Hermes Faedo)",
    "date": "6 de maio de 2012",
    "page": "Irineu Faedo e Maria Conceição Faedo",
    "text": "Olá... adorei ver a árvore.... mas está faltando alguns nomes ao menos que sei, dos filhos do Hermes Faedo o nome dele completo é (Antonio Hermes Faedo), a esposa que falta o nome é Dulce Martha Schuengber Faedo e falta o nome de dois filhos, o Antonio Irineu Faedo que recebeu o mesmo nome do seu avô e da Rejane Faedo, se quiser posso passar tb o nome dos netos do Hermes Faedo, a propósito sou filha da Jussara Faedo - (nome completo é Maria Jussara Faedo)...."
  },
  {
    "author": "Angelina Faedo (União da Vitória - PR)",
    "date": "24 de maio de 2012",
    "page": "Contatos",
    "text": "Boa Noite, procura-se Vitorio Faedo e Onorio Faedo, Filhos de Antonio e Marina Faedo. Sou Angelina Faedo, Irmã de Vitorio e Onorio, se vc tiver algum conhecimento deles favor entrar em contato pelo telefone (42) 3524-4802, União da Vitória. Estou com muita saudades deles."
  },
  {
    "author": "Tati (Cidade Gaúcha - PR)",
    "date": "22 de agosto de 2012",
    "page": "Fotos Novas",
    "text": "Saudade, muita saudades do seu ANGELO ALBERTO FAEDO (seu Faedo)!!!! Ass: TATI, Cidade Gaúcha - Paraná."
  },
  {
    "author": "Familiar (Neto/a de Ângelo Faedo)",
    "date": "14 de setembro de 2012",
    "page": "Fotos Novas",
    "text": "Olá, gostei do blog da nossa família parabéns. Saudades do vô Ângelo."
  },
  {
    "author": "Elisabete (mãe de Silvana Faedo - Ribeirão Preto - SP)",
    "date": "12 de dezembro de 2012",
    "page": "Contatos",
    "text": "Meu nome é Elisabete, fui casada com Luiz Plinio Faedo, moro em Ribeirão Preto - São Paulo. Gostaria de ver a foto de Francisco José Faedo. A minha filha se chama Silvana Faedo. Abraços."
  },
  {
    "author": "Familiar / Leitor",
    "date": "26 de março de 2013",
    "page": "Notícias Família Faedo",
    "text": "Está faltando a foto da praça [Praça Josep Faedo em Francisco Beltrão]."
  },
  {
    "author": "Acervo Francisco Beltrão Memórias",
    "date": "15 de junho de 2013",
    "page": "Fotos da Família Faedo",
    "text": "Achei muito interessante e inclusive salvei algumas fotos para o Francisco Beltrão Memórias (https://www.facebook.com/groups/299657053488944/). Muito bem feito este portal, parabéns!!!!!!"
  },
  {
    "author": "Marcos de Oliveira Batista",
    "date": "17 de junho de 2013",
    "page": "Contatos",
    "text": "Boa noite! Sou MARCOS DE OLIVEIRA BATISTA, gostaria de saber se existe na família Faedo alguém com o nome LUIZ ALBERTO FAEDO pois preciso entrar em contato com ele urgente. Grato, Marcos de Oliveira Batista (email: marcosoliveira43@oi.com.br)."
  },
  {
    "author": "Familiar / Leitor",
    "date": "30 de novembro de 2015",
    "page": "Contatos",
    "text": "Luiz Plinio Faedo, que era de Londrina?"
  },
  {
    "author": "Gabriel Asafe Faedo Metzler (bisneto de Luiz Antônio Faedo)",
    "date": "22 de setembro de 2022",
    "page": "Fotos da Família Faedo",
    "text": "Obrigado, sou filho da Krishna, filha da Lenir [Nedir] e Juca Faedo, meu nome é Gabriel Asafe Faedo Metzler, agradeço, agora posso saber mais do meu passado."
  },
  {
    "author": "Descendente (Bisneto/a de Luiz Antônio Faedo)",
    "date": "1 de outubro de 2022",
    "page": "O Poema (O Velho Guerreiro)",
    "text": "Meu Bisa 👏👏👏"
  },
  {
    "author": "Familiar Faedo (Contato Cidadania Italiana)",
    "date": "30 de janeiro de 2024",
    "page": "História da Família Faedo",
    "text": "(+39) 320 6149658 — Para cidadania italiana, se alguém da família Faedo tiver interesse em fazer a cidadania italiana."
  },
  {
    "author": "Filho caçula de Maria Elena Faedo",
    "date": "30 de janeiro de 2024",
    "page": "História da Família Faedo",
    "text": "Gostaria de saber se alguém tem alguma fotografia da minha Mãe (Maria Elena Faedo), sou filho mais novo, não sei se alguém vai me contatar pra enviar alguma coisa."
  },
  {
    "author": "Neto(a) de Onório Faedo",
    "date": "3 de abril de 2024",
    "page": "Contatos",
    "text": "Olá, meu avô se chama Onorio Faedo e mora em Francisco Beltrão no Paraná, será que seria o mesmo?? Meu contato é (51) 8314-3024."
  },
  {
    "author": "Anderson Faedo Lazzarotto",
    "date": "9 de setembro de 2024",
    "page": "Fotos da Família Faedo",
    "text": "Que massa encontrar esse blog! Me chamo Anderson Faedo Lazzarotto."
  },
  {
    "author": "Ex-colega de Solange Faedo (Realeza - PR)",
    "date": "23 de junho de 2025",
    "page": "História da Família Faedo",
    "text": "Em Realeza - Paraná conheci Solange Faedo. Estudou comigo. Parabéns família Faedo. Vocês desbravaram Francisco Beltrão."
  }
];

let currentCategory = 'all';
let currentSearch = '';

function switchTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  const targetPanel = document.getElementById('tab-' + tabId);
  if (targetPanel) targetPanel.classList.add('active');

  const targetBtn = document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
  if (targetBtn) targetBtn.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  const countEl = document.getElementById('gallery-count');
  if (!grid) return;

  const q = currentSearch.trim().toLowerCase();
  const filtered = CURATED_PHOTOS.filter(p => {
    const matchCat = currentCategory === 'all' || p.category === currentCategory;
    const matchSearch = !q ||
      p.title.toLowerCase().includes(q) ||
      p.caption.toLowerCase().includes(q) ||
      p.people.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q) ||
      p.year.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  if (countEl) {
    countEl.textContent = `Exibindo ${filtered.length} de ${CURATED_PHOTOS.length} registros históricos catalogados`;
  }

  grid.innerHTML = filtered.map((p, idx) => `
    <article class="photo-card">
      <div class="photo-thumb-wrap" onclick="openLightbox('${p.id}')">
        <img src="${p.src}" alt="${p.title.replace(/"/g, '&quot;')}" loading="lazy" />
        <span class="photo-year-badge">${p.year}</span>
      </div>
      <div class="photo-body">
        <div>
          <span class="card-badge ${p.category === 'documentos' ? 'badge-green' : 'badge-red'}">${p.category_label}</span>
          <h4>${p.title}</h4>
          <div class="photo-meta">📍 ${p.location}</div>
          <p class="photo-caption">${p.caption}</p>
        </div>
        <div class="photo-actions">
          <button class="btn btn-primary" onclick="openLightbox('${p.id}')">🔍 Ampliar</button>
          <a class="btn btn-outline" href="${p.src}" download>⬇️ Baixar Original</a>
        </div>
      </div>
    </article>
  `).join('');
}

function filterGalleryCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  renderGallery();
}

function onGallerySearch(val) {
  currentSearch = val;
  renderGallery();
}

function openLightbox(photoId) {
  const p = CURATED_PHOTOS.find(item => item.id === photoId);
  if (!p) return;
  const lb = document.getElementById('lightbox-modal');
  document.getElementById('lb-img').src = p.src;
  document.getElementById('lb-title').textContent = p.title;
  document.getElementById('lb-meta').textContent = `${p.year} • ${p.location} • Pessoas: ${p.people}`;
  document.getElementById('lb-caption').textContent = p.caption;
  document.getElementById('lb-download').href = p.src;
  lb.classList.add('open');
}

function openRawImageModal(src, title, caption) {
  const lb = document.getElementById('lightbox-modal');
  document.getElementById('lb-img').src = src;
  document.getElementById('lb-title').textContent = title;
  document.getElementById('lb-meta').textContent = 'Documento Oficial Digitalizado em Alta Resolução';
  document.getElementById('lb-caption').textContent = caption;
  document.getElementById('lb-download').href = src;
  lb.classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox-modal').classList.remove('open');
}

function renderArchiveSidebar() {
  const listEl = document.getElementById('archive-list');
  if (!listEl) return;

  listEl.innerHTML = ARCHIVE_ENTRIES.map((entry, idx) => `
    <button class="archive-item-btn ${idx === 0 ? 'active' : ''}" onclick="selectArchiveEntry(${idx})" id="arch-btn-${idx}">
      <span class="title">${entry.title}</span>
      <span class="meta">${entry.kind_label} #${entry.index} • ${entry.published} • ${entry.image_count} foto(s)</span>
    </button>
  `).join('');

  selectArchiveEntry(0);
}

function selectArchiveEntry(idx) {
  const entry = ARCHIVE_ENTRIES[idx];
  if (!entry) return;

  document.querySelectorAll('.archive-item-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById('arch-btn-' + idx);
  if (activeBtn) activeBtn.classList.add('active');

  const viewer = document.getElementById('archive-viewer');
  viewer.innerHTML = `
    <div style="border-bottom: 2px solid #E2D9C8; padding-bottom: 1rem; margin-bottom: 1.5rem;">
      <span class="card-badge ${entry.kind === 'pages' ? 'badge-red' : 'badge-gold'}">${entry.kind_label} #${entry.index}</span>
      <h3 style="font-size: 1.6rem; color: #581218; margin-bottom: 0.35rem;">${entry.title}</h3>
      <p style="font-size: 0.86rem; color: #5A524C;">
        📅 Publicado em: <strong>${entry.published}</strong> &nbsp;|&nbsp;
        🔗 URL Original: <a href="${entry.url}" target="_blank" rel="noopener">${entry.url}</a>
      </p>
    </div>
    <div class="original-blog-content">${entry.html}</div>
  `;
}

function renderComments() {
  const container = document.getElementById('comments-wall');
  if (!container) return;

  container.innerHTML = GENUINE_COMMENTS.map(c => `
    <div class="card" style="padding: 1.15rem 1.35rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.45rem; gap:0.5rem; flex-wrap:wrap;">
        <strong style="color: var(--italy-red-dark); font-size:0.98rem;">👤 ${c.author}</strong>
        <span class="card-badge badge-gold" style="margin:0;">${c.date}</span>
      </div>
      <div style="font-size:0.78rem; color:var(--italy-green); font-weight:600; margin-bottom:0.45rem;">
        Em: ${c.page}
      </div>
      <p style="color:var(--text-primary); font-size:0.93rem;">"${c.text}"</p>
    </div>
  `).join('');
}

function copyCnnNames() {
  const text = `GIUSEPPE FAEDO, JOSEP FAEDO, JOSEPP FAEDO, GUIOSEPE FAEDO, JOSE FAEDO, JOSÉ FAEDO (Filho de Luigi Faedo / Luizi Faedo e Margarita Dalban / Margarida Dalban) | LUIGI FAEDO, LUIZ ANTONIO FAEDO, LUIZ ANTÔNIO FAEDO, LUIS ANTONIO FAEDO (Filho de Giuseppe Faedo e Rosa Vicario Faedo)`;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copy-cnn-btn');
    btn.textContent = '✅ Copiado com sucesso!';
    setTimeout(() => {
      btn.textContent = '📋 Copiar Todas as Variações para a CNN';
    }, 2500);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderGallery();
  renderArchiveSidebar();
  renderComments();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
});
