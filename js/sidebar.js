  $(document).ready(function(){
        $(".menu-responsive").hide();
	$("#burger-drop").click(function(){
        $(".menu-responsive").slideToggle();
    });
 });   
$(document).ready(function(){
    $('[for="tuts"]').click(function(){
        $(this).next().fadeToggle();
    });
}); 



document.getElementById('sidebarToggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('d-none');
});

