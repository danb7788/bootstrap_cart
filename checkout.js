$(document).ready(function() {
    $("#cart_data").val(localStorage.getItem('cart_data'));
    var cart_object = JSON.parse(localStorage.getItem('cart_data'));
    var cart = cart_object.cart;
    if (cart.length > 0) {
        $('#empty-notice').hide();
        $('#cart').show();
        $('#place').show();
        var total = 0;
        for (var i = 0; i < cart.length; i++) {
            var readonly = '';
            if (cart[i].type === 'course') {
                readonly = 'readonly';
            }
            $('#cart').append('<tr><td><b>'+  
            cart[i].itemName+'</b><br>'+cart[i].itemDesc+'</td><td style="height: 100%; vertical-align:middle;">'+
            cart[i].quantity+'</td><td class="text-right" style="height: 100%; vertical-align:middle;">$'+cart[i].itemPrice * cart[i].quantity+'</td></tr>');
            total = total + cart[i].itemPrice * cart[i].quantity;
        }
        $('#cart').append('<td></td><td>Total: </td><td class="text-right">$'+total+'</td>');
    }
});

$(".form").on("submit", function(e) { 
    e.preventDefault();
    alert('Data to be sent: ' + $('#cart_data').val());
});