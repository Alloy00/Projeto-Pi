
    let checkbox = document.querySelector('input');
    let button = document.querySelector('#bConfirmar');
    
    
      
        checkbox.addEventListener('change', () => {
            if(!checkbox.checked) button.style.display = 'none';
            else button.style.display = 'inline-block'; });
    
            function toggleButton() {
  
                let checkbox2 = document.getElementById('checkbox1');
                let checkbox = document.getElementById('checkbox2');
                let checkbox3 = document.getElementById('checkbox3');
                let checkbox4 = document.getElementById('checkbox4');
                let checkbox5  = document.getElementById('checkbox5');
                
                
              if(checkbox2.checked) {
                button.style.display = 'inline-block';
                return
              } else {
                button.style.display = 'none';
              }
              
              
                
              if(checkbox.checked) {
                button.style.display = 'inline-block';
                return
              } else {
                button.style.display = 'none';
              }

              if(checkbox3.checked) {
                button.style.display = 'inline-block';
                return
              } else {
                button.style.display = 'none';
              }
              
              if(checkbox4.checked) {
                button.style.display = 'inline-block';
                return
              } else {
                button.style.display = 'none';
              }
              
              if(checkbox5.checked) {
                button.style.display = 'inline-block';
                return
              } else {
                button.style.display = 'none';
              }
              
              if(checkbox6.checked) {
                button.style.display = 'inline-block';
                return
              } else {
                button.style.display = 'none';
              }
              
              
              }


