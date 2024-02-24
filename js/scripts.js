//cursor BEGIN
 $(document).ready(function () {
    $(window).mousemove(function (e) {
        $("#cursor").css({
            left: e.clientX - 1.25 * parseFloat(getComputedStyle(document.documentElement).fontSize),
            top: e.clientY - 1.25 * parseFloat(getComputedStyle(document.documentElement).fontSize)
            });
        });
     });

//Preloader BEGIN
const loader = document.getElementById('loader');
        const languages = ['Hello', 'Ongaipe', 'Mâtisa', 'Habari', 'Sawubona', 'Mholo', 'Sawubona', 'Mhoro', 'Guten Tag', 'Nǐ hǎo'];

        let currentIndex = 0;

        function changeLanguage() {
            loader.textContent = languages[currentIndex];
            currentIndex = (currentIndex + 1) % languages.length;
        }

        setInterval(changeLanguage, 3000); // Change language every 3 seconds