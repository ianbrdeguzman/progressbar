const progressBar = document.querySelector('.progress-bar');
const downloadBtn = document.querySelector('#download');
const footer = document.querySelector('footer');
const icon = document.querySelector('footer p a i')


function init() {
    
    let initialWidth = 40;
    let widthOfProgressBar = 300;

    setInterval( () => {

        if (initialWidth >= widthOfProgressBar) {
            progressBar.textContent = 'Completed';
            downloadBtn.style.display = 'none';
            return;
        }

        initialWidth++;
        progressBar.style.display = 'flex';
        progressBar.style.width = `${initialWidth}px`;
        progressBar.innerHTML = `${Math.floor(initialWidth / 3)}%`;
        
    }, 10);
}

downloadBtn.addEventListener('click', init);

footer.style.position = 'absolute';
footer.style.top = '0';
footer.style.right = '0';
footer.style.padding = '1rem';
icon.style.fontSize = '2rem';
icon.style.color = '#272727';
