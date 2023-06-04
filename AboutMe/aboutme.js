$.get("navigation/navigation.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});