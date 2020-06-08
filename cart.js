$(document).ready(function() {
    var cart_object = JSON.parse(localStorage.getItem('cart_data'));
    populateCart();
});

function populateCart() {
    var cart_object = JSON.parse(localStorage.getItem('cart_data'));
    var cart = cart_object.cart;
    if (cart.length > 0) {
        $('#empty-notice').hide();
        $('#proceed').show();
        $('#cart').show();
        var total = 0;
        for (var i = 0; i < cart.length; i++) {
            var readonly = '';
            if (cart[i].type === 'course') {
                readonly = 'readonly';
            }
            $('#cart').append('<tr><td style="height: 100%; vertical-align:middle;"><a href="#" class="remove" index="'+i+'">X</a></td><td><b>'+  
            cart[i].itemName+'</b><br>'+cart[i].itemDesc+'</td><td style="height: 100%; vertical-align:middle;"><input class="quantity text-center" type="number" style="width:4em;" value="'+
            cart[i].quantity+'" index="'+i+'" '+readonly+'></input></td><td class="text-right" style="height: 100%; vertical-align:middle;">$'+cart[i].itemPrice * cart[i].quantity+'</td></tr>');
            total = total + cart[i].itemPrice * cart[i].quantity;
        }
        $('#cart').append('<td></td><td></td><td>Total: </td><td class="text-right">$'+total+'</td>');
    }
}

$(document).on('click', '.remove', function(e) {
    e.preventDefault();  
    var index = $(this).attr('index');
    var cart_object = JSON.parse(localStorage.getItem('cart_data'));
    cart_object.cart.splice(index, 1);
    var cart_json = JSON.stringify(cart_object);
    localStorage.setItem('cart_data', cart_json);
    location.reload();
});

$(document).on('change', '.quantity', function() {
    var index = $(this).attr('index');
    var cart_object = JSON.parse(localStorage.getItem('cart_data'));
    cart_object.cart[index].quantity = $(this).val();
    var cart_json = JSON.stringify(cart_object);
    localStorage.setItem('cart_data', cart_json);
    location.reload();
});