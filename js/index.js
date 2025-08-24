document.addEventListener('DOMContentLoaded', function() {

  var modalOrderInit = document.querySelector('.modal-order');
  if (modalOrderInit) modalOrderInit.style.display = 'none';
    const services = document.querySelectorAll('.service');
    let currentOpenButton = null;


    function openDropdown(button) {
        const dropdownContent = button.nextElementSibling;
        const contentClass = dropdownContent.classList[1];


        if (currentOpenButton === button) {
            dropdownContent.style.display = 'none';
            dropdownContent.style.backgroundImage = 'none';
            button.style.color = '#CACACA';
            button.style.fontStyle = 'normal';
            currentOpenButton = null;
            document.querySelector('.services .mobile-button').style.display = 'none';
            return;
        }


        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
            content.style.backgroundImage = 'none';
            document.querySelector('.services .mobile-button').style.display = 'none';
            return;
        });
        document.querySelectorAll('.service').forEach(btn => {
            btn.style.color = '#CACACA';
            btn.style.fontStyle = 'normal';
        });



        dropdownContent.style.display = 'block';
        dropdownContent.style.backgroundImage = `url(./img/${contentClass}.webp)`;
        dropdownContent.style.backgroundSize = 'cover';
        dropdownContent.style.backgroundRepeat = 'no-repeat';
        dropdownContent.style.marginBottom = 'calc(5vh + 20px)';


        if (contentClass === 'warhousecleaning') {
            dropdownContent.style.backgroundPosition = 'top';
        }

        else if (contentClass === 'snowclean') {
            dropdownContent.style.background = `linear-gradient(90deg, rgba(0, 89, 255, 0.25) 0%, rgba(0, 89, 255, 0.25) 100%), url(./img/${contentClass}.webp)`;
            dropdownContent.style.backgroundSize = 'cover';
            dropdownContent.style.backgroundRepeat = 'no-repeat';
            dropdownContent.style.backgroundPosition = 'center';

        }

        else {
            dropdownContent.style.backgroundPosition = 'center';
        }

        button.style.color = 'black';
        button.style.fontStyle = 'italic';


        currentOpenButton = button;


        const mobileButton = document.querySelector('.services .mobile-button');
        mobileButton.style.display = 'flex';


        const rect = dropdownContent.getBoundingClientRect();
        const servicesRect = dropdownContent.parentElement.getBoundingClientRect();


        mobileButton.style.position = 'absolute';
        mobileButton.style.top = (rect.bottom - servicesRect.top + 20) + 'px';
        mobileButton.style.left = rect.left - servicesRect.left + 'px';
        mobileButton.style.width = rect.width + 'px';
        mobileButton.style.zIndex = 100;
    }


    services.forEach(button => {
        button.addEventListener('click', function() {
            openDropdown(this);
        });
    });


    const snowButton = document.querySelector('.service:nth-child(6)');
    if (snowButton) {
        openDropdown(snowButton);
    }


    document.addEventListener('click', function(e) {
      if (!e.target.classList.contains('service')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
          content.style.display = 'none';
          content.style.backgroundImage = 'none';
        });
        document.querySelectorAll('.service').forEach(btn => {
          btn.style.color = '#CACACA';
          btn.style.fontStyle = 'normal';
        });
        currentOpenButton = null;

        var mobileBtn = document.querySelector('.services .mobile-button');
        if (mobileBtn) mobileBtn.style.display = 'none';
        return;
      }
    });
});

function addPlayButton(video) {
    const playButton = document.createElement('div');
    playButton.innerHTML = `
        <svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M88 62L50.5 83.6506V40.3494L88 62Z" fill="white"/>
            <circle cx="62" cy="62" r="61.5" stroke="#97C2FF"/>
        </svg>
    `;

    playButton.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
        z-index: 10;
        opacity: 0.9;
        transition: opacity 0.3s ease;
    `;

    playButton.addEventListener('mouseenter', function() {
        this.style.opacity = '1';
    });

    playButton.addEventListener('mouseleave', function() {
        this.style.opacity = '0.9';
    });

    playButton.addEventListener('click', function() {
        video.play()
            .then(() => {
                this.style.display = 'none';
            })
            .catch(error => {
                console.log("Play failed:", error);
            });
    });

    video.parentElement.style.position = 'relative';
    video.parentElement.appendChild(playButton);
}

document.addEventListener('DOMContentLoaded', function() {


  const burger = document.querySelector('.mobile-menu');
  const sideMenu = document.querySelector('.mobile-side-menu');
  const overlay = document.querySelector('.mobile-overlay');

  burger.addEventListener('click', function(e) {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    e.stopPropagation();
  });

  overlay.addEventListener('click', function() {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  sideMenu.addEventListener('click', function(e) {
    e.stopPropagation();
  });

  document.addEventListener('click', function(e) {
    if (sideMenu.classList.contains('active')) {
      sideMenu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {



  const modalOverlay = document.querySelector('.modal-overlay');
  const modalOrder = document.querySelector('.modal-order');


    document.querySelectorAll('.hero-label, .hero-label svg, .hero-label .text-inside').forEach(el => {
      el.addEventListener('click', function(e) {
        modalOverlay.style.display = 'block';
        modalOrder.style.display = 'block';
        document.body.style.overflow = 'hidden';
        e.stopPropagation();
      });
    });


      document.querySelectorAll('.services svg, .services .text-inside').forEach(el => {
        el.addEventListener('click', function(e) {
          modalOverlay.style.display = 'block';
          modalOrder.style.display = 'block';
          document.body.style.overflow = 'hidden';
          e.stopPropagation();
        });
      });


      document.querySelectorAll('.contacts-button svg, .contacts-button .text-inside').forEach(el => {
        el.addEventListener('click', function(e) {
          modalOverlay.style.display = 'block';
          modalOrder.style.display = 'block';
          document.body.style.overflow = 'hidden';
          e.stopPropagation();
        });
      });


  document.querySelectorAll('.mobile-button').forEach(btn => {
    btn.addEventListener('click', function(e) {
      modalOverlay.style.display = 'block';
      modalOrder.style.display = 'block';
      document.body.style.overflow = 'hidden';
      e.stopPropagation();
    });
  });


  modalOverlay.addEventListener('click', function() {
    modalOverlay.style.display = 'none';
    modalOrder.style.display = 'none';
    document.body.style.overflow = '';
  });


  document.addEventListener('click', function(e) {
    if (modalOrder.style.display === 'block' && !modalOrder.contains(e.target)) {
      modalOverlay.style.display = 'none';
      modalOrder.style.display = 'none';
      document.body.style.overflow = '';
    }
  });


  modalOrder.addEventListener('click', function(e) {
    e.stopPropagation();
  });
});
