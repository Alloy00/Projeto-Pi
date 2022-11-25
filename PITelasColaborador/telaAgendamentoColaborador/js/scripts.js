
    let checkbox = document.querySelector('input');
    let button = document.querySelector('#bConfirmar');
    
    
      
        checkbox.addEventListener('change', () => {
            if(!checkbox.checked) button.style.display = 'none';
            else button.style.display = 'inline-block'; });
    



