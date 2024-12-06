document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();
    const startSnowfallDate = new Date(currentDate.getFullYear(), 10, 1); // Noviembre 1
    const endSnowfallDate = new Date(currentDate.getFullYear() + 1, 0, 6); // Enero 6 del próximo año
  
    if (currentDate >= startSnowfallDate && currentDate <= endSnowfallDate) {
      const maxFlakes = 50; // Número máximo de copos de nieve en pantalla
      const flakes = [];
      const snowflakeCharacters = ["❅", "❄", "❆",]; // Diferentes caracteres de copos
  
      setInterval(() => {
        if (flakes.length < maxFlakes) {
          createSnowflake();
        }
      }, 300);
  
      function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
  
        // Seleccionar un carácter aleatorio de la matriz
        const randomChar = snowflakeCharacters[Math.floor(Math.random() * snowflakeCharacters.length)];
        snowflake.innerHTML = randomChar;
  
        document.body.appendChild(snowflake);
        flakes.push(snowflake);
  
        const startPos = Math.random() * window.innerWidth;
        const startOpacity = Math.random();
        const duration = Math.random() * 3 + 5;
        const size = Math.random() * 20 + 10; // Tamaño aleatorio
  
        snowflake.style.fontSize = `${size}px`;
        snowflake.style.opacity = startOpacity;
        snowflake.style.position = "fixed"; // Ajustado a posición fija
        snowflake.style.top = "0";
        snowflake.style.left = `${startPos}px`;
  
        // Elegir dirección de rotación aleatoriamente
        const rotationDirection = Math.random() > 0.5 ? 1 : -1; // 1 para horario, -1 para antihorario
  
        snowflake.animate(
          [
            { transform: `translate(0, 0) rotate(0deg)` },
            { transform: `translate(0, 100vh) rotate(${rotationDirection * 360}deg)` }
          ],
          {
            duration: duration * 1000,
            easing: "linear",
            iterations: Infinity
          }
        );
      }
    }
  });
  
  // music -----------------------------------------
  
  document.addEventListener('DOMContentLoaded', function() {
    // Create audio element
    const backgroundMusic = document.createElement('audio');
    backgroundMusic.src = '1.MP3'; // Replace with actual music file path
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.1; // Set a reasonable volume
    backgroundMusic.muted = true; // Start muted
  
    // Mute and Unmute SVG icons
    const muteIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="m21.707 20.293-2.023-2.023A9.566 9.566 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.113 8.113 0 0 1-1.672 4.913l-1.285-1.285C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V4a1 1 0 0 0-1.554-.832L7.727 6.313l-4.02-4.02-1.414 1.414 18 18 1.414-1.414zM12 5.868v4.718L9.169 7.755 12 5.868zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20v-1.879l-2-2v2.011l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9h.879L3.102 7.223A1.995 1.995 0 0 0 2 9v6c0 1.103.897 2 2 2z"></path></svg>`;
    
    const unmuteIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z"></path><path d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h3c.033 0 .061-.016.093-.019a1.027 1.027 0 0 0 .38-.116c.026-.015.057-.017.082-.033L12 5.868v12.264l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9z"></path></svg>`;
  
    // Create mute toggle button
    const musicToggle = document.createElement('button');
    musicToggle.classList.add('music-toggle');
    musicToggle.innerHTML = muteIcon; // Start with mute icon
  
    // Position the toggle button
    musicToggle.style.position = 'fixed';
    musicToggle.style.left = '1rem';
    musicToggle.style.top = '50%';
    musicToggle.style.transform = 'translateY(-50%)';
    musicToggle.style.zIndex = '1000';
    musicToggle.style.background = 'rgba(0, 0, 0, 0.75)';
    musicToggle.style.border = 'none';
    musicToggle.style.borderRadius = '50%';
    musicToggle.style.padding = '0.5rem';
    musicToggle.style.cursor = 'pointer';
  
    // Add event listener to toggle music
    let isMuted = true; // Start as muted
    musicToggle.addEventListener('click', function() {
        if (isMuted) {
            backgroundMusic.muted = false;
            musicToggle.innerHTML = unmuteIcon;
            
            // If music is not playing, start from the beginning
            if (backgroundMusic.paused) {
                backgroundMusic.currentTime = 0;
                backgroundMusic.play();
            }
        } else {
            backgroundMusic.muted = true;
            musicToggle.innerHTML = muteIcon;
        }
        isMuted = !isMuted;
    });
  
    // Append elements to body
    document.body.appendChild(backgroundMusic);
    document.body.appendChild(musicToggle);
  
    // Attempt to autoplay when page loads
    backgroundMusic.play().catch(e => {
        console.log('Autoplay was prevented', e);
    });
  });

  // error

// Redirect to 404 page on certain errors
window.addEventListener('error', (event) => {
  console.error('Error captured:', event);
  window.location.href = '404.html';
});



// Network error fallback
setTimeout(() => {
  if (!navigator.onLine) {
      console.warn('Network issue detected, redirecting to 404.html');
      window.location.href = '404.html';
  }
}, 5000);

document.addEventListener('DOMContentLoaded', () => {
  const adminLink = document.getElementById('adminLink');
  const loadingOverlay = document.getElementById('loading');

  adminLink.addEventListener('click', async (event) => {
      event.preventDefault(); // Prevent the default behavior of the link
      loadingOverlay.style.display = 'flex'; // Show loading animation

      try {
          // Perform a HEAD request to check if the page is reachable
          const response = await fetch(adminLink.href, { method: 'HEAD', mode: 'no-cors' });
          if (response.ok || response.status === 0) {
              // If reachable, redirect to the admin page
              window.location.href = adminLink.href;
          } else {
              throw new Error('Page not reachable');
          }
      } catch (error) {
          console.error('Admin link failed:', error);
          // Redirect to the 404 page
          window.location.href = '404.html';
      } finally {
          loadingOverlay.style.display = 'none'; // Hide loading animation
      }
  });
});

// loading animation
