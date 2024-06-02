document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.getElementById('copyButton');
    const copiedMessage = document.getElementById('copiedMessage');

    // Function to update the content to be copied
    function updateTextToCopy() {
        return copyButton.getAttribute('data-copy-text'); // Accessing the data attribute
    }

    // Event listener for the copy button
    copyButton.addEventListener('click', function () {
        const textToCopy = updateTextToCopy();

        navigator.clipboard.writeText(textToCopy).then(() => {
            copiedMessage.classList.remove('hidden');
            copiedMessage.classList.add('visible');

            setTimeout(() => {
                copiedMessage.classList.remove('visible');
                copiedMessage.classList.add('hidden');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
});
