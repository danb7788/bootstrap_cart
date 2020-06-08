$(document).ready(function(){
    if (! localStorage.getItem('cart_data')) {
        var empty_cart = {
            cart: []
        };

        var empty_cart_json = JSON.stringify(empty_cart);
        localStorage.setItem('cart_data', empty_cart_json);
    } else {
        var cart_object = JSON.parse(localStorage.getItem('cart_data'));
        update_cart_quantity();
    }

    $('.add-to-cart').click(function(e){
        e.preventDefault;
        var cart_object = JSON.parse(localStorage.getItem('cart_data'));

        var new_item = {
            id: $(this).attr('data-id'),
            quantity: '',
            itemName: $(this).attr('data-name'),
            itemPrice: $(this).attr('data-price'),
            itemDesc: $(this).attr('data-description')
        };

        var found = false;
        var found_index = '';
        for (var i = 0; i < cart_object.cart.length; i++) {
            if (cart_object.cart[i].id == new_item.id && cart_object.cart[i].type == new_item.type) {
                found = true;
                found_index = i;
            }
        }

        if (found === true) {
            cart_object.cart[found_index].quantity ++;
        } else {
            new_item.quantity = 1;
            cart_object.cart.push(new_item);
        } 

        var cart_json = JSON.stringify(cart_object);
        localStorage.setItem('cart_data', cart_json);
        update_cart_quantity();

        $("#GoToCart").modal("show");
        $("#item-info").html('<p><b>' + new_item.itemName + '</b></p><p>' + new_item.itemDesc +
        '</p><p>$' + new_item.itemPrice + '</p>');
    });

    function update_cart_quantity() {
        var cart = JSON.parse(localStorage.getItem('cart_data')).cart;
        var counter = 0;
        for (var i = 0; i < cart.length; i++) {
            counter += parseInt(cart[i].quantity);
        }
        $('#cart-quant').text(counter);
    }
});
