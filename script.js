document.getElementById('copyIP').addEventListener('click', function() {
    const serverIP = 'razer.online';
    navigator.clipboard.writeText(serverIP)
        .then(() => {
            this.classList.add('copied');
            setTimeout(() => this.classList.remove('copied'), 1000);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
});
document.getElementById('copyIP2').addEventListener('click', function() {
    const serverIP = 'mc.razer.online';
    navigator.clipboard.writeText(serverIP)
        .then(() => {
            this.classList.add('copied');
            setTimeout(() => this.classList.remove('copied'), 1000);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
});


const downloadBtn = document.getElementById('downloadBtn');
const downloadOptions = document.getElementById('downloadOptions');

downloadBtn.addEventListener('click', function() {
    downloadOptions.classList.toggle('active');
});

// Close download options when clicking outside
document.addEventListener('click', function(event) {
    if (!downloadBtn.contains(event.target) && !downloadOptions.contains(event.target)) {
        downloadOptions.classList.remove('active');
    }
});

// Prevent download options from closing when clicking inside it
downloadOptions.addEventListener('click', function(event) {
    event.stopPropagation();
});


// Add this to your existing script
document.getElementById('copyIP').addEventListener('click', function() {
    const serverIP = 'razer.online';
    
    // Create popup element
    const popup = document.createElement('div');
    popup.textContent = `Copied IP: ${serverIP}`;
    popup.style.position = 'fixed';
    popup.style.top = '20px';
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.backgroundColor = 'rgba(0,0,0,0.7)';
    popup.style.color = 'white';
    popup.style.padding = '10px 20px';
    popup.style.borderRadius = '5px';
    popup.style.zIndex = '1000';
    popup.style.transition = 'opacity 0.3s';

    // Copy IP to clipboard
    navigator.clipboard.writeText(serverIP)
        .then(() => {
            // Add popup to body
            document.body.appendChild(popup);
            
            // Remove popup after 2 seconds
            setTimeout(() => {
                popup.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(popup);
                }, 300);
            }, 2000);

            // Add copied class to button (existing functionality)
            this.classList.add('copied');
            setTimeout(() => this.classList.remove('copied'), 1000);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
});

// Add this to your existing script
document.getElementById('copyIP2').addEventListener('click', function() {
    const serverIP = 'mc.razer.online';
    
    // Create popup element
    const popup = document.createElement('div');
    popup.textContent = `Copied IP: ${serverIP}`;
    popup.style.position = 'fixed';
    popup.style.top = '20px';
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.backgroundColor = 'rgba(0,0,0,0.7)';
    popup.style.color = 'white';
    popup.style.padding = '10px 20px';
    popup.style.borderRadius = '5px';
    popup.style.zIndex = '1000';
    popup.style.transition = 'opacity 0.3s';

    // Copy IP to clipboard
    navigator.clipboard.writeText(serverIP)
        .then(() => {
            // Add popup to body
            document.body.appendChild(popup);
            
            // Remove popup after 2 seconds
            setTimeout(() => {
                popup.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(popup);
                }, 300);
            }, 2000);

            // Add copied class to button (existing functionality)
            this.classList.add('copied');
            setTimeout(() => this.classList.remove('copied'), 1000);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
});


// -----------------------------------------------------------------
// Add to existing script.js
document.addEventListener('DOMContentLoaded', function() {
    const discordButton = document.querySelector('.discord-button');
    
    // Create dropdown element
    const dropdownMenu = document.createElement('div');
    dropdownMenu.classList.add('discord-dropdown');
    
    // Create whitelist link
    const whitelistLink = document.createElement('a');
    whitelistLink.href = 'https://discord.com/channels/961170181290344468/1309960052525764651';
    whitelistLink.textContent = '⮑ Get Whitelist';
    whitelistLink.classList.add('discord-dropdown-item');
    whitelistLink.target = '_blank';
    
    dropdownMenu.appendChild(whitelistLink);
    document.body.appendChild(dropdownMenu);

    // Toggle dropdown on hover
    discordButton.addEventListener('mouseenter', function() {
        dropdownMenu.classList.add('active');
    });

    discordButton.addEventListener('mouseleave', function(event) {
        // Add a small delay to prevent accidental closing
        setTimeout(() => {
            if (!dropdownMenu.matches(':hover')) {
                dropdownMenu.classList.remove('active');
            }
        }, 100);
    });

    // Keep dropdown open if mouse is over dropdown
    dropdownMenu.addEventListener('mouseenter', function() {
        this.classList.add('active');
    });

    dropdownMenu.addEventListener('mouseleave', function() {
        this.classList.remove('active');
    });
});