$(function(){
    
    // plugin slider
    $('#slider__content').bxSlider({
        auto: true,
        autoControls: false,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 800
    });

    // listado de posts almacenado en un JSON
    let posts = [
        {
            title: 'post title #1',
            date: `Fecha publicación: ${moment().format('YYYY-MMMM-DD')}`,
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, ex fuga inventore placeat commodi officia optio ab impedit hic. Veniam nisi eligendi iure, accusamus vero magnam. Odio eveniet voluptates debitis?'
        },
        {
            title: 'post title #2',
            date: `Fecha publicación: ${moment().format('YYYY-MMMM-DD')}`,
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, ex fuga inventore placeat commodi officia optio ab impedit hic. Veniam nisi eligendi iure, accusamus vero magnam. Odio eveniet voluptates debitis?'
        },
        {
            title: 'post title #3',
            date: `Fecha publicación: ${moment().format('YYYY-MMMM-DD')}`,
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, ex fuga inventore placeat commodi officia optio ab impedit hic. Veniam nisi eligendi iure, accusamus vero magnam. Odio eveniet voluptates debitis?'
        },
        {
            title: 'post title #4',
            date: `Fecha publicación: ${moment().format('YYYY-MMMM-DD')}`,
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, ex fuga inventore placeat commodi officia optio ab impedit hic. Veniam nisi eligendi iure, accusamus vero magnam. Odio eveniet voluptates debitis?'
        },    
    ];
    
    posts.forEach((item, value) => {
        let post = `<section class="section__posts" id="section__posts">
        <h2 class="section__subtitle" id="section__subtitle">
          ${item.title}
        </h2>
        <span class="section__fecha" id="section__fecha"
          >${item.date}</span
        >
        <p class="section__paragraph" id="section__paragraph">
          ${item.content}
        </p>
        <div class="section__btn">
          <button type="submit" class="btn" id="btn">Leer más</button>
        </div>
      </section>`;
      $('#article').append(post);
    });

    // Programación para el botón de ir arriba
    let btnTop = document.getElementById('btn-top');

    window.addEventListener('scroll', function(){
      let scroll = document.documentElement.scrollTop,
          fullSize = document.documentElement.offsetHeight,
          sizeVP = document.documentElement.clientHeight
      
      if(scroll > 150){
        btnTop.classList.add('show');
      } else {
        btnTop.classList.remove('show');
      }

      if(fullSize == (scroll + sizeVP)){
        btnTop.classList.add('scrollFinal');
      } else {
        btnTop.classList.remove('scrollFinal');
      }
    });

    // btnTop.addEventListener('click', function(){
    //   window.scrollTo(0, 0);
    // });

    $('#btn-top').click(function(){
      window.scrollTo(0, 0);
    });
    

    // Formulario de login falso que nos permita guardar en el localstorage 
    //el nombre del usuario y en el caso de que exista la "sesión" mostrarla.
    
    $('#form').submit(function(){
      var form_name = $('#form_name').val();
      
      // la guardamos en localstorage
      localStorage.setItem('form_name', form_name);
      
    });

    var form_name = localStorage.getItem('form_name');
    $('#aside__about p').after('Bienvenido '+ form_name);
   
})