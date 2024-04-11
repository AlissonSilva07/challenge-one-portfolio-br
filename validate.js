const projectsSpace = document.getElementById('projects_area');

//Seu JavaScript de validação aqui


// Pegar os projetos do github
async function getGitHubRepos() {
    try {
        const response = await fetch('https://api.github.com/users/alissonsilva07/repos');
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function renderizarDados() {
    const projectsArea = document.querySelector('.projects__items');
    const data = await getGitHubRepos();

    if (!data) {
        return;
    }

    const repos = []

    repos.push(data[2])
    repos.push(data[7])
    repos.push(data[15])
    repos.push(data[16])
    repos.push(data[22])
    repos.push(data[23])

    repos.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('projects__item');

        const title = document.createElement('h2');
        title.textContent = item.name;
        title.classList.add('projects__container__title');

        const description = document.createElement('p');
        description.textContent = item.description;
        description.classList.add('projects__container__description');

        const language = document.createElement('p');
        language.textContent = item.language;
        language.classList.add('projects__container__language');

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(language);
        projectsArea.appendChild(card);
    });
}

renderizarDados()

