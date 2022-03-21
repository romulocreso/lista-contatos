const listaContatosLocal = [];
let id = 0;

const listaContatosContainer = document.querySelector(".secaoListaContatos_lista");

const campoNome = document.getElementById("campoNome");
const campoEmail = document.getElementById("campoEmail");
const campoTelefone = document.getElementById("campoTelefone");

const botaoEnviar = document.getElementById("botaoEnviar");

function enviarNovoContato() {
	const valorNome = campoNome.value;
	const valorEmail = campoEmail.value;
	const valorTelefone = campoTelefone.value;

	const novoContato = {
		id: id,
		nome: valorNome,
		email: valorEmail,
		telefone: valorTelefone
	};

	id++;
	listaContatosLocal.push(novoContato);

	compilarLayout();
}

botaoEnviar.addEventListener("click", enviarNovoContato);

function removerContato(evento) {
	const botaoSelecionado = evento.target;
	const contatoSelecionado = botaoSelecionado.parentElement;
	const idContatoSelecionado = contatoSelecionado.dataset.id;

	const contatoExcluido = listaContatosLocal.find((contato ) => contato.id == idContatoSelecionado);
	const posicaoContatoExcluido = listaContatosLocal.indexOf(contatoExcluido);
	listaContatosLocal.splice(posicaoContatoExcluido, 1);

	compilarLayout();

	console.log(contatoExcluido);
}

function compilarLayout() {
		listaContatosContainer.innerHTML = " ";

		if(listaContatosLocal.length !== 0) {
			for(let i = 0; i < listaContatosLocal.length; i++) {
				gerarLayout(listaContatosLocal[i]);
			}
		} else {
			const listaContatosVazia = "<li><p>Nada para apresentar</p></li>";

			listaContatosContainer.innerHTML = listaContatosVazia;
		}
	}
	compilarLayout();

function gerarLayout(contato) {
	const li = document.createElement("li");
	const button = document.createElement("button");
	const h2 = document.createElement("h2");
	const p = document.createElement("p");
	const span = document.createElement("span");

	button.id = "removerContato";
	button.addEventListener("click", removerContato);

	li.dataset.id = contato.id;
	h2.innerText = contato.nome;
	p.innerText = contato.email;
	span.innerText = contato.telefone;

	li.appendChild(button);
	li.appendChild(h2);
	li.appendChild(p);
	li.appendChild(span);

	listaContatosContainer.appendChild(li);
}
