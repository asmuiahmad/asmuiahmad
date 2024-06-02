document.addEventListener('DOMContentLoaded', function () {
    var menuLinks = document.querySelectorAll('.main-menu a');
    var responsiveLinks = document.querySelectorAll('.menu-responsive a');
    var contentSections = document.querySelectorAll('#menu-container .content');

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var id = this.className.split('button')[0];
            document.querySelector('a.active')?.classList.remove('active');
            this.classList.add('active');
            hideAllSections();
            showSection('.' + id + '-section');
        });
    });

    responsiveLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            document.querySelector('.menu-responsive').style.display = 'none';
        });
    });

    document.querySelector('a.toggle-nav').addEventListener('click', function () {
        var menuResponsive = document.querySelector('.menu-responsive');
        menuResponsive.style.display = menuResponsive.style.display === 'block' ? 'none' : 'block';
    });

    function hideAllSections() {
        contentSections.forEach(function (section) {
            section.style.display = 'none';
        });
    }

    function showSection(selector) {
        document.querySelector(selector).style.display = 'block';
    }

    // Load Google Maps script
    document.querySelector('.contactbutton').addEventListener('click', function () {
        loadScript();
    });

    function loadScript() {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=initialize';
        document.body.appendChild(script);
    }

    function initialize() {
        var mapOptions = {
            zoom: 15,
            center: new google.maps.LatLng(16.8496189, 96.1288854)
        };
        var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    };
