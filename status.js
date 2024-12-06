// Select the buttons
const copyButton2 = document.getElementById('copyIP2');
let tooltip;

// Tooltip for "mc.razermc.online"
copyButton2.addEventListener('mouseenter', function() {
    tooltip = document.createElement('div');
    tooltip.textContent = '*only for Radmin users*';
    tooltip.style.position = 'absolute';
    tooltip.style.backgroundColor = '#000000b3';
    tooltip.style.color = '#00ff00';
    tooltip.style.padding = '5px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.fontSize = '12px';
    tooltip.style.zIndex = '1000';
    tooltip.style.top = '30px'; // Adjust top position relative to the button
    tooltip.style.left = '0';   // Adjust left position relative to the button

    document.body.appendChild(tooltip);

    const rect = copyButton2.getBoundingClientRect();
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.top + rect.height + 1}px`; // Position 5px below the button
});

copyButton2.addEventListener('mouseleave', function() {
    if (tooltip) {
        tooltip.remove();
    }
});

const changeSkinButton = document.getElementById('changeSkinButton');


// Event listener for showing tooltip on hover
changeSkinButton.addEventListener('mouseenter', function() {
    // Create the tooltip element
    tooltip = document.createElement('div');
    tooltip.innerHTML = '❆ download the mod: CustomSkinLoader<br>❆ use same Username';
    tooltip.style.position = 'absolute';
    tooltip.style.backgroundColor = '#000000b3';
    tooltip.style.color = '#00ff00';
    tooltip.style.padding = '5px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.fontSize = '12px';
    tooltip.style.zIndex = '1000';
    tooltip.style.top = '30px'; // Adjust top position relative to the button
    tooltip.style.left = '0';   // Adjust left position relative to the button

    document.body.appendChild(tooltip);

    // Get the position of the "Change Skin" button
    const rect = changeSkinButton.getBoundingClientRect();
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.top + rect.height + 3}px`; // Position below the button
});

// Event listener for removing tooltip when mouse leaves
changeSkinButton.addEventListener('mouseleave', function() {
    if (tooltip) {
        tooltip.remove();
    }
});
