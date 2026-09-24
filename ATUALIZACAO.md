# Como atualizar o site — versão 2

Este site usa GitHub Pages + Jekyll. O conteúdo fica separado do desenho do site. Na rotina normal, você não precisa editar HTML, CSS ou JavaScript.

## A. Publicar uma nova Pílula Reflexiva

1. Prepare o novo arquivo de áudio e dê a ele um nome simples, por exemplo: `48-inteligencia-e-formacao.ogg`.
2. Copie o áudio para a pasta `audio` do repositório local.
3. Copie `modelos/MODELO-NOVA-PILULA.md` para a pasta `_pilulas`.
4. Renomeie a cópia, por exemplo: `48-inteligencia-e-formacao.md`.
5. Abra esse arquivo no Bloco de Notas ou outro editor de texto e altere: título, número, duração, caminho do áudio, macrotemas, descritores e sinopse.
6. Salve o arquivo.
7. Abra o GitHub Desktop. Ele mostrará o novo áudio e o novo arquivo `.md` em Changes.
8. Em Summary, escreva algo como `Adiciona pílula 48`.
9. Clique em `Commit to main` e depois `Push origin`.
10. Aguarde alguns minutos. O GitHub Pages reconstruirá o site automaticamente.

### Observação importante

O campo `numero` controla a numeração pública. Continue a sequência pública (48, 49, 50...). O campo `numero_original` pode guardar a numeração histórica do arquivo, se desejar.

## B. Publicar uma nova coluna

1. Copie `modelos/MODELO-NOVA-COLUNA.md` para `_colunas`.
2. Renomeie usando data e título, por exemplo: `2026-10-01-educacao-na-era-da-ia.md`.
3. Edite título, data, veículo, endereço original, resumo e temas.
4. Cole o texto da coluna abaixo do segundo `---`, se houver autorização para republicação integral.
5. Em `relacionadas`, informe os números das pílulas que dialogam com a coluna. Essa parte é opcional.
6. Salve, Commit e Push pelo GitHub Desktop.
7. A coluna aparecerá automaticamente em `Colunas Publicadas`, na página inicial e nos Temas correspondentes.

## C. Alterar uma pílula ou coluna já publicada

Abra o arquivo `.md` correspondente em `_pilulas` ou `_colunas`, faça a correção, salve, Commit e Push.

## D. Excluir conteúdo

Remova o arquivo `.md` correspondente. No caso de uma pílula, remova também o áudio se ele não for mais necessário. Faça Commit e Push.

## E. Cinco macrotemas usados no site

Use preferencialmente estes nomes exatamente assim:

- Educação
- Cultura
- Tecnologias
- Saúde
- Economia

Outros termos devem entrar em `descritores` nas pílulas. Nas colunas, podem ser adicionados em `temas`, mas apenas os cinco macrotemas acima têm blocos próprios na página Temas nesta versão.

## F. Atualizar pela interface do GitHub

Arquivos `.md` pequenos podem ser criados e editados diretamente no navegador no GitHub. Para os áudios, o GitHub Desktop continua sendo a opção mais segura, especialmente quando o arquivo for grande.
