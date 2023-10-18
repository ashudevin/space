let stars = document.getElementById('stars');
        let moon = document.getElementById('moon');
        let mountain = document.getElementById('mountain');
        let text = document.getElementById('text');
        let btn = document.getElementById('btn');
        
        
        window.addEventListener('scroll', function()
        {
            let value = window.scrollY;
            stars.style.left = value * 0.25 + 'px';
            moon.style.marginTop = value * 0.5 + 'px';
            text.style.marginRight = value* 5 + 'px';
            btn.style.marginTop = value *2 + 'px';
        })