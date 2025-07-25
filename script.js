document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const proposalContainer = document.getElementById('proposalContainer');
    const acceptedContainer = document.getElementById('acceptedContainer');

    noBtn.addEventListener('mouseover', () => {
        // Asegura que el botón se posicione en relación con la ventana (viewport)
        noBtn.style.position = 'fixed';

        // Obtiene el tamaño actual del botón para calcular el rango de movimiento
        const buttonWidth = noBtn.clientWidth;
        const buttonHeight = noBtn.clientHeight;

        // Calcula el rango máximo para las nuevas posiciones, dejando un pequeño margen
        const maxX = window.innerWidth - buttonWidth - 20; // 20px de margen en los bordes
        const maxY = window.innerHeight - buttonHeight - 20; // 20px de margen en los bordes

        // Genera posiciones aleatorias
        let newX = Math.random() * maxX;
        let newY = Math.random() * maxY;

        // Aplica las nuevas posiciones aleatorias
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;

        // *** Aquí es donde el botón se hace más pequeño y desaparece ***
        noBtn.style.transform = 'scale(0)'; // Se encoge a un tamaño de cero
        noBtn.style.opacity = '0';          // Se vuelve completamente transparente

        // *** Hace que el botón reaparezca después de un breve retraso ***
        // Esto es vital, ya que al desaparecer, el evento 'mouseout' no se activaría.
        // Después de que la animación de desaparición termine, el botón se vuelve visible
        // de nuevo en su nueva posición aleatoria.
        setTimeout(() => {
            noBtn.style.transform = 'scale(1)'; // Vuelve a su tamaño original
            noBtn.style.opacity = '1';          // Vuelve a ser visible
            // No resetear la posición aquí; se queda en la nueva ubicación aleatoria.
        }, 300); // El tiempo (en milisegundos) debe ser un poco más largo que la duración de tu transición CSS (0.15s = 150ms).
    });

    // Se elimina el evento 'mouseout' previo, ya que el 'setTimeout' lo maneja.
    // Si lo dejas, podría interferir con el comportamiento de reaparición.

    yesBtn.addEventListener('click', () => {
        proposalContainer.classList.add('hidden');
        acceptedContainer.classList.remove('hidden');
    });
});