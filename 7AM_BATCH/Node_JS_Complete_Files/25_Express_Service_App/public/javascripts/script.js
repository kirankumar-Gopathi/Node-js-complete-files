// for form submission



// for delete request
$('.item-card').click(function() {
    let selectedTodo = $(this).text().trim();
    $.ajax({
        method : 'DELETE',
        url: '/todo/' + selectedTodo,
        success : function(data) {
           location.reload(true);
        }
    });
});

