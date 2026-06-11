// Substitua pelo seu nome de usuário do GitHub
const githubUser = "SEU-USUARIO";  
const repoName = "agrotec-sustentavel";

// Monta o link automaticamente
const siteUrl = `https://${githubUser}.github.io/${repoName}/`;

// Atualiza o link na página
document.getElementById("siteLink").href = siteUrl;
document.getElementById("siteLink").textContent = `Acessar ${siteUrl}`;
