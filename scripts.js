const projects = [
    {
        title: "GudangLy",
        image: "assets/project-1.png",
        description: "Aplikasi Manajemen Inventaris berbasis web untuk mengelola stok barang. Dibuat untuk pembelajaran Siswa RPL SMK 3 Metro saat Prakerin.",
        tech: ["Flask", "HTML", "Bootstrap"],
        link: "https://github.com/Galih-Arno/gudangly"
    },
    {
        title: "Portofolio Sederhana",
        image: "assets/default.png",
        description: "Proyek sederhana untuk mengembangkan portofolio pribadi, dibuat saat kuliah.",
        tech: ["Flask", "HTML", "Bootstrap"],
        link: "https://github.com/Galih-Arno/portofolio"
    },
    {
        title: "One Euphoria Website",
        image: "assets/project-3.png",
        description: "Website Penjualan Surfboards sederhana dan responsive. Showcase, blog, testimonials.",
        tech: ["VueJS", "TailwindCSS"],
        link: "https://github.com/Galih-Arno/one-euphoria-website"
    },
    {
        title: "Website Personal",
        image: "assets/default.png",
        description: "Website Personal sederhana dan responsive.",
        tech: ["HTML", "TailwindCSS"],
        link: "https://github.com/Galih-Arno/personal-website"
    },
    {
        title: "Semantic HTML",
        image: "assets/default.png",
        description: "Proyek belajar dan catatan pribadi Semantic HTML.",
        tech: ["HTML"],
        link: "https://github.com/Galih-Arno/learn-semantic-html"
    },
    {
        title: "Aplikasi Kasir Sederhana",
        image: "assets/project-6.png",
        description: "Aplikasi Kasir Sederhana CRUD. Cocok untuk belajar CRUD Flask.",
        tech: ["Flask", "SQLite", "TailwindCSS (CDN)"],
        link: "https://github.com/Galih-Arno/aplikasi-kasir"
    }
];

const container = document.getElementById('projects-container');

const projectCards = projects.map((project, index) => `
    <article class="bg-gray-800/60 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden 
        transition-all duration-500 ease-in-out hover:scale-[1.04] hover:-translate-y-2 hover:shadow-purple-500/30 
        group relative opacity-0 animate-fade-in-up"
        style="animation-delay: ${index * 150}ms"
    >
        <figure class="overflow-hidden relative">
            <img src="${project.image}" alt="Tampilan proyek ${project.title}" 
                class="w-full h-52 object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-[1deg]">
            <figcaption class="sr-only">Tampilan ${project.title}</figcaption>
        </figure>

        <div class="p-6 space-y-4">
            <h3 class="font-bold text-2xl flex items-center gap-3 text-purple-300">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    class="h-6 w-6 transition-transform duration-300 group-hover:rotate-6 text-purple-400" 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                </svg>
                ${project.title}
            </h3>
            <p class="text-gray-300">${project.description}</p>
            <div class="flex flex-wrap gap-2">
                ${project.tech.map(tech => `
                    <span class="bg-purple-700/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                        ${tech}
                    </span>`).join('')}
            </div>
            <a href="${project.link}" target="_blank" 
                class="inline-block mt-3 text-purple-400 font-semibold hover:text-purple-300 transition-all duration-300">
                <span class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        class="h-5 w-5 text-purple-400 transition-transform duration-300 group-hover:scale-110" 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M13.828 10.172a4 4 0 0 0-5.656 0l-3 3a4 4 0 1 0 5.656 5.656l1.172-1.172m3-3 3-3a4 4 0 0 0-5.656-5.656l-1.172 1.172" />
                    </svg>
                    Lihat Proyek
                </span>
            </a>
        </div>
    </article>
`).join('');

container.innerHTML = projectCards;
