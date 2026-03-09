  // Inicializa as animações
        AOS.init({
            duration: 1000,
            once: true
        });


        // BOTÃO FLUTUANTE WPP
        window.addEventListener('scroll', function () {
            const btnWpp = document.querySelector('.whatsapp-float');
            // Se a rolagem vertical for maior que 300px, mostra o botão
            if (window.scrollY > 300) { btnWpp.classList.add('show'); }
            else { btnWpp.classList.remove('show'); }
        });


        // vídeo página inicial
        const video = document.getElementById("video-bg");
        video.playbackRate = 0.75;



        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // Dica extra: fechar o menu automaticamente ao clicar em um link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('mobile-menu').classList.add('hidden');
            });
        });

function toggleModal() {
    const modal = document.getElementById('modalOrcamento');
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden'; // Trava o scroll do fundo
    } else {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto'; // Destrava o scroll
    }
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modalOrcamento');
    if (event.target == modal) {
        toggleModal();
    }
}