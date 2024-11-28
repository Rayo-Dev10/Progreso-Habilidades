// Datos de las habilidades
const skillsData = [
    {
        group: 'Tecnológicas',
        skills: [
            { name: 'Diseño Web', level: 2 },
            { name: 'MySQL', level: 1 },
            { name: 'Power BI', level: 1 },
            { name: 'Salesforce', level: 3 },
            { name: 'CRM', level: 3 },
            { name: 'Bases de datos', level: 2 },
            { name: 'Excel', level: 3 },
            { name: 'Ofimática', level: 3 },
            { name: 'Idiomas', level: 1 }
        ]
    },
    {
        group: 'Competencias Comerciales',
        skills: [
            { name: 'Ventas', level: 4 },
            { name: 'Agresividad comercial', level: 4 },
            { name: 'Manejo de clientes', level: 4 },
            { name: 'Negociación', level: 4 },
            { name: 'KPIs', level: 4 }
        ]
    },
    {
        group: 'Habilidades Personales',
        skills: [
            { name: 'Manejo de situaciones difíciles', level: 4 },
            { name: 'Fluidez verbal', level: 4 },
            { name: 'Habilidad de improvisación', level: 4 },
            { name: 'Toma de decisiones', level: 4 },
            { name: 'Empatía', level: 4 },
            { name: 'Adaptabilidad', level: 4 },
            { name: 'Gestión de conflictos', level: 4 },
            { name: 'Comunicación asertiva', level: 4 }
        ]
    }
];

// Función para generar las barras de progreso dinámicamente
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('skills-container');

    // Iterar a través de los grupos de habilidades
    skillsData.forEach(group => {
        const groupDiv = document.createElement('div');
        groupDiv.classList.add('skills-group');

        // Crear el título del grupo
        const groupTitle = document.createElement('h2');
        groupTitle.textContent = group.group;
        groupDiv.appendChild(groupTitle);

        // Iterar a través de las habilidades del grupo
        group.skills.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.classList.add('skill');

            // Crear el nombre de la habilidad
            const skillTitle = document.createElement('h3');
            skillTitle.textContent = skill.name;
            skillDiv.appendChild(skillTitle);

            // Crear el contenedor de las barras de progreso
            const progressBarContainer = document.createElement('div');
            progressBarContainer.classList.add('progress-bar-container');
            progressBarContainer.setAttribute('data-level', skill.level);

            // Agregar las barras de progreso a este contenedor
            for (let i = 0; i < 4; i++) {
                const bar = document.createElement('div');
                bar.classList.add('progress-bar');

                // Si el índice de la barra es menor que el nivel, se llena
                if (i < skill.level) {
                    bar.classList.add('filled');
                }

                progressBarContainer.appendChild(bar);
            }

            skillDiv.appendChild(progressBarContainer);
            groupDiv.appendChild(skillDiv);
        });

        // Agregar el grupo de habilidades al contenedor principal
        container.appendChild(groupDiv);
    });
});
